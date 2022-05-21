import {GameObject} from "./GameObject";
import {Character} from "./Character";

export class Player extends GameObject implements Character {

    moveLeft: boolean = false
    moveRight: boolean = false

    init(){
        this.initMovement()
    }

    jump(secondsPast: number): void {
        this.posY -= 100 * secondsPast
    }

    move(secondsPast: number): void {
        if (this.moveLeft)
            this.posX -= this.movementSpeed * secondsPast
        else if (this.moveRight)
            this.posX += this.movementSpeed * secondsPast
    }

    roll(secondsPast: number): void {
    }

    fall(secondsPast: number) {
        this.fallSpeed += this.gravity
        this.posY += this.fallSpeed * secondsPast * this.gravity
    }

    updateMovement(secondsPast: number) {
        this.move(secondsPast)
    }

    update(secondsPassed: number) {
        if (this.posY + this.height < 600) // fall
            this.fall(secondsPassed)
        if (this.posY + this.height > 600) { // hit ground
            this.posY = 600 - this.height
        }
        this.updateMovement(secondsPassed)
    }

    initMovement(){
        window.addEventListener('keydown', (e)=>{
            switch (e.key) {
                case 'a': this.moveLeft = true
                    break;
                case 'd': this.moveRight = true
                    break;
            }
        })
        window.addEventListener('keyup', (e)=>{
            switch (e.key) {
                case 'a': this.moveLeft = false
                    break;
                case 'd': this.moveRight = false
                    break;
            }
        })
    }

}