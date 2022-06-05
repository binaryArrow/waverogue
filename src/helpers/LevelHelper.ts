import {GameObject} from "../models/GameObject";
import {Top} from "../models/levelmodels/Top";
import {StaticMapObject} from "../models/levelmodels/StaticMapObject";
import {Level1} from "../models/levels/Level1";

export class LevelHelper {
    level1: Level1

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[]) {
        this.level1 = new Level1(context, gameObjects,
            [
                new Top(0, 750, 1800, 10, context),
                new Top(100, 700, 600, 10, context),
            ]
                .concat(
                    new StaticMapObject(800, 490, 5, 150, context).getStaticMapObject(),
                    new StaticMapObject(800, 730, 350, 150, context).getStaticMapObject()
                )
        )
    }

    update(secondsPassed: number) {
        this.level1.update(secondsPassed)
        this.level1.gameObjects.forEach(gameObject => gameObject.update(secondsPassed))
    }

}