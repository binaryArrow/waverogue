import {Rect} from "./Rect";
import {GameObject} from "./GameObject";
import {LevelHelper} from "../helpers/LevelHelper";

export class Ground extends Rect{
    checkGameObjectCollideWithGround(object: GameObject): boolean {
        // // check gameobject bottom left and bottom right intersect with line
        // return( (gameObject.posY+gameObject.height >= this.y && gameObject.posX < this.width) ||
        //     (gameObject.posY+gameObject.height >= this.y && gameObject.posX + gameObject.width < this.x)) &&
        //     gameObject.posY < this.y
        return !(object.posX > this.width + this.x ||
            this.x > object.width + object.posX ||
            object.posY > this.height + this.y ||
            this.y > object.height + object.posY)

    }
}