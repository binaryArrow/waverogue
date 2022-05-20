import {Sprite} from "./Sprite";

export class Player extends Sprite {
    movementSpeed
    constructor(context: CanvasRenderingContext2D, posX: number, posY: number, movementSpeed: number) {
        super(context, posX, posY);
        this.movementSpeed = movementSpeed
    }

}