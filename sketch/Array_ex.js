var firstnames = ["Al", "An", "Ca", "Ja", "Le", "Me", "Na", "Ta"];

var i = 0;
var j = 0;

function setup(){
    createCanvas(100, 100);
}
function draw(){
    background(100);
    
}

function mousePressed(){
    print("where position # located, " + j + "? >>>> " + firstnames[i]);
    
    j++;
    i++;
    
    if(i == firstnames.length){
        i = 0;
    }
    if(j==8);{
        j=0;
    }
}