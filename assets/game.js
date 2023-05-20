function setup() {
  createCanvas(2000, 2000);
  background(250, 250, 250);
  // rect(100, 0, 1000, 4000);
}

background(160, 200, 255);
rect(100, 0, 400, 4000);

let state = "start";
let isGameActive = true;
let skiierX = 120;
let skiierY = 120;
let treeX = 300;
let treeY = 300;
let kanelbulleX = 50;
let kanelbulleY = 200;
let hotShotX = 250;
let hotShotY = 300;
// let speed = 0;
// let velocity = 1;

function avalanche(avaX, avaY) {
  translate(avaX, avaY);
  push();
  fill(200, 200, 200);
  noStroke();
  rect(0, 0, 2000, 40);
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
  ellipse(20, 45, 200, 100);
  ellipse(90, 50, 120, 120);
  ellipse(580, 45, 100, 100);
  ellipse(600, 40, 90, 90);
  ellipse(650, 40, 110, 110);
  ellipse(700, 55, 120, 120);
  ellipse(760, 50, 100, 100);
  ellipse(800, 50, 90, 90);
  ellipse(850, 40, 120, 120);
  ellipse(900, 60, 120, 120);
  ellipse(940, 40, 80, 80);
  ellipse(960, 45, 80, 90);
  ellipse(1000, 40, 90, 90);
  ellipse(1050, 40, 110, 110);
  ellipse(1100, 55, 120, 120);
  ellipse(1160, 50, 90, 90);
  ellipse(1200, 50, 100, 100);
  ellipse(1240, 60, 90, 90);
  ellipse(1300, 40, 130, 130);
  ellipse(1340, 70, 120, 120);
  ellipse(1410, 40, 80, 80);
  ellipse(1460, 45, 80, 90);
  ellipse(1500, 60, 90, 90);
  ellipse(1550, 40, 110, 110);
  ellipse(1600, 60, 120, 120);
  ellipse(1670, 40, 80, 80);
  ellipse(1700, 45, 80, 90);
  ellipse(1760, 40, 80, 80);
  ellipse(1800, 45, 80, 90);
  ellipse(1860, 60, 90, 90);
  ellipse(1900, 60, 110, 110);
  ellipse(1950, 40, 80, 80);
  ellipse(2000, 45, 80, 90);
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

function trees(x = 0, y = 0) {
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

function kanelbulle(x = 0, y = 0) {
  translate(kanelbulleX, kanelbulleY);
  push();
  fill(200, 157, 124);
  ellipse(200, 100, 80, 30);
  ellipse(200, 98, 74, 24);
  ellipse(200, 95, 64, 20);
  ellipse(200, 92, 54, 16);
  ellipse(200, 90, 44, 12);
  fill(255, 255, 255);
  ellipse(190, 100, 4, 4);
  ellipse(210, 88, 4, 4);
  ellipse(180, 89, 4, 4);
  ellipse(168, 96, 4, 4);
  ellipse(220, 95, 4, 4);
  ellipse(230, 100, 4, 4);
  ellipse(216, 104, 4, 4);
  ellipse(200, 108, 4, 4);
  ellipse(192, 86, 4, 4);
  ellipse(174, 105, 4, 4);
  ellipse(200, 92, 4, 4);
  ellipse(178, 96, 4, 4);
  pop();
}

function hotShot(x = 0, y = 0) {
  translate(hotShotX, hotShotY);
  push();
  fill(255, 204, 100, 255);
  rect(200, 200, 50, 60);
  fill(54, 34, 3);
  rect(200, 170, 50, 60);
  fill(255, 255, 255);
  rect(200, 150, 50, 25);
  pop();
}

// function gameScreen() {
//   background(240, 200, 240);
//   if (isGameActive) {
//   }
// }

// function winScreen() {
//   background(0, 255, 100);
//   textSize(20);
//   fill(0, 0, 0);
//   text(
//     "Hurraaay, you made it all the way down! Good job :D",
//     200,
//     220,
//     [200, 200]
//   );
//   fill(255, 255, 255);
//   rect(210, 280, 160, 60);
//   fill(0, 0, 0);
//   text("Play again!", 240, 300, [250, 250]);
// }

// function loseScreen() {
//   background(255, 0, 100);
//   textSize(16);
//   fill(0, 0, 0);
//   text(
//     "Oh no, you didn't ski for your life and now said life had ended...):",
//     40,
//     200,
//     [200, 200]
//   );
//   fill(255, 255, 255);
//   rect(210, 280, 160, 60);
//   fill(0, 0, 0);
//   text("Play again?", 240, 300, [250, 250]);
// }

// function createEnemy() {
//   const enemyTypes = ["trees"];
//   const type = enemyTypes[Math.round(Math.random())];
// }

for (let i = 0; i < 100; i++) {
  const x = Math.floor(Math.random() * 200);
  const y = Math.floor(Math.random() * 320);
  const alpha = Math.random();

  treesX.push(x);
  treesY.push(y);
  treesAlpha.push(alpha);
}

function draw() {
  avalanche();
  skiier();
  trees();
  kanelbulle();
  hotShot();
  noStroke();
  background(0, 0, 0);

  // trees();
  // {
  //   for (let index in treesX) {
  //     trees(treesX[index], treesY[index], 3);
  //     treesAlpha[index] = treesAlpha[index] + 0.2;
  //   }
  // }
}
