window.onload = init;
function init() {
  const canvas = document.getElementById("linktohtml");
  const canwid = (canvas.width = window.innerWidth);
  const canhei = (canvas.height = window.innerHeight);
  const context = canvas.getContext("2d");

  let speedOfSkier = 2;
  let directionOfSkier = 0;
  let obstaclesOfSlope = [];
  let theGame = false;
  let keys = true;
  let entireY = 0;

  //Draw the whole canvas, and start with Ski for your life!
  function draw() {
    context.clearRect(0, 0, cw, ch);
    entireY++;

    context.fillStyle = "#9B000F";

    if (entireY < 10) {
      context.textAlign = "center";
      context.fillStyle = "#111213";
      context.font = "40px Helvetica";
      context.fillText(`SkiFree!`, cw / 2, 60);
      context.font = "20px Helvetica";
      context.fillText(`Press an arrow key to start`, cw / 2, 100);
      context.font = "16px Helvetica";
      context.fillText(`Use ← and → to steer`, cw / 2, 124);
      context.fillStyle = "#E8E9EE";
    }
    draw();
  }

    // Draw Trees, snowpiles, kanelbulle and Hotshots
    function drawTheObstacles(context, type, x, y, h, w) {
      if (type === "trees") {
        context.fillStyle = "#624D6E";
        const trees = new Path2D();
        trees.moveTo(x + w / 2, y);
        trees.lineTo(x, y + h * 0.9);
        trees.lineTo(x + w * 0.33, y + h * 0.85);
        trees.lineTo(x + w * 0.33, y + h);
        trees.lineTo(x + w * 0.66, y + h);
        trees.lineTo(x + w * 0.66, y + h * 0.85);
        trees.lineTo(x + w, y + h * 0.9);
        trees.closePath();
        context.fill(trees);
      } else if (type === "snowpiles") {
        context.strokeStyle = "#868999";
        context.lineWidth = 1;
        const snowpiles = new Path2D();
        snowpiles.moveTo(x, y);
        snowpiles.quadraticCurveTo(x + w / 2, y - h, x + w, y);
        context.stroke(snowpiles);
      } else if (type === "kanebullar") {

        const kanelbullar = new Path2D();
        kanelbullar.ellipseTo(x + y + w + h);
      }
      }
    }

  // When pressing down any key, it starts handleKey function.
  //if you press left or right, it's starts in a specifc direction.
  //otherwise it keeps going and starts the game through boolean true + starGame
  function handleKey(e) {
    const key = e.key;
    const keycode = e.keyCode;

    if (keys) {
      if (key === "ArrowLeft" && direction > -2) {
        direction--;
      } else if (key === "ArrowRight" && direction < 2) {
        direction++;
      }
    }
    if (key === "ArrowLeft" || "ArrowRight" || "ArrowUp" || "ArrowDown") {
      startGame();
      game = true;
    }

    if (keycode === 32 && game === false) {
      window.location.reload(true);
    }
  }

  document.addEventListener("keydown", handleKey);
}
