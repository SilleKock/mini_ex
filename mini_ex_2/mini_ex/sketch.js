function setup() {
  // put setup code here
createCanvas(1000,1000, WEBGL);
background('#fae');

}

function draw() {
  // put drawing code here
background('#fae');
rotateX(frameCount * 0.01);
rotateZ(frameCount * 0.05);
fill(255,204,0);
fill('rgba(100%,0%,100%,0.5)');
stroke('yellow');
cone(30,100);
fill('rgba(0,255,0,0.25)');
stroke('light blue');
torus(200,50);
fill(50,100,0);
sphere(35);

}
