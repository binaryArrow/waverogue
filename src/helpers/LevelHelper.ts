import {Level1} from "../levels/Level1";
import {GameObject} from "../models/GameObject";
import {Line} from "../models/Line";

export class LevelHelper {
    level1: Level1

    constructor(context: CanvasRenderingContext2D, gameObjects: GameObject[]) {
        this.level1 = new Level1(context, gameObjects)
    }

    update(secondsPassed: number){
        this.level1.update(secondsPassed)
    }

    // static checkLineCollusion(line1: Line, line2: Line): boolean {
    //
    //     // distance calculation
    //     const dA = ((line2.x2 - line2.x1)*(line1.y1-line2.y1) - (line2.y2-line2.y1)*(line1.x1-line2.x1)) /
    //         ((line2.y2-line2.y1)*(line1.x2-line1.x1) - (line2.x2-line2.x1)*(line1.y2-line1.y1))
    //
    //     const dB = ((line1.x2-line1.x1)*(line1.y1-line2.y1) - (line1.y2-line1.y1)*(line1.x1-line2.x1)) /
    //         ((line2.y2-line2.y1)*(line1.x2-line1.x1) - (line2.x2-line2.x1)*(line1.y2-line1.y1));
    //
    //     // if uA and uB are between 0-1, lines are colliding
    //     return dA >= 0 && dA <= 1 && dB >= 0 && dB <= 1;
    // }
}