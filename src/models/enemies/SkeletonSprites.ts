import {SpriteSheet} from "../SpriteSheet";
import skeletonIdleRight from "../../assets/skeleton/skeleton_idle_right.png"

export class SkeletonSprites{
    context: CanvasRenderingContext2D
    spriteSheetIdleRight: SpriteSheet

    constructor(context: CanvasRenderingContext2D) {
        this.context = context
        this.spriteSheetIdleRight = new SpriteSheet(150, 54, 4, skeletonIdleRight, this.context)
    }
}