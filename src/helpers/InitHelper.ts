import {Enemy} from "../models/Enemy";

export class InitHelper {
    static spawnEnemies(amount: number, context: CanvasRenderingContext2D): Enemy[] {
        let enemies: Enemy[] = []
        for (let i = 0; i <= amount; i++) {
            enemies.push(
                new Enemy(
                    context,
                    Math.floor(Math.random() * 1770),
                    300,
                    100,
                    500,
                    500,
                    30,
                    30
                )
            )
        }
        return enemies
    }

}