window.onload = init;
function init() {
  const canvas = document.getElementById("frej");
  const ctx = canvas.getContext("2d");
  const cw = (canvas.width = window.innerWidth);
  const ch = (canvas.height = window.innerHeight);

  let direction = 0;
  let speed = 1.5;
  let skierX = cw / 2;
  let obstacles = [];
  let game = false;
  let keys = true;
  let totalY = 0;

  // Draw an obstacle
  function drawObstacle(ctx, type, x, y, h, w) {
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

  // Create a new obstacle
  function createObstacle() {
    const obstacleTypes = ["tree", "snowbump"];
    const typeIndex = Math.floor(Math.random() * obstacleTypes.length);
    const type = obstacleTypes[typeIndex];

    if (type === "tree") {
      const treeHeight = Math.floor(Math.random() * (60 - 20 + 1)) + 20;
      obstacles.push({
        type: "tree",
        x: Math.round(cw * Math.random()),
        y: ch,
        height: treeHeight,
        width: treeHeight / 2,
      });
    } else if (type === "snowbump") {
      const snowbumpWidth = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
      obstacles.push({
        type: "snowbump",
        x: Math.round(cw * Math.random()),
        y: ch,
        height: snowbumpWidth / 2,
        width: snowbumpWidth,
      });
    }

    if (obstacles.length > 0 && obstacles[0].y < 0 - obstacles[0].height) {
      obstacles.shift();
    }
  }

  // Create a new obstacle kanelbulle hotshot
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

  // Draw Canvas
  function draw() {
    ctx.clearRect(0, 0, cw, ch);
    totalY++;

    ctx.fillStyle = "#9B000F";

    if (totalY < 25) {
      ctx.textAlign = "center";
      ctx.font = "50px Helvetica";
      ctx.fillText(`Ready to ski for your Life?`, cw / 2, 60);
      ctx.font = "20px Helvetica";
      ctx.fillText(
        `Press any key to start skiing down the slope!`,
        cw / 2,
        100
      );
      ctx.font = "16px Helvetica";
      ctx.fillText(
        `Use the left or right arrowkey to control the skier`,
        cw / 2,
        124
      );
      ctx.fillText(
        "To gain some speed down the way, collect the hotshots! But be careful, if you hit a kanelbulle it will slow you down...",
        cw / 2,
        160
      );

      ctx.fillText(
        "And a tree will unfortunately be the end of your skiing journey",
        cw / 2,
        180
      );

      ctx.fillStyle = "#E8E9EE";
    }

    // Score
    ctx.textAlign = "start";
    ctx.font = "18px Helvetica";
    ctx.fillText(`Score: ${Math.floor((totalY - 1) / 4)} points.`, 10, 25);

    // Draw Skier
    ctx.strokeStyle = "#868999";
    const skier = new Path2D();
    skier.moveTo(skierX - 4 - direction * 2, ch / 4);
    skier.lineTo(skierX - 1 - direction * 2, ch / 4);
    skier.lineTo(skierX - 1 + direction * 2, ch / 4 + 16);
    skier.lineTo(skierX - 4 + direction * 2, ch / 4 + 16);
    skier.closePath();
    skier.moveTo(skierX + 4 - direction * 2, ch / 4);
    skier.lineTo(skierX + 1 - direction * 2, ch / 4);
    skier.lineTo(skierX + 1 + direction * 2, ch / 4 + 16);
    skier.lineTo(skierX + 4 + direction * 2, ch / 4 + 16);
    skier.closePath();
    ctx.fill(skier);

    // Update obstacle postions
    obstacles = obstacles.map(function (obstacle) {
      return {
        type: obstacle.type,
        x: obstacle.x,
        y: obstacle.y - speed,
        height: obstacle.height,
        width: obstacle.width,
      };
    });

    // Update skier position and make sure it stay in the window
    if (skierX < 0) {
      skierX += Math.abs(direction / 2);
    } else if (skierX > cw) {
      skierX -= Math.abs(direction / 2);
    } else {
      skierX += direction / 2;
    }

    obstacles.forEach(function (obstacle) {
      // Draw Obstacles
      drawObstacle(
        ctx,
        obstacle.type,
        obstacle.x,
        obstacle.y,
        obstacle.height,
        obstacle.width
      );

      // Detect Crash
      if (
        obstacle.y + obstacle.height > ch / 4 - 16 &&
        obstacle.y < ch / 4 &&
        obstacle.x - obstacle.width / 2 < skierX &&
        obstacle.x + obstacle.width / 2 > skierX &&
        obstacle.type == "tree"
      ) {
        stopGame();
        game = false;

        ctx.fillStyle = "#9B000F";
        ctx.font = "16px Helvetica";
        ctx.fillText(
          `Ouch, you crashed into a tree! Better luck next time!!`,
          10,
          60
        );
        ctx.fillStyle = "#111213";
        ctx.fillText(
          `You gained ${Math.floor((totalY - 1) / 4)} points.`,
          10,
          80
        );
        ctx.fillText(`Please press [SPACE] to restart!.`, 10, 100);
      }
      //If hit kanelbulle, it goes slow
      if (
        obstacle.y + obstacle.height > ch / 4 - 16 &&
        obstacle.y < ch / 4 &&
        obstacle.x - obstacle.width / 2 < skierX &&
        obstacle.x + obstacle.width / 2 > skierX &&
        obstacle.type == "kanelbulle"
      ) {
        onHitSlow();
      }
      //If hit hotshot, you go swooosh
      if (
        obstacle.y + obstacle.height > ch / 4 - 16 &&
        obstacle.y < ch / 4 &&
        obstacle.x - obstacle.width / 2 < skierX &&
        obstacle.x + obstacle.width / 2 > skierX &&
        obstacle.type == "hotshot"
      ) {
        onHitSpeed();
      }
    });
  }

  function handleKey(e) {
    const key = e.key;
    const keycode = e.keyCode;

    if (keys) {
      if (key === "ArrowLeft" && direction > -3) {
        direction--;
      } else if (key === "ArrowRight" && direction < 3) {
        direction++;
      }

      if (key === "ArrowLeft" || "ArrowRight" || "ArrowUp" || "ArrowDown") {
        startGame();
        game = true;
      }
    }

    if (keycode === 32 && game === false) {
      window.location.reload(true);
    }
  }

  function startGame() {
    if (!game) {
      console.log("game on!");
      obstacleInterval = setInterval(createObstacle, 15);
      obstacleInterval = setInterval(createKanelHotshotObstacle, 200);
      gameInterval = setInterval(draw, 1);
    }
  }

  //Lower speed when hit kanelbulle
  function onHitSlow() {
    decreasedSpeed();
  }
  function decreasedSpeed() {
    setTimeout(function () {
      speed = 2;
    }, 1000);
    speed = 0.5;
  }

  //Higher speed when hit Hotshot
  function onHitSpeed() {
    speedItUp();
  }
  function speedItUp() {
    setTimeout(function () {
      speed = 2;
    }, 1000);
    speed = 4;
  }
  function stopGame() {
    if (game) {
      clearInterval(obstacleInterval);
      clearInterval(gameInterval);
      keys = false;
    }
  }

  document.addEventListener("keydown", handleKey);

  draw();
}
