var eyeL;
var eyeR;
function setup(){
    createCanvas(500, 500);
    strokeWeight(12);
}
function draw(){
    background(100);
    stroke(0,0,0);
    //line(x1, y1, x2, y2)
    line(mouseX, 0, mouseX, height);
    
    stroke(255);
    // map(value, start1, end1, start2, end2);
    var map = map(mouseX, 0, width, 0, width/2, true); 
    line(mouseX, 0, map, height);
    
   
}