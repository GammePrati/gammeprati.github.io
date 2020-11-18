//CSMA.101.F1
//Intro to Programming 1
//Fall 2020
//Echo Theohar
//Alfred Chen
//alfred.chen@woodbury.edu

//initial x position of the ball placed at random.
var XBall = Math.floor(Math.random() * 400)+50;
var YBall = 400;
var diam = 50; //diameter
var directionX = 6;
var directionY = 7;
//first paddle
var XRect;
var YRect;
var widthRect = 100;
var heighRect = 25;
//second paddle
var X2Rect;
var Y2Rect;
var widthRect2 = 100;
var heighRect2 = 25;

var start = false;



function setup()
{
    //stage & initial setup
    createCanvas(800, 800);
    
}
function draw()
{
    background(100);
    //movement
    XBall = XBall + directionX;
    YBall = YBall + directionY;
    
    //if ball hits boundaries of stage
    if(XBall < 0 || XBall > width)
    {
        directionX = -directionX;
    }
    if(YBall < 0 || YBall > height)
    {
        directionY = -directionY;
    }
    
    //trying to get the ball to bounce off the paddles. Only P1 is working. P2 has issues.
    if((XBall >= XRect && XBall < XRect + widthRect) && (YBall + (diam/2) > YRect))
        {
            directionX += -directionX*(Math.random(6)+1);
            directionY += -directionY*(Math.random(7)+1);
        }

    rect(XRect, YRect, widthRect, heighRect);
    if((XBall < X2Rect && XBall >= X2Rect + widthRect2) && (YBall + (diam/2) < Y2Rect - heighRect2))
        {
            directionX += -directionX*(Math.random(6)+1);
            directionY += -directionY*(Math.random(7)+1);
        }
    rect(X2Rect, Y2Rect, widthRect2, heighRect2);

    ellipse(XBall, YBall, diam);
    
    if(!start){
        XRect = width/2;
        YRect = height - 100;
        X2Rect = width/2;
        Y2Rect = height - 700;
        start = true;
    }
    
    if(keyIsDown(RIGHT_ARROW))
        {XRect = XRect + 10;}
    if(keyIsDown(LEFT_ARROW))
        {XRect = XRect - 10;}
    //Key 65 is 'A' key, Key 68 is 'D' key
    if(keyIsDown(65))
        {X2Rect = X2Rect - 10;}
    if(keyIsDown(68))    
       {X2Rect = X2Rect + 10;}
}