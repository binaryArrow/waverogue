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
    player = new Player(context, 0, 550, 300, 300, 20, 50)
    enemy = new Enemy(context, 1000, 300, 300, 300, 50, 50)
    levelHelper = new LevelHelper(context, [player])
    window.requestAnimationFrame(update)
}

function update(timeStamp: number) {
    secondsPassed = (timeStamp - oldTimeStamp) / 1000
    oldTimeStamp = timeStamp
    secondsPassed = Math.min(secondsPassed, 0.1)
    // DrawHelper.detectCollisions([player, enemy])
    context.clearRect(0, 0, canvas.width, canvas.height)
    levelHelper.update(secondsPassed)
    drawFps()
    window.requestAnimationFrame(update)
}

function drawFps() {
    fps = Math.round(1 / secondsPassed)
    context.font = '15px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 5, 15);
}




