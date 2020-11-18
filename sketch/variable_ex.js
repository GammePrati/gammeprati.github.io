var circleX = 50;
var circleY = 100;

function setup(){
    createCanvas(400, 400);
}
function draw(){
    background(100);
    noStroke();
    ellipse(circleX, circleY, 50,50);
    circleX = circleX + 1;
    circleY = circleY + 2;
    if(circleY >=400){
        circleY = circleY - 2;
        loop();
    }
}