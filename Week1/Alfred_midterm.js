var playerX = 250;
var playerY = 250;
var player;
var coin;
var x = Math.random(460)+20;
var y = Math.random(460)+20;


function preload()
{
    img1 = loadImage("Alfred_MIDTERM/test.jpg");
}

function setup(){
    createCanvas(500, 500);
    
}
function draw(){
    background(205);
    var desiredColor1 = getColor1();
    fill(desiredColor1);
    player = rect(playerX, playerY, 20, 20);
    fill(0);
    coin = ellipse(x, y, 15, 15);
    
    //Have basic movement
    if(keyIsDown(RIGHT_ARROW))
        {playerX = playerX + 10;}
    if(keyIsDown(LEFT_ARROW))
        {playerX = playerX - 10;}
    if(keyIsDown(UP_ARROW))
        {playerY = playerY - 10;}
    if(keyIsDown(DOWN_ARROW))
        {playerY = playerY + 10;}
        
    
    
    //Create boundaries for the "sprite" to prevent moving out of the canvas using switch statements.
    //I refuse to create a row of "if-else" statements for this unlike that one infamous developer
    switch(playerX)
        {
            case 0:
                playerX = 10;
                break;
            case 480:
                playerX = 470;
                break;
        }
    switch(playerY)
        {
            case 0:
                playerY = 10;
                break;
            case 480:
                playerY = 470;
                break;
        }
    //try to update the position of the "coin"
    if(playerX == x && playerY == y)
        {
            x = Math.random(460)+20;
            y = Math.random(460)+20;
        }
}
function getColor1()
{
    var desiredColor1 = img1.get(floor(x), floor(y));
    return desiredColor1;
}
