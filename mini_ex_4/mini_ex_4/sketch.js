var button;
var on = false;
var tekst;
var index = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  tekst = ["You are stressed. Eat some icecream.", "You are tired. Take a nap.", "You are lucky today. Go play the lottery.", "You are angry. Go for a run.", "You are bored. Watch Keeping up with the Kardashians.", "You have low selfesteem. Try thinking positve about yourself.", "You are happy. Cook yourself a nice dinner."];

}

function draw() {
  // put drawing code here
  background(255,80,80);


//test result
if(on){
  noStroke();
  fill(255,204,255);
  rect(0,0,windowWidth,windowHeight);
  fill(255);
  text('The computer has registered:',500,250);
  textSize(25);
  fill(204,0,204);
  text(tekst[index],500,290);
}

//start page
if(!on){
  button = createButton("GO");
  button.position(485,360);
  button.mousePressed(test);
  fill(255,150,255);
  textAlign(CENTER);
  textSize(30);
  text('Place your hand on the mousepad...',500,250);
  text('and press go',500,300);
}
}
function test(){
  on = !on;

  index = index + 1;

  if(index == tekst.length){
    index = 0;
  }
}
