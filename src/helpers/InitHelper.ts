import {Skeleton} from "../models/enemies/Skeleton";

export class InitHelper {
    static spawnEnemies(amount: number, context: CanvasRenderingContext2D): Skeleton[] {
        let enemies: Skeleton[] = []
        for (let i = 0; i <= amount; i++) {
            enemies.push(
                new Skeleton(
                    context,
                    Math.floor(Math.random() * 1500),
                    300,
                    300,
                    300,
                    50,
                    50,
                )
            )
        }
        return enemies
    }

}