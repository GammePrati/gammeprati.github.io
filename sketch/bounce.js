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
    startX = startX + directionX;
    startY = startY + directionY;
    if (startX > width)
        {
            directionX = -directionX;
        }
    if (startX < 0)
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
    coloring = map(startX, directionX, startY, directionY, 255);
    fill(coloring, 0, 255);
    ellipse(startX, startY, 25);
}