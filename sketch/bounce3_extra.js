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
    directionX = 1;
    directionY = 2;
}
function draw()
{
    noStroke();
    startX = startX + directionX;
    startY = startY + directionY;
    if (startX > width){
        directionX = -directionX;
    }
    if(startX < 0)
        {
            directionX = -directionX+5;
        }
    if(startY > height)
        {
            directionY = -directionY;
        }
    if(startY < 0)
        {
            directionY = -directionY+7;
        }
    coloring = map(255, startX, directionX, startY, directionY, true);
    fill(directionX, startY, 255);
    ellipse(startX, coloring, 25);
}