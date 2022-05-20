import {GameObject} from "../models/GameObject";

export class DrawHelper {

    static draw(objects: GameObject[]): void {
        objects.forEach(object => object.draw())
    }

    static easeInQuad(t: number, b: number, c: number, d: number) {
        return c * (t /= d) * t + b;
    }

}