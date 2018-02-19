var on = false;

function setup() {
  // put setup code here
createCanvas(700,500);
}

function draw() {
  // put drawing code here
//background(50);

if (on){
  background('pink');
} else {
  background(50);
}

//if(mouseIsPressed){
  //if(mouseX > 335 && mouseX < 365 && mouseY > 285 && mouseY < 315){
  //background('pink');
//}
//}

//lampe
noStroke();
fill(80,80,80);
rect(325,255,50,65);
rect(345,320,10,180);

//pære
fill(255);
ellipse(350,200,125,125);
noStroke();
fill(80,80,80);
rect(325,255,50,65);
fill(255);
rect(325,215,50,60);

//glødetråd
stroke(0);
noFill();
line(345,275,332,220);
line(355,275,367,220);
ellipse(350,220,15,15);
ellipse(340,220,15,15);
ellipse(360,220,15,15);

//knap
ellipse(350,300,20,20);
fill(100);
ellipse(350,300,15,15);

//øjne
if(!on){
noStroke();
fill(255);
ellipse(125,125,30,50);
ellipse(160,125,30,50);
fill(0);
ellipse(132,130,20,20);
ellipse(167,130,20,20);

fill(255);
ellipse(575,375,30,50);
ellipse(610,375,30,50);
fill(0);
ellipse(569,367,20,20);
ellipse(604,367,20,20);
}

if(on){
  fill(255,204,100,150);
  noStroke();
  ellipse(350,220,60,20);

  //øjne
  noStroke();
  fill(255);
  ellipse(125,125,30,50);
  ellipse(160,125,30,50);
  fill(0);
  ellipse(125,130,20,20);
  ellipse(160,130,20,20);

  noStroke();
  fill(255);
  ellipse(575,375,30,50);
  ellipse(610,375,30,50);
  fill(0);
  ellipse(575,380,20,20);
  ellipse(610,380,20,20);



}


}


function mousePressed(){
  if(mouseX > 335 && mouseX < 365 && mouseY > 285 && mouseY < 315){
  on = !on;
}
}
