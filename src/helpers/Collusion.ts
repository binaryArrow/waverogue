import {GameObject} from "../models/GameObject";
import {Rect} from "../models/Rect";
import {Ground} from "../models/levelmodels/Ground";
import {MapElement} from "../models/levelmodels/MapElement";

export class Collusion {
    gameObjects: GameObject[]
    mapElements: MapElement[]

    constructor(gameObjects: GameObject[], mapElements: MapElement[]) {
        this.gameObjects = gameObjects
        this.mapElements = mapElements
    }

    applyGroundCollisions(): void {
        this.mapElements.forEach(element => {
            if (element instanceof Ground) {
                this.gameObjects.forEach(gameObject => {
                    if (gameObject.velocityY > 0 && collusionCheckGround(gameObject, element)) {
                        element.collides = true
                        gameObject.posY = element.y - gameObject.height
                        gameObject.velocityY = gameObject.fallSpeed
                        gameObject.inAir = false
                    } else element.collides = false
                })
            }
        })

        function collusionCheckGround(object: GameObject, mapElement: Rect): boolean {
            return !(object.posX > mapElement.width + mapElement.x ||
                object.posY + object.height > mapElement.height + mapElement.y ||
                mapElement.x > object.width + object.posX ||
                mapElement.y > object.height + object.posY)
        }
    }
}