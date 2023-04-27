background(255, 255, 255);
let x = 100;
let y = 100;

//skis
fill(255, 255, 300);
strokeWeight(5);
line(x + 35, y, x + 35, y + 45);
line(x + 45, y, x + 45, y + 45);


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
line(x + 73, y - 25, x + 87, y + 20);
fill(255, 255, 300);
strokeWeight(2);
line(x + 90, y + 15, x + 82, y + 19);

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
