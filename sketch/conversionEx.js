var redBall;
var brownBall;
var blackBall;


function setup(){
   createCanvas(800,800);
    redBall = new Ball(150, 150, 5, 2, 255);
    brownBall = new Ball(300, 20, 3, 6, 100);
    blackBall = new Ball(474, 400, 3, 6, 100);
}
function draw(){
    background(100);
    colorMode(HSB, 360, 0, 0);
    redBall.drawBall();
    redBall.moveBall();
    redBall.bounceBall();
    brownBall.drawBall();
    brownBall.moveBall();
    brownBall.bounceBall();
    blackBall.drawBall();
    blackBall.moveBall();
    blackBall.bounceBall();


    if(redBall.Collision(brownBall.x, brownBall.y || blackBall.x, blackBall.y)){
        redBall.x = -redBall.x;
        brownBall.x = -brownBall.x;
        
    }
    
}
function Ball(ballX, ballY, speedX, speedY, hue)
{
    //properties of the ball
    //converting into a variable;
    this.x = ballX;
    this.y = ballY;
    this.spX = speedX;
    this.spY = speedY;
    this.col = hue;
    
    this.drawBall = function(otherX, otherY){
        //methods
        fill(this.col, 100 , 100);
        ellipse(this.x, this.y, 100);
    }
    this.moveBall = function(){
        this.x += this.spX;
        this.y += this.spY;
    }
    
    this.Collision= function(otherX, otherY){
        if(dist(this.x, this.y, otherX, otherY)<=50){
            return true;
        }
    }
    
    this.bounceBall = function(){
        if(this.x < 0 || this.x > 800)
        {
            this.spX = -this.spX;
        }
        if(this.y < 0 || this.y > 800)
        {
            this.spY = -this.spY;
        }
    }
}