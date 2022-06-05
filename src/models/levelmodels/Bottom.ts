import {Rect} from "../Rect";

// can be used as bottomside of an staticgameobject. Collusion on topside of gameobject
export class Bottom extends Rect{
    draw(): void {
        this.context.fillStyle = this.collides ? '#181818':'#c7819a'
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 2
        this.context.fillRect(this.x, this.y, this.width, this.height)
        this.context.strokeRect(this.x, this.y, this.width, this.height)
    }
}