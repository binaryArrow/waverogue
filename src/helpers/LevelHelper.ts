import {Level1} from "../levels/Level1";
import {GameObject} from "../models/GameObject";
import {Ground} from "../models/levelmodels/Ground";

export class LevelHelper {
    level1: Level1

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[]) {
        this.level1 = new Level1(context, gameObjects, [
            new Ground(0, 750, 1800, 10, context),
            new Ground(100, 700, 300, 10, context),
            new Ground(100, 500, 300, 5, context)
        ])
    }

    update(secondsPassed: number){
        this.level1.update(secondsPassed)
        this.level1.gameObjects.forEach(gameObject => gameObject.update(secondsPassed))
    }

}