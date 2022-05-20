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
        this.posY += 5 * secondsPast
    }

    moveLeft(secondsPast: number): void {
        this.posX -= this.velocityX * secondsPast
    }

    moveRight(secondsPast: number): void {
        this.posX += this.velocityX * secondsPast
    }

    roll(secondsPast: number): void {
    }

}