//Garrison Travis

let isDrawing = false;
let x = 0;
let y = 0;
let lineSize = 2;
let lineColor = 'black';

const canvas = document.getElementById('2dCanvas');
const context = canvas.getContext('2d');

context.fillStyle = "#FFFFF0";
context.fillRect(0, 0, canvas.width, canvas.height);


canvas.addEventListener('mousedown', function(e) {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

canvas.addEventListener('mousemove', function(e) {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener('mouseup', function(e) {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

canvas.addEventListener('contextmenu', function(e) {
    //Stops context menu from appearing on right click
    e.preventDefault();
    //Clears the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    //context.fillStyle = "#FFFFF0";
    context.fillRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('wheel', function(e) {
    const scrollDirection = Math.sign(e.deltaY);
    
    //Scroll down
    if (scrollDirection === 1 && lineSize > 1) {
        lineSize = lineSize - 1;
    }
    //Scroll up
    else if (scrollDirection === -1 && lineSize < 128) {
        lineSize = lineSize + 1;
    }
})

window.addEventListener('keypress', function(e) {
    //Handles changing the line color
    if (e.keyCode === 48) {
        lineColor = 'black';
    }
    else if (e.keyCode === 49) {
        lineColor = 'blue';
    }
    else if (e.keyCode === 50) {
        lineColor = 'lime';
    }
    else if (e.keyCode === 51) {
        lineColor = 'cyan';
    }
    else if (e.keyCode === 52) {
        lineColor = 'red';
    }
    else if (e.keyCode === 53) {
        lineColor = 'magenta';
    }
    else if (e.keyCode === 54) {
        lineColor = 'yellow';
    }
    else if (e.keyCode === 55) {
        lineColor = 'white';
    }  

    //Handles changing the background color
    //Black
    else if (e.keyCode === 41) {
        context.fillStyle = "#000000";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    //Blue
    else if (e.keyCode === 33) {
        context.fillStyle = "#0000FF";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    //Lime
    else if (e.keyCode === 64) {
        context.fillStyle = "#00FF00";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    //Cyan
    else if (e.keyCode === 35) {
        context.fillStyle = "#00FFFF";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    //Red
    else if (e.keyCode === 36) {
        context.fillStyle = "#FF0000";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    //Magenta
    else if (e.keyCode === 37) {
        context.fillStyle = "#FF00FF";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    //Yellow
    else if (e.keyCode === 94) {
        context.fillStyle = "#FFFF00";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    //White
    else if (e.keyCode === 38) {
        context.fillStyle = "#FFFFF0";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    //Eraser
    else if (e.keyCode === 101) {
        lineColor = context.fillStyle;
    }
})

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = lineColor;
  context.lineCap = "round";
  context.lineWidth = lineSize;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}