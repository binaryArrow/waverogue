import {Collusion} from "../../helpers/Collusion";
import {MapElement} from "./MapElement";
import {LogicHelper} from "../../helpers/LogicHelper";
import {Player} from "../player/Player";
import {Enemy} from "../Enemy";

export class Level {
    context: CanvasRenderingContext2D
    mapElements: MapElement[]
    collusion: Collusion
    player: Player
    enemies: Enemy[]

    constructor(context: CanvasRenderingContext2D, mapElements: MapElement[], player: Player, enemies: Enemy[]) {
        this.context = context
        this.mapElements = mapElements
        this.player = player
        this.enemies = enemies
        this.collusion = new Collusion(this.enemies.concat(this.player), this.mapElements)
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 5
    }

    update(secondsPassed: number) {
        this.enemies.forEach(enemy => enemy.update(secondsPassed))
        this.player.update(secondsPassed)
        this.collusion.applyTopCollusion()
        this.collusion.applyWallCollisions()
        this.collusion.applyBottomCollusion()
        // LogicHelper.detectCharacterCollusions(this.enemies.concat(this.player))
        LogicHelper.playerAttackCollusion(this.player, this.enemies)
        this.enemies = LogicHelper.deleteDeadEnemies(this.enemies)
        this.draw()
    }

    draw() {
        this.mapElements.forEach(element => element.draw())
    }
}