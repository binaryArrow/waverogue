import playerIdleRight from "../../assets/player/player_idle.png"
import playerIdleLeft from "../../assets/player/player_idle_left.png"
import playerRunRight from "../../assets/player/player_run_right.png"
import playerRunLeft from "../../assets/player/player_run_left.png"
import playerJumpRight from "../../assets/player/player_jump_right.png"
import playerJumpLeft from "../../assets/player/player_jump_left.png"
import playerFallRight from "../../assets/player/player_fall_right.png"
import playerFallLeft from "../../assets/player/player_fall_left.png"
import {SpriteSheet} from "../SpriteSheet";

export class PlayerSprites{

    context: CanvasRenderingContext2D
    spriteSheetPlayerIdleRight: SpriteSheet
    spriteSheetPlayerIdleLeft: SpriteSheet
    spriteSheetPlayerRunRight: SpriteSheet
    spriteSheetPlayerRunLeft: SpriteSheet
    spriteSheetPlayerJumpRight: SpriteSheet
    spriteSheetPlayerJumpLeft: SpriteSheet
    spriteSheetPlayerFallRight: SpriteSheet
    spriteSheetPlayerFallLeft: SpriteSheet

    constructor(context: CanvasRenderingContext2D) {
        this.context = context
        this.spriteSheetPlayerIdleRight = new SpriteSheet(24, 37,5,  playerIdleRight, context)
        this.spriteSheetPlayerIdleLeft = new SpriteSheet(24, 37,5,  playerIdleLeft, context)
        this.spriteSheetPlayerRunRight = new SpriteSheet(30, 36, 8, playerRunRight, context )
        this.spriteSheetPlayerRunLeft = new SpriteSheet(30, 36, 8, playerRunLeft, context)
        this.spriteSheetPlayerJumpRight = new SpriteSheet(24, 37,3,  playerJumpRight, context)
        this.spriteSheetPlayerJumpLeft = new SpriteSheet(24, 37,3,  playerJumpLeft, context)
        this.spriteSheetPlayerFallRight = new SpriteSheet(24, 37,3,  playerFallRight, context)
        this.spriteSheetPlayerFallLeft = new SpriteSheet(24, 37,3,  playerFallLeft, context)
    }

}