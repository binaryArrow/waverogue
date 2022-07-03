import {Enemy} from "../models/Enemy";

export class InitHelper {
    static spawnEnemies(amount: number, context: CanvasRenderingContext2D): Enemy[] {
        let enemies: Enemy[] = []
        for (let i = 0; i <= amount; i++) {
            enemies.push(
                new Enemy(
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