window.onload = init;
function init() {
  const canvas = document.getElementById("linktohtml");
  const canwid = (canvas.width = window.innerWidth);
  const canhei = (canvas.height = window.innerHeight);
  const context = canvas.getContext("2d");

  let speedOfSkier = 1.5;
  let directionOfSkier = 0;
  let obstaclesOfSlope = [];
  let theGame = false;
  let keys = true;
  let entireY = 0;
  let skiBladesX = cw / 2;

  //Draw the whole canvas, and start with Ski for your life!
  function draw() {
    context.clearRect(0, 0, cw, ch);
    entireY++;

    context.fillStyle = "#9B000F";

    if (entireY < 25) {
      context.textAlign = "center";
      context.font = "50px Helvetica";
      context.fillText(`Ready to ski for your Life?`, cw / 2, 60);
      context.font = "20px Helvetica";
      context.fillText(
        `Press any key to start skiing down the slope!`,
        cw / 2,
        100
      );
      context.font = "16px Helvetica";
      context.fillText(
        `Use the left or right arrowkey to control the skier`,
        cw / 2,
        124
      );
      context.fillText(
        "To gain some speed down the way, collect the hotshots! But be careful, if you hit a kanelbulle it will slow you down...",
        cw / 2,
        160
      );

      context.fillText(
        "And a tree will unfortunately be the end of your skiing journey",
        cw / 2,
        180
      );

      context.fillStyle = "#E8E9EE";
    }

    // Draw Trees, snowpiles, kanelbulle and Hotshots
    function drawTheObstacles(context, type, x, y, h, w) {
      if (type === "tree") {
        const tree = new Path2D();
        ctx.beginPath();
        ctx.fillStyle = "#361c09";
        tree.moveTo(x + w / 2, y);
        tree.lineTo(x, y + h * 0.9);
        tree.lineTo(x + w * 0.33, y + h * 0.85);
        tree.lineTo(x + w * 0.66, y + h * 0.85);
        tree.lineTo(x + w, y + h * 0.9);
        ctx.fillRect(x + w / 2.3, y + h * 0.8, 2, 10, 30);
        tree.closePath();
        ctx.fill(tree);
      } else if (type === "snowbump") {
        ctx.strokeStyle = "#868999";
        ctx.lineWidth = 2;
        const snowbump = new Path2D();
        snowbump.moveTo(x, y);
        // mound.quadraticCurveTo(x + w / 2, y - h, x + w, y);
        snowbump.bezierCurveTo(
          x + w / 2,
          y - h / 2,
          x + w / 2,
          y + h / 2,
          x + w / 2,
          y + h / 2
        );
        ctx.stroke(snowbump);
      } else if (type === "hotshot") {
        const hotshot = new Path2D();
        ctx.beginPath();
        ctx.fillStyle = "#f6ce69";
        ctx.fillRect(x, y, 15, 30);
        ctx.stroke(hotshot);

        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.fillRect(x, y, 15, 20);
        ctx.stroke(hotshot);

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x, y, 15, 10);
        ctx.stroke(hotshot);
      } else if (type === "kanelbulle") {
        ctx.lineWidth = 5;
        const kanelbulle = new Path2D();
        const radius = 15;
        ctx.beginPath();

        ctx.arc(x, y, radius - 3, 0, 2 * Math.PI);
        ctx.strokeStyle = "#FFA600";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, radius - 5, 0, 2 * Math.PI);
        ctx.strokeStyle = "#F1AD42";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, radius - 10, 0, 2 * Math.PI);
        ctx.strokeStyle = "#FFCA87";
        ctx.stroke();

        ctx.closePath();
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
