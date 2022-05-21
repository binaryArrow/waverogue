import {GameObject} from "../models/GameObject";

export class DrawHelper {

    static draw(objects: GameObject[]): void {
        objects.forEach(object => object.draw())
    }

    static easeInQuad(t: number, b: number, c: number, d: number) {
        return c * (t /= d) * t + b;
    }

    static drawLevel(context: CanvasRenderingContext2D){
        context.strokeStyle = '#000000'
        context.lineWidth = 5

        context.beginPath()
        context.moveTo(0, 600)
        context.lineTo(1800, 600)
        context.stroke()
    }

}