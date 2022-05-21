export class GameObject {
    context: CanvasRenderingContext2D
    gravity: number = 0.6
    posX: number
    posY: number
    movementSpeed: number
    fallSpeed: number
    width: number
    height: number
    collides: boolean = false

    constructor(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        movementSpeed: number,
        fallSpeed: number,
        width: number,
        height: number
        ) {
        this.context = context
        this.posX = x
        this.posY = y
        this.movementSpeed = movementSpeed
        this.fallSpeed = fallSpeed
        this.width = width
        this.height = height
    }

    draw(){
        this.context.fillStyle = this.collides ? '#a66c6c':'#94c781'
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 2
        this.context.fillRect(this.posX, this.posY, this.width, this.height)
        this.context.strokeRect(this.posX, this.posY, this.width, this.height)
    }

    update(secondsPassed: number): void {}

}