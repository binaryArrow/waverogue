import {Player} from "./models/Player";
import {Enemy} from "./models/Enemy";
import {InitHelper} from "./helpers/InitHelper";
import {DrawHelper} from "./helpers/DrawHelper";

let secondsPassed: number = 0
let oldTimeStamp: number = 0
let fps
let canvas: HTMLCanvasElement
let context: CanvasRenderingContext2D
let player: Player
let enemy: Enemy
window.onload = init


function init() {
    canvas = document.getElementById('gridCanvas') as HTMLCanvasElement
    context = canvas.getContext('2d') as CanvasRenderingContext2D
    player = new Player(context, 500, 300, 300, 500, 50, 50 )
    player.init()
    enemy = new Enemy(context, 1000, 300, 300, 500, 50, 50 )


    window.requestAnimationFrame(loop)
}

function loop(timeStamp: number){
    secondsPassed = (timeStamp - oldTimeStamp) / 1000
    oldTimeStamp = timeStamp
    secondsPassed = Math.min(secondsPassed, 0.1)
    context.clearRect(0, 0, canvas.width, canvas.height)
    DrawHelper.draw([player, enemy])
    DrawHelper.drawLevel(context)
    player.update(secondsPassed)
    enemy.update(secondsPassed)
    drawFps()
    window.requestAnimationFrame(loop)
}
function drawFps(){
    fps = Math.round(1 / secondsPassed)
    context.font = '15px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 5, 15);
}




