export class Sprite{
    image = new Image()
    context: CanvasRenderingContext2D

    constructor(imgSource: any, context: CanvasRenderingContext2D ) {
        this.image.src = imgSource
        this.context = context
    }

    drawSprite(posX: number, posY: number, width: number, height: number){
        this.context.drawImage(this.image, posX, posY, width, height)
    }
}