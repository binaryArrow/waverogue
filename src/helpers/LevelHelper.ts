import {Level1} from "../levels/Level1";
import {GameObject} from "../models/GameObject";
import {Ground} from "../models/levelmodels/Ground";
import {Wall} from "../models/levelmodels/Wall";
import {Top} from "../models/levelmodels/Top";

export class LevelHelper {
    level1: Level1

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[]) {
        this.level1 = new Level1(context, gameObjects, [
            new Wall(0, 750, 1800, 10, context),
            new Wall(100, 700, 300, 10, context),
            new Wall(800, 700, 300, 10, context),
            new Wall(800, 730, 10, 150, context),
            new Wall(800, 490, 10, 150, context),
        ])
    }

    update(secondsPassed: number){
        this.level1.update(secondsPassed)
        this.level1.gameObjects.forEach(gameObject => gameObject.update(secondsPassed))
    }

}