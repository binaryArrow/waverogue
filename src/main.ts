import {Player} from "./models/player/Player";
import {Skeleton} from "./models/enemies/Skeleton";
import {LevelHelper} from "./helpers/LevelHelper";
import {Constants} from "./models/Constants";
import {InitHelper} from "./helpers/InitHelper";

const WIDTH: number = 1800
const HEIGHT: number = 800
let secondsPassed: number = 0
let oldTimeStamp: number = 0
let fps
let canvas: HTMLCanvasElement
let context: CanvasRenderingContext2D
let player: Player
let enemies: Skeleton[]
let levelHelper: LevelHelper

window.onload = () => {
        document.getElementById("loadingScreen")!!.style.display = 'none'
        startScreen()
}

function startScreen() {
    document.getElementById("startScreen")!!.style.display = 'block'
    document.getElementById("startButton")!!.addEventListener("click", ()=>{
        document.getElementById("canvasContainer")!!.style.display = 'block'
        document.getElementById("startScreen")!!.style.display = 'none'
        init()
    })
}

function init() {
    canvas = document.getElementById('gridCanvas') as HTMLCanvasElement
    context = canvas.getContext('2d') as CanvasRenderingContext2D
    canvas.width = WIDTH
    canvas.height = HEIGHT
    player = new Player(
        context,
        20,
        450,
        Constants.playerMoveSpeed,
        Constants.playerJumpSpeed,
        Constants.playerWidth,
        Constants.playerHeight
    )
    enemies = InitHelper.spawnEnemies(0, context, player)
    levelHelper = new LevelHelper(context, player, enemies)
    window.requestAnimationFrame(update)
}

function update(timeStamp: number) {
    secondsPassed = (timeStamp - oldTimeStamp) / 1000
    oldTimeStamp = timeStamp
    secondsPassed = Math.min(secondsPassed, 0.1)
    context.clearRect(0, 0, canvas.width, canvas.height)
    levelHelper.update(secondsPassed)
    // drawFps()
    window.requestAnimationFrame(update)
}

function drawFps() {
    fps = Math.round(1 / secondsPassed)
    context.font = '15px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 5, 15);
}
