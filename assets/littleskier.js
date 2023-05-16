background(255, 255, 255);
let x = 100;
let y = 100;

//staff
strokeWeight(2);
line(x, y, x + 50, y + 30);
line(x + 20, y, x + 70, y + 30);

//skis
fill(255, 255, 300);
strokeWeight(5);
line(x + 30, y + 20, x + 80, y + 50);
line(x + 10, y + 20, x + 80, y + 64);

//body
noStroke();
fill(255, 100, 100);
ellipse(x + 45, y + 20, 40, 40);

//head
noStroke();
fill(0, 255, 100);
ellipse(x + 60, y + 8, 25, 25);

//round on staff
fill(0, 0, 0);
ellipse(x + 2, y + 2, 10, 10);
ellipse(x + 22, y + 2, 10, 10);
