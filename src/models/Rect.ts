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
        // this is with no colors
        // this.context.fillStyle = this.collides ? 'rgba(255,255,255,0)':'rgba(121,211,75,0)'
        // this.context.strokeStyle = 'rgba(0,0,0,0)'
        this.context.lineWidth = 2
        this.context.fillRect(this.x, this.y, this.width, this.height)
        this.context.strokeRect(this.x, this.y, this.width, this.height)
    }
}