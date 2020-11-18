var playerX = 250;
var playerY = 250;
var player;
var counter = 0;
var coin;
var x = Math.round(Math.random(10, 460)*100)+10;
var y = Math.round(Math.random(10, 460)*100)+10;
var table;
var states = [];

function preload(){
    
    img = loadImage("data/map.png");
    table = loadTable("assets/ronaviral.csv");
}
function setup(){
   createCanvas(img.width, img.height);
    colorMode(HSB, 360, 100, 100);
    
    var popul = [];
    var mappedSize = [];
    for(var i = 0; i < table.getRowCount(); i++){
        states[i] = new States(table, i);
        popul[i] = states[i].popul;
    }
    for(var i = 0; i < table.getRowCount(); i++){
        mappedSize[i] = map(states[i].popul, min(popul), max(popul), 10, 20);
        states[i].sz = mappedSize[i];
    }
}
function draw(){
    background(img);
    fill(124);
    player = rect(playerX, playerY, 20, 20);
    fill(0);
    coin = ellipse(x,y, 20, 20);

    textSize(15);
    textStyle(BOLD);
    text("Coronavirus cases from the United States as of Nov. 3, 2020", 560, 20);
    
//    print(x);
//    print(y);
//    print(playerX);
//    print(playerY);
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
            case 1180:
                playerX = 1170;
                break;
        }
    switch(playerY)
        {
            case 0:
                playerY = 10;
                break;
            case 770:
                playerY = 760;
                break;
        }
    //try to update the position of the "coin"
    if((Math.abs(playerX-x) <= 20) && (Math.abs(playerY-y) <= 20))
        {
            updatePlacement();
            counter++;
            print(counter);
        }
    for(var i = 0; i < table.getRowCount(); i++){
        if(counter == 50){
            break;
        }
        states[counter].displayState();
        states[counter].overlap();
    }
    if(counter == 50){
        for(var i = 0; i < table.getRowCount(); i++){
            states[i].displayState();
            states[i].overlap();
        }
    }
}
function updatePlacement(){
    var x1 = x;
    var y1 = y;
    var w =Math.random()*1000;
    var z =Math.random()*1000;
    while(w > 1170 || z > 760)
    {
     w =Math.random()*1000;
     z =Math.random()*1000;
    }
//    print("w "+w);
//    print("z "+z);
    x = Math.round(w);
    y = Math.round(z);
//    print("x "+x);
//    print("y "+y); 
}

function States(table, index){
    this.table = table;
    this.name = table.getString(index, 0);
    this.x = table.getNum(index, 1);
    this.y = table.getNum(index, 2);
    this.popul = table.getNum(index, 3);
    this.hu = random(360);
    this.sz = 10;
    
    //shows population distribution via ellipses
    this.displayState = function(){
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.sz, this.sz);
        
        //display state name at lat + lon        
        fill(100, 10, 10);
    }
    this.overlap = function(){
   if((Math.abs(playerX-this.x) <= 20) && (Math.abs(playerY-this.y) <= 20)){
         this.showInfo();
     }   
    }
    
   
    this.showInfo = function(){
        fill(255);
        ellipse(this.x, this.y, 125);
        fill(0);
        textSize(15);
        text(this.name + "\n" + "Total Cases: " + "\n" + this.popul, this.x - 50, this.y - 25);
    }
    
}
