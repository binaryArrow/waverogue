import {GameObject} from "./GameObject";
import {Character} from "./Character";

export class Enemy extends GameObject implements Character {

    move(secondsPast: number): void {
        throw new Error("Method not implemented.");
    }

    jump(secondsPast: number): void {
        this.posY -= 5 * secondsPast
    }

    roll(secondsPast: number): void {
    }

    fall(secondsPast: number) {
        this.fallSpeed += this.gravity
        this.posY += this.fallSpeed * secondsPast * this.gravity
    }

    update(secondsPassed: number) {
        if (this.posY + this.height < 600)
            this.fall(secondsPassed)
        if (this.posY + this.height > 600)
            this.posY = 600 - this.height
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
}