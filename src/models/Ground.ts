import {Line} from "./Line";
import {GameObject} from "./GameObject";
import {LevelHelper} from "../helpers/LevelHelper";

export class Ground extends Line{
    checkGameObjectCollideWithGround(gameObject: GameObject): boolean {
        // check gameobject bottom left and bottom right intersect with line
        return (gameObject.posY+gameObject.height >= this.y1 && gameObject.posX > this.x1) &&
         (gameObject.posY+gameObject.height >= this.y1 && gameObject.posX < this.x2)
    }
}