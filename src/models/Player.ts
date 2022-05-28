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
        jumpSpeed: number,
        width: number,
        height: number
    ) {
        super(context, x, y, movementSpeed, jumpSpeed, width, height)
        this.initMovement()
    }

    update(secondsPassed: number) {
        this.draw()
        this.updateMovement(secondsPassed)
        this.applyVelocity(secondsPassed)
    }

    updateMovement(secondsPast: number) {
        if (this.moveLeftIndicator)
            this.moveLeft()
        else if (this.moveRightIndicator)
            this.moveRight()
        else if (!(this.moveRightIndicator && this.moveLeftIndicator))
            this.stopMovingXAxis()
        // jumping
        if (this.jumpIndicator) {
            this.jump()
        }
    }

    applyVelocity(secondsPassed: number) {
        this.posX += this.velocityX * secondsPassed
        this.fall(secondsPassed)
    }


    initMovement() {
        window.addEventListener('keypress', ev => {
            if (ev.key === 'w' && !this.inAir) {
                this.jumpIndicator = true
            }
        })
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'a':
                    this.moveLeftIndicator = true
                    break;
                case 'd':
                    this.moveRightIndicator = true
                    break;
            }
        })
        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'a':
                    this.moveLeftIndicator = false
                    break;
                case 'd':
                    this.moveRightIndicator = false
                    break;
            }
        })
    }

    roll(secondsPast: number): void {
    }

    // for jumping
    jump(): void {
        this.velocityY = -this.jumpSpeed
        this.jumpIndicator = false
        this.inAir = true
    }

    fall(secondsPassed: number){
        secondsPassed = Math.min(secondsPassed, 0.012) // this piece of shit prevents falling when changing tabs
        this.velocityY += this.gravity
        this.posY += Math.floor(this.velocityY * secondsPassed)
    }

}
