
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var hues = [360, 35, 55, 90, 210, 255, 270];
var i = 0;



function setup(){
    createCanvas(800,800);
    colorMode(HSB, 360, 100, 100);
}
function draw(){
    background(100);
    
 
    textSize(40);
    for( var i = 0; i < colors.length; i ++){
            push();
            translate(0, 100);
            fill(hues[i], 100, 100);
            text(colors[i], 150, 60 * i);
    }

}

function mousePressed(){
    i++;
    if(i==colors.length){
        i = 0;
    }
    console.log(i);
}