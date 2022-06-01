import {Wall} from "./Wall";
import {Top} from "./Top";
import {Bottom} from "./Bottom";

export class StaticMapObject{
    wall: Wall
    top: Top
    bottom: Bottom

    constructor(wall: Wall, top: Top, bottom: Bottom) {
        this.wall = wall
        this.top = top
        this.bottom = bottom
    }

    //TODO: draw a staticmapobject with wall, topside and botside and check collusions on this object
}