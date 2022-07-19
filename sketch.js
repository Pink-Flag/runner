var circlePosition;
var runner;
var runningAnimation;
var jumpingAnimation;
var gameBackground;
var platformBackground;
var gameFont;
var gameMusic;
var gameOverMusic;
var jumpSound;
var gameOver = false;
var platformsGroup;
var gravity = 1;
var jumpPower = 15;
var runnerSpeed = 12;
var currentBackgroundTilePosition;
var backgroundTiles;
var playerScore = 0;
const height = 390;
const width = 840;

var currentPlatformLocation = -width;

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
}
function setup() {
  createCanvas(width, height);
  gameMusic.play();
  runner = createSprite(50, 100, 25, 40);
  runner.depth = 4;
  runner.addAnimation("jump", jumpingAnimation);
  runner.addAnimation("run", runningAnimation);
  runner.setCollider("rectangle", 0, 0, 10, 41);
  platformsGroup = new Group();
  backgroundTiles = new Group();
  currentBackgroundTilePosition = -width;
}

function draw() {
  if (!gameOver) {
    background(200);

    runner.velocity.y += gravity;
    runner.velocity.x = runnerSpeed;
    runner.collide(platformsGroup, solidGround);
    addNewPlatforms();
    jumpDetection();

    camera.position.x = runner.position.x + 300;
    removeOldPlatforms();
    addNewBackgroundTiles();
    removeOldBackgroundTiles();
    fallCheck();
    drawSprites();
    updateScore();
  }
  if (gameOver) {
    gameOverText();
    updateSprites(false);
    if (keyWentDown("space")) {
      newGame();
    }
  }
  addNewPlatforms();
}

function updateScore() {
  if (frameCount % 60 === 0) {
    playerScore++;
    increaseRunnerSpeed()
  }

  fill("white");
  textFont(gameFont);
  strokeWeight(2);
  stroke("black");
  textSize(20);
  textAlign(CENTER);
  text(playerScore, camera.position.x + 350, camera.position.y + 160);
}

function increaseRunnerSpeed() {
  runnerSpeed += 0.2;
}

function fallCheck() {
  if (runner.position.y > height) {
    gameOver = true;
    gameMusic.stop();
    gameOverMusic.play();
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
    bgLoop.depth = 1;
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

function removeOldPlatforms() {
  for (let i = 0; i < platformsGroup.length; i++) {
    if (platformsGroup[i].position.x < runner.position.x - width) {
      platformsGroup[i].remove();
    }
  }
}

function addNewPlatforms() {
  if (platformsGroup.length < 5) {
    let currentPlatformLength = 1132;
    let platform = createSprite(
      currentPlatformLocation * 1.2,
      random(300, 400),
      1132,
      336
    );
    platform.collide(runner);
    currentPlatformLocation += currentPlatformLength;
    platform.addAnimation("default", platformBackground);
    platform.depth = 3;
    platformsGroup.add(platform);
  }
}

function solidGround() {
  runner.velocity.y = 0;
  runner.changeAnimation("run");
  if (runner.touching.right) {
    runner.velocity.x = 0;
    runner.velocity.y += 30;
  }
}

function jumpDetection() {
  if (
    keyWentDown(UP_ARROW) &&
    (runner.velocity.y == 0 || runner.velocity.y == 1)
  ) {
    runner.changeAnimation("jump");
    runner.animation.rewind();
    runner.velocity.y = -jumpPower;
    jumpSound.play();
  }
}

function newGame() {
  platformsGroup.removeSprites();
  backgroundTiles.removeSprites();
  gameOver = false;
  playerScore = 0;
  updateSprites(true);
  runnerSpeed = 12;
  runner.position.x = 50;
  runner.position.y = 100;
  runner.velocity.x = runnerSpeed;
  currentPlatformLocation = -width;
  currentBackgroundTilePosition = -width;
  gameOverMusic.stop();
  gameMusic.play();
}
