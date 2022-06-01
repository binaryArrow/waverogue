import {Level1} from "../levels/Level1";
import {GameObject} from "../models/GameObject";
import {Top} from "../models/levelmodels/Top";
import {Wall} from "../models/levelmodels/Wall";
import {Bottom} from "../models/levelmodels/Bottom";

export class LevelHelper {
    level1: Level1

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[]) {
        this.level1 = new Level1(context, gameObjects, [
            new Top(0, 750, 1800, 10, context),
            new Top(100, 700, 600, 10, context),
            new Top(900, 700, 300, 10, context),
            new Wall(800, 730, 10, 150, context),
            new Wall(800, 490, 10, 150, context),
            new Wall(1400, 650, 10, 300, context),
            new Bottom(800, 640, 10, 1, context)
        ])
    }

    update(secondsPassed: number){
        this.level1.update(secondsPassed)
        this.level1.gameObjects.forEach(gameObject => gameObject.update(secondsPassed))
    }

}