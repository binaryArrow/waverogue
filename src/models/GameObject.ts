export class GameObject {
    private context: CanvasRenderingContext2D
    posX: number
    posY: number
    velocityX: number
    velocityY: number
    width: number
    height: number
    collides: boolean = false

    constructor(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        velocityX: number,
        velocityY: number,
        width: number,
        height: number
        ) {
        this.context = context
        this.posX = x
        this.posY = y
        this.velocityX = velocityX
        this.velocityY = velocityY
        this.width = width
        this.height = height
    }

    draw(){
        this.context.fillStyle = this.collides ? '#a66c6c':'#94c781'
        this.context.strokeStyle = '#000000'
        this.context.fillRect(this.posX, this.posY, this.width, this.height)
        this.context.strokeRect(this.posX, this.posY, this.width, this.height)
    }

}