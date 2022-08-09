import {Top} from "../models/levelmodels/Top";
import {StaticMapObject} from "../models/levelmodels/StaticMapObject";
import {Level1} from "../models/levels/Level1";
import {Level} from "../models/levelmodels/Level";
import {Player} from "../models/player/Player";
import {Skeleton} from "../models/enemies/Skeleton";

export class LevelHelper {
    levels: Level[] = []

    constructor(context: CanvasRenderingContext2D, player: Player, enemies: Skeleton[]) {
        this.levels.push(
            new Level1(
                context,
                new StaticMapObject(1300, 650, 500, 200, context).getStaticMapObject().concat(
                    new StaticMapObject(1500, 600, 300, 200, context).getStaticMapObject(),
                    new Top(0, 700, 1800, 10, context),
                    new Top(0, 600, 300, 10, context)
                ),
                player,
                enemies
            )
        )
    }

    update(secondsPassed: number) {
        this.levels[0].update(secondsPassed)
    }

}