import {GameObject} from "../GameObject";
import {Collusion} from "../../helpers/Collusion";
import {MapElement} from "./MapElement";

export class Level{
    gameObjects: GameObject[]
    context: CanvasRenderingContext2D
    mapElements: MapElement[]
    collusion: Collusion

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[], mapElements: MapElement[]) {
        this.gameObjects = gameObjects
        this.context = context
        this.mapElements = mapElements
        this.collusion = new Collusion(gameObjects, this.mapElements)
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 5
    }

    update(secondsPassed: number){
        this.collusion.applyGroundCollisions()
        this.collusion.applyWallCollisions()
        this.collusion.applyTopCollusion()
        this.draw()
    }

    draw() {
        this.mapElements.forEach(element=>element.draw())
    }
}