import {GameObject} from "../models/GameObject";
import {Top} from "../models/levelmodels/Top";
import {StaticMapObject} from "../models/levelmodels/StaticMapObject";
import {Level1} from "../models/levels/Level1";
import {Level} from "../models/levelmodels/Level";

export class LevelHelper {
    levels: Level[] = []

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[]) {
        this.levels.push(new Level1(context, gameObjects,
            [
                new Top(0, 700, 1800, 10, context),
                new Top(0, 600, 300, 10, context),
            ]
                .concat(
                    new StaticMapObject(1300, 650, 500, 200, context).getStaticMapObject(),
                    new StaticMapObject(1500, 600, 300, 200, context).getStaticMapObject()
                )
        ))
    }

    update(secondsPassed: number) {
        this.levels[0].update(secondsPassed)
        this.levels[0].gameObjects.forEach(gameObject => gameObject.update(secondsPassed))
    }

}