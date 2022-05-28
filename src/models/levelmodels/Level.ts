import {GameObject} from "../GameObject";
import {Collusion} from "../../helpers/Collusion";
import {MapElement} from "./MapElement";

export class Level{
    gameObjects: GameObject[]
    context: CanvasRenderingContext2D
    mapElemts: MapElement[]
    collusion: Collusion

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[], mapElements: MapElement[]) {
        this.gameObjects = gameObjects
        this.context = context
        this.mapElemts = mapElements
        this.collusion = new Collusion(gameObjects, this.mapElemts)
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 5
    }

    update(secondsPassed: number){
        this.collusion.applyGroundCollisions()
        this.collusion.applyWallCollisions()
        this.draw()
    }

    draw() {
        this.mapElemts.forEach(element=>element.draw())
    }
}