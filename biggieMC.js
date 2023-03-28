background(255, 255, 255);
let x = 100;
let y = 100;

//skis
fill(255, 255, 300);
strokeWeight(5);
line(x + 10, y + 20, x + 80, y + 60);
line(x + 17, y + 10, x + 85, y + 50);

//legs
strokeWeight(3);
noFill();
beginShape();
vertex(x + 40, x + 25);
bezierVertex(x + 40, y + 25, x + 50, y + 10, x + 45, y);
endShape();

strokeWeight(3);
noFill();
beginShape();
vertex(x + 28, x + 29);
bezierVertex(x + 40, y + 25, x + 30, y, x + 30, y);
endShape();

//Body
noStroke();
fill(0, 0, 0);
ellipse(x + 40, y - 10, 30, 40);

noStroke();
fill(255, 255, 255);
ellipse(x + 40, y - 10, 25, 35);

//arms
fill(0, 0, 0);
strokeWeight(3);
beginShape();
vertex(x + 27, x - 15);
bezierVertex(x, y, x, y, x, y - 20);
endShape();
