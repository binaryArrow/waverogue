import {Sprite} from "../models/Sprite";

export class DrawHelper {

    static draw(objects: Sprite[]): void {
        objects.forEach(object => object.draw())
    }

    static easeInQuad(t: number, b: number, c: number, d: number) {
        return c * (t /= d) * t + b;
    }

}