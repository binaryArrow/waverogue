export class Line {
    x1: number
    y1: number
    x2: number
    y2: number
    context: CanvasRenderingContext2D
    constructor(x1: number, y1: number, x2: number, y2: number, context: CanvasRenderingContext2D) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.context = context
    }

    draw(){
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 5
        this.context.beginPath()
        this.context.moveTo(this.x1, this.y1)
        this.context.lineTo(this.x2, this.y2)
        this.context.stroke()
    }
}