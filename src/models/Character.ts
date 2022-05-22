export interface Character {
    fall(secondsPassed: number): void // fall
    roll(secondsPassed: number): void // roll
    applyVelocity(secondsPassed: number): void // apply overall velocity (x, and y axis)
    updateMovement(secondsPassed: number): void // updating movement when keys pressed
    jump(): void // apply jump velocity

}