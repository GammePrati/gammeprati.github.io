var lineSize;
var angle1;
var speed1;
var Satel;
var angle2;
var speed2;

function setup(){
   createCanvas(500,500);
    lineSize = 200;
    angle1 = 0;
    speed1 = 1;
    
    Satel = 30;
    angle2 = 0;
    speed2 = 2;
    
}
function draw(){
    background(0);
    push();
    angle1 += speed1;
    stroke(255);
    translate(250, 250);
    rotate(radians(angle1));
    line(0,0,0, lineSize);
    pop();
    
    
    push();
    angle2 += speed2;
    stroke(244, 0, 0);
    translate(0, lineSize)
    rotate(radians(angle2));
    line(0,0,0, Satel);
    pop();
    
}