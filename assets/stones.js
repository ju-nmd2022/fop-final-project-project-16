let x = 100;
let y = 100;

background(255, 255, 255);

fill(145, 142, 133);
noStroke();
ellipse(x, y, 30, 30);
fill(165, 162, 153);
noStroke();
ellipse(x + 10, y + 5, 20, 20);
fill(125, 122, 113);
noStroke();
ellipse(x - 10, y + 5, 20, 20);

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
    treesAlpha[index] = treesAlpha[index] + 0.1;
  }
}
