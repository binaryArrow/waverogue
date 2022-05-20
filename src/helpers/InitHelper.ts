import {Enemy} from "../models/Enemy";

export class InitHelper {
    static spawnEnemies(amount: number, context: CanvasRenderingContext2D): Enemy[]{
        let enemies: Enemy[] = []
        for (let i = 0; i <= amount; i++){
            enemies.push(new Enemy(context, Math.floor(Math.random() * 1000), 700, 10))
        }
        return enemies
    }

}