var circlePosition;
var runner;
var runningAnimation;
var jumpingAnimation;
var flashingAnimation;
var gameBackground;
var platformBackground;
var splashAnimation;
var gameFont;
var gameMusic;
var gameOverMusic;
var hasFallen = false;
var jumpSound;
var coinCount = 0;
var gameOver = false;
var platformsGroup;
var solar;
var gravity = 1;
var jumpPower = 15;
var runnerSpeed = 10;
var isFlashing = false;
var currentBackgroundTilePosition;
var backgroundTiles;
var playerScore = 0;
var playerLives = 3;
var binGroup;
var currentWaterHeight;
var sparkleSpriteSheet;
var sparkleAnimation;
var water;
var throwCoinGroup;
var currentWaterTilePosition;
var waterHeight = 500;
const height = 390;
const width = 840;
let musicOn = true;
var switchBool;
var coinSound;
var bin;
var coinGroup;
var add;
var currentCoinCount;
var waterReduce;
var bottle;
var checkGameOverText = false;
var gameOverTimeout;
var newGameBool = false;
var currentPlatformHeight;
var drowned = false;
var waterAxisX;
var waterAxisY;
var hasDrowned = false;

var platform1132,
  platform1587,
  platform327,
  platform537,
  platform747,
  transparentBin;
var currentPlatformLocation = 0;
var index;
var random;
var distance = [200, 500, 800, 1100, 1500];

const muteIcon = document.querySelector(".mute");
muteIcon.addEventListener("click", muteGame);

// Preload  the animations
function preload() {
  jumpingAnimation = loadAnimation(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/jump00.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/jump01.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/jump02.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/jump03.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/jump04.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/jump05.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/jump06.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/jump07.png"
  );

  runningAnimation = loadAnimation(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run00.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run01.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run02.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run03.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run04.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run05.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run06.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run07.png"
  );

  splashAnimation = loadAnimation(
    "./Images/splash/splash.png",
    "./Images/splash/splash2.png",
    "./Images/splash/splash3.png",
    "./Images/splash/splash4.png",
    "./Images/splash/splash5.png",
    "./Images/splash/splash6.png",
    "./Images/splash/splash7.png",
    "./Images/splash/splash8.png",
    "./Images/splash/splash9.png",
    "./Images/splash/splash10.png",
    "./Images/splash/splash11.png",
    "./Images/splash/splash12.png",
    "./Images/splash/splash13.png",
    "./Images/splash/splash14.png",
    "./Images/splash/splash15.png"
  );

  flashingAnimation = loadAnimation(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run00.png",
    "./Images/run01.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run02.png",
    "./Images/run03.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run04.png",
    "./Images/run05.png",
    "https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/puppy/run06.png",
    "./Images/run07.png"
  );
  sparkleAnimation = loadAnimation(
    "./Images/explosion/tile000.png",
    "./Images/explosion/tile001.png",
    "./Images/explosion/tile002.png",
    "./Images/explosion/tile003.png",
    "./Images/explosion/tile004.png",
    "./Images/explosion/tile005.png",
    "./Images/explosion/tile006.png",
    "./Images/explosion/tile007.png",
    "./Images/explosion/tile008.png",
    "./Images/explosion/tile009.png",
    "./Images/explosion/tile010.png",
    "./Images/explosion/tile011.png",
    "./Images/explosion/tile012.png",
    "./Images/explosion/tile013.png",
    "./Images/explosion/tile014.png",
    "./Images/explosion/tile015.png",
    "./Images/explosion/tile016.png",
    "./Images/explosion/tile017.png",
    "./Images/explosion/tile018.png",
    "./Images/explosion/tile019.png",
    "./Images/explosion/tile020.png",
    "./Images/explosion/tile021.png",
    "./Images/explosion/tile022.png",
    "./Images/explosion/tile023.png",
    "./Images/explosion/tile023.png",
    "./Images/explosion/tile024.png",
    "./Images/explosion/tile025.png",
    "./Images/explosion/tile026.png",
    "./Images/explosion/tile027.png",
    "./Images/explosion/tile028.png",
    "./Images/explosion/tile029.png",
    "./Images/explosion/tile030.png",
    "./Images/explosion/tile031.png"
  );

  gameBackground = loadImage(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/environments/defaultBackground.png"
  );
  platformBackground = loadImage(
    "https://la-wit.github.io/build-an-infinite-runner/build/images/environments/defaultPlatform.png"
  );
  gameFont = loadFont(
    "https://la-wit.github.io/build-an-infinite-runner/build/fonts/ARCADE_R.TTF"
  );
  gameMusic = loadSound(
    "https://la-wit.github.io/build-an-infinite-runner/build/sounds/generic-game-loop-4.mp3"
  );
  gameOverMusic = loadSound(
    "https://la-wit.github.io/build-an-infinite-runner/build/sounds/over.mp3"
  );
  jumpSound = loadSound(
    "https://la-wit.github.io/build-an-infinite-runner/build/sounds/jump07.mp3"
  );

  platform327 = loadImage("./Images/platform327.png");
  platform537 = loadImage("./Images/platform537.png");
  platform747 = loadImage("./Images/platform747.png");
  platform1132 = loadImage("./Images/platform1132.png");
  platform1587 = loadImage("./Images/platform1587.png");
  transparentBin = loadImage("./Images/transparentBin.png");
  heart = loadImage("./Images/heart.png");
  solar = loadImage("./Images/solar.png");
  bottle = loadImage("./Images/smallBottle.png");
  water = loadAnimation("./Images/water.png");
  coinSound = loadSound("./Images/coinSound.mp3");
}

function setup() {
  createCanvas(width, height);
  switchBool = true;
  gameMusic.play();
  index = 0;

  runner = createSprite(50, 100, 25, 40);
  runner.depth = 4;
  runner.addAnimation("jump", jumpingAnimation);
  runner.addAnimation("run", runningAnimation);
  runner.setCollider("rectangle", -5, 0, 10, 41);
  runner.addAnimation("flash", flashingAnimation);
  // runner.addAnimation("sparkle", sparkleAnimation);
  runner.addAnimation("splash", splashAnimation);
  waterGroup = new Group();
  platformsGroup = new Group();
  binGroup = new Group();
  coinGroup = new Group();
  throwCoinGroup = new Group();
  backgroundTiles = new Group();
  currentBackgroundTilePosition = -width;
  currentWaterTilePosition = -width;
}

function draw() {
  if (!gameOver) {
    background(200);
    runner.depth = 4;
    runner.velocity.y += gravity;
    runner.velocity.x = runnerSpeed;
    runner.collide(platformsGroup, solidGround);
    runner.overlap(waterGroup, wetGround);
    runner.overlap(binGroup, hitBin);
    runner.overlap(platformsGroup, hitPlatform);
    runner.overlap(coinGroup, collectCoin);
    addNewPlatforms();
    jumpDetection();
    if (!hasFallen) {
      camera.position.x = runner.position.x + 300;
    }
    if (newGameBool) {
      setTimeout(() => {
        newGameBool = false;
      }, 1000);
    }
    removeOldPlatforms();
    addNewBackgroundTiles();
    removeOldBackgroundTiles();
    removeOldBins();
    addBinToGroup();
    addCoinToGroup();
    removeCoins();
    addWaterToGroup();
    removeWaterFromGroup();
    fallCheck();
    drawSprites();
    updateScore();

    // updateLives();
    updateCoins();
    binGroup.collide(platformsGroup);
  }
  if (checkGameOverText) {
    bigGameOverText();

    if (keyWentDown("space")) {
      newGame();
      // clearTimeout(gameOverTimeout);

      firstPlatform = true;
    }
  }
  if (checkGameOverText && gameOver) {
    gameOverText();
    bigGameOverText();
    splashAnimation.frameDelay = 5000;
    updateSprites(false);
    if (keyWentDown("space")) {
      newGame();
      firstPlatform = true;
    }
  }
  addNewPlatforms();
}

function coinBin(bin, coin) {
  coin.changeAnimation("sparkles");
  coin.remove();
}

//****************Platforms************************

// currentPlatformLength to increase/decrease distance END of platforms
// currentPlatformLocation to increase/decrease distance START platforms

function addNewPlatforms() {
  if (platformsGroup.length < 5) {
    switch (randomIndex()) {
      case 0: {
        let currentPlatformLength = random(560, 600);
        let platform = createSprite(
          currentPlatformLocation + 200,
          random(350, 450),
          327,

          336
        );
        platform.collide(runner);
        currentPlatformLocation += currentPlatformLength;

        platform.addAnimation("default", platform327);
        platform.depth = 3;
        platformsGroup.add(platform);

        break;
      }
      case 1: {
        let currentPlatformLength = random(675, 725);
        let platform = createSprite(
          currentPlatformLocation + 200,
          random(350, 450),
          537,

          336
        );
        platform.collide(runner);
        currentPlatformLocation += currentPlatformLength;

        platform.addAnimation("default", platform537);
        platform.depth = 3;
        platformsGroup.add(platform);

        break;
      }
      case 2: {
        let currentPlatformLength = random(850, 950);
        let platform = createSprite(
          currentPlatformLocation + 300,
          random(350, 450),
          747,
          336
        );
        platform.collide(runner);
        currentPlatformLocation += currentPlatformLength;

        platform.addAnimation("default", platform747);
        platform.depth = 3;
        platformsGroup.add(platform);

        break;
      }
      case 3: {
        let currentPlatformLength = random(1232, 1282);
        let platform = createSprite(
          currentPlatformLocation + 500,
          random(350, 450),
          1132,
          336
        );
        platform.collide(runner);
        currentPlatformLocation += currentPlatformLength;
        platform.addAnimation("default", platform1132);
        platform.depth = 3;
        platformsGroup.add(platform);

        break;
      }
      default: {
        let currentPlatformLength = 1800;
        let platform = createSprite(
          currentPlatformLocation + 800,
          random(350, 450),
          1587,
          336
        );
        platform.collide(runner);
        currentPlatformLocation += currentPlatformLength;

        platform.addAnimation("default", platform1587);
        platform.depth = 3;
        platformsGroup.add(platform);

        break;
      }
    }
  }
}

function removeOldPlatforms() {
  for (let i = 0; i < platformsGroup.length; i++) {
    if (platformsGroup[i].position.x < runner.position.x - 1500) {
      platformsGroup[i].remove();
    }
  }
}

//*************************Background ****************

function addNewBackgroundTiles() {
  let bgLoop;
  if (backgroundTiles.length < 5) {
    currentBackgroundTilePosition += 839;

    if (currentBackgroundTilePosition <= 838) {
      bgLoop = createSprite(
        currentBackgroundTilePosition,
        height / 2,
        width,
        height
      );
    } else {
      bgLoop = createSprite(
        currentBackgroundTilePosition,
        height / 2,
        width,
        height
      );
    }
    bgLoop.addAnimation("bg", gameBackground);
    bgLoop.depth = -1;
    bgLoop.velocity.x = runnerSpeed / 12;

    backgroundTiles.add(bgLoop);
  }
}

function removeOldBackgroundTiles() {
  for (let i = 0; i < backgroundTiles.length; i++) {
    if (backgroundTiles[i].position.x < runner.position.x - width) {
      backgroundTiles[i].remove();
    }
  }
}

//******************Bins**********************
function addBinToGroup() {
  if (binGroup.length < 2) {
    let newBin = createSprite(
      currentPlatformLocation - binIndex(),
      150,
      10,
      10
    );

    newBin.addAnimation("bin", transparentBin);
    newBin.depth = 4;
    newBin.setCollider("rectangle", 0, 0, 10, 41);
    newBin.velocity.y += gravity + 5;
    binGroup.add(newBin);
  }
}
function removeOldBins() {
  for (let i = 0; i < binGroup.length; i++) {
    if (binGroup[i].position.x < runner.position.x - 3000) {
      binGroup[i].remove();
    }
  }
}

function binIndex() {
  return Math.random() * 500;
}

function hitPlatform(runner, platform) {
  currentPlatformHeight = platform.position.y;
}

function hitBin(runner, bin) {
  currentWaterHeight = waterHeight;
  currentCoinCount = coinCount;

  addThrowCoinGroup();

  waterReduce = setInterval(() => {
    waterGroup.forEach((element) => {
      element.position.y += 1;
    });
    waterHeight += 1;

    if (waterHeight === currentWaterHeight + coinCount) {
      clearInterval(waterReduce);
    }
    if (waterHeight === 450) {
      clearInterval(waterReduce);
    }
  }, 100);

  let coinReduce = setInterval(() => {
    coinCount -= 1;
    if (coinCount < 1) {
      clearInterval(coinReduce);
      coinCount = 0;
    }
  }, 50);

  let bendCoins = setInterval(() => {
    throwCoinGroup.forEach((element) => {
      element.position.y += 5;
    });
    if (throwCoinGroup.length === 0) {
      clearInterval(bendCoins);
    }
  }, 10);

  bin.remove();
}

//  *************************Water*****************
function addWaterToGroup() {
  let waterLoop;
  if (waterGroup.length < 7) {
    currentWaterTilePosition += 260;
    waterLoop = createSprite(
      currentWaterTilePosition,
      waterHeight,
      width,
      height
    );
    waterLoop.addAnimation("water", water);
    waterLoop.collide(runner);
    waterLoop.depth = 5;
    // waterLoop.velocity.x = -1;
    waterGroup.add(waterLoop);
  }
}

function removeWaterFromGroup() {
  for (let i = 0; i < waterGroup.length; i++) {
    if (waterGroup[i].position.x < runner.position.x - width) {
      waterGroup[i].remove();
    }
  }
}

// function waves() {
// if count < 10 {
//   count += 1;
// } else if count > 0 {
//   count -= 1;

// }}

//************************Coins ******************** */

function coinIndex() {
  return Math.random() * 3000;
}

function addCoinToGroup() {
  if (coinGroup.length < 15) {
    let newCoin = createSprite(
      currentPlatformLocation - coinIndex(),
      random(50, 150),
      10,
      10
    );
    newCoin.addAnimation("bottle", bottle);
    newCoin.addAnimation("sparkle", sparkleAnimation);
    newCoin.depth = 4;
    newCoin.setCollider("rectangle", 0, 0, 10, 41);
    newCoin.velocity.y = 0;
    newCoin.velocity.x = 0;
    coinGroup.add(newCoin);
  }
}

function addThrowCoinGroup() {
  let coinInterval = setInterval(() => {
    let newCoin = createSprite(
      camera.position.x + 350,
      camera.position.y - 135,
      10,
      10
    );
    newCoin.addAnimation("bottle", bottle);
    newCoin.addAnimation("sparkles", sparkleAnimation);

    newCoin.depth = 4;
    newCoin.setCollider("rectangle", 0, 0, 10, 41);
    newCoin.velocity.y = 2;
    newCoin.velocity.x = -20;
    throwCoinGroup.add(newCoin);

    if (throwCoinGroup.length >= currentCoinCount) {
      clearInterval(coinInterval);
      setTimeout(() => {
        throwCoinGroup.removeSprites();
      }, 5000);
    }
  }, 10);
}

function collectCoin(runner, coin) {
  coin.changeAnimation("sparkle");

  if (musicOn) {
    coinSound.play();
  }
  coin.rotationSpeed = random(-20, 20);
  coinCount += 1;
  // waterHeight += 0.5;
}

function removeCoins() {
  for (let i = 0; i < coinGroup.length; i++) {
    if (coinGroup[i].position.x < runner.position.x - 1500) {
      coinGroup[i].remove();
    }
  }
}

function updateCoins() {
  fill("white");
  textFont(gameFont);
  strokeWeight(2);
  stroke("black");
  textSize(20);
  textAlign(CENTER);
  image(bottle, camera.position.x + 300, camera.position.y - 160);
  text(coinCount, camera.position.x + 360, camera.position.y - 125);
}

// ************* Runner Functions***************

function runnerFlash() {
  runner.changeAnimation("flash");
}

function randomIndex() {
  if (switchBool) {
    switchBool = !switchBool;
    return 4;
  } else {
    var milliseconds = new Date().getMilliseconds();
    let index = Math.floor((milliseconds * 7) / 1000);

    return index;
  }
}

function solidGround() {
  runner.velocity.y = 0;
  if (!isFlashing) {
    runner.changeAnimation("run");
  }
  if (runner.touching.right) {
    console.log("touchgin rifht");
    runner.velocity.x = -15;
    runner.velocity.y += 30;
  }
}

function wetGround(runner, water) {
  waterAxisX = water.position.x;
  waterAxisY = water.position.y;
  if (drowned) {
    runner.velocity.y = 0;
    runner.velocity.x = 0;
    runnerSpeed = 0;
  }

  if (runner.touching.right) {
    runner.velocity.x = 0;
    runner.velocity.y += 30;
  }
}

function jumpDetection() {
  if (
    keyWentDown(UP_ARROW)
    // (runner.velocity.y === 0 || runner.velocity.y === 1)
  ) {
    if (!isFlashing) {
      runner.changeAnimation("jump");
    }
    runner.animation.rewind();
    runner.velocity.y = -jumpPower;
    if (musicOn) {
      jumpSound.play();
    }
  }
}

// *****************Single functionallity function **********
function muteGame() {
  musicOn = !musicOn;
  if (musicOn) {
    gameMusic.setVolume(1);
  } else {
    gameMusic.setVolume(0);
    gameOverMusic.setVolume(0);
    coinSound.setVolume(0);
  }
}

function isGameOver() {
  gameOver = !gameOver;
}

function updateScore() {
  if (frameCount % 60 === 0) {
    playerScore++;
    increaseRunnerSpeed();
  }

  fill("white");
  textFont(gameFont);
  strokeWeight(2);
  stroke("black");
  textSize(20);
  textAlign(CENTER);
  text(playerScore, camera.position.x + 350, camera.position.y + 160);
}

function updateLives() {
  fill("white");
  textFont(gameFont);
  strokeWeight(2);
  stroke("black");
  textSize(20);
  textAlign(CENTER);
  image(heart, camera.position.x + 300, camera.position.y - 150);
  text(playerLives, camera.position.x + 360, camera.position.y - 125);
}

function increaseRunnerSpeed() {
  runnerSpeed += 0.1;
  waterHeight -= 10;
}

function fallCheck() {
  console.log(runner.position.y);
  if (
    (runner.position.y > waterHeight - 160 &&
      waterHeight > currentPlatformHeight) ||
    runner.position.y > 450
  ) {
    if (runner.position.y > 430) {
      if (!hasDrowned) {
        runner.changeAnimation("splash");
        runner.velocity.x = -10;
        runner.velocity.y = 0;
        runner.position.x = waterAxisX + 50;
        runner.position.y -= 250;
        hasDrowned = true;
        console.log("am i?");
      }
    } else {
      if (!hasDrowned) {
        runner.position.y -= 50;
        hasDrowned = true;
        runner.changeAnimation("splash");
      }
    }
    drowned = true;
    hasFallen = true;
    runner.depth = 0;
    checkGameOverText = true;
    gameOverTimeout = setTimeout(() => {
      if (!newGameBool) {
        gameOver = true;
        gameMusic.stop();

        if (musicOn) {
          gameOverMusic.play();
        }
      }
    }, 1000);
  }
}

// **********************Game over *********************
function bigGameOverText() {
  fill("white");
  stroke("black");
  textAlign(CENTER);
  textFont(gameFont);
  strokeWeight(2);
  textSize(90);
  strokeWeight(10);

  text("GAME OVER", camera.position.x, camera.position.y);
}

function gameOverText() {
  runnerSpeed = 0;

  background(0, 0, 0, 10);

  fill("white");
  stroke("black");
  textAlign(CENTER);
  textFont(gameFont);
  strokeWeight(2);
  textSize(15);
  text("Press space to try again", camera.position.x, camera.position.y + 100);
  textSize(20);
  text(
    "You scored " + playerScore + " points!",
    camera.position.x,
    camera.position.y + 50
  );
}

function newGame() {
  hasDrowned = false;
  drowned = false;
  waterAxisX = 0;
  waterAxisY = 0;
  firstPlatform = true;
  runner.changeAnimation("run");
  platformsGroup.removeSprites();
  backgroundTiles.removeSprites();
  coinGroup.removeSprites();
  waterGroup.removeSprites();
  waterHeight = 500;
  playerLives = 3;
  binGroup.removeSprites();
  switchBool = true;
  index = 0;
  gameOver = false;
  newGameBool = true;
  checkGameOverText = false;
  hasFallen = false;
  playerScore = 0;
  updateSprites(true);
  runnerSpeed = 12;
  runner.position.x = 50;
  runner.position.y = 100;
  runner.velocity.x = runnerSpeed;

  coinCount = 0;
  currentPlatformLocation = 0;
  currentBackgroundTilePosition = -width;
  currentWaterTilePosition = -width;
  gameOverMusic.stop();
  if (musicOn) {
    gameMusic.play();
  }
}

// runner.changeAnimation("flash");
// isFlashing = true;

// runnerSpeed *= 0.5;
// setTimeout(function () {
//   isFlashing = false;
//   setInterval(() => {
//     (runnerSpeed / 50) * 100;
//   }, 100);

//   runnerSpeed = (runnerSpeed / 50) * 100;
// }, 1000);
// playerLives--;

// if (playerLives === -1) {
//   gameOver = true;
// }
