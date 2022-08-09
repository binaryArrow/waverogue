import {SpriteSheet} from "../SpriteSheet";
import skeletonIdleRight from "../../assets/skeleton/skeleton_idle_right.png"
import skeletonTakeHitRight from "../../assets/skeleton/take_hit_right.png"

export class SkeletonSprites{
    context: CanvasRenderingContext2D
    spriteSheetIdleRight: SpriteSheet
    spriteSheetTakeHitRight: SpriteSheet

    constructor(context: CanvasRenderingContext2D) {
        this.context = context
        this.spriteSheetIdleRight = new SpriteSheet(150, 54, 4, skeletonIdleRight, this.context)
        this.spriteSheetTakeHitRight = new SpriteSheet(150, 150, 4, skeletonTakeHitRight, this.context)
    }
}