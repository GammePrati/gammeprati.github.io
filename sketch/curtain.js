var img1, img2, totalCircle, x, y, Color, c;
var img3, img4, totalSquare, Color2, x2, y2, sqr;


function preload()
{
    img1 = loadImage("data/albers.jpg");
    img2 = loadImage("data/albers2.jpg");
    img3 = loadImage("data/test.jpg");
    img4 = loadImage("Data/mem.jpg");
}

function setup()
{
    createCanvas(400,400);
    background(100);
    frameRate(200);
    
    //load images
    img1.loadPixels();
    img2.loadPixels();
    img3.loadPixels();
    img4.loadPixels()
    //create values
    totalSquare = 250;
    totalCircle = 50;
    y = 0;
    c = 1;
    sqr = 1;
    y2 = 0;
}

function draw()
{
    noStroke();
    //set size of circle based on # of total circles
    var squareSize = width/totalSquare;
    var circleSize = width/totalCircle;
    var Circle = 0;
    var Square = 0;
    
//    while(Circle < totalCircle)
//    {
//        x = Circle * circleSize;
//        
//        var desiredColor1 = getColor1();
//        var desiredColor2 = getColor2();
//        if(c>0)
//        {
//            fill(desiredColor1);
//        }
//        if(c<0)
//        {
//            fill(desiredColor2);
//        }
//        ellipse(x, y, circleSize);
//        Circle++;
//    }
//    
//    y = y + circleSize;
//    if(y > 400)
//        {
//            totalCircle = random(25,75);
//            c = -c;
//            y = 0;
//        }
    while(Square < totalSquare)
    {
        x2 = Square * squareSize;
        var desiredColor4 = getColor4();
        var desiredColor3 = getColor3();
        if(sqr > 0)
            {
                fill(desiredColor3);
                rect(x2, y2, squareSize, squareSize);
            }
        if(sqr < 0)
            {
                fill(desiredColor4);
                rect(x2 + 10, y2, squareSize /1, squareSize /1);
            }
        Square++;
    }
    y2 = y2 + squareSize;
    if(y2 > 400)
        {
            totalSquare = random(50,300);
            sqr = -sqr;
            y2 = 0;
        }
    
}
function getColor1()
{
    var desiredColor1 = img1.get(floor(x), floor(y));
    return desiredColor1;
}
function getColor2()
{
    var desiredColor2 = img2.get(floor(x2), floor(y2));
    return desiredColor2;
}
function getColor3()
{
    var desiredColor3 = img3.get(floor(x2), floor(y2));
    return desiredColor3;
}
function getColor4()
{
    var desiredColor4 = img4.get(floor(x2), floor(y2));
    return desiredColor4;
}