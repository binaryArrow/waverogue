import {GameObject} from "./GameObject";
import {Character, FaceDirection} from "./Character";

export class Player extends GameObject implements Character {
    rollIndicator: boolean = false
    faceDirection: FaceDirection = FaceDirection.RIGHT

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
        if (this.rollIndicator) {
            this.roll(this.faceDirection)
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
            if (ev.key === ' ') {
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

    roll(faceDirection: FaceDirection): void {
        if (faceDirection === FaceDirection.RIGHT)
            this.velocityX += 500
        if (faceDirection === FaceDirection.LEFT)
            this.velocityX -= 500
        this.rollIndicator = false
    }

    jump(): void {
        this.velocityY = -this.jumpSpeed
        this.jumpIndicator = false
        this.inAir = true
    }


}
