window.onload = init;
function init() {
  const canvas = document.getElementById("linkhtml");
  const cw = (canvas.width = window.innerWidth);
  const ch = (canvas.height = window.innerHeight);
  const ctx = canvas.getContext("2d");

  let speed = 2;
  let direction = 0;
  let game = false;
  let keys = true;

  function draw() {
    ctx.clearRect(0, 0, cw, ch);
    totalY++;

    ctx.fillStyle = "#9B000F";

    if (totalY < 10) {
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

  // When pressing down random key, it starts handleKey function.
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
