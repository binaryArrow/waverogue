import {GameObject} from "./GameObject";
import {Character, FaceDirection} from "./Character";

export class Player extends GameObject implements Character {
    rollIndicator: boolean = false
    faceDirection: FaceDirection = FaceDirection.RIGHT
    rollPosition: number
    timePassed: number = 0
    dashRange: number = 25

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
        this.rollPosition = this.posX
        this.initMovement()
    }


    update(secondsPassed: number) {
        this.draw()
        this.updateMovement(secondsPassed)
        this.applyVelocity(secondsPassed)
    }

    updateMovement(secondsPassed: number) {
        if (this.moveLeftIndicator)
            this.moveLeft()
        else if (this.moveRightIndicator)
            this.moveRight()
        else if (!(this.moveRightIndicator && this.moveLeftIndicator))
            this.stopMovingXAxis()
        // jumping
        if (this.jumpIndicator)
            this.jump()
        // rolling
        if (this.rollIndicator) {
            this.setRollPosition()
            this.applyRoll(secondsPassed)
        }
    }

    applyVelocity(secondsPassed: number) {
        if (!this.rollIndicator)
            this.posX += this.velocityX * secondsPassed
        this.fall(secondsPassed)
    }


    initMovement() {
        window.addEventListener('keypress', ev => {
            if (ev.key === 'w' && !this.inAir) {
                this.jumpIndicator = true
            }
            if (ev.key === ' ' && !this.inAir) {
                this.rollIndicator = true
            }
        })
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'a':
                    this.moveLeftIndicator = true
                    this.faceDirection = FaceDirection.LEFT
                    break;
                case 'd':
                    this.moveRightIndicator = true
                    this.faceDirection = FaceDirection.RIGHT
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

    // sets rollrange
    setRollPosition(): void {
        if (this.faceDirection == FaceDirection.RIGHT)
            this.rollPosition = this.posX + this.dashRange
        if (this.faceDirection == FaceDirection.LEFT)
            this.rollPosition = this.posX - this.dashRange
    }

    applyRoll(secondsPassed: number) {
        this.timePassed += secondsPassed

        if (this.faceDirection === FaceDirection.RIGHT) {
            this.posX = this.easeInOutQuint(this.timePassed, this.posX, this.dashRange, 0.2)
            if (this.posX >= this.rollPosition) {
                this.timePassed = 0
                this.rollIndicator = false
                this.posX = this.rollPosition
            }
        }
        if (this.faceDirection === FaceDirection.LEFT) {
            this.posX = this.easeInOutQuint(this.timePassed, this.posX, -this.dashRange, 0.2)
            if (this.posX <= this.rollPosition) {
                this.timePassed = 0
                this.rollIndicator = false
                this.posX = this.rollPosition
            }
        }
    }

    easeInOutQuint(t: number, b: number, c: number, d: number): number {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }

    jump(): void {
        this.velocityY = -this.jumpSpeed
        this.jumpIndicator = false
        this.inAir = true
    }


}
