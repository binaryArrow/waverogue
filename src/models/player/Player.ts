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
    attackCooldown: number = 0
    hitCooldown: number = 0
    timePassedDying: number = 0

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
        if (!this.dead)
            this.updateMovement(secondsPassed)
        this.animate(secondsPassed)
        this.applyVelocity(secondsPassed)
        //console.log(this.dead)
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
            if (this.velocityX < 0 && !this.hit)
                this.faceDirection = FaceDirection.LEFT
            else if (this.velocityX > 0 && !this.hit)
                this.faceDirection = FaceDirection.RIGHT
            this.posX += this.velocityX * secondsPassed
            if (this.rollCooldown > 0)
                this.rollCooldown -= secondsPassed
            if (this.attackCooldown > 0)
                this.attackCooldown -= secondsPassed
            if (this.hitCooldown > 0)
                this.hitCooldown -= secondsPassed
        }
        this.fall(secondsPassed)
    }


    initMovement() {
        window.addEventListener('click', () => {
            if (!this.dashIndicator && this.timePassedAttack <= 0 && !this.inAir && !this.crouchIndicator && this.attackCooldown <= 0 && this.hitCooldown <= 0) {
                this.attackIndicator = true
                this.activateDamage = true
                this.attackHitbox = {
                    posX: 0,
                    posY: 0,
                    width: 0,
                    height: 0
                }
            }
        })
        window.addEventListener('keypress', ev => {
            if (ev.key === 'w' && !this.inAir && !this.isCrouching && !this.hit) {
                this.jumpIndicator = true
            }
            if (ev.key === ' ' && !this.inAir && this.rollCooldown <= 0 && !this.attackIndicator && !this.collides && !this.hit) {
                this.dashIndicator = true
                this.crouchIndicator = false
                this.resetCrouch()
            }
        })
        window.addEventListener('keydown', (e) => {
            if (!this.hit) {
                switch (e.key) {
                    case 'a':
                        this.moveLeftIndicator = true
                        break;
                    case 'd':
                        this.moveRightIndicator = true
                        break;
                    // case 's':
                    //     if (!this.inAir && !this.attackIndicator)
                    //         this.crouchIndicator = true
                    //     break;
                }
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
                // case 's':
                //     this.crouchIndicator = false
                //     this.resetCrouch()
                //     break;
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
            if (!this.collides)
                this.sprites.spritePlayerDashRight.drawSprite(this.posX - this.width * 2, this.posY - 23, 120, 88)
            else this.sprites.spriteSheetPlayerIdleRight.animate(10, this.posX, this.posY + 21, 40, 80, this.width, this.height)
            if (this.posX >= this.rollPosition) {
                this.timePassedRoll = 0
                this.dashIndicator = false
                this.posX = this.rollPosition
                this.rollCooldown = Constants.playerRollCooldown
            }
        }
        if (this.faceDirection === FaceDirection.LEFT) {
            this.posX = easeInOutQuint(this.timePassedRoll, this.posX, -this.dashRange, 0.2)
            if (!this.collides)
                this.sprites.spritePlayerDashLeft.drawSprite(this.posX - this.width * 2 - 10, this.posY - 23, 120, 88)
            else this.sprites.spriteSheetPlayerIdleLeft.animate(10, this.posX, this.posY + 21, 40, 80, this.width, this.height)
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
        if (this.faceDirection === FaceDirection.RIGHT && this.timePassedAttack > Constants.activateAttackHitbox) {
            this.context.strokeStyle = '#000000'
            this.attackHitbox = {
                posX: this.posX + this.width,
                posY: this.posY,
                width: this.width * 2,
                height: this.height
            }
            // show hitbox-----
            // this.context.fillRect(this.attackHitbox.posX, this.attackHitbox.posY, this.attackHitbox.width, this.attackHitbox.height)

            if (this.timePassedAttack >= Constants.playerAttackSpeed) {
                this.attackIndicator = false
                this.timePassedAttack = 0
                this.attackCooldown = Constants.playerAttackCooldown
            }
        }
        if (this.faceDirection === FaceDirection.LEFT && this.timePassedAttack > Constants.activateAttackHitbox) {
            this.context.strokeStyle = '#000000'
            this.attackHitbox = {
                posX: this.posX - this.width * 2,
                posY: this.posY,
                width: this.width * 2,
                height: this.height
            }
            // show hitbox ----
            // this.context.fillRect(this.attackHitbox.posX, this.attackHitbox.posY, this.attackHitbox.width, this.attackHitbox.height)
            if (this.timePassedAttack >= Constants.playerAttackSpeed) {
                this.attackIndicator = false
                this.timePassedAttack = 0
                this.attackCooldown = Constants.playerAttackCooldown
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

    // TODO: REF DIIIIS
    animate(secondsPassed: number): void {
        if (!this.dead && !this.hit && this.velocityX > 0 && !this.inAir && !this.dashIndicator && !this.crouchIndicator && !this.attackIndicator)
            this.sprites.spriteSheetPlayerRunRight.animate(5, this.posX, this.posY + 23, 50, 80, this.width + 20, this.height)

        else if (!this.dead && !this.hit && this.velocityX < 0 && !this.inAir && !this.dashIndicator && !this.crouchIndicator && !this.attackIndicator)
            this.sprites.spriteSheetPlayerRunLeft.animate(5, this.posX, this.posY + 23, 50, 80, this.width - 10, this.height)

        else if (!this.dead && !this.hit && this.faceDirection == FaceDirection.RIGHT && !this.inAir && !this.crouchIndicator && !this.dashIndicator && !this.attackIndicator)
            this.sprites.spriteSheetPlayerIdleRight.animate(10, this.posX, this.posY + 21, 40, 80, this.width, this.height)

        else if (!this.dead && !this.hit && this.faceDirection == FaceDirection.LEFT && !this.inAir && !this.crouchIndicator && !this.dashIndicator && !this.attackIndicator)
            this.sprites.spriteSheetPlayerIdleLeft.animate(10, this.posX, this.posY + 21, 40, 80, this.width, this.height)

        else if (!this.dead && !this.hit && this.inAir && this.faceDirection == FaceDirection.RIGHT && this.velocityY <= 0 && !this.dashIndicator)
            this.sprites.spriteSheetPlayerJumpRight.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height)

        else if (!this.dead && !this.hit && this.inAir && this.faceDirection == FaceDirection.LEFT && this.velocityY <= 0 && !this.dashIndicator)
            this.sprites.spriteSheetPlayerJumpLeft.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height)

        else if (!this.dead && !this.hit && this.inAir && this.faceDirection == FaceDirection.RIGHT && this.velocityY >= 0 && !this.dashIndicator)
            this.sprites.spriteSheetPlayerFallRight.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height)

        else if (!this.dead && !this.hit && this.inAir && this.faceDirection == FaceDirection.LEFT && this.velocityY >= 0 && !this.dashIndicator)
            this.sprites.spriteSheetPlayerFallLeft.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height)

        else if (!this.dead && !this.hit && this.crouchIndicator && this.faceDirection == FaceDirection.RIGHT && !this.inAir && !this.dashIndicator && !this.attackIndicator)
            this.sprites.spriteSheetPlayerCrouchRight.animate(13, this.posX, this.posY - 28, 40, 80, this.width, this.height)

        else if (!this.dead && !this.hit && this.crouchIndicator && this.faceDirection == FaceDirection.LEFT && !this.inAir && !this.dashIndicator && !this.attackIndicator)
            this.sprites.spriteSheetPlayerCrouchLeft.animate(13, this.posX, this.posY - 28, 40, 80, this.width, this.height)

        if (!this.dead && !this.hit && this.attackIndicator && this.faceDirection == FaceDirection.RIGHT) {
            this.sprites.spriteSheetPlayerAttack1Right.animate(4, this.posX - 15, this.posY + 13, 100, 90, this.width, this.height)
        } else this.sprites.spriteSheetPlayerAttack1Right.resetActualsprite()

        if (!this.dead && !this.hit && this.attackIndicator && this.faceDirection == FaceDirection.LEFT) {
            this.sprites.spriteSheetPlayerAttack1Left.animate(4, this.posX - 45, this.posY + 13, 100, 90, this.width, this.height)
        } else this.sprites.spriteSheetPlayerAttack1Left.resetActualsprite()

        if (!this.dead && this.hit && this.hitRight && this.health > 0 && this.hitCooldown > 0) {
            this.sprites.spriteSheetPlayerHurtRight.animate(7, this.posX - 25, this.posY + 8, 100, 100, this.width, this.height)
            this.velocityX = -200
            this.hitCooldown -= secondsPassed
        }
        if (!this.dead && this.hit && this.hitLeft && this.health > 0 && this.hitCooldown > 0) {
            this.sprites.spriteSheetPlayerHurtLeft.animate(7, this.posX - 25, this.posY + 8, 100, 100, this.width, this.height)
            this.velocityX = 200
            this.hitCooldown -= secondsPassed
        }
        if (this.hitCooldown <= 0 && this.hit) {
            this.hit = false
            this.hitLeft = false
            this.hitRight = false
            this.stopMovingXAxis()
        }
        if (this.health <= 0 && this.faceDirection == FaceDirection.RIGHT) {
            if (!this.dead)
                this.sprites.spriteSheetPlayerDieRight.animate(8, this.posX - 50, this.posY + 5, 100, 100, this.width, this.height)
            else this.sprites.spritePlayerDeadRight.drawSprite(this.posX - 60, this.posY - 30, 100, 100)
            this.timePassedDying += secondsPassed
            if (this.timePassedDying >= Constants.playerDieAnimationTime) {
                this.dead = true
            }
        }
        if (this.health <= 0 && this.faceDirection == FaceDirection.LEFT) {
            if (!this.dead)
                this.sprites.spriteSheetPlayerDieLeft.animate(8, this.posX + 20, this.posY + 5, 100, 100, this.width, this.height)
            else this.sprites.spritePlayerDeadLeft.drawSprite(this.posX - 20,  this.posY - 30, 100, 100)
            this.timePassedDying += secondsPassed
            if (this.timePassedDying >= Constants.playerDieAnimationTime) {
                this.dead = true
            }
        }
    }

}
