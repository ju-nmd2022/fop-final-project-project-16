window.onload = init;
function init() {
  const canvas = document.getElementById("linktohtml");
  const canwid = (canvas.width = window.innerWidth);
  const canhei = (canvas.height = window.innerHeight);
  const context = canvas.getContext("2d");
  let audio = new Audio("fylla.mp3");

  let speedOfSkier = 1.5;
  let directionOfSkier = 0;
  let obstaclesOfSlope = [];
  let theGame = false;
  let keys = true;
  let entireY = 0;
  let skiBladesX = canwid / 2;

  //draw an obstacles
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

  function createTreesSnowbumpsObstacles() {
    const obstacleTypes = ["tree", "snowbump"];
    const typeIndex = Math.floor(Math.random() * obstacleTypes.length);
    const type = obstacleTypes[typeIndex];

    if (type === "tree") {
      const treeHeight = Math.floor(Math.random() * (60 - 20 + 1)) + 20;
      obstaclesOfSlope.push({
        type: "tree",
        x: Math.round(canwid * Math.random()),
        y: canhei,
        height: treeHeight,
        width: treeHeight / 2,
      });
    } else if (type === "snowbump") {
      const snowbumpWidth = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
      obstaclesOfSlope.push({
        type: "snowbump",
        x: Math.round(canwid * Math.random()),
        y: canhei,
        height: snowbumpWidth / 2,
        width: snowbumpWidth,
      });
    }

    if (
      obstaclesOfSlope.length > 0 &&
      obstaclesOfSlope[0].y < 0 - obstaclesOfSlope[0].height
    ) {
      obstaclesOfSlope.shift();
    }
  }

  function createKanelHotshotObstacle() {
    const obstacleTypes = ["hotshot", "kanelbulle"];
    const typeIndex = Math.floor(Math.random() * obstacleTypes.length);
    const type = obstacleTypes[typeIndex];

    if (type === "hotshot") {
      const hotshotWidth = 30;
      obstaclesOfSlope.push({
        type: "hotshot",
        x: Math.round(canwid * Math.random()),
        y: canhei,
        height: hotshotWidth / 2,
        width: hotshotWidth,
      });
    } else if (type === "kanelbulle") {
      const kanelbulleWidth = 30;
      obstaclesOfSlope.push({
        type: "kanelbulle",
        x: Math.round(canwid * Math.random()),
        y: canhei,
        height: kanelbulleWidth / 2,
        width: kanelbulleWidth,
      });
    }

    if (
      obstaclesOfSlope.length > 0 &&
      obstaclesOfSlope[0].y < 0 - obstaclesOfSlope[0].height
    ) {
      obstaclesOfSlope.shift();
    }
  }

  //Draw the whole canvas, and start with Ski for your life!
  function draw() {
    context.clearRect(0, 0, canwid, canhei);
    entireY++;

    context.fillStyle = "#9B000F";

    if (entireY < 25) {
      context.textAlign = "center";
      context.font = "100px Helvetica";
      context.fillText(`Ready to ski for your Life?`, canwid / 2, 100);
      context.font = "50px Helvetica";
      context.fillText(
        `Press any key to start skiing down the slope!`,
        canwid / 2,
        170
      );
      context.font = "36px Helvetica";
      context.fillText(
        `Use the left or right arrowkey to control the skier`,
        canwid / 2,
        240
      );
      context.fillText(
        "To gain some speed down the way, collect the hotshots! But be careful, if you hit a kanelbulle it will slow you down...",
        canwid / 2,
        280
      );

      context.fillText(
        "And a tree will unfortunately be the end of your skiing journey",
        canwid / 2,
        320
      );

      context.fillStyle = "#E8E9EE";
    }

    // Score
    context.textAlign = "start";
    context.font = "18px Helvetica";
    context.fillText(`Score: ${Math.floor((entireY - 1) / 4)} points.`, 10, 25);

    // Draw Skier
    context.strokeStyle = "#868999";
    const skiblade = new Path2D();
    skiblade.moveTo(skiBladesX - 4 - directionOfSkier * 2, canhei / 4);
    skiblade.lineTo(skiBladesX - 1 - directionOfSkier * 2, canhei / 4);
    skiblade.lineTo(skiBladesX - 1 + directionOfSkier * 2, canhei / 4 + 16);
    skiblade.lineTo(skiBladesX - 4 + directionOfSkier * 2, canhei / 4 + 16);
    skiblade.closePath();
    skiblade.moveTo(skiBladesX + 4 - directionOfSkier * 2, canhei / 4);
    skiblade.lineTo(skiBladesX + 1 - directionOfSkier * 2, canhei / 4);
    skiblade.lineTo(skiBladesX + 1 + directionOfSkier * 2, canhei / 4 + 16);
    skiblade.lineTo(skiBladesX + 4 + directionOfSkier * 2, canhei / 4 + 16);
    skiblade.closePath();
    context.fill(skiblade);

    // Update obstacle postions
    obstaclesOfSlope = obstaclesOfSlope.map(function (obstacle) {
      return {
        type: obstacle.type,
        x: obstacle.x,
        y: obstacle.y - speedOfSkier,
        height: obstacle.height,
        width: obstacle.width,
      };
    });

    if (skiBladesX < 0) {
      skiBladesX += Math.abs(directionOfSkier / 2);
    } else if (skiBladesX > canwid) {
      skiBladesX -= Math.abs(directionOfSkier / 2);
    } else {
      skiBladesX += directionOfSkier / 2;
    }

    // Draw Obstacles
    obstaclesOfSlope.forEach(function (obstacle) {
      drawTheObstacles(
        context,
        obstacle.type,
        obstacle.x,
        obstacle.y,
        obstacle.height,
        obstacle.width
      );

      // Detect Crash
      if (
        obstacle.y + obstacle.height > canhei / 4 - 16 &&
        obstacle.y < canhei / 4 &&
        obstacle.x - obstacle.width / 2 < skiBladesX &&
        obstacle.x + obstacle.width / 2 > skiBladesX &&
        obstacle.type == "tree"
      ) {
        stopGame();
        theGame = false;
        audio.pause();
        context.fillStyle = "#9B000F";
        context.font = "16px Helvetica";
        context.fillText(
          `Ouch, you crashed into a tree! Better luck next time!!`,
          10,
          60
        );
        context.fillStyle = "#111213";
        context.fillText(
          `You gained ${Math.floor((entireY - 1) / 4)} points.`,
          10,
          80
        );
        context.fillText(`Please press [SPACE] to restart!.`, 10, 100);
      }

      //If hit kanelbulle, it goes slow
      if (
        obstacle.y + obstacle.height > canhei / 4 - 16 &&
        obstacle.y < canhei / 4 &&
        obstacle.x - obstacle.width / 2 < skiBladesX &&
        obstacle.x + obstacle.width / 2 > skiBladesX &&
        obstacle.type == "kanelbulle"
      ) {
        onHitSlow();
      }

      //If hit hotshot, you go swooosh
      if (
        obstacle.y + obstacle.height > canhei / 4 - 16 &&
        obstacle.y < canhei / 4 &&
        obstacle.x - obstacle.width / 2 < skiBladesX &&
        obstacle.x + obstacle.width / 2 > skiBladesX &&
        obstacle.type == "hotshot"
      ) {
        onHitSpeed();
      }
    });
  }

  // When pressing down any key, it starts handleKey function.
  //if you press left or right, it's starts in a specifc direction.
  //otherwise it keeps going and starts the game through boolean true + starGame
  function handleKey(e) {
    const key = e.key;
    const keycode = e.keyCode;

    if (keys) {
      if (key === "ArrowLeft" && directionOfSkier > -3) {
        directionOfSkier--;
      } else if (key === "ArrowRight" && directionOfSkier < 3) {
        directionOfSkier++;
      }

      if (key === "ArrowLeft" || "ArrowRight" || "ArrowDown") {
        startGame();
        theGame = true;
      }
    }

    if (keycode === 32 && theGame === false) {
      window.location.reload(true);
    }
  }

  function startGame() {
    if (!theGame) {
      obstacleInterval = setInterval(createTreesSnowbumpsObstacles, 30);
      obstacleInterval = setInterval(createKanelHotshotObstacle, 200);
      gameInterval = setInterval(draw, 1);
      audio.play();
    }
  }
  //Lower speed when hit kanelbulle
  function onHitSlow() {
    decreasedSpeed();
  }
  function decreasedSpeed() {
    setTimeout(function () {
      speedOfSkier = 1.5;
    }, 1000);
    speedOfSkier = 0.5;
  }

  //Higher speed when hit Hotshot
  function onHitSpeed() {
    speedItUp();
  }
  function speedItUp() {
    setTimeout(function () {
      speedOfSkier = 1.5;
    }, 1000);
    speedOfSkier = 4;
  }
  function stopGame() {
    if (theGame) {
      clearInterval(obstacleInterval);
      clearInterval(gameInterval);
      keys = false;
    }
  }

  document.addEventListener("keydown", handleKey);

  draw();
}
