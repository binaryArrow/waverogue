import {GameObject} from "../models/GameObject";

export class DrawHelper {
    static detectCollisions(gameObjects: GameObject[]) {
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


    // returns true if given two objects intersect on rectangular hitbox
    private static rectangularHitBoxIntersect(object1: GameObject, object2: GameObject): boolean {
        return !(object1.posX > object2.width + object2.posX ||
            object2.posX > object1.width + object1.posX ||
            object1.posY > object2.height + object2.posY ||
            object2.posY > object1.height + object1.posY)
    }
}