let cups = [];
var xpos;
var index = 0;
var on = false;
let y;
let x;

function setup() {
createCanvas(windowWidth, windowHeight);

//cups
for (let i = 0; i < 3; i++){
  let x = windowWidth*((1/4)+1/4*i);
  let y = windowHeight*(2/4);
  cups[i] = new cup(x-30,y);

//random placement of the ball
xpos = [(windowWidth*(1/4)),(windowWidth*(2/4)), (windowWidth*(3/4))];
var rand = int(random(xpos.length));
index = rand;
} 
}

function draw() {
background(255, 70, 70);
fill(255);
textAlign(CENTER);
textSize(windowWidth/40);
textStyle(BOLD);
text('Press a cup to find the ball', windowWidth/2, 100);

//ball
noStroke();
fill(255);
ellipse(xpos[index],(windowHeight*(2/4))+80,20);

// start page
if(!on){
  for (let i = 0; i < 3; i++){
  cups[i].show();
}
}
// result
if(on){
for (let i = 0; i < 3; i++){
    let x = windowWidth*((1/4)+1/4*i);
    let y = windowHeight*(2/4)-70;
    cups[i] = new cup(x-30,y);
    cups[i].show();
    }
    fill(0);
    textAlign(CENTER);
    textSize(windowWidth/70);
    textStyle(NORMAL);
    text('PRESS ENTER TO TRY AGAIN',windowWidth/2,windowHeight*(3/4));
}
}
//class
class cup {
  constructor (x, y){
    this.x = x;
    this.y = y;
}

  show() {
    noStroke();
    fill(255);
    quad(this.x,this.y,this.x+60,this.y,this.x+80,this.y+100,this.x-20,this.y+100);
  }
}
//choose a cup
function mousePressed() {
  on = true;
}

// refresh
function keyPressed(){
  if(keyCode === ENTER){
  on = false;
  draw();
  setup();
  redraw();
  }
}
