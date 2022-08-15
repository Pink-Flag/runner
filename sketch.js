// scoreboard
// low pass on audio as water rises?
// curve sun and moon trajectory
// sounds
// add light effect to clouds and platforms and fox?

var circlePosition;
var runner;
var coinReset;
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
var movement = 75;
let jumpDiff = 0;
var inc = 1;
var gravity = 1;
var jumpPower = 17;
var runnerSpeed = 10;
var isFlashing = false;
var currentBackgroundTilePosition;
var backgroundTiles;
var playerScore = 0;
var playerLives = 3;
var binGroup;
var cloudGroup;
var currentWaterHeight;
var sparkleSpriteSheet;
var planet;
var sparkleAnimation;
var water;
var cloud1;
var cloud2;
var cloud3;
var cloud4;
var cloud5;
var foxWaterHeight = 0;
// var throwCoinGroup;
var currentWaterTilePosition;
var waterHeight = 500;
// var waterHeight = 400;
const height = 390;
const width = 840;
let musicOn = true;
var switchBool;
var coinSound;
var checkPlanet = "sun";
var bin;
var coinGroup;
var add;
let platformAnimation;
var currentCoinCount;
var bgLoop;
var sun;
var sunGroup;
var bottle;
var drop = [];
var star = [];
var splash = [];
var spark = [];
var splashGroup;
var checkGameOverText = false;
var gameOverTimeout;
var newGameBool = false;
var currentPlatformHeight;
var drowned = false;
var waterAxisX;
var waterAxisY;
var hasDrowned = false;
var coinTime = false;
var firstTimeLoad = true;
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
var r = 0;
var g = 235;
var b = 255;

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

  backgroundAnimation = loadAnimation(
    "./Images/background/background1.png",
    "./Images/background/background2.png",
    "./Images/background/background3.png",
    "./Images/background/background4.png",
    "./Images/background/background5.png",
    "./Images/background/background6.png",
    "./Images/background/background7.png",
    "./Images/background/background8.png"
  );

  platform327Animation = loadAnimation(
    "./Images/platforms/327/platform327_1.png",
    "./Images/platforms/327/platform327_2.png",
    "./Images/platforms/327/platform327_3.png",
    "./Images/platforms/327/platform327_4.png",
    "./Images/platforms/327/platform327_5.png",
    "./Images/platforms/327/platform327_6.png",
    "./Images/platforms/327/platform327_7.png",
    "./Images/platforms/327/platform327_8.png"
  );
  platform537Animation = loadAnimation(
    "./Images/platforms/537/platform537_1.png",
    "./Images/platforms/537/platform537_2.png",
    "./Images/platforms/537/platform537_3.png",
    "./Images/platforms/537/platform537_4.png",
    "./Images/platforms/537/platform537_5.png",
    "./Images/platforms/537/platform537_6.png",
    "./Images/platforms/537/platform537_7.png",
    "./Images/platforms/537/platform537_8.png"
  );
  platform747Animation = loadAnimation(
    "./Images/platforms/747/platform747_1.png",
    "./Images/platforms/747/platform747_2.png",
    "./Images/platforms/747/platform747_3.png",
    "./Images/platforms/747/platform747_4.png",
    "./Images/platforms/747/platform747_5.png",
    "./Images/platforms/747/platform747_6.png",
    "./Images/platforms/747/platform747_7.png",
    "./Images/platforms/747/platform747_8.png"
  );

  platform1132Animation = loadAnimation(
    "./Images/platforms/1132/platform1132_1.png",
    "./Images/platforms/1132/platform1132_2.png",
    "./Images/platforms/1132/platform1132_3.png",
    "./Images/platforms/1132/platform1132_4.png",
    "./Images/platforms/1132/platform1132_5.png",
    "./Images/platforms/1132/platform1132_6.png",
    "./Images/platforms/1132/platform1132_7.png",
    "./Images/platforms/1132/platform1132_8.png"
  );
  platform1587Animation = loadAnimation(
    "./Images/platforms/1587/platform1587_1.png",
    "./Images/platforms/1587/platform1587_2.png",
    "./Images/platforms/1587/platform1587_3.png",
    "./Images/platforms/1587/platform1587_4.png",
    "./Images/platforms/1587/platform1587_5.png",
    "./Images/platforms/1587/platform1587_6.png",
    "./Images/platforms/1587/platform1587_7.png",
    "./Images/platforms/1587/platform1587_8.png"
  );

  gameBackground = loadImage("./Images/background.png");

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
  sun = loadImage("./Images/sun.png");
  moon = loadImage("./Images/moon.png");
  cloud1 = loadImage("./Images/cloud1.png");
  cloud2 = loadImage("./Images/cloud2.png");
  cloud3 = loadImage("./Images/cloud3.png");
  cloud4 = loadImage("./Images/cloud4.png");
  cloud5 = loadImage("./Images/cloud5.png");
  bottleBag = loadImage("./Images/bottleBag.png");
}

function setup() {
  createCanvas(width, height);
  switchBool = true;
  gameMusic.play();
  index = 0;
  setupDrops();
  setupStars();
  runner = createSprite(50, 100, 25, 40);
  runner.depth = 4;
  runner.addAnimation("jump", jumpingAnimation);
  runner.addAnimation("run", runningAnimation);
  runner.setCollider("rectangle", -5, 0, 10, 41);
  runner.addAnimation("flash", flashingAnimation);
  runner.addAnimation("splash", splashAnimation);
  setupSplash();
  cloudGroup = new Group();
  waterGroup = new Group();
  setupSun();
  setupSparks();
  platformsGroup = new Group();
  sunGroup = new Group();
  binGroup = new Group();
  coinGroup = new Group();
  // throwCoinGroup = new Group();
  backgroundTiles = new Group();

  currentBackgroundTilePosition = -width;
  currentWaterTilePosition = -width;
}

function draw() {
  if (firstTimeLoad) {
    controlls();
    if (keyWentDown("space")) {
      firstTimeLoad = false;
    }
  } else {
    if (!gameOver) {
      background(r, g, b);
      runner.depth = 4;
      runner.velocity.y += gravity;
      runner.velocity.x = runnerSpeed;

      runner.collide(platformsGroup, solidGround);

      runner.overlap(binGroup, hitBin);
      runner.overlap(platformsGroup, hitPlatform);
      runner.overlap(coinGroup, collectCoin);
      addNewPlatforms();
      jumpDetection();

      if (!hasFallen) {
        camera.position.x = runner.position.x + 300;
      }

      if (coinTime) {
        setTimeout(() => {
          coinTime = false;
        }, 55);
      }

      if (runner.position.y < 120) {
        jumpDiff = (runner.position.y - 120) / 2;
        camera.position.y = jumpDiff + 195;
      }

      if (newGameBool) {
        setTimeout(() => {
          newGameBool = false;
        }, 1000);
      }
      removeOldPlatforms();
      addNewBackgroundTiles();
      removeOldBackgroundTiles();
      cyclePlatforms();
      if (checkGameOverText) {
        backgroundTiles.forEach((tile) => {
          tile.velocity.x = 0;
        });
      }
      cycleBackground();
      removeOldBins();
      addCloudToGroup();
      removeOldClouds();
      addBinToGroup();
      addCoinToGroup();
      removeCoins();
      addWaterToGroup();
      removeWaterFromGroup();
      waterIncrease();
      dayCycle();
      movePlanet();
      muteOnKeyboard();
      fallCheck();
      drownedCheck();
      drawStars();
      if (checkPlanet === "moon") {
        updateStars();
      }
      drawSprites();
      runner.overlap(waterGroup, wetGround);
      if (playerScore > 1) {
        drawSparks();
      }
      updateDrops();
      drawDrops();
      updateScore();
      // updateLives();
      updateCoins();
      binGroup.collide(platformsGroup);
    }
    if (checkGameOverText) {
      bigGameOverText();

      if (keyWentDown("space")) {
        newGame();
      }
    }
    if (checkGameOverText && gameOver) {
      gameOverText();
      bigGameOverText();
      splashAnimation.frameDelay = 5000;
      updateSprites(false);
      if (keyWentDown("space")) {
        newGame();
      }
    }
    addNewPlatforms();
  }
}

function coinBin(bin, coin) {
  coin.changeAnimation("sparkles");
  coin.remove();
}

//***********CLOUDS************

function addCloudToGroup() {
  if (cloudGroup.length < 4) {
    let newCloud = createSprite(
      currentPlatformLocation - cloudIndex(),
      150,
      10,
      10
    );
    switch (Math.floor(random(1, 5))) {
      case 1:
        newCloud.addImage(cloud1);
        break;
      case 2:
        newCloud.addImage(cloud2);
        break;
      case 3:
        newCloud.addImage(cloud3);
        break;
      case 4:
        newCloud.addImage(cloud4);
        break;
      case 5:
        newCloud.addImage(cloud5);
        break;
    }

    newCloud.position.y = random(50, 150);
    newCloud.depth = random(0, 4);
    newCloud.setCollider("rectangle", 0, 0, 10, 41);
    newCloud.velocity.x += random(-1, 2);
    cloudGroup.add(newCloud);
  }
}
function removeOldClouds() {
  for (let i = 0; i < cloudGroup.length; i++) {
    if (cloudGroup[i].position.x < runner.position.x - 1000) {
      cloudGroup[i].remove();
    }
  }
}

function cloudIndex() {
  return Math.random() * 500;
}

//************SUN AND MOON****************

function setupSun() {
  planet = createSprite(width / 2, 50, 50, 50);
  planet.addAnimation("sun", sun);
  planet.addAnimation("moon", moon);
  planet.depth = 1;
}

function movePlanet() {
  if (playerScore > 10) {
    if (movement > 400) {
      inc = -1;
    } else if (movement < 75) {
      inc = 0.001;
      setTimeout(() => {
        inc = 1;
      }, 10000);
    }
    movement += inc;
  }
  let axis = movement * 2;
  planet.position.x = camera.position.x + 350 - axis;

  planet.position.y = movement;

  if (planet.position.y > 399 && checkPlanet === "sun") {
    planet.changeAnimation("moon");
    checkPlanet = "moon";
  } else if (planet.position.y > 399 && checkPlanet === "moon") {
    planet.changeAnimation("sun");

    checkPlanet = "sun";
  }
}

function dayCycle() {
  if (checkPlanet === "sun") {
    g = 310 - movement;
    b = 330 - movement / 1.3;
  }
}

//********RAIN*****************

function setupDrops() {
  for (var i = 0; i < 1000; i++) {
    drop[i] = new Drop();
  }
}

function drawDrops() {
  for (var i = 0; i < 1000; i++) {
    drop[i].show();
    drop[i].update();
  }
}

function updateDrops() {
  if (runner.position.x > drop[100].x) {
    drop.shift();
    newDrop = new Drop();
    drop.push(newDrop);
  }
}

function Drop() {
  if (drop.length < 998) {
    this.x = random(0, 10000);
    this.y = random(0, -height);
  } else {
    this.x = random(camera.position.x + 200, camera.position.x + 1000);
    this.y = random(0, -height);
  }

  this.show = function () {
    noStroke();
    fill(5, random(82, 125), 176);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));
  };
  this.update = function () {
    this.speed = random(5, 10);
    this.wind = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed * this.gravity;
    this.x = this.x - this.wind;

    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
    }
  };
}

//***********STARS********************
function setupStars() {
  for (var i = 0; i < 10; i++) {
    star[i] = new Star();
  }
}

function drawStars() {
  for (var i = 0; i < 10; i++) {
    star[i].show();
    star[i].update();
  }
}

function updateStars() {
  if (runner.position.x > star[5].x) {
    star.shift();
    newDrop = new Star();
    star.push(newDrop);
  }
}

function Star() {
  if (star.length < 5) {
    this.x = random(0, 100);
    this.y = random(100, -height);
  } else {
    this.x = random(camera.position.x + 200, camera.position.x + 1000);
    this.y = random(100, -height);
  }

  this.show = function () {
    noStroke();
    fill(255, 255, random(220, 255));
    ellipse(this.x, this.y, random(1, 5), random(1, 5));
  };
  this.update = function () {
    this.speed = random(0, 1);
    this.wind = random(0, 5);
    this.gravity = 0.5;
    this.y = this.y + this.speed * this.gravity;
    this.x = this.x - this.wind;

    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
    }
  };
}

//*****************SPLASH***************

function setupSplash() {
  for (var i = 0; i < 1000; i++) {
    splash[i] = new Splash();
  }
}

function drawSplash() {
  for (var i = 0; i < 1000; i++) {
    splash[i].show();
    splash[i].update();
  }
}

function updateSplash() {
  splash.shift();
  newSplash = new Splash();
  splash.push(newSplash);
}

function Splash() {
  this.x = runner.position.x;
  this.y = runner.position.y + 20 + foxWaterHeight;

  this.show = function () {
    noStroke();
    if (runnerSpeed > 7) {
      fill(0, random(198), 255);
    } else {
      runnerFlash();
      fill(238, random(50, 160), 62);
    }
    ellipse(this.x, this.y, random(1, 5), random(1, 5));
  };
  this.update = function () {
    this.y = this.y - random(-6, 10);
    this.x = this.x + random(1, 10);

    // if (this.y > height) {
    //   this.y = random(0, 2);
    //   this.gravity = 0;
    // }
  };
}

//****************Platforms************************

// currentPlatformLength to increase/decrease distance END of platforms
// currentPlatformLocation to increase/decrease distance START platforms

function addNewPlatforms() {
  if (platformsGroup.length < 5) {
    let platform;
    switch (randomIndex()) {
      case 0: {
        let currentPlatformLength = random(560, 600);
        platform = createSprite(
          currentPlatformLocation + 200,
          random(350, 450),
          327,
          336
        );
        currentPlatformLocation += currentPlatformLength;

        platform.addAnimation("night327", platform327Animation);
        break;
      }
      case 1: {
        let currentPlatformLength = random(675, 725);
        platform = createSprite(
          currentPlatformLocation + 200,
          random(350, 450),
          537,
          336
        );

        currentPlatformLocation += currentPlatformLength;

        platform.addAnimation("night537", platform537Animation);

        break;
      }
      case 2: {
        let currentPlatformLength = random(850, 950);
        platform = createSprite(
          currentPlatformLocation + 300,
          random(350, 450),
          747,
          336
        );

        currentPlatformLocation += currentPlatformLength;

        platform.addAnimation("night747", platform747Animation);

        break;
      }
      case 3: {
        let currentPlatformLength = random(1232, 1282);
        platform = createSprite(
          currentPlatformLocation + 500,
          random(350, 450),
          1132,
          336
        );

        currentPlatformLocation += currentPlatformLength;
        platform.addAnimation("night1132", platform1132Animation);

        break;
      }
      default: {
        let currentPlatformLength = 1800;
        platform = createSprite(
          currentPlatformLocation + 800,
          random(350, 450),
          1587,
          336
        );

        currentPlatformLocation += currentPlatformLength;
        platform.addAnimation("night1587", platform1587Animation);

        break;
      }
    }

    //  platform.addAnimation("platformAnim", platformAnimation);
    platform.animation.stop();

    if (checkPlanet === "moon") {
      platform.animation.goToFrame(7);
    }
    if (planet.position.y > 300) {
      platform.animation.goToFrame(7);
    }

    platform.collide(runner);
    platform.depth = 3;
    platformsGroup.add(platform);
  }
}

function removeOldPlatforms() {
  for (let i = 0; i < platformsGroup.length; i++) {
    if (platformsGroup[i].position.x < runner.position.x - 1500) {
      platformsGroup[i].remove();
    }
  }
}

function cyclePlatforms() {
  let platformIndex = Math.floor(movement / 50);
  if (checkPlanet === "sun") {
    platformsGroup.forEach((platform) => {
      platform.animation.goToFrame(platformIndex);
    });
  }
}

//*************************Background ****************

function addNewBackgroundTiles() {
  if (backgroundTiles.length < 5) {
    currentBackgroundTilePosition += 839;

    if (currentBackgroundTilePosition <= 838) {
      bgLoop = createSprite(
        currentBackgroundTilePosition,
        200 / 2,
        width,
        height
      );
    } else {
      bgLoop = createSprite(currentBackgroundTilePosition, 90, width, height);
    }

    bgLoop.addAnimation("bgAnim", backgroundAnimation);
    bgLoop.animation.stop();

    if (checkPlanet === "moon") {
      bgLoop.animation.goToFrame(7);
    }
    if (planet.position.y > 300) {
      bgLoop.animation.goToFrame(7);
    }
    bgLoop.depth = 1;

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

function cycleBackground() {
  let bgIndex = Math.floor(movement / 50);

  if (checkPlanet === "sun") {
    backgroundTiles.forEach((tile) => {
      tile.animation.goToFrame(bgIndex);
    });
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
  currentWaterHeight = Math.floor(waterHeight);
  currentCoinCount = coinCount;
  coinReset = 0;
  // if (coinCount > 0) {
  //   addThrowCoinGroup();
  // }

  let waterReduce = setInterval(() => {
    waterGroup.forEach((element) => {
      element.position.y += 1;
    });
    waterHeight += 1;

    if (Math.floor(waterHeight) === currentWaterHeight + coinCount) {
      clearInterval(waterReduce);
    }

    if (Math.floor(waterHeight) === 500) {
      waterHeight = 499;
      clearInterval(waterReduce);
    }
    return;
  }, 100);

  let coinReduce = setInterval(() => {
    coinCount -= 1;
    if (coinCount < 1 + coinReset) {
      clearInterval(coinReduce);
      coinCount = 0 + coinReset;
    }
  }, 50);
  for (let i = 0; i < 100; i++) {
    updateSparks();
  }
  bin.remove();
}

// *******************BIN SPARKS********************

function setupSparks() {
  for (var i = 0; i < 100; i++) {
    spark[i] = new Spark();
  }
}

function drawSparks() {
  for (var i = 0; i < 100; i++) {
    spark[i].show();
    spark[i].update();
  }
}

function updateSparks() {
  spark.shift();
  newSpark = new Spark();
  spark.push(newSpark);
}

// function removeSparks() {
//   if (runner.position.x > spark[500].x) {
//     for (let i = 0; i < 500; i++) {
//       spark.shift();
//     }
//   }
// }

function Spark() {
  this.x = runner.position.x;
  this.y = runner.position.y + 20;

  this.show = function () {
    noStroke();

    fill(238, random(100, 200), 62);

    ellipse(this.x, this.y, random(1, 5), random(1, 5));
  };
  this.update = function () {
    this.y = this.y - random(-6, 10);
    this.x = this.x + random(1, 15);
  };
}

//  *************************Water*****************

function drownedCheck() {
  if (runnerSpeed < 0) {
    waterHeight += 1;
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
    waterLoop.depth = 4;
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

function waterIncrease() {
  if (runnerSpeed > 3) {
    waterGroup.forEach((element) => {
      element.position.y -= 0.03;
      // element.position.y -= 0.5;
    });
    waterHeight -= 0.03;
    foxWaterHeight -= 0.03;
  } else {
    waterGroup.forEach((element) => {
      element.position.y -= 0.4;
      // element.position.y -= 0.5;
    });
    waterHeight -= 0.4;
    foxWaterHeight -= 0.4;
  }
}

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

function collectCoin(runner, coin) {
  if (coinCount < 25) {
    coin.changeAnimation("sparkle");
    if (musicOn) {
      coinSound.play();
    }
    coin.rotationSpeed = random(-20, 20);

    if (!coinTime) {
      coinReset += 1;
      coinCount += 1;
      coinTime = true;
    }
  } else {
    ///animation
  }
}

function removeCoins() {
  for (let i = 0; i < coinGroup.length; i++) {
    if (coinGroup[i].position.x < runner.position.x - 1500) {
      coinGroup[i].remove();
    }
  }
}

// function bagState() {
//   if (coinCount === 0) {
//     return coinCount + " empty";
//   }
//   if (coinCount < 6) {
//     return coinCount + " 1/4";
//   }
//   if (coinCount < 11) {
//     return coinCount + " 1/2";
//   }
//   if (coinCount < 16) {
//     return coinCount + " 3/4";
//   }
//   if (coinCount < 21) {
//     return "full";
//   }
// }

function updateCoins() {
  fill("white");
  textFont(gameFont);
  strokeWeight(2);
  stroke("black");
  textSize(20);
  textAlign(CENTER);
  image(bottleBag, camera.position.x + 300, camera.position.y - 160);
  text(coinCount, camera.position.x + 360, camera.position.y - 125);
}

// ************* Runner Functions***************

function runnerFlash() {
  if (runnerSpeed < 7 && runnerSpeed > 0.2) {
    runner.changeAnimation("flash");
  }
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
  if (runner.position.y < 300) {
    runner.changeAnimation("run");
  }
  if (runner.touching.right) {
    runner.velocity.x = -15;
    runner.velocity.y += 30;
  }
}

function wetGround(runner, water) {
  if (!checkGameOverText) {
    updateSplash();
    drawSplash();
  } else {
    drawSplash();
  }
  if (runnerSpeed > 0) {
    runnerSpeed -= 0.05;
  }

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
    keyWentDown(UP_ARROW) &&
    (runner.velocity.y === 0 || runner.velocity.y === 1) &&
    !drowned
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

function muteOnKeyboard() {
  if (keyWentDown(77)) {
    muteGame();
  }
}

function isGameOver() {
  gameOver = !gameOver;
}

function controlls() {
  background(0, 0, 0, 10);

  fill("white");
  stroke("black");
  textAlign(CENTER);
  textFont(gameFont);
  strokeWeight(2);
  textSize(16);
  text(
    "Collect as many bottles as possible, and recycle ",
    camera.position.x,
    camera.position.y - 100
  );
  text(
    "them by putting them in the bins in order to keep  ",
    camera.position.x,
    camera.position.y - 70
  );
  text(
    "the sea level from rising !",
    camera.position.x,
    camera.position.y - 40
  );
  textSize(14);

  text(
    "Use the UP ARROW key to jump over ",
    camera.position.x,
    camera.position.y + 30
  );
  text(
    "the gaps between the platforms",
    camera.position.x,
    camera.position.y + 60
  );
  text(
    "Press Space to start the game",
    camera.position.x,
    camera.position.y + 120
  );
  text("Press M to mute", camera.position.x, camera.position.y + 150);
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
  // waterHeight -= 1;
}

function fallCheck() {
  if (
    (runner.position.y > waterHeight - 165 &&
      waterHeight > currentPlatformHeight) ||
    runner.position.y > 450
  ) {
    if (runner.position.y > 430) {
      if (!hasDrowned && runnerSpeed > 0) {
        runner.changeAnimation("splash");
        runner.velocity.x = -10;
        runner.velocity.y = 0;
        runner.position.x = waterAxisX + 50;
        runner.position.y -= 250;
        hasDrowned = true;
      }
    }
    if (!hasDrowned) {
      runner.position.y -= 50;
      // runner.velocity.y = 0;
      // runner.velocity.x = 0;
      runner.changeAnimation("splash");
      hasDrowned = true;
    }
    drowned = true;
    hasFallen = true;
    runner.depth = 3;
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
  checkPlanet = "sun";
  g = 235;
  b = 255;
  drop = [];
  setupDrops();
  planet.changeAnimation("sun");
  movement = 75;
  runner.changeAnimation("run");
  platformsGroup.removeSprites();
  backgroundTiles.removeSprites();
  coinGroup.removeSprites();
  waterGroup.removeSprites();
  cloudGroup.removeSprites();
  waterHeight = 500;
  foxWaterHeight = 0;
  playerLives = 3;
  binGroup.removeSprites();
  switchBool = true;
  index = 0;
  gameOver = false;
  newGameBool = true;
  camera.position.y = 195;
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
