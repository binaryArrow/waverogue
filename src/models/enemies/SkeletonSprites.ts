import {SpriteSheet} from "../SpriteSheet";
import skeletonIdleRight from "../../assets/skeleton/skeleton_idle_right.png"
import skeletonIdleLeft from "../../assets/skeleton/skeleton_idle_left.png"
import skeletonTakeHitRight from "../../assets/skeleton/take_hit_right.png"
import skeletonTakeHitLeft from "../../assets/skeleton/take_hit_left.png"
import skeletonWalkRight from "../../assets/skeleton/walk_right.png"
import skeletonWalkLeft from "../../assets/skeleton/walk_left.png"
import skeletonAttackRight from "../../assets/skeleton/skeleton_attack_right.png"
import skeletonAttackLeft from "../../assets/skeleton/skeleton_attack_left.png"

export class SkeletonSprites{
    context: CanvasRenderingContext2D
    spriteSheetIdleRight: SpriteSheet
    spriteSheetIdleLeft: SpriteSheet
    spriteSheetTakeHitRight: SpriteSheet
    spriteSheetTakeHitLeft: SpriteSheet
    spriteSheetWalkLeft: SpriteSheet
    spriteSheetWalkRight: SpriteSheet
    spriteSheetAttackRight: SpriteSheet
    spriteSheetAttackLeft: SpriteSheet

    constructor(context: CanvasRenderingContext2D) {
        this.context = context
        this.spriteSheetIdleRight = new SpriteSheet(150, 54, 4, skeletonIdleRight, this.context)
        this.spriteSheetIdleLeft = new SpriteSheet(150, 54, 4, skeletonIdleLeft, this.context)
        this.spriteSheetTakeHitRight = new SpriteSheet(150, 150, 4, skeletonTakeHitRight, this.context)
        this.spriteSheetTakeHitLeft = new SpriteSheet(150, 150, 4, skeletonTakeHitLeft, this.context)
        this.spriteSheetWalkRight = new SpriteSheet(150, 150, 4, skeletonWalkRight, this.context)
        this.spriteSheetWalkLeft = new SpriteSheet(150, 150, 4, skeletonWalkLeft, this.context)
        this.spriteSheetAttackRight = new SpriteSheet(150, 58, 7, skeletonAttackRight, this.context)
        this.spriteSheetAttackLeft = new SpriteSheet(140, 58, 7, skeletonAttackLeft, this.context)
    }
}