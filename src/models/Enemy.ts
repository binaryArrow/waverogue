import {Sprite} from "./Sprite";

export class Enemy extends Sprite{
    movementSpeed
    constructor(context: CanvasRenderingContext2D, posX: number, posY: number, movementSpeed: number) {
        super(context, posX, posY);
        this.movementSpeed = movementSpeed
    }
}