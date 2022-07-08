import {GameObject} from "../GameObject";
import {Character, FaceDirection} from "../Character";
import {easeInOutQuint} from "../../helpers/EasingFunctions";
import {Constants} from "../Constants";
import {RectHitbox} from "../RectHitbox";
import {PlayerSprites} from "./PlayerSprites";

export class Player extends GameObject implements Character {
    faceDirection: FaceDirection = FaceDirection.RIGHT
    attackHitbox: RectHitbox = new RectHitbox(this.posX, this.posY, this.width * 2, this.height)
    sprites: PlayerSprites
    rollIndicator: boolean = false
    attackIndicator: boolean = false
    crouchIndicator: boolean = false
    isCrouching: boolean = false
    dashRange: number = 25
    timePassedRoll: number = 0
    timePassedAttack: number = 0
    rollCooldown: number = 0
    health: number = 100
    attackDamage: number = 10
    activateDamage: boolean = false
    rollPosition: number
    acc = 0

    constructor(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        movementSpeed: number,
        jumpSpeed: number,
        width: number,
        height: number
    ) {
        super(context, x, y, movementSpeed, jumpSpeed, width, height)
        this.rollPosition = this.posX
        this.initMovement()
        this.sprites = new PlayerSprites(context)
    }


    update(secondsPassed: number) {
        this.draw()
        this.updateMovement(secondsPassed)
        this.applyVelocity(secondsPassed)
    }

    updateMovement(secondsPassed: number) {
        if (this.moveLeftIndicator)
            this.moveLeft()
        else if (this.moveRightIndicator)
            this.moveRight()
        else if (!(this.moveRightIndicator && this.moveLeftIndicator))
            this.stopMovingXAxis()
        // jumping
        if (this.jumpIndicator)
            this.jump()
        // rolling
        if (this.rollIndicator) {
            this.setRollPosition()
            this.applyRoll(secondsPassed)
        }
        // attackin
        if (this.attackIndicator) {
            this.applyAttack(secondsPassed)
        }
        // crouch
        if (this.crouchIndicator) {
            this.applyCrouch()
        }
    }

    applyVelocity(secondsPassed: number) {
        if (!this.rollIndicator && !this.attackIndicator) {
            if (this.velocityX < 0)
                this.faceDirection = FaceDirection.LEFT
            else if (this.velocityX > 0)
                this.faceDirection = FaceDirection.RIGHT
            this.posX += this.velocityX * secondsPassed
            if (this.rollCooldown > 0)
                this.rollCooldown -= secondsPassed
        }
        this.fall(secondsPassed)
    }


    initMovement() {
        window.addEventListener('click', () => {
            if (!this.rollIndicator && this.timePassedAttack <= 0 && !this.inAir) {
                this.attackIndicator = true
                this.activateDamage = true
            }
        })
        window.addEventListener('keypress', ev => {
            if (ev.key === 'w' && !this.inAir && !this.isCrouching) {
                this.jumpIndicator = true
            }
            if (ev.key === ' ' && !this.inAir && this.rollCooldown <= 0 && !this.attackIndicator) {
                this.rollIndicator = true
                this.crouchIndicator = false
                this.resetCrouch()
            }
        })
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'a':
                    this.moveLeftIndicator = true
                    break;
                case 'd':
                    this.moveRightIndicator = true
                    break;
                case 's':
                    this.crouchIndicator = true
                    break;
            }
        })
        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'a':
                    this.moveLeftIndicator = false
                    break;
                case 'd':
                    this.moveRightIndicator = false
                    break;
                case 's':
                    this.crouchIndicator = false
                    this.resetCrouch()
                    break;
            }
        })
    }

    // sets rollrange
    setRollPosition(): void {
        if (this.faceDirection == FaceDirection.RIGHT)
            this.rollPosition = this.posX + this.dashRange
        if (this.faceDirection == FaceDirection.LEFT)
            this.rollPosition = this.posX - this.dashRange
    }

    applyRoll(secondsPassed: number) {
        this.timePassedRoll += secondsPassed

        if (this.faceDirection === FaceDirection.RIGHT) {
            this.posX = easeInOutQuint(this.timePassedRoll, this.posX, this.dashRange, 0.2)
            if (this.posX >= this.rollPosition) {
                this.timePassedRoll = 0
                this.rollIndicator = false
                this.posX = this.rollPosition
                this.rollCooldown = Constants.playerRollCooldown
            }
        }
        if (this.faceDirection === FaceDirection.LEFT) {
            this.posX = easeInOutQuint(this.timePassedRoll, this.posX, -this.dashRange, 0.2)
            if (this.posX <= this.rollPosition) {
                this.timePassedRoll = 0
                this.rollIndicator = false
                this.posX = this.rollPosition
                this.rollCooldown = Constants.playerRollCooldown
            }
        }
    }

    applyAttack(secondsPassed: number) {
        this.timePassedAttack += secondsPassed
        if (this.faceDirection === FaceDirection.RIGHT) {
            this.context.strokeStyle = '#000000'
            this.attackHitbox = {
                posX: this.posX + this.width,
                posY: this.posY,
                width: this.width * 2,
                height: this.height
            }
            this.context.fillRect(this.attackHitbox.posX, this.attackHitbox.posY, this.attackHitbox.width, this.attackHitbox.height)
            // cooldown to attack again
            if (this.timePassedAttack >= Constants.playerAttackSpeed) {
                this.attackIndicator = false
                this.timePassedAttack = 0
            }
        }
        if (this.faceDirection === FaceDirection.LEFT) {
            this.context.strokeStyle = '#000000'
            this.attackHitbox = {
                posX: this.posX - this.width * 2,
                posY: this.posY,
                width: this.width * 2,
                height: this.height
            }
            this.context.fillRect(this.attackHitbox.posX, this.attackHitbox.posY, this.attackHitbox.width, this.attackHitbox.height)
            if (this.timePassedAttack >= Constants.playerAttackSpeed) {
                this.attackIndicator = false
                this.timePassedAttack = 0
            }
        }
    }

    jump(): void {
        this.velocityY = -this.jumpSpeed
        this.jumpIndicator = false
        this.inAir = true
    }

    applyCrouch(): void {
        if (!this.inAir) {
            this.height = Constants.playerHeightCrouch
            this.movementSpeed = Constants.playerMoveSpeedCrouch
            if (!this.isCrouching) {
                this.posY += Constants.playerHeightCrouch
                this.isCrouching = true
            }
        }
    }

    resetCrouch(): void {
        if (!this.inAir && this.isCrouching) {
            this.movementSpeed = Constants.playerMoveSpeed
            this.height = Constants.playerHeight
            this.posY -= Constants.playerHeightCrouch
            this.isCrouching = false
        }
    }

    draw() {
        super.draw(false);
        if(this.acc >=5)
            this.acc = 0
        this.sprites.spriteSheetPlayerIdle.drawIndividualSprite(this.acc, 0, 40, 80, this.posX - this.width/2, this.posY - this.height/2)
        this.acc++;
    }

}