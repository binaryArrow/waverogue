export class SpriteSheet {

    // width of individual srpite in spritesheet
    singleSpriteWidth: number
    singleSpriteHeight: number

    context: CanvasRenderingContext2D
    image = new Image()

    constructor(singleSpriteWidth: number, singleSpriteHeight: number, imgSource: any, context: CanvasRenderingContext2D) {
        this.singleSpriteWidth = singleSpriteWidth
        this.singleSpriteHeight = singleSpriteHeight
        this.context = context
        this.image.src = imgSource
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
}