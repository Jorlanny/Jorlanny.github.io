let shapeColor = 'blue';
let shapeSize = 100;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  fill(shapeColor);
  ellipse(width / 2, height / 2, shapeSize);
}

function mousePressed() {
  shapeColor = random(['red', 'green', 'blue', 'yellow']);
}

function keyPressed() {
  shapeSize = random(50, 150);
}
