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
      ctx.textAlign = "center";
      ctx.fillStyle = "#111213";
      ctx.font = "40px Helvetica";
      ctx.fillText(`SkiFree!`, cw / 2, 60);
      ctx.font = "20px Helvetica";
      ctx.fillText(`Press an arrow key to start`, cw / 2, 100);
      ctx.font = "16px Helvetica";
      ctx.fillText(`Use ← and → to steer`, cw / 2, 124);
      ctx.fillStyle = "#E8E9EE";
    }
    draw();
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
