import {GameObject} from "../models/GameObject";
import {Ground} from "../models/levelmodels/Ground";
import {MapElement} from "../models/levelmodels/MapElement";
import {Wall} from "../models/levelmodels/Wall";
import {WallCollusionpoint} from "../models/levelmodels/WallCollusionpoint";

export class Collusion {
    gameObjects: GameObject[]
    mapElements: MapElement[]

    constructor(gameObjects: GameObject[], mapElements: MapElement[]) {
        this.gameObjects = gameObjects
        this.mapElements = mapElements
    }

    applyGroundCollisions(): void {
        this.mapElements.forEach(mapElement => {
            if (mapElement instanceof Ground) {
                this.gameObjects.forEach(gameObject => {
                    if (gameObject.velocityY > 0 && this.collusionCheckGround(gameObject, mapElement)) {
                        mapElement.collides = true
                        gameObject.posY = mapElement.y - gameObject.height
                        gameObject.velocityY = gameObject.fallSpeed
                        gameObject.inAir = false
                    } else mapElement.collides = false
                })
            }
        })

    }

    applyWallCollisions(): void {
        this.mapElements.forEach(mapElement => {
            if (mapElement instanceof Wall) {
                this.gameObjects.forEach(gameObject => {
                    switch (this.checkCollusions(gameObject, mapElement)) {
                        case WallCollusionpoint.LEFT: {
                            mapElement.collides = true
                            gameObject.posX = mapElement.x - gameObject.width
                            console.log("left")
                            break;
                        }
                        case WallCollusionpoint.RIGHT: {
                            mapElement.collides = true
                            gameObject.posX = mapElement.x + mapElement.width
                            console.log("right")
                            break;
                        }
                        case WallCollusionpoint.TOP: {
                            mapElement.collides = true
                            mapElement.collides = true
                            gameObject.posY = mapElement.y + mapElement.height
                            gameObject.velocityY = gameObject.fallSpeed
                            gameObject.inAir = false
                            console.log("top")
                            break;
                        }
                        case WallCollusionpoint.BOTTOM: {
                            mapElement.collides = true
                            gameObject.posY = mapElement.y - gameObject.height
                            gameObject.velocityY = gameObject.fallSpeed
                            gameObject.inAir = false
                            console.log("bottom")
                            break;
                        }
                        default: {
                            console.log("nothing")
                            mapElement.collides = false
                        }
                    }
                })
            }
        })


    }


    collusionCheckTop(object: GameObject, mapElement: MapElement): boolean {
        return !(object.posX > mapElement.width + mapElement.x ||
            object.posY > mapElement.height + mapElement.y ||
            mapElement.x > object.width + object.posX ||
            mapElement.y > object.height + object.posY)
    }

    checkCollusions(object: GameObject, mapElement: MapElement): WallCollusionpoint {
        // check if gamobject collides with wall
        if (!(object.posX > mapElement.width + mapElement.x ||
            object.posY > mapElement.height + mapElement.y ||
            mapElement.x > object.width + object.posX ||
            mapElement.y > object.height + object.posY)) {
            if(object.posY+object.height >= mapElement.y && object.posY < mapElement.y)
                return WallCollusionpoint.BOTTOM
            else if (object.posX + object.width >= mapElement.x && object.posX < mapElement.x)
                return WallCollusionpoint.LEFT
            else if (object.posX <= mapElement.x + mapElement.width && object.posX + object.width > mapElement.x + mapElement.width)
                return WallCollusionpoint.RIGHT
            else if(object.velocityY < 0 && object.posY <= mapElement.y+mapElement.height && object.posY+object.height > mapElement.y + mapElement.height )
                return WallCollusionpoint.TOP
        }
        return WallCollusionpoint.NONE
    }

    collusionCheckGround(object: GameObject, mapElement: MapElement): boolean {
        return !(object.posX > mapElement.width + mapElement.x ||
            object.posY + object.height > mapElement.height + mapElement.y ||
            mapElement.x > object.width + object.posX ||
            mapElement.y > object.height + object.posY)
    }
}
