import {GameObject} from "./GameObject";
import {Character} from "./Character";

export class Player extends GameObject implements Character{
    constructor(
        context: CanvasRenderingContext2D,
        posX: number,
        posY: number,
        velocityX: number,
        velocityY: number,
        width: number,
        height: number
    ) {
        super(context, posX, posY, velocityX, velocityY, width, height);
    }

    jump(secondsPast: number): void {
        this.posY -= 100 * secondsPast
    }

    moveLeft(secondsPast: number): void {
        this.posX -= this.velocityX * secondsPast
    }

    moveRight(secondsPast: number): void {
        this.posX += this.velocityX * secondsPast
    }

    roll(secondsPast: number): void {
    }

    fall(secondsPast: number) {
        this.velocityY += this.gravity
        this.posY += this.velocityY * secondsPast * this.gravity
    }

    update(secondsPassed: number) {
        if(this.posY + this.height < 600)
            this.fall(secondsPassed)
        if(this.posY + this.height > 600)
            this.posY = 600 - this.height
    }

}