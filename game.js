function setup() {
  createCanvas(700, 2000);
  background(160, 200, 255);
  rect(100, 0, 400, 4000);
}

let skiierX = 120;
let skiierY = 120;
let treeX = 300;
let treeY = 300;

background(160, 200, 255);
rect(100, 0, 400, 4000);

function avalanche(avaX, avaY) {
  translate(avaX, avaY);
  push();
  fill(200, 200, 200);
  noStroke();
  rect(0, 0, 1000, 40);
  ellipse(20, 45, 200, 100);
  ellipse(90, 50, 120, 120);
  ellipse(180, 45, 100, 100);
  ellipse(200, 40, 90, 90);
  ellipse(250, 40, 110, 110);
  ellipse(300, 55, 120, 120);
  ellipse(360, 50, 100, 100);
  ellipse(400, 50, 90, 90);
  ellipse(450, 40, 120, 120);
  ellipse(500, 60, 120, 120);
  ellipse(540, 40, 80, 80);
  ellipse(560, 45, 80, 90);
  pop();
}

function skiier(x = 0, y = 0) {
  translate(skiierX, skiierY);
  scale(0.3);
  push();
  //skis
  fill(255, 255, 300);
  strokeWeight(5);
  line(x + 10, y + 20, x + 80, y + 62);
  line(x + 17, y + 10, x + 85, y + 50);
  //legs
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(x + 40, x + 25);
  bezierVertex(x + 50, y + 25, x + 50, y + 15, x + 45, y - 23);
  endShape();
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(x + 28, x + 29);
  bezierVertex(x + 40, y + 25, x + 35, y, x + 30, y);
  endShape();
  //arms
  strokeWeight(3);
  beginShape();
  vertex(x + 30, y - 20);
  bezierVertex(x + 16, y - 8, x + 5, y - 14, x, y - 17);
  endShape();
  strokeWeight(3);
  beginShape();
  vertex(x + 50, y - 20);
  bezierVertex(x + 50, y - 17, x + 70, y - 10, x + 80, y - 20);
  endShape();
  //stave Left
  fill(255, 255, 300);
  strokeWeight(2);
  line(x + 6, y - 25, x - 5, y + 20);
  fill(255, 255, 300);
  strokeWeight(2);
  line(x - 8, y + 15, x, y + 19);
  //stave Right
  fill(255, 255, 300);
  strokeWeight(2);
  line(x + 77, y - 25, x + 67, y + 20);
  fill(255, 255, 300);
  strokeWeight(2);
  line(x + 63, y + 15, x + 72, y + 19);
  //Body
  noStroke();
  fill(0, 0, 0);
  ellipse(x + 40, y - 10, 30, 40);
  noStroke();
  fill(255, 255, 255);
  ellipse(x + 40, y - 10, 25, 35);
  //Head
  noStroke();
  fill(0, 0, 0);
  ellipse(x + 40, y - 38, 20, 20);
  noStroke();
  fill(255, 255, 255);
  ellipse(x + 40, y - 38, 15, 15);
  pop();
}

function trees(x = 100, y = 100) {
  translate(treeX, treeY);
  push();
  fill(70, 31, 0);
  rect(x, y, 20, 30);
  fill(20, 51, 6);
  noStroke(0);
  triangle(x - 10, y + 15, x + 30, y + 15, x + 10, y - 50);
  triangle(x - 10, y + 0, x + 30, y, x + 10, y - 50);
  triangle(x - 5, y - 20, x + 25, y - 20, x + 10, y - 50);
  pop();
}

function draw() {
  avalanche();
  skiier();
  trees();
}
