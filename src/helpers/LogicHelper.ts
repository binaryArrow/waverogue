import {GameObject} from "../models/GameObject";
import {Player} from "../models/player/Player";
import {RectHitbox} from "../models/RectHitbox";
import {Skeleton} from "../models/enemies/Skeleton";
import {Constants} from "../models/Constants";

export class LogicHelper {
    static detectCharacterCollusions(gameObjects: GameObject[]) {
        let obj1;
        let obj2;

        // Reset collision state of all objects
        for (const element of gameObjects) {
            element.collides = false;
        }

        // Start checking for collisions
        for (let i = 0; i < gameObjects.length; i++) {
            obj1 = gameObjects[i];
            for (let j = i + 1; j < gameObjects.length; j++) {
                obj2 = gameObjects[j];
                // compare obj1 with rest of objects
                if (this.rectangularHitBoxIntersect(obj1, obj2)) {
                    obj1.collides = true;
                    obj2.collides = true;
                }
            }
        }
    }

    static playerAttackCollusion(player: Player, gameObjects: GameObject[]) {
        for (const element of gameObjects) {
            if (element instanceof Skeleton)
                if (player.attackIndicator && this.rectangularHitBoxIntersect(element, player.attackHitbox)) {
                    if (player.activateDamage)
                        element.health -= player.attackDamage
                    player.activateDamage = false
                    element.hit = true
                    element.hitCooldown = Constants.skeletonHitCooldown
                }
        }
    }

    static skeletonAttackCollusion(skeleton: Skeleton, player: Player) {
        if (skeleton.activateDamage && this.rectangularHitBoxIntersect(player, skeleton.attackHitbox)) {
            player.health -= skeleton.attackDamage
            player.hit = true
            if (skeleton.attackRight){
                player.hitLeft = true
            }
            else if (skeleton.attackLeft) {
                player.hitRight = true
            }
            player.hitCooldown = Constants.playerHitCooldown
        }
        skeleton.resetAttack()
    }


    // returns true if given two objects intersect on rectangular hitbox
    static rectangularHitBoxIntersect(object1: GameObject, object2: GameObject | RectHitbox): boolean {
        return !(object1.posX > object2.width + object2.posX ||
            object2.posX > object1.width + object1.posX ||
            object1.posY > object2.height + object2.posY ||
            object2.posY > object1.height + object1.posY)
    }

    static deleteDeadEnemies(elements: Skeleton[]): Skeleton[] {
        return elements.filter(elements => !elements.dead)
    }

    static gameOver(player: Player) {

    }
}