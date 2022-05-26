import {GameObject} from "../models/GameObject";
import {Rect} from "../models/Rect";
import {Ground} from "../models/Ground";

export class Level1 {
    gameObjects: GameObject[]
    context: CanvasRenderingContext2D
    mapElemts: Rect[] = []

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[]) {
        this.gameObjects = gameObjects
        this.context = context
        this.mapElemts.push(
            new Ground(0, 600, 1800, 20, this.context),
            new Ground(100, 520, 300, 20, this.context)
        )
    }

    update(secondsPassed: number) {
        this.mapElemts.forEach(element => {
            if (element instanceof Ground) {
                if (this.gameObjects[0].velocityY>0 &&element.checkGameObjectCollideWithGround(this.gameObjects[0])) {
                    element.collides = true
                    console.log("collides")
                    this.gameObjects[0].posY = element.y - this.gameObjects[0].height
                    this.gameObjects[0].velocityY = this.gameObjects[0].fallSpeed
                    this.gameObjects[0].inAir = false
                } else element.collides = false
            }

            element.draw()
        })
        this.draw()
    }

    draw() {
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 5
    }

}