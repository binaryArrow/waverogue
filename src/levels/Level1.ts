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
            new Ground(0, 600, 1800, 600, this.context)
        )
    }

    update(secondsPassed: number) {
        this.mapElemts.forEach(element =>{
            if(element instanceof Ground){
                // TODO: check collusions on ground and walls...
            }
            element.draw()
        })
        this.draw()
    }

    draw(){
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 5
    }

}