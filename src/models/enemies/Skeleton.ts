import {GameObject} from "../GameObject";
import {Character, FaceDirection} from "../Character";
import {SkeletonSprites} from "./SkeletonSprites";
import {Constants} from "../Constants";

export class Skeleton extends GameObject implements Character {

    faceDirection: FaceDirection = FaceDirection.RIGHT
    health: number = 100
    attackDamage: number = 10
    width: number = Constants.skeletonWidth
    height: number = Constants.skeletonHeight
    sprites: SkeletonSprites = new SkeletonSprites(this.context)

    update(secondsPassed: number) {
        this.draw(false, false)
        this.applyVelocity(secondsPassed)
        this.animate()
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
        if(visible) {
            this.context.fillRect(this.posX, this.posY, this.width, this.height)
            this.context.strokeRect(this.posX, this.posY, this.width, this.height)
        }
        if(visibleOutlines)
            this.context.strokeRect(this.posX, this.posY, this.width, this.height)
    }

    animate(): void {
        this.sprites.spriteSheetIdleRight.animate(10, this.posX - 65, this.posY + 34, 180, 100, this.width, this.height)
    }

    updateMovement(secondsPast: number): void {
    }

    setRollPosition(secondsPast: number): void {
    }

    jump(): void {
    }

}