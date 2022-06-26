import {GameObject} from "../GameObject";
import {Collusion} from "../../helpers/Collusion";
import {MapElement} from "./MapElement";
import {DrawHelper} from "../../helpers/DrawHelper";
import {Player} from "../Player";
import {Enemy} from "../Enemy";

export class Level {
    gameObjects: GameObject[]
    context: CanvasRenderingContext2D
    mapElements: MapElement[]
    collusion: Collusion
    player: Player
    enemies: Enemy[]

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[], mapElements: MapElement[], player: Player, enemies: Enemy[]) {
        this.gameObjects = gameObjects
        this.context = context
        this.mapElements = mapElements
        this.collusion = new Collusion(gameObjects, this.mapElements)
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 5
        this.player = player
        this.enemies = enemies
    }

    update(secondsPassed: number) {
        this.collusion.applyTopCollusion()
        this.collusion.applyWallCollisions()
        this.collusion.applyBottomCollusion()
        //DrawHelper.detectCharacterCollusions(this.gameObjects)
        DrawHelper.playerAttackCollusion(this.gameObjects[1] as Player, this.enemies)
        this.draw()
    }

    draw() {
        this.mapElements.forEach(element => element.draw())
    }
}