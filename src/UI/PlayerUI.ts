import {Player} from "../models/player/Player";

export class PlayerUI {
    outerBarWidth: number
    outerBarAddConst: number = 4

    constructor(readonly player: Player, private context: CanvasRenderingContext2D){
        this.outerBarWidth = player.health + this.outerBarAddConst
    }

    drawUI(){
        this.drawHealthBar()
    }

    drawHealthBar(){
        this.context.fillStyle = '#757474'
        this.context.fillRect(10, 10, this.outerBarWidth * 3, 24)
        this.context.fillStyle = '#f36f6f'
        this.context.fillRect(10 + this.outerBarAddConst * 3 /2, 10 + 2, this.player.health * 3, 20)
        this.context.font = 'bold 15px Arial';
        this.context.fillStyle = 'black';
        this.context.fillText(`${this.player.health}`, 20, 27);
    }
}
