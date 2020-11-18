var playerX = 250;
var playerY = 250;
var player;
var coin;
var x, y;


function setup(){
    createCanvas(500, 500);
    
}
function draw(){
    background(205);
    fill(255);
    player = new Player();
    coin = new updatePlacement();
  
}
function Player(){
    this.xpos = 250;
    this.ypos = 250;
    fill(255);
    rect(this.xpos, this.ypos, 20,20);
      
    //Create boundaries for the "sprite" to prevent moving out of the canvas using switch statements.
    //I refuse to create a row of "if-else" statements for this unlike that one infamous developer
    switch(this.xpos)
        {
            case 0:
                this.xpos = 10;
                break;
            case 480:
                this.xpos = 470;
                break;
        }
    switch(this.ypos)
        {
            case 0:
                this.ypos = 10;
                break;
            case 480:
                this.ypos = 470;
                break;
        }
}

function keyPressed()
{
    
    //Have basic movement
    if(keyIsDown(RIGHT_ARROW))
        {playerX = playerX + 10;}
    if(keyIsDown(LEFT_ARROW))
        {playerX = playerX - 10;}
    if(keyIsDown(UP_ARROW))
        {playerY = playerY - 10;}
    if(keyIsDown(DOWN_ARROW))
        {playerY = playerY + 10;}
}
function updatePlacement(){
    x = floor(Math.random(10, 460));
    y = floor(Math.random(10, 460));
    fill(0);
    ellipse(x, y, 15, 15);
}
