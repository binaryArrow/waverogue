import playerIdleRight from "../../assets/player/player_idle.png"
import playerIdleLeft from "../../assets/player/player_idle_left.png"
import playerRunRight from "../../assets/player/player_run_right.png"
import playerRunLeft from "../../assets/player/player_run_left.png"
import playerJumpRight from "../../assets/player/player_jump_right.png"
import playerJumpLeft from "../../assets/player/player_jump_left.png"
import playerFallRight from "../../assets/player/player_fall_right.png"
import playerFallLeft from "../../assets/player/player_fall_left.png"
import playerCrouchRight from "../../assets/player/player_crouch_right.png"
import playerCrouchLeft from "../../assets/player/player_crouch_left.png"
import playerDashRight from "../../assets/player/player_dash_right.png"
import playerDashLeft from "../../assets/player/player_dash_left.png"
import playerAttack1Right from "../../assets/player/player_attack_1_right.png"
import playerAttack1Left from "../../assets/player/player_attack_1_left.png"
import playerHurtRight from "../../assets/player/player_hurt_right.png"
import playerHurtLeft from "../../assets/player/player_hurt_left.png"
import playerDieRight from "../../assets/player/player_die_right.png"
import playerDeadRight from "../../assets/player/player_dead_right.png"
import playerDieLeft from "../../assets/player/player_die_left.png"
import playerDeadLeft from "../../assets/player/player_dead_left.png"
import {SpriteSheet} from "../SpriteSheet";
import {Sprite} from "../Sprite";

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
    spriteSheetPlayerCrouchRight: SpriteSheet
    spriteSheetPlayerCrouchLeft: SpriteSheet
    spriteSheetPlayerAttack1Right: SpriteSheet
    spriteSheetPlayerAttack1Left: SpriteSheet
    spriteSheetPlayerHurtRight: SpriteSheet
    spriteSheetPlayerHurtLeft: SpriteSheet
    spriteSheetPlayerDieRight: SpriteSheet
    spriteSheetPlayerDieLeft: SpriteSheet
    spritePlayerDeadRight: Sprite
    spritePlayerDeadLeft: Sprite
    spritePlayerDashRight: Sprite
    spritePlayerDashLeft: Sprite

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
        this.spriteSheetPlayerCrouchRight = new SpriteSheet(24, 37,4,  playerCrouchRight, context)
        this.spriteSheetPlayerCrouchLeft = new SpriteSheet(24, 37,4,  playerCrouchLeft, context)
        this.spriteSheetPlayerAttack1Right = new SpriteSheet(56, 44, 8, playerAttack1Right, context)
        this.spriteSheetPlayerAttack1Left = new SpriteSheet(56, 44, 8, playerAttack1Left, context)
        this.spriteSheetPlayerHurtRight = new SpriteSheet(64, 44, 4, playerHurtRight, context)
        this.spriteSheetPlayerHurtLeft = new SpriteSheet(64, 44, 4, playerHurtLeft, context)
        this.spriteSheetPlayerDieRight = new SpriteSheet(64, 44, 11, playerDieRight, context)
        this.spriteSheetPlayerDieLeft = new SpriteSheet(64, 44, 11, playerDieLeft, context)
        this.spritePlayerDeadRight = new Sprite(playerDeadRight, context)
        this.spritePlayerDeadLeft = new Sprite(playerDeadLeft, context)
        this.spritePlayerDashRight = new Sprite(playerDashRight, context)
        this.spritePlayerDashLeft = new Sprite(playerDashLeft, context)

    }

}