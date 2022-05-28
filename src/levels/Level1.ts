import {GameObject} from "../models/GameObject";
import {Rect} from "../models/Rect";
import {Ground} from "../models/Ground";
import {Collusion} from "../helpers/Collusion";

export class Level1 {
    gameObjects: GameObject[]
    context: CanvasRenderingContext2D
    mapElemts: Rect[] = []
    collusion: Collusion

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[]) {
        this.gameObjects = gameObjects
        this.context = context
        this.mapElemts.push(
            new Ground(0, 600, 1800, 5, this.context),
            new Ground(100, 550, 300, 5, this.context),
            new Ground(100, 500, 300, 5, this.context)
        )
        this.collusion = new Collusion(gameObjects, this.mapElemts)
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 5
    }

    update(secondsPassed: number) {
        this.collusion.checkGameObjectCollideWithGround()
        this.draw()
        console.log(this.gameObjects[0].inAir)
    }

    draw() {
        this.mapElemts.forEach(element=>element.draw())
    }

}