import {GameObject} from "../models/GameObject";
import {Line} from "../models/Line";
import {Ground} from "../models/Ground";

export class Level1 {
    gameObjects: GameObject[]
    context: CanvasRenderingContext2D
    mapElemts: Line[] = []

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[]) {
        this.gameObjects = gameObjects
        this.context = context
        this.mapElemts.push(
            new Ground(0, 600, 1800, 600, this.context),
            // new Ground(100, 550, 300, 550, this.context)
        )
    }

    update(secondsPassed: number) {
        this.mapElemts.forEach(element => {
            if (element instanceof Ground) {
                if (element.checkGameObjectCollideWithGround(this.gameObjects[0])) {
                    console.log("collides")
                    this.gameObjects[0].posY = element.y1 - this.gameObjects[0].height
                    this.gameObjects[0].velocityY = this.gameObjects[0].fallSpeed
                    this.gameObjects[0].inAir = false
                } else{
                    this.gameObjects[0].inAir = true
                }

                console.log(this.gameObjects[0].inAir)
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