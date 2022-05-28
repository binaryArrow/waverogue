import {MapElement} from "./MapElement";

export class Top extends MapElement{
    draw(): void {
        this.context.fillStyle = this.collides ? '#3d3131':'#c7819a'
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 2
        this.context.fillRect(this.x, this.y, this.width, this.height)
        this.context.strokeRect(this.x, this.y, this.width, this.height)

    }
}