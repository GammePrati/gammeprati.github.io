//set up arrays and table value, sz = size

var Colortable;
var name1 = [], hueVal = [], myRating = [], sz = [];
var a = 0, s = 0;

function preload(){
    //loading csv information
    Colortable = loadTable("assets/Properties.csv");
    
}

function setup(){
    
    createCanvas(9000, 9000);
    colorMode(HSB, 360, 100, 100);
    
    //call each column from csv
    for(var i = 0; i<Colortable.getRowCount(); i++){
        name1[i] = Colortable.getString(i,0);
        hueVal[i] = Colortable.getNum(i,1);
        myRating[i] = Colortable.getNum(i, 2);
        sz[i] = map(myRating[i], 1, 10, 10, 100);
        
    }
}
function draw() {
    
    background(255);
    //drawing text and visuals
    
    for(var i = 0; i<Colortable.getRowCount(); i++)
        {
            
            fill(hueVal[i], 80, 80);
            rect(200 * (i+1), 15, 100, sz[i]);
            
            fill(0);
            textSize(12);
            text(name1[i], 200*(i+1), 10);
            
        }
}