import {Skeleton} from "../models/enemies/Skeleton";
import {Constants} from "../models/Constants";
import {Player} from "../models/player/Player";

export class InitHelper {
    static spawnEnemies(amount: number, context: CanvasRenderingContext2D, player: Player): Skeleton[] {
        let enemies: Skeleton[] = []
        for (let i = 0; i <= amount; i++) {
            enemies.push(
                new Skeleton(
                    context,
                    Math.floor(Math.random() * 1500),
                    300,
                    Constants.skeletonMovementSpeed,
                    300,
                    Constants.skeletonWidth,
                    Constants.skeletonHeight,
                    player
                )
            )
        }
        return enemies
    }

}