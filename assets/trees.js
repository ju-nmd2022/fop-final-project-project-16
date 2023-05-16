let treesX = [];
let treesY = [];
let treesAlpha = [];

background(255, 255, 255);

let x = 100;
let y = 100;

function trees(treesX, treesY, treesAlpha) {
  translate(treesX, treesY, treesAlpha);
  push();
  scale(0.3);
  fill(70, 31, 0);
  rect(x, y, 20, 30);
  fill(20, 51, 6);
  noStroke(0);
  triangle(x - 10, y + 15, x + 30, y + 15, x + 10, y - 50);
  triangle(x - 10, y + 0, x + 30, y, x + 10, y - 50);
  triangle(x - 5, y - 20, x + 25, y - 20, x + 10, y - 50);
  pop();
}

for (let i = 0; i < 100; i++) {
  const x = Math.floor(Math.random() * 200);
  const y = Math.floor(Math.random() * 320);
  const alpha = Math.random();

  treesX.push(x);
  treesY.push(y);
  treesAlpha.push(alpha);
}
function draw() {
  trees();

  for (let index in treesX) {
    trees(treesX[index], treesY[index], 3);
    treesAlpha[index] = treesAlpha[index] + 0.2;
  }
}
