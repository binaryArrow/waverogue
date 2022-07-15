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
    dashIndicator: boolean = false
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
        this.draw(false, false)
        this.updateMovement(secondsPassed)
        this.animate()
        this.applyVelocity(secondsPassed)
    }

    updateMovement(secondsPassed: number) {
        if (this.moveLeftIndicator && !this.crouchIndicator)
            this.moveLeft()
        else if (this.moveRightIndicator && !this.crouchIndicator)
            this.moveRight()
        else if (!(this.moveRightIndicator && this.moveLeftIndicator))
            this.stopMovingXAxis()
        // jumping
        if (this.jumpIndicator)
            this.jump()
        // rolling
        if (this.dashIndicator) {
            this.setRollPosition()
            this.applyRoll(secondsPassed)
        }
        // attacking
        if (this.attackIndicator) {
            this.applyAttack(secondsPassed)
        }
        // crouch
        if (this.crouchIndicator) {
            this.applyCrouch()
            if (this.moveLeftIndicator)
                this.faceDirection = FaceDirection.LEFT
            if (this.moveRightIndicator)
                this.faceDirection = FaceDirection.RIGHT
        }
    }

    applyVelocity(secondsPassed: number) {
        if (!this.dashIndicator && !this.attackIndicator) {
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
            if (!this.dashIndicator && this.timePassedAttack <= 0 && !this.inAir) {
                this.attackIndicator = true
                this.activateDamage = true
            }
        })
        window.addEventListener('keypress', ev => {
            if (ev.key === 'w' && !this.inAir && !this.isCrouching) {
                this.jumpIndicator = true
            }
            if (ev.key === ' ' && !this.inAir && this.rollCooldown <= 0 && !this.attackIndicator) {
                this.dashIndicator = true
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
                    if (!this.inAir)
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
                this.dashIndicator = false
                this.posX = this.rollPosition
                this.rollCooldown = Constants.playerRollCooldown
            }
        }
        if (this.faceDirection === FaceDirection.LEFT) {
            this.posX = easeInOutQuint(this.timePassedRoll, this.posX, -this.dashRange, 0.2)
            if (this.posX <= this.rollPosition) {
                this.timePassedRoll = 0
                this.dashIndicator = false
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
            if (!this.isCrouching) {
                this.posY += Constants.playerHeightCrouch
                this.isCrouching = true
            }
        } else {
            this.resetCrouch()
        }
    }

    resetCrouch(): void {
        if (this.isCrouching) {
            this.movementSpeed = Constants.playerMoveSpeed
            this.height = Constants.playerHeight
            this.posY -= Constants.playerHeightCrouch
            this.isCrouching = false
        }
    }

    animate() {
        if (this.velocityX > 0 && !this.inAir && !this.dashIndicator && !this.crouchIndicator)
            this.sprites.spriteSheetPlayerRunRight.animate(5, this.posX, this.posY + 23, 50, 80, this.width + 20, this.height)

        else if (this.velocityX < 0 && !this.inAir && !this.dashIndicator && !this.crouchIndicator)
            this.sprites.spriteSheetPlayerRunLeft.animate(5, this.posX, this.posY + 23, 50, 80, this.width - 10, this.height)

        else if (this.faceDirection == FaceDirection.RIGHT && !this.inAir && !this.crouchIndicator && !this.dashIndicator)
            this.sprites.spriteSheetPlayerIdleRight.animate(10, this.posX, this.posY + 21, 40, 80, this.width, this.height)

        else if (this.faceDirection == FaceDirection.LEFT && !this.inAir && !this.crouchIndicator && !this.dashIndicator)
            this.sprites.spriteSheetPlayerIdleLeft.animate(10, this.posX, this.posY + 21, 40, 80, this.width, this.height)

        else if (this.inAir && this.faceDirection == FaceDirection.RIGHT && this.velocityY <= 0 && !this.dashIndicator)
            this.sprites.spriteSheetPlayerJumpRight.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height)

        else if (this.inAir && this.faceDirection == FaceDirection.LEFT && this.velocityY <= 0 && !this.dashIndicator)
            this.sprites.spriteSheetPlayerJumpLeft.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height)

        else if (this.inAir && this.faceDirection == FaceDirection.RIGHT && this.velocityY >= 0 && !this.dashIndicator)
            this.sprites.spriteSheetPlayerFallRight.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height)

        else if (this.inAir && this.faceDirection == FaceDirection.LEFT && this.velocityY >= 0 && !this.dashIndicator)
            this.sprites.spriteSheetPlayerFallLeft.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height)

        else if (this.crouchIndicator && this.faceDirection == FaceDirection.RIGHT && !this.inAir && !this.dashIndicator)
            this.sprites.spriteSheetPlayerCrouchRight.animate(13, this.posX, this.posY - 28, 40, 80, this.width, this.height)

        else if (this.crouchIndicator && this.faceDirection == FaceDirection.LEFT && !this.inAir && !this.dashIndicator)
            this.sprites.spriteSheetPlayerCrouchLeft.animate(13, this.posX, this.posY - 28, 40, 80, this.width, this.height)

        if ( this.dashIndicator && this.faceDirection == FaceDirection.RIGHT && !this.inAir) {
            this.sprites.spritePlayerDashRight.drawSprite(this.posX, this.posY - 23, 120, 88)
        }
        if ( this.dashIndicator && this.faceDirection == FaceDirection.LEFT && !this.inAir) {
            this.sprites.spritePlayerDashLeft.drawSprite(this.posX - 4*this.width, this.posY - 23, 120, 88)
        }
    }

}
