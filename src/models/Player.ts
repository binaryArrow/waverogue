import {GameObject} from "./GameObject";
import {Character} from "./Character";

export class Player extends GameObject implements Character {

    moveLeftIndicator: boolean = false
    moveRightIndicator: boolean = false
    jumpIndicator: boolean = false

    constructor(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        movementSpeed: number,
        fallSpeed: number,
        jumpSpeed: number,
        width: number,
        height: number
    ){
        super(context, x, y, movementSpeed, fallSpeed, jumpSpeed, width, height)
        this.initMovement()
    }

    update(secondsPassed: number) {
        this.draw()
        this.applyVelocity(secondsPassed)
        this.updateMovement(secondsPassed)
    }

    updateMovement(secondsPast: number) {
        if (this.moveLeftIndicator)
            this.moveLeft()
        else if (this.moveRightIndicator)
            this.moveRight()
        else if(!(this.moveRightIndicator && this.moveLeftIndicator))
            this.stopMovingXAxis()
        // jumping
        if(this.jumpIndicator){
            this.jump()
        }
    }

    applyVelocity(secondsPassed: number) {
        this.posX += this.velocityX * secondsPassed
        this.fall(secondsPassed)
        if (this.posY + this.height > 600) { // hit ground
            this.posY = 600 - this.height
            this.velocityY = this.fallSpeed
            this.inAir = false
        } else  this.inAir = true
    }


    initMovement(){
        window.addEventListener('keypress', ev => {
            if(ev.key === 'w' && !this.inAir){
                this.jumpIndicator = true
            }
        })
        window.addEventListener('keydown', (e)=>{
            switch (e.key) {
                case 'a': this.moveLeftIndicator = true
                    break;
                case 'd': this.moveRightIndicator = true
                    break;
            }
        })
        window.addEventListener('keyup', (e)=>{
            switch (e.key) {
                case 'a': this.moveLeftIndicator = false
                    break;
                case 'd': this.moveRightIndicator = false
                    break;
            }
        })
    }

    roll(secondsPast: number): void {
    }

    // for jumping
    jump(): void {
        this.velocityY = -300
        this.jumpIndicator = false
    }

    fall(secondsPassed: number) {
        this.velocityY += this.gravity
        this.posY += this.velocityY * secondsPassed
    }

}
