
function setup() { 
  createCanvas(500,500);
} 



  function draw() {
    background(200);
    rectMode(CENTER);
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(millis() / 1000, 40));
    rect(0, 0, 20, 20);
  }
  


