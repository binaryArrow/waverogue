import {GameObject} from "./GameObject";

export class Enemy extends GameObject{
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
}