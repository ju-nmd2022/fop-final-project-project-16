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
  let skiBladesX = canwid / 2;

  //Draw the whole canvas, and start with Ski for your life!
  function draw() {
    context.clearRect(0, 0, canwid, canhei);
    entireY++;

    context.fillStyle = "#9B000F";

    if (entireY < 25) {
      context.textAlign = "center";
      context.font = "50px Helvetica";
      context.fillText(`Ready to ski for your Life?`, canwid / 2, 60);
      context.font = "20px Helvetica";
      context.fillText(
        `Press any key to start skiing down the slope!`,
        canwid / 2,
        100
      );
      context.font = "16px Helvetica";
      context.fillText(
        `Use the left or right arrowkey to control the skier`,
        canwid / 2,
        124
      );
      context.fillText(
        "To gain some speed down the way, collect the hotshots! But be careful, if you hit a kanelbulle it will slow you down...",
        canwid / 2,
        160
      );

      context.fillText(
        "And a tree will unfortunately be the end of your skiing journey",
        canwid / 2,
        180
      );

      context.fillStyle = "#E8E9EE";
    }

    // when creating obstacles through function obstacle functions, this is the
    //code for each specific obstacle to draw.
    function drawTheObstacles(context, type, x, y, h, w) {
      if (type === "tree") {
        const tree = new Path2D();
        context.beginPath();
        context.fillStyle = "#361c09";
        tree.moveTo(x + w / 2, y);
        tree.lineTo(x, y + h * 0.9);
        tree.lineTo(x + w * 0.33, y + h * 0.85);
        tree.lineTo(x + w * 0.66, y + h * 0.85);
        tree.lineTo(x + w, y + h * 0.9);
        context.fillRect(x + w / 2.3, y + h * 0.8, 2, 10, 30);
        tree.closePath();
        context.fill(tree);
      } else if (type === "snowbump") {
        context.strokeStyle = "#868999";
        context.lineWidth = 2;
        const snowbump = new Path2D();
        snowbump.moveTo(x, y);
        snowbump.bezierCurveTo(
          x + w / 2,
          y - h / 2,
          x + w / 2,
          y + h / 2,
          x + w / 2,
          y + h / 2
        );
        context.stroke(snowbump);
      } else if (type === "hotshot") {
        const hotshot = new Path2D();
        context.beginPath();
        context.fillStyle = "#f6ce69";
        context.fillRect(x, y, 15, 30);
        context.stroke(hotshot);

        context.beginPath();
        context.fillStyle = "#000000";
        context.fillRect(x, y, 15, 20);
        context.stroke(hotshot);

        context.beginPath();
        context.fillStyle = "#FFFFFF";
        context.fillRect(x, y, 15, 10);
        context.stroke(hotshot);
      } else if (type === "kanelbulle") {
        context.lineWidth = 5;
        const kanelbulle = new Path2D();
        const radius = 15;
        context.beginPath();

        context.arc(x, y, radius - 3, 0, 2 * Math.PI);
        context.strokeStyle = "#FFA600";
        context.stroke();

        context.beginPath();
        context.arc(x, y, radius - 5, 0, 2 * Math.PI);
        context.strokeStyle = "#F1AD42";
        context.stroke();

        context.beginPath();
        context.arc(x, y, radius - 10, 0, 2 * Math.PI);
        context.strokeStyle = "#FFCA87";
        context.stroke();

        context.closePath();
      }
    }
  }

  // Create a new trees/snowbumps obstacles. They have random sizes between specific lengths/widths.
  function createTressSnowbumpsObstacles() {
    const obstacleTypes = ["tree", "snowbump"];
    const typeIndex = Math.floor(Math.random() * obstacleTypes.length);
    const type = obstacleTypes[typeIndex];

    if (type === "tree") {
      const treeHeight = Math.floor(Math.random() * (60 - 20 + 1)) + 20;
      obstacles.push({
        type: "tree",
        x: Math.round(canwid * Math.random()),
        y: canhei,
        height: treeHeight,
        width: treeHeight / 2,
      });
    } else if (type === "snowbump") {
      const snowbumpWidth = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
      obstacles.push({
        type: "snowbump",
        x: Math.round(canwid * Math.random()),
        y: canhei,
        height: snowbumpWidth / 2,
        width: snowbumpWidth,
      });
    }

    if (obstacles.length > 0 && obstacles[0].y < 0 - obstacles[0].height) {
      obstacles.shift();
    }
  }

  function createKanelHotshotObstacle() {
    const obstacleTypes = ["hotshot", "kanelbulle"];
    const typeIndex = Math.floor(Math.random() * obstacleTypes.length);
    const type = obstacleTypes[typeIndex];

    if (type === "hotshot") {
      const hotshotWidth = 30;
      obstacles.push({
        type: "hotshot",
        x: Math.round(cw * Math.random()),
        y: ch,
        height: hotshotWidth / 2,
        width: hotshotWidth,
      });
    } else if (type === "kanelbulle") {
      const kanelbulleWidth = 30;
      obstacles.push({
        type: "kanelbulle",
        x: Math.round(cw * Math.random()),
        y: ch,
        height: kanelbulleWidth / 2,
        width: kanelbulleWidth,
      });
    }

    if (obstacles.length > 0 && obstacles[0].y < 0 - obstacles[0].height) {
      obstacles.shift();
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
