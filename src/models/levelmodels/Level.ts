import {Collusion} from "../../helpers/Collusion";
import {MapElement} from "./MapElement";
import {LogicHelper} from "../../helpers/LogicHelper";
import {Player} from "../player/Player";
import {Skeleton} from "../enemies/Skeleton";
import {GameObject} from "../GameObject";

export class Level {
    context: CanvasRenderingContext2D
    mapElements: MapElement[]
    collusion: Collusion
    player: Player
    enemies: Skeleton[]
    levelImage

    constructor(context: CanvasRenderingContext2D, mapElements: MapElement[], player: Player, enemies: Skeleton[], mapBoundaries:number [], imgSrc: any) {
        this.context = context
        this.mapElements = mapElements
        this.player = player
        this.enemies = enemies
        this.collusion = new Collusion((this.enemies as GameObject[]).concat(this.player), this.mapElements, mapBoundaries)
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 5
        this.levelImage = new Image()
        this.levelImage.src = imgSrc
    }

    update(secondsPassed: number) {
        this.draw()
        this.enemies.forEach(enemy => enemy.update(secondsPassed))
        this.player.update(secondsPassed)
        this.collusion.applyTopCollusion()
        this.collusion.applyWallCollisions()
        this.collusion.applyBottomCollusion()
        this.collusion.applyMapBoundaries()
        // character collusion detection with other characters
        // LogicHelper.detectCharacterCollusions((this.enemies as GameOobject[]).concat(this.player))
        if (this.enemies.length > 0)
            LogicHelper.skeletonAttackCollusion(this.enemies[0], this.player)
        LogicHelper.playerAttackCollusion(this.player, this.enemies)
        this.enemies = LogicHelper.deleteDeadEnemies(this.enemies)
    }

    draw() {
        this.context.drawImage(this.levelImage, 0, 0)
        // draw map elements
        // this.mapElements.forEach(element => element.draw())
    }
}