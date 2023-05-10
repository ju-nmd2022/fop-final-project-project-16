let x = 100;
let y = 100;
background(255, 255, 255);

function trees(treeX, treeY) {
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
  trees();
}
