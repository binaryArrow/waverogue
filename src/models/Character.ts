export interface Character {
    jump(secondsPast: number): void
    move(secondsPast: number): void
    fall(secondsPast: number): void
    roll(secondsPast: number): void
    updateMovement(secondsPast: number): void

}