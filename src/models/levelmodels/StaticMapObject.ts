import {Wall} from "./Wall";
import {Top} from "./Top";
import {Bottom} from "./Bottom";
import {Rect} from "../Rect";

export class StaticMapObject extends Rect{
    wall: Wall
    bottom: Bottom

    constructor(x: number, y: number, width: number, height: number, context: CanvasRenderingContext2D) {
        super(x, y, width, height, context)
        this.wall = new Wall(x, y, width, height, context)
        this.bottom = new Bottom(x, y + height, width, 1, context)
    }

    draw(){
        this.wall.draw()
        this.bottom.draw()
    }
}