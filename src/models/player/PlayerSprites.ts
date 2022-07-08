import playerIdle from "../../assets/player_idle.png"
import {SpriteSheet} from "../SpriteSheet";

export class PlayerSprites{

    context: CanvasRenderingContext2D
    spriteSheetPlayerIdle: SpriteSheet

    constructor(context: CanvasRenderingContext2D) {
        this.context = context
        this.spriteSheetPlayerIdle = new SpriteSheet(24, 37, playerIdle, context)
    }

}