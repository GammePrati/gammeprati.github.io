function setup(){
    createCanvas(100, 100);
    font = loadFont("digital-7.tff");
}
function draw(){
    background(0);
    time();
}

function time()
{
    fill("white");
    textFont(font);
    textAlign(CENTER, CENTER);
    textSize(width/4.25);
    let h = hour();
    let m = minute();
    let s = second();
    let n = h >= 12? " PM" : " AM";
    if(m < 10)
        m = "0"+m;
    h%=12
    text(h+":"+m+":"+s+n, width/2, height/2);
}