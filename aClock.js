function setup(){
    createCanvas(windowWidth, windowHeight);
}
function draw(){
    time();
}

function time()
{
    textAlign(CENTER, CENTER);
    let h = hour();
    let m = minute();
    let s = second();
    let n = h >= 12? " PM" : " AM";
    if(m < 10)
        m = "0"+m;
    h%=12
    text(h+":"+m+":"+s+n, width/2, height/2);
}