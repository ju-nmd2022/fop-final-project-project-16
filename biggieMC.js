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
bezierVertex(x + 40, y + 25, x + 50, y + 20, x + 45, y - 23);
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
