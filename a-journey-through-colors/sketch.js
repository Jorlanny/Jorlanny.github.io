let shapeColor = "blue";
let shapeSize = 100;
let x, y;
let xSpeed, ySpeed;

function setup() {
  createCanvas(400, 400);
  noStroke();

  x = width / 2;
  y = height / 2;
  xSpeed = 2;
  ySpeed = 2;
}

function draw() {
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color("#ffecd2"), color("#fcb69f"), inter);
    stroke(c);
    line(0, i, width, i);
  }

  if (shapeColor === "red") {
    moveAngry();
  } else if (shapeColor === "blue") {
    moveSad();
  } else if (shapeColor === "green") {
    moveCalm();
  } else if (shapeColor === "yellow") {
    moveExcited();
  }

  fill(shapeColor);
  ellipse(x, y, shapeSize);
}

function moveAngry() {
  x += random(-5, 5);
  y += random(-5, 5);
}

function moveSad() {
  y += 1;
  if (y > height) y = 0;
}

function moveCalm() {
  // Gentle bouncing
  x += xSpeed;
  y += ySpeed;

  if (x > width || x < 0) xSpeed *= -1;
  if (y > height || y < 0) ySpeed *= -1;
}

function moveExcited() {
  shapeSize = random(80, 150);
}

function mousePressed() {
  shapeColor = random(["red", "green", "blue", "yellow"]);
}

function keyPressed() {
  shapeSize = random(50, 150);
}
