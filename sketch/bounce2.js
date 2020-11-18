var startX;
var startY;
//ball starts at an angle;

var directionX;
var directionY;
//ball moves in a direction

function setup()
{
    //stage & initial setup
    createCanvas(500, 500);
    background(100);
    
    //starting point
    startX = width/5;
    startY = height/7;
    //movement
    directionX = 20;
    directionY = 20;
}
function draw()
{
    startX = startX + directionX;
    startY = startY + directionY;
    if (startX > width){
        directionX = -directionX;
    }
    if(startX < 0)
        {
            directionX = -directionX;
        }
    if(startY > height)
        {
            directionY = -directionY;
        }
    if(startY < 0)
        {
            directionY = -directionY;
        }
    coloring = map(255, startX, directionX, startY, directionY, true);
    fill(startX, startY, 255);
    ellipse(startX, startY, 25);
}