export interface Character {

    moveRight(secondsPast: number): void
    moveLeft(secondsPast: number): void
    jump(secondsPast: number): void
    fall(secondsPast: number): void
    roll(secondsPast: number): void

}