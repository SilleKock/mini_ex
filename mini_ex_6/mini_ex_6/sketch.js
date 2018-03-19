/*
Generative program

Rules:
1. Draw rectangles in a grid
2. When the mouse moves up and down the y-axis the strokecolor of
the rectangles change gradually
3. also, the rectangles rotate
3. When the mouse moves along the x-axis the strokeweight and the
size of the rectangles increase

*/

function setup() {
createCanvas(600,600);
}

function draw() {
background(255);
frameRate(30);

strokeWeight(mouseX / 50);
stroke(255,200/(mouseY/150),0,150);
fill(255);

  for(var x = 30; x < width; x += 50){
  for(var y = 30; y < height; y += 50){
    push();
    translate(x,y);
    rotate(radians(mouseY));
    rectMode(CENTER);
    rect(0,0,mouseX/10, mouseX/10);
    pop();
  }
  }

}
