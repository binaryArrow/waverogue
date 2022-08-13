import {GameObject} from "../GameObject";
import {Character, FaceDirection} from "../Character";
import {SkeletonSprites} from "./SkeletonSprites";
import {Constants} from "../Constants";
import {Player} from "../player/Player";

export class Skeleton extends GameObject implements Character {

    faceDirection: FaceDirection = FaceDirection.RIGHT
    health: number = 100
    attackDamage: number = 10
    width: number = Constants.skeletonWidth
    height: number = Constants.skeletonHeight
    sprites: SkeletonSprites = new SkeletonSprites(this.context)
    otherGemObject: Player

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
        this.otherGemObject = player
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
        if (this.otherGemObject.posX + this.otherGemObject.width < this.posX) {
            this.moveLeft()
            this.faceDirection = FaceDirection.LEFT
        } else if (this.otherGemObject.posX > this.posX + this.width) {
            this.moveRight()
            this.faceDirection = FaceDirection.RIGHT
        }
        else this.stopMovingXAxis()
        console.log(this.velocityX)
        console.log(this.movementSpeed)
    }

    animate(): void {
        if (!this.hit && this.faceDirection == FaceDirection.RIGHT && this.velocityX == 0)
            this.sprites.spriteSheetIdleRight.animate(12, this.posX - 65, this.posY + 34, 180, 100, this.width, this.height)

        else if (!this.hit && this.faceDirection == FaceDirection.LEFT && this.velocityX == 0)
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
        else if (this.velocityX < 0 && this.faceDirection == FaceDirection.LEFT)
            this.sprites.spriteSheetWalkLeft.animate(12, this.posX - 65, this.posY - 48, 180, 270, this.width, this.height)

        else if (this.velocityX > 0 && this.faceDirection == FaceDirection.RIGHT)
            this.sprites.spriteSheetWalkRight.animate(12, this.posX - 65, this.posY - 48, 180, 270, this.width, this.height)
    }

    setRollPosition(secondsPast: number): void {
    }

    jump(): void {
    }

}