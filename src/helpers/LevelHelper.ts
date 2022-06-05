import {Level} from "../models/levels/Level";
import {Level1} from "../models/levels/Level1";
import {StaticMapObject} from "../models/levelmodels/StaticMapObject";

export class LevelHelper {
    levels: Level[]

    constructor(context: CanvasRenderingContext2D) {
        this.levels = [new Level1([
            new StaticMapObject(0, 750, 1800, 10, context),
        ])]
    }
}