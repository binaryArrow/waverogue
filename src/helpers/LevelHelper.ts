import {Level1} from "../levels/Level1";
import {GameObject} from "../models/GameObject";
import {Rect} from "../models/Rect";

export class LevelHelper {
    level1: Level1

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[]) {
        this.level1 = new Level1(context, gameObjects)
    }

    update(secondsPassed: number){
        this.level1.update(secondsPassed)
    }

}