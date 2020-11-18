var x, y, speedX = 5, speedY = 6, w;

function setup(){
   createCanvas(800,800);
   background(0);

}
function draw(){

  eyeE(200, 200, 100);
    eyeE(500, 500, 140);
    eyeE(300, 700, 80);
    eyeE(198, 24, 5);
}

function eyeE(x, y, w){
    fill(255);
    ellipse(x,y,w);
    ellipse(x + w,y,w);
    
    fill(0);
    ellipse(x, y, w/2);
    ellipse(x+w ,y,w/2);
    
}




//
//function drawB(){
//    //draw
//    ellipse(x,y, 50);
//}
//function moveB(){
//    //ball speed
//    x+=speedX;
//    y+=speedY;
//}
//function bounceB(){
//    //check collision
//    if(x > 400 || x < 0){speedX = -speedX;}
//    if(y > 400 || y < 0){speedY = -speedY;}
//}