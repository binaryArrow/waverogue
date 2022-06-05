import {GameObject} from "./GameObject";
import {Character} from "./Character";
import {StaticMapObject} from "./levelmodels/StaticMapObject";

export class Player extends GameObject implements Character {

    staticMapObjects: StaticMapObject[]
    constructor(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        movementSpeed: number,
        jumpSpeed: number,
        width: number,
        height: number,
        staticMapObjects: StaticMapObject[]
    ) {
        super(context, x, y, movementSpeed, jumpSpeed, width, height)
        this.staticMapObjects = staticMapObjects
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

}
