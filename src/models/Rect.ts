export class Rect {
    x: number
    y: number
    width: number
    height: number
    context: CanvasRenderingContext2D
    collides: boolean = false
    constructor(x: number, y: number, width: number, height: number, context: CanvasRenderingContext2D) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.context = context
    }

    draw(){
        this.context.fillStyle = this.collides ? '#a66c6c':'#94c781'
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 2
        this.context.fillRect(this.x, this.y, this.width, this.height)
        this.context.strokeRect(this.x, this.y, this.width, this.height)
    }
}