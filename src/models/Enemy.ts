import {GameObject} from "./GameObject";
import {Character} from "./Character";

export class Enemy extends GameObject implements Character {

    update(secondsPassed: number) {
        this.draw()
        this.applyVelocity(secondsPassed)
    }

    applyVelocity(secondsPassed: number) {
        this.posX += this.velocityX * secondsPassed
        this.velocityY += this.gravity
        this.posY += this.velocityY * secondsPassed // applied velocity
        if (this.posY + this.height > 600) { // hit ground
            this.posY = 600 - this.height
            this.velocityY = this.fallSpeed
            this.inAir = false
        } else  this.inAir = true
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

    roll(secondsPast: number): void {
    }

    fall(secondsPassed: number) {
        this.velocityY += this.gravity
        this.posY += this.velocityY * secondsPassed
    }

    jump(): void {
    }
}