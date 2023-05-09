// let particles = [];

// function createParticle() {
//     const x = Math.random() * width;
//     const y = Math.random() * height;
//     return { x: x, y: y};
// }

// function drawParticle(particle) {
// push();
// translate(particle.x, particle.y);
// noStroke();
// fill(255, 255, 255);
// ellipse();
// pop();
// }

// for (let i = 0; i < 100; 1++) {
//     const particle = createParticle();
//     particle.push(particle);
// }

// function draw() {
//     for (let particle of particles) {
//         drawParticle(particle);
//     }
// }

background(255, 255, 255);

let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 800; i++) {
  const x = Math.floor(Math.random() * 700);
  const y = Math.floor(Math.random() * 650);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}
