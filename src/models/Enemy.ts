import {GameObject} from "./GameObject";
import {Character, FaceDirection} from "./Character";

export class Enemy extends GameObject implements Character {

    faceDirection: FaceDirection = FaceDirection.RIGHT
    health: number = 100

    update(secondsPassed: number) {
        this.draw()
        this.applyVelocity(secondsPassed)
    }

    applyVelocity(secondsPassed: number) {
        this.posX += this.velocityX * secondsPassed
        this.fall(secondsPassed)
    }


    draw() {
        this.context.fillStyle = this.collides ? '#a66c6c' : '#ba81c7'
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 2
        this.context.fillRect(this.posX, this.posY, this.width, this.height)
        this.context.strokeRect(this.posX, this.posY, this.width, this.height)
    }

    updateMovement(secondsPast: number): void {
    }

    setRollPosition(secondsPast: number): void {
    }

    jump(): void {
    }

}