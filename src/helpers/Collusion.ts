import {GameObject} from "../models/GameObject";
import {Ground} from "../models/levelmodels/Ground";
import {MapElement} from "../models/levelmodels/MapElement";
import {Wall} from "../models/levelmodels/Wall";
import {WallCollusionpoint} from "../models/levelmodels/WallCollusionpoint";
import {Top} from "../models/levelmodels/Top";

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
                    if (gameObject.velocityY > 0 && collusionCheckGround(gameObject, mapElement)) {
                        mapElement.collides = true
                        gameObject.posY = mapElement.y - gameObject.height
                        gameObject.velocityY = gameObject.fallSpeed
                        gameObject.inAir = false
                    } else mapElement.collides = false
                })
            }
        })

        function collusionCheckGround(object: GameObject, mapElement: MapElement): boolean {
            return !(object.posX > mapElement.width + mapElement.x ||
                object.posY + object.height > mapElement.height + mapElement.y ||
                mapElement.x > object.width + object.posX ||
                mapElement.y > object.height + object.posY)
        }
    }

    applyWallCollisions(): void {
        this.mapElements.forEach(mapElement => {
            if (mapElement instanceof Wall) {
                this.gameObjects.forEach(gameObject => {
                    switch (this.checkLeftOrRightCollusion(gameObject, mapElement)) {
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
                        default: {
                            console.log("nothing")
                            mapElement.collides = false
                        }
                    }
                })
            }
        })


    }

    checkLeftOrRightCollusion(object: GameObject, mapElement: MapElement): WallCollusionpoint {
        // check if gamobject collides with wall
        if (!(object.posX > mapElement.width + mapElement.x ||
            object.posY > mapElement.height + mapElement.y ||
            mapElement.x > object.width + object.posX ||
            mapElement.y > object.height + object.posY)) {
            console.log(object.posX + object.width + " " + object.posX + "\n" + mapElement.x + " " + mapElement.x + mapElement.width)
            // check if rect the right or left side and return the side where rect hits wall
            if (object.posX + object.width <= mapElement.x)
                return WallCollusionpoint.LEFT
            else if (object.posX >= mapElement.x - mapElement.width)
                return WallCollusionpoint.RIGHT
            return WallCollusionpoint.LEFT
        }
        return WallCollusionpoint.NONE
    }

    applyTopCollusion() {
        this.mapElements.forEach(mapElement => {
            if (mapElement instanceof Top) {
                this.gameObjects.forEach(gameObject => {
                    if (gameObject.velocityY < 0 && collusionCheckTop(gameObject, mapElement) && !this.checkLeftOrRightCollusion(gameObject, mapElement)) {
                        mapElement.collides = true
                        gameObject.posY = mapElement.y + mapElement.height
                        gameObject.velocityY = gameObject.fallSpeed
                        gameObject.inAir = false
                    } else mapElement.collides = false
                })
            }
        })

        function collusionCheckTop(object: GameObject, mapElement: MapElement): boolean {
            return !(object.posX > mapElement.width + mapElement.x ||
                object.posY > mapElement.height + mapElement.y ||
                mapElement.x > object.width + object.posX ||
                mapElement.y > object.height + object.posY)
        }

    }

}