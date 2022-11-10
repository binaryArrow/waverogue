export class GameObject {
    context: CanvasRenderingContext2D
    gravity: number = 10
    velocityX: number = 0
    velocityY: number = 100
    startVelocity: number = 100 // this must be same es velocityY, it is for calculating inair without a jump
    inAir: boolean = true
    posX: number
    posY: number
    movementSpeed: number = 0
    fallSpeed: number = 0
    jumpSpeed: number
    width: number
    height: number
    collides: boolean = false
    moveLeftIndicator: boolean = false
    moveRightIndicator: boolean = false
    jumpIndicator: boolean = false
    hit: boolean = false
    hitLeft: boolean = false
    hitRight: boolean = false
    attackRight: boolean = false
    attackLeft: boolean = false
    dead: boolean = false

    constructor(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        movementSpeed: number,
        jumpSpeed: number,
        width: number,
        height: number
    ) {
        this.context = context
        this.posX = x
        this.posY = y
        this.movementSpeed = movementSpeed
        this.jumpSpeed = jumpSpeed
        this.width = width
        this.height = height
        this.fallSpeed = this.velocityY
    }

    /**
     * @param visible show hitbox
     * @param visibleOutlines show outline of hitbox
     */
    draw(visible: boolean, visibleOutlines: boolean) {
        this.context.imageSmoothingEnabled = false
        this.context.fillStyle = this.collides ? '#a66c6c' : '#94c781'
        this.context.strokeStyle = '#ff2929'
        this.context.lineWidth = 2
        if (visible) {
            this.context.fillRect(this.posX, this.posY, this.width, this.height)
            this.context.strokeRect(this.posX, this.posY, this.width, this.height)
        }
        if(visibleOutlines)
            this.context.strokeRect(this.posX, this.posY, this.width, this.height)
    }

    moveLeft(): void {
        this.velocityX = -this.movementSpeed
    }

    moveRight(): void {
        this.velocityX = this.movementSpeed
    }

    stopMovingXAxis(): void {
        this.velocityX = 0
    }

    fall(secondsPassed: number) {
        secondsPassed = Math.min(secondsPassed, 0.012) // this piece of shit prevents falling when changing tabs
        this.velocityY += this.gravity
        this.posY += Math.floor(this.velocityY * secondsPassed)
        if(this.velocityY > this.startVelocity + this.gravity)
            this.inAir = true
    }

    update(secondsPassed: number): void {
    }

}