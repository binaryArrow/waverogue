export class SpriteSheet {

    // width of individual srpite in spritesheet
    singleSpriteWidth: number
    singleSpriteHeight: number
    singleSpriteCount: number
    context: CanvasRenderingContext2D
    image = new Image()
    frame: number = 0
    startingPoint: number = 0

    constructor(singleSpriteWidth: number, singleSpriteHeight: number, singleSpriteCount: number, imgSource: any, context: CanvasRenderingContext2D) {
        this.singleSpriteWidth = singleSpriteWidth
        this.singleSpriteHeight = singleSpriteHeight
        this.context = context
        this.image.src = imgSource
        this.singleSpriteCount = singleSpriteCount
    }

    drawIndividualSprite(column: number, row: number, width: number, height: number, posX: number, posY: number) {
        this.context.drawImage(
            this.image,
            column * this.singleSpriteWidth,
            row * this.singleSpriteHeight,
            this.singleSpriteWidth,
            this.singleSpriteHeight,
            posX,
            posY,
            width,
            height);
    }

    animate(speed: number, posX: number, posY: number, width: number, height: number, playerWidth: number, playerHeight: number) {
        if (this.frame % speed == 0) {
            this.startingPoint++;
            if (this.startingPoint >= this.singleSpriteCount)
                this.startingPoint = 0
        }
        this.drawIndividualSprite(this.startingPoint, 0, width, height, posX - playerWidth / 2, posY - playerHeight / 2)
        this.frame++
        if (this.frame >= 60)
            this.frame = 0
    }

    animationFinished(): boolean {
        return this.startingPoint === this.singleSpriteCount || this.startingPoint == 0;
    }

    resetActualsprite() {
        this.startingPoint = 0
    }
}