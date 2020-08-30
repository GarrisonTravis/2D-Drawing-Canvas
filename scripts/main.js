//Garrison Travis

let isDrawing = false;
let x = 0;
let y = 0;
let lineSize = 2;
let lineColor = 'black';

const canvas = document.getElementById('2dCanvas');
const context = canvas.getContext('2d');

//context.fillStyle = "#000000";
//context.fillRect(0, 0, canvas.width, canvas.height);


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
    //context.fillStyle = "#000000";
    //context.fillRect(0, 0, canvas.width, canvas.height);
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
    if (e.keyCode == 48) {
        lineColor = 'black';
    }
    else if (e.keyCode === 49) {
        lineColor = 'blue';
    }
    else if (e.keyCode === 50) {
        lineColor = 'lime';
    }
    else if (e.keyCode == 51) {
        lineColor = 'cyan';
    }
    else if (e.keyCode == 52) {
        lineColor = 'red';
    }
    else if (e.keyCode == 53) {
        lineColor = 'magenta';
    }
    else if (e.keyCode == 54) {
        lineColor = 'yellow';
    }
    else if (e.keyCode == 55) {
        lineColor = 'white';
    }  

    //Handles changing the background color
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