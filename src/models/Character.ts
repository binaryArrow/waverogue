export interface Character {
    faceDirection: FaceDirection
    fall(secondsPassed: number): void // fall
    setRollPosition(secondsPassed: number): void // roll
    applyVelocity(secondsPassed: number): void // apply overall velocity (x, and y axis)
    updateMovement(secondsPassed: number): void // updating movement when keys pressed
    jump(): void // apply jump velocity

}

export enum FaceDirection{
    LEFT,
    RIGHT
}