
let canvas: HTMLCanvasElement
let context: CanvasRenderingContext2D

window.onload = init






function init() {
    canvas = document.getElementById('gridCanvas') as HTMLCanvasElement
    context = canvas.getContext('2d') as CanvasRenderingContext2D
    draw()
}

function draw() {
    context.fillStyle = "#d92d2d"
    context.fillRect(100, 50, 10, 10)
}





