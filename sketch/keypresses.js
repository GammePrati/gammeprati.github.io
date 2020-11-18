var x = 20;
var y = 20;
function setup()
{
    //stage & initial setup
    createCanvas(400, 400);
    
    //starting point
    startX = width/2;
    startY = height/2;
    //movement
    directionX = 9;
    directionY = 9;
    
}
function draw()
{
    background(100);
    ellipse(x, y, 50);
    if(keyIsDown(RIGHT_ARROW))
        {x=x+1.5;}
    if(keyIsDown(LEFT_ARROW))
        {x=x-1.5;}
    if(keyIsDown(UP_ARROW))
        {y=y-2;}
    if(keyIsDown(DOWN_ARROW))
        {y=y+2;}
    
}
//function keyPressed()
//{
    //if(keyCode == RIGHT_ARROW)
//    {
//        x = x+10;
//    }
//    if(keyCode == LEFT_ARROW)
//    {   x = x-10;}
//    if(keyCode == UP_ARROW)
//    {   y = y-10;}
//    if(keyCode == DOWN_ARROW)
//    {   y = y+10;}  
//}