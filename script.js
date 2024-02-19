/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Courier New");
}

function draw() {
  background(200);
  textSize(16);
  text("everything happens for a reason...", 20, 60);
  if(mouseIsPressed){
  textSize(32);
  text("so just trust your gut", 20, 160);
  }
}
