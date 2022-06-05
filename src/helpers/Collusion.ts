import {GameObject} from "../models/GameObject";
import {Top} from "../models/levelmodels/Top";
import {MapElement} from "../models/levelmodels/MapElement";
import {Wall} from "../models/levelmodels/Wall";
import {WallCollusionpoints} from "../models/levelmodels/WallCollusionpoints";
import {Bottom} from "../models/levelmodels/Bottom";
import {StaticMapObject} from "../models/levelmodels/StaticMapObject";

export class Collusion {
    gameObjects: GameObject[]
    mapElements: MapElement[]

    constructor(gameObjects: GameObject[], mapElements: MapElement[]) {
        this.gameObjects = gameObjects
        this.mapElements = mapElements
    }

    applyStaticObjectCollusion(){
        this.mapElements.forEach(mapElement => {
            if(mapElement instanceof StaticMapObject) {

            }
        })
    }

    applyGroundCollisions(): void {
        this.mapElements.forEach(mapElement => {
            if (mapElement instanceof Top) {
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
                        case WallCollusionpoints.LEFT: {
                            mapElement.collides = true
                            gameObject.posX = mapElement.x - gameObject.width
                            break;
                        }
                        case WallCollusionpoints.RIGHT: {
                            mapElement.collides = true
                            gameObject.posX = mapElement.x + mapElement.width
                            break;
                        }
                        default: {
                            mapElement.collides = false
                        }
                    }
                })
            }
        })


    }

    checkLeftOrRightCollusion(object: GameObject, mapElement: MapElement): WallCollusionpoints {
        // check if gamobject collides with wall
        if (!(object.posX > mapElement.width + mapElement.x ||
            object.posY > mapElement.height + mapElement.y ||
            mapElement.x > object.width + object.posX ||
            mapElement.y > object.height + object.posY)) {
            // console.log(object.posX + object.width + " " + object.posX + "\n" + mapElement.x + " " + mapElement.x + mapElement.width)
            // check if rect the right or left side and return the side where rect hits wall
            if (object.posX + object.width <= mapElement.x + mapElement.width){
                console.log("left collusion")
                return WallCollusionpoints.LEFT
            }
            else if (object.posX >= mapElement.x - mapElement.width){
                console.log("right collusion")
                return WallCollusionpoints.RIGHT
            }
        }
        return WallCollusionpoints.NONE
    }

    applyTopCollusion() {
        this.mapElements.forEach(mapElement => {
            if (mapElement instanceof Bottom) {
                this.gameObjects.forEach(gameObject => {
                    if (gameObject.velocityY < 0 &&
                        collusionCheckTop(gameObject, mapElement) &&
                        this.checkLeftOrRightCollusion(gameObject, mapElement) != WallCollusionpoints.LEFT &&
                        this.checkLeftOrRightCollusion(gameObject, mapElement) != WallCollusionpoints.RIGHT
                    ) {
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