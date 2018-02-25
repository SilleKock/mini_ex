var c1;
var currentsec=0;

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(218,179,255);
 frameRate (10);
 c1 = color(179,224,255);
}

function draw() {
currentsec++;
push();
fill(218,179,255,80);
rect(0,0,windowWidth,windowHeight);
pop();

translate(width/2,height/2);

//vandhane
strokeWeight(0)
push()
fill(255);
rect(-50,-37.5,27.5,30);
rect(-50,-50,100,25,20,20);
ellipse(2,-35,40,30);
ellipse(2,-40,40,30);

push()
fill(220);
rect(35,-55,20,35,5,5);
rect(-52.5,-17,32,15,5,5);
pop()

//håndtag
strokeWeight(1);
stroke(220);
ellipse(0,-70,10,10);
noStroke();
ellipse(-15,-70,20,10);
ellipse(15,-70,20,10);
noStroke()
rect(-5,-65,10,15);
pop()


//vanddråber
noStroke();
if(currentsec<8) {
fill(c1);
drop (-36.5,27);
}
if(currentsec>8 && currentsec<16){
fill(c1);
drop (-36.5,60);
}
if(currentsec>16 &&currentsec<24) {
fill(c1);
drop (-36.5,93);
}
if(currentsec==24) {
  currentsec=0;
}
}

function drop(x,y) {
ellipse(x,y,15,15);
triangle(x-7.5,y,x,y-15,x+7.5,y);

}
