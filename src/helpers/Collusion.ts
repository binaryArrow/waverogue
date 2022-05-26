import {GameObject} from "../models/GameObject";
import {Rect} from "../models/Rect";
import {Ground} from "../models/Ground";

export class Collusion{
    gameObjects: GameObject[]
    mapElements: Rect[]
    constructor(gameObjects: GameObject[], mapElements: Rect[]) {
        this.gameObjects = gameObjects
        this.mapElements = mapElements
    }
    checkGameObjectCollideWithGround(): void {
        this.mapElements.forEach(element => {
            if (element instanceof Ground) {
                if (this.gameObjects[0].velocityY>0 && collusionCheck(this.gameObjects[0], element)) {
                    element.collides = true
                    this.gameObjects[0].posY = element.y - this.gameObjects[0].height
                    this.gameObjects[0].velocityY = this.gameObjects[0].fallSpeed
                    this.gameObjects[0].inAir = false
                } else element.collides = false
            }
        })
        function collusionCheck(object: GameObject, mapElement: Rect): boolean{
            return !(object.posX > mapElement.width + mapElement.x ||
                mapElement.x > object.width + object.posX ||
                object.posY > mapElement.height + mapElement.y ||
                mapElement.y > object.height + object.posY)
        }
    }
}