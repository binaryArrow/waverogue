let secondsPassed
let oldTimeStamp: number
let fps
let canvas: HTMLCanvasElement
let context: CanvasRenderingContext2D
let x = 0
let y = 0


window.onload = init



function init() {
    canvas = document.getElementById('gridCanvas') as HTMLCanvasElement
    context = canvas.getContext('2d') as CanvasRenderingContext2D
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
    let randomColor = Math.random() > 0.5? '#ff8080' : '#0099b0';
    context.beginPath()
    context.arc(x, y, 10, 0, 2 * Math.PI)
    context.strokeStyle = '#000000'
    context.stroke()
    context.fillStyle = randomColor
    context.fill()
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




