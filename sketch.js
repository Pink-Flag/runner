var circlePosition;
var runner;
var runningAnimation;
var jumpingAnimation;
var flashingAnimation;
var gameBackground;
var platformBackground;
var gameFont;
var gameMusic;
var gameOverMusic;
var jumpSound;
var gameOver = false;
var platformsGroup;
var solar;
var gravity = 1;
var jumpPower = 15;
var runnerSpeed = 12;
var isFlashing = false;
var currentBackgroundTilePosition;
var backgroundTiles;
var playerScore = 0;
var playerLives = 3;
var binGroup;
var sparkleSpriteSheet;
var sparkleAnimation;

const height = 390;
const width = 840;
let musicOn = true;
var switchBool;
var bin;
var coinGroup;
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

  sparkleSpriteSheet = loadSpriteSheet("./Images/sparkle.png", 32, 32, 32);
  sparkleAnimation = loadAnimation(sparkleSpriteSheet);

  platform327 = loadImage("./Images/platform327.png");
  platform537 = loadImage("./Images/platform537.png");
  platform747 = loadImage("./Images/platform747.png");
  platform1132 = loadImage("./Images/platform1132.png");
  platform1587 = loadImage("./Images/platform1587.png");
  transparentBin = loadImage("./Images/transparentBin.png");
  heart = loadImage("./Images/heart.png");
  solar = loadImage("./Images/solar.png");
}

function setup() {
  createCanvas(width, height);
  switchBool = true;
  gameMusic.play();
  gameMusic.play();
  index = 0;
  runner = createSprite(50, 100, 25, 40);
  runner.depth = 4;
  runner.addAnimation("jump", jumpingAnimation);
  runner.addAnimation("run", runningAnimation);
  runner.setCollider("rectangle", -5, 0, 10, 41);
  runner.addAnimation("flash", flashingAnimation);
  platformsGroup = new Group();
  binGroup = new Group();
  coinGroup = new Group();
  backgroundTiles = new Group();
  currentBackgroundTilePosition = -width;
}

function draw() {
  if (!gameOver) {
    background(200);
    animation(sparkleAnimation, 100, 100);

    runner.velocity.y += gravity;
    runner.velocity.x = runnerSpeed;
    runner.collide(platformsGroup, solidGround);

    runner.collide(binGroup, slowDown);
    runner.overlap(coinGroup, collectCoin);

    addNewPlatforms();
    jumpDetection();

    camera.position.x = runner.position.x + 300;
    removeOldPlatforms();
    addNewBackgroundTiles();
    removeOldBackgroundTiles();
    removeOldBins();
    // addBinToGroup();
    addCoinToGroup();
    removeCoins();

    fallCheck();
    drawSprites();
    updateScore();
    updateLives();
    binGroup.collide(platformsGroup);
  }
  if (gameOver) {
    gameOverText();
    updateSprites(false);
    if (keyWentDown("space")) {
      firstPlatform = true;
      newGame();
    }
  }
  addNewPlatforms();
}

function isGameOver() {
  gameOver = !gameOver;
}

function muteGame() {
  musicOn = !musicOn;
  if (musicOn) {
    gameMusic.setVolume(1);
  } else {
    gameMusic.setVolume(0);
    gameOverMusic.setVolume(0);
  }
}

function updateScore() {
  if (frameCount % 60 === 0) {
    // playerScore++;
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
  runnerSpeed += 0.2;
}

function fallCheck() {
  if (runner.position.y > height) {
    gameOver = true;
    gameMusic.stop();
    if (musicOn) {
      gameOverMusic.play();
    }
  }
}

function gameOverText() {
  background(0, 0, 0, 10);
  fill("white");
  stroke("black");
  textAlign(CENTER);
  textFont(gameFont);
  strokeWeight(2);
  textSize(90);
  strokeWeight(10);
  text("GAME OVER", camera.position.x, camera.position.y);
  textSize(15);
  text("Press space to try again", camera.position.x, camera.position.y + 100);
  textSize(20);
  text(
    "You scored " + playerScore + " points!",
    camera.position.x,
    camera.position.y + 50
  );
}

function slowDown() {
  runner.changeAnimation("flash");
  isFlashing = true;

  // if (runnerSpeed > 7) {
  runnerSpeed *= 0.5;
  setTimeout(function () {
    isFlashing = false;
    setInterval(() => {
      (runnerSpeed / 50) * 100;
    }, 100);

    runnerSpeed = (runnerSpeed / 50) * 100;
  }, 1000);
  // } else {
  //   runnerSpeed -= 1;
  //   setTimeout(function () {
  //     isFlashing = false;
  //     runnerSpeed += 1;
  //   }, 1000);
  // }
  binGroup.removeSprites();
  addBinToGroup();

  playerLives--;

  if (playerLives === -1) {
    gameOver = true;
  }
}

function addNewBackgroundTiles() {
  if (backgroundTiles.length < 3) {
    currentBackgroundTilePosition += 839;
    let bgLoop = createSprite(
      currentBackgroundTilePosition,
      height / 2,
      width,
      height
    );
    bgLoop.addAnimation("bg", gameBackground);
    bgLoop.depth = -1;
    backgroundTiles.add(bgLoop);
  }
}
function addBinToGroup() {
  if (binGroup.length < 15) {
    let newBin = createSprite(
      currentPlatformLocation - distance[randomIndex()],
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
    if (binGroup[i].position.x < runner.position.x - 1500) {
      binGroup[i].remove();
    }
  }
}

function coinIndex() {
  return Math.random() * 3000;
}

function addCoinToGroup() {
  if (coinGroup.length < 100) {
    let newCoin = createSprite(
      currentPlatformLocation - coinIndex(),
      random(100, 200),
      10,
      10
    );
    newCoin.addAnimation("coin", solar);

    // newCoin.rotationSpeed = random(-5, 5);
    newCoin.depth = 4;
    newCoin.setCollider("rectangle", 0, 0, 10, 41);
    // newCoin.velocity.y += gravity + 5;
    coinGroup.add(newCoin);
  }
}

function collectCoin(runner, coin) {
  // console.log(sparkleAnimation.images);

  // for (let i = 0; i < 33; i++) {
  //   sparkleAnimation.images.drawFrame()
  // }

  coin.remove();
  animation(sparkleAnimation, coin.position.x, coin.position.y);
  playerScore += 1;
}

function removeCoins() {
  for (let i = 0; i < coinGroup.length; i++) {
    if (coinGroup[i].position.x < runner.position.x - 1500) {
      // console.log(coinGroup[i].position.x);
      coinGroup[i].remove();
    }
  }
}

function removeOldBackgroundTiles() {
  for (let i = 0; i < backgroundTiles.length; i++) {
    if (backgroundTiles[i].position.x < runner.position.x - width) {
      backgroundTiles[i].remove();
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

// currentPlatformLength to increase/decrease distance END of platforms
// currentPlatformLocation to increase/decrease distance START platforms

function addNewPlatforms() {
  if (platformsGroup.length < 5) {
    switch (randomIndex()) {
      case 0: {
        let currentPlatformLength = random(560, 600);
        let platform = createSprite(
          currentPlatformLocation + 200,
          random(400, 500),
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
          random(400, 500),
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
          random(400, 500),
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
          random(400, 500),
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
          random(400, 500),
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

function solidGround() {
  runner.velocity.y = 0;
  if (!isFlashing) {
    runner.changeAnimation("run");
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

function newGame() {
  firstPlatform = true;
  platformsGroup.removeSprites();
  backgroundTiles.removeSprites();
  coinGroup.removeSprites();
  playerLives = 3;

  binGroup.removeSprites();
  switchBool = true;
  index = 0;
  gameOver = false;
  playerScore = 0;
  updateSprites(true);
  runnerSpeed = 12;
  runner.position.x = 50;
  runner.position.y = 100;
  runner.velocity.x = runnerSpeed;

  currentPlatformLocation = 0;
  currentBackgroundTilePosition = -width;
  gameOverMusic.stop();
  if (musicOn) {
    gameMusic.play();
  }
}
