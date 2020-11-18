var img;
var Color;

function preload()
{
    img = loadImage("data/albers.jpg");
    
}




function setup()
{
    createCanvas(400,400);
    background(100);
    frameRate(120);
    img.loadPixels();
    
}

function draw()
{
    //random point on x, y, turning floats into ints
    var x = floor(random(width));
    var y = floor(random(height));
    //color operations
    var Color = img.get(x,y);
    //drawing
    noStroke();
    fill(Color);
    ellipse(x, y, 10)
}