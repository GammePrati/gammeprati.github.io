//CSMA.101.F1
//Intro to Programming 1
//Fall 2020
//Echo Theohar
//Alfred Chen
//alfred.chen@woodbury.edu
function setup(){
    createCanvas(400,400);
    background (200);
    
}
function draw(){
    if(mouseIsPressed){
        fill(255, 0, 0);
        line(mouseX, mouseY, 25, 40);
    }
}