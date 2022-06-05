import {Player} from "./models/Player";
import {Enemy} from "./models/Enemy";
import {DrawHelper} from "./helpers/DrawHelper";
import {LevelHelper} from "./helpers/LevelHelper";

const WIDTH: number = 1800
const HEIGHT: number = 800
let secondsPassed: number = 0
let oldTimeStamp: number = 0
let fps
let canvas: HTMLCanvasElement
let context: CanvasRenderingContext2D
let player: Player
let enemy: Enemy
let levelHelper: LevelHelper
window.onload = init


function init() {
    canvas = document.getElementById('gridCanvas') as HTMLCanvasElement
    context = canvas.getContext('2d') as CanvasRenderingContext2D
    canvas.width = WIDTH
    canvas.height = HEIGHT
    levelHelper = new LevelHelper(context)
    player = new Player(context, 500, 300, 300, 300, 50, 50, levelHelper.levels[0].staticMapObjects)
    enemy = new Enemy(context, 1000, 300, 300, 300, 50, 50)
    window.requestAnimationFrame(update)
}

function update(timeStamp: number) {
    secondsPassed = (timeStamp - oldTimeStamp) / 1000
    oldTimeStamp = timeStamp
    secondsPassed = Math.min(secondsPassed, 0.1)
    DrawHelper.detectCollisions([player, enemy])
    context.clearRect(0, 0, canvas.width, canvas.height)
    player.update(secondsPassed)
    levelHelper.levels[0].draw()
    drawFps()
    window.requestAnimationFrame(update)
}

function drawFps() {
    fps = Math.round(1 / secondsPassed)
    context.font = '15px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 5, 15);
}




