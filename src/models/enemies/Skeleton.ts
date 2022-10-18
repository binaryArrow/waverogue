import {GameObject} from "../GameObject";
import {Character, FaceDirection} from "../Character";
import {SkeletonSprites} from "./SkeletonSprites";
import {Constants} from "../Constants";
import {Player} from "../player/Player";
import {RectHitbox} from "../RectHitbox";
import {LogicHelper} from "../../helpers/LogicHelper";

export class Skeleton extends GameObject implements Character {

    faceDirection: FaceDirection = FaceDirection.RIGHT
    health: number = 100
    attackDamage: number = 50
    attackIndicator: boolean = false
    width: number = Constants.skeletonWidth
    height: number = Constants.skeletonHeight
    attackHitbox: RectHitbox = new RectHitbox(this.posX, this.posY, this.width * 2 + 10, this.height)
    timePassedAttack: number = 0
    sprites: SkeletonSprites = new SkeletonSprites(this.context)
    referenceGameObject: Player
    hitCooldown: number = 0

    constructor(context: CanvasRenderingContext2D,
                x: number,
                y: number,
                movementSpeed: number,
                jumpSpeed: number,
                width: number,
                height: number,
                player: Player
    ) {
        super(context, x, y, movementSpeed, jumpSpeed, width, height);
        this.referenceGameObject = player
    }

    update(secondsPassed: number) {
        this.draw(false, true)
        this.updateMovement(secondsPassed)
        this.animate()
        this.applyVelocity(secondsPassed)
    }

    applyVelocity(secondsPassed: number) {
        this.posX += this.velocityX * secondsPassed
        this.fall(secondsPassed)
        if (this.hitCooldown > 0)
            this.hitCooldown -= secondsPassed
    }

    draw(visible: boolean, visibleOutlines: boolean) {
        this.context.fillStyle = this.collides ? '#a66c6c' : '#ba81c7'
        if (this.hit)
            this.context.fillStyle = '#ff0000'
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 2
        if (visible) {
            this.context.fillRect(this.posX, this.posY, this.width, this.height)
            this.context.strokeRect(this.posX, this.posY, this.width, this.height)
        }
        if (visibleOutlines)
            this.context.strokeRect(this.posX, this.posY, this.width, this.height)
    }


    updateMovement(secondsPassed: number): void {
        if (this.referenceGameObject.posX + this.referenceGameObject.width < this.posX && !this.attackIndicator) {
            this.moveLeft()
            this.faceDirection = FaceDirection.LEFT
        } else if (this.referenceGameObject.posX > this.posX + this.width && !this.attackIndicator) {
            this.moveRight()
            this.faceDirection = FaceDirection.RIGHT
        }
        else{
            this.stopMovingXAxis()
        }
        if(LogicHelper.rectangularHitBoxIntersect(this.referenceGameObject, {posX: this.posX, posY: this.posY, width: this.width * 2, height: this.height}))
            this.attackIndicator = true
        if (this.attackIndicator && this.hitCooldown <= 0) {
            this.applyAttack(secondsPassed)
        }
    }

    animate(): void {
        if (!this.hit && this.faceDirection == FaceDirection.RIGHT && this.velocityX == 0 && !this.attackIndicator)
            this.sprites.spriteSheetIdleRight.animate(12, this.posX - 65, this.posY + 34, 180, 100, this.width, this.height)

        else if (!this.hit && this.faceDirection == FaceDirection.LEFT && this.velocityX == 0 && !this.attackIndicator)
            this.sprites.spriteSheetIdleLeft.animate(12, this.posX - 45, this.posY + 34, 180, 100, this.width, this.height)

        else if (this.hit && this.faceDirection == FaceDirection.RIGHT) {
            this.stopMovingXAxis()
            this.sprites.spriteSheetTakeHitRight.animate(7, this.posX - 65, this.posY - 48, 180, 270, this.width, this.height)
            if (this.sprites.spriteSheetTakeHitRight.animationFinished()) this.hit = false
        }
        else if (this.hit && this.faceDirection == FaceDirection.LEFT) {
            this.stopMovingXAxis()
            this.sprites.spriteSheetTakeHitLeft.animate(7, this.posX - 65, this.posY - 48, 180, 270, this.width, this.height)
            if (this.sprites.spriteSheetTakeHitLeft.animationFinished()) this.hit = false
        }
        else if (this.velocityX < 0 && this.faceDirection == FaceDirection.LEFT && !this.attackIndicator)
            this.sprites.spriteSheetWalkLeft.animate(12, this.posX - 65, this.posY - 48, 180, 270, this.width, this.height)

        else if (this.velocityX > 0 && this.faceDirection == FaceDirection.RIGHT && !this.attackIndicator)
            this.sprites.spriteSheetWalkRight.animate(12, this.posX - 65, this.posY - 48, 180, 270, this.width, this.height)

        if (this.attackIndicator && this.faceDirection == FaceDirection.RIGHT && !this.hit) {
            this.stopMovingXAxis()
            this.sprites.spriteSheetAttackRight.animate(5, this.posX, this.posY + 40, 180, 100, this.width, this.height)
        } else this.sprites.spriteSheetAttackRight.resetActualsprite()

        if (this.attackIndicator && this.faceDirection == FaceDirection.LEFT && !this.hit) {
            this.stopMovingXAxis()
            this.sprites.spriteSheetAttackLeft.animate(5, this.posX, this.posY + 40, 180, 100, this.width, this.height)
        } else this.sprites.spriteSheetAttackLeft.resetActualsprite()
    }

    setRollPosition(secondsPast: number) {
    }

    jump() {
    }

    applyAttack(secondsPassed: number) {
        this.timePassedAttack += secondsPassed
        if (this.faceDirection === FaceDirection.RIGHT && this.timePassedAttack > Constants.activateAttackHitbox) {
            this.context.strokeStyle = '#000000'
            this.attackHitbox = {
                posX: this.posX,
                posY: this.posY,
                width: this.width * 2 + 10,
                height: this.height
            }
            // show hitbox-----
            this.context.fillRect(this.attackHitbox.posX, this.attackHitbox.posY, this.attackHitbox.width, this.attackHitbox.height)

            if (this.timePassedAttack >= Constants.skeletonAttackSpeed) {
                this.attackIndicator = false
                this.timePassedAttack = 0
            }
        }
        if (this.faceDirection === FaceDirection.LEFT && this.timePassedAttack > Constants.activateAttackHitbox) {
            this.context.strokeStyle = '#000000'
            this.attackHitbox = {
                posX: this.posX - this.width - 10,
                posY: this.posY,
                width: this.width * 2 + 10,
                height: this.height
            }
            // show hitbox ----
            this.context.fillRect(this.attackHitbox.posX, this.attackHitbox.posY, this.attackHitbox.width, this.attackHitbox.height)
            if (this.timePassedAttack >= Constants.skeletonAttackSpeed) {
                this.attackIndicator = false
                this.timePassedAttack = 0
            }
        }
    }
}