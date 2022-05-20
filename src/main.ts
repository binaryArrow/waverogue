import {Player} from "./models/Player";

let secondsPassed
let oldTimeStamp: number
let fps
let canvas: HTMLCanvasElement
let context: CanvasRenderingContext2D
let x = 0
let y = 0
let player: Player
window.onload = init



function init() {
    canvas = document.getElementById('gridCanvas') as HTMLCanvasElement
    context = canvas.getContext('2d') as CanvasRenderingContext2D
    player = new Player(context, x, y)
    window.requestAnimationFrame(update)
    draw()
}

function update(timeStamp: number){
    context.clearRect(0, 0, canvas.width, canvas.height)
    draw()
    drawFps(timeStamp)
    window.requestAnimationFrame(update)
}

function draw() {
    player.draw()
    player.posX = x
    player.posY = y
    x ++
    y ++
}

function drawFps(timeStamp: number){
    secondsPassed = (timeStamp - oldTimeStamp) / 1000
    oldTimeStamp = timeStamp
    fps = Math.round(1 / secondsPassed)
    context.font = '15px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 5, 15);
}




