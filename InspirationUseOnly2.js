// Game variables
let canvas;
let context;
let skier;
let obstacles = [];
let gameOver = false;
let score = 0;

// Skier object
class Skier {
  constructor() {
    this.x = 150;
    this.y = 50;
    this.speedX = 0;
    this.speedY = 1;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  turnLeft() {
    this.speedX = -1;
  }

  turnRight() {
    this.speedX = 1;
  }
}

// Obstacle object
class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 20;
  }

  move() {
    this.y -= 1;
  }
}

// Game initialization
function init() {
  canvas = document.getElementById("gameCanvas");
  context = canvas.getContext("2d");
  skier = new Skier();

  // Event listeners for arrow keys
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);

  // Start game loop
  gameLoop();
}

// Update game state
function update() {
  // Move skier
  skier.move();

  // Move obstacles
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].move();

    // Check for collision with skier
    if (checkCollision(skier, obstacles[i])) {
      gameOver = true;
      break;
    }

    // Remove off-screen obstacles
    if (obstacles[i].y < 0) {
      obstacles.splice(i, 1);
      score++;
    }
  }

  // Create new obstacles
  if (Math.random() < 0.05) {
    let x = Math.random() * canvas.width;
    obstacles.push(new Obstacle(x, canvas.height));
  }
}

// Render game objects
function render() {
  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw skier
  context.fillStyle = "red";
  context.fillRect(skier.x, skier.y, 10, 10);

  // Draw obstacles
  context.fillStyle = "blue";
  for (let i = 0; i < obstacles.length; i++) {
    context.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);
  }

  // Draw score
  context.fillStyle = "black";
  context.fillText("Score: " + score, 10, 20);

  // Game over
  if (gameOver) {
    context.fillStyle = "black";
    context.fillText("Game Over", canvas.width / 2 - 40, canvas.height / 2);
  }
}

// Game loop
function gameLoop() {
  if (!gameOver) {
    update();
    render();
    requestAnimationFrame(gameLoop);
  }
}

// Handle key down events
function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    skier.turnLeft();
  } else if (event.key === "ArrowRight") {
    skier.turnRight();
  }
}

// Handle key up events
function handleKeyUp(event) {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    skier.speedX = 0;
  }
}

// Check collision between skier and obstacle
function checkCollision(skier, obstacle)
