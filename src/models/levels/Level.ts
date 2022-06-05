import {StaticMapObject} from "../levelmodels/StaticMapObject";

export class Level{
    staticMapObjects: StaticMapObject[]

    constructor(staticMapObjects: StaticMapObject[]) {
        this.staticMapObjects = staticMapObjects
    }

    draw(){
        this.staticMapObjects.forEach(staticMapObject => staticMapObject.draw())
    }
}