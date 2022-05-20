export class Sprite{
    private context: CanvasRenderingContext2D
    posX: number
    posY: number

    constructor(context: CanvasRenderingContext2D, x: number, y: number) {
        this.context = context
        this.posX = x
        this.posY = y
    }

    draw(){
        this.context.fillRect(this.posX, this.posY, 30, 30)
    }
}