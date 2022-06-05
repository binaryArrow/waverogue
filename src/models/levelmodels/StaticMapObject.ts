import {Wall} from "./Wall";
import {Top} from "./Top";
import {Bottom} from "./Bottom";
import {MapElement} from "./MapElement";

export class StaticMapObject{
    wall: Wall
    bottom: Bottom
    top: Top

    constructor(x: number, y: number, width: number, height: number, context: CanvasRenderingContext2D) {
        this.wall = new Wall(x, y, width, height, context)
        this.bottom = new Bottom(x, y + height, width, 1, context)
        this.top = new Top(x, y - 1, width, 10, context)
    }

    getStaticMapObject(): MapElement[]{
        return [this.top, this.wall, this.bottom]
    }
}