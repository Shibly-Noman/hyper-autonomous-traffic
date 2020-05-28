let sf = 1;
let mx, my;

function setup(){
    createCanvas(1905, 900);
}

function draw(){
    mx = mouseX;
    my = mouseY;
    background(155);
    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate();
    road.drawRoad();
    noFill()
    rect(0, 0, 1900, 890);
}

window.addEventListener("wheel", function(e) {
    if (e.deltaY > 0)
      sf *= 1.05;
    else
      sf *= 0.95;
  })