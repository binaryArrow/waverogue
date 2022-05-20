import {Player} from "./models/Player";

let secondsPassed: number = 0
let oldTimeStamp: number = 0
let fps
let canvas: HTMLCanvasElement
let context: CanvasRenderingContext2D
let player: Player
window.onload = init



function init() {
    canvas = document.getElementById('gridCanvas') as HTMLCanvasElement
    context = canvas.getContext('2d') as CanvasRenderingContext2D
    player = new Player(context, 0, 0, 2)
    window.requestAnimationFrame(loop)
}

function loop(timeStamp: number){
    secondsPassed = (timeStamp - oldTimeStamp) / 1000
    oldTimeStamp = timeStamp
    context.clearRect(0, 0, canvas.width, canvas.height)
    player.draw()
    update(secondsPassed)
    drawFps()
    window.requestAnimationFrame(loop)
}

function update(passedSeconds: number){
    player.posX += (player.movementSpeed * passedSeconds)
    player.posY += (player.movementSpeed * passedSeconds)
}

function drawFps(){
    fps = Math.round(1 / secondsPassed)
    context.font = '15px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 5, 15);
}




