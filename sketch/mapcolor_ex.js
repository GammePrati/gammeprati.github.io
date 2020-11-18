var color;

function setup(){
    createCanvas(500, 500);
}

function draw(){
    color = map(mouseX, 0, width, 0, 255);
    background(100, color, 200);
}