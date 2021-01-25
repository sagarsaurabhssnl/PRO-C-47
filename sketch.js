let playerCar, carImg, carSpeed = -20;
let track1, track2, trackImg, trackDist = 0;
let distCheck, trackSelector;
let distance, playerX = [75, 285, 500, 665, 880, 1095], playerxPos;
let obsImg1, obsImg2, obsImg3, obsImg4, obsImg5, obsImg6, obsImg7, obsImg8, obstacleImg = [];
let obs = [], obsCount = 0, obsDist = 0;
let gameState = "mainmenu";
let police, policeGroup, policeCarImg;
let started = false;
let policeCarDiffrence;
let changeCamera = false;
let nitro, nitroImg, nitroTime = 0, nitroTriggered = false, nitroSpawned = false;
let blast, blastAnimation;

function preload() {
    nitroImg = loadImage("img/nitro.png");
    carImg = loadImage("img/player.png");
    trackImg = loadImage("img/track.png");
    obsImg1 = loadImage("img/1.png");
    obsImg2 = loadImage("img/2.png");
    obsImg3 = loadImage("img/3.png");
    obsImg4 = loadImage("img/4.png");
    obsImg5 = loadImage("img/5.png");
    obsImg6 = loadImage("img/6.png");
    obsImg7 = loadImage("img/7.png");
    obsImg8 = loadImage("img/8.png");
    obstacleImg = [obsImg1, obsImg2, obsImg3, obsImg4, obsImg5, obsImg6, obsImg7, obsImg8];
    policeCarImg = loadImage("img/police.png");
    policeGroup = new Group();
    blastAnimation = loadAnimation("img/blast/1.png", "img/blast/2.png", "img/blast/3.png", "img/blast/4.png", "img/blast/5.png", "img/blast/6.png", "img/blast/7.png", "img/blast/8.png", "img/blast/9.png", "img/blast/10.png")
}

function setup() {
    var mainCanvas = createCanvas(1180, 600);
    playerCar = new Player();
    police = new Policecar(playerCar.car.y);
    policeCarDiffrence = police.car1.y - playerCar.car.y;
    // camera.position.y = playerCar.car.y+1000;
    setTimeout(() => {
        changeCamera = true;
    }, 1000);
    blast = createSprite(playerCar.car.x, playerCar.car.y);
    blast.addAnimation("blast", blastAnimation);
    blast.pause();
    distance = ((playerCar.car.y - 300) * -1);
}

function draw() {
    background(150);
    distance = ((playerCar.car.y - 300));
    // console.log(distance);
    policeCarDiffrence = police.car1.y - playerCar.car.y;
    policeCarDiffrence = Math.round(policeCarDiffrence);
    playState();
    drawSprites();
    push();
    translate(camera.x - 570, camera.y + 200);
    fill(200);
    rect(0, 0, 200, 80);
    fill(0);
    text("Press C for Source Code", 5, 15);
    text("Press R to reload the game", 5, 30);
    text("Game is under construction", 5, 45);
    text("Away From Police Car :" + policeCarDiffrence, 5, 75);
    text("Use Arrow keys to control the car", 5, 60);
    pop();
    fill(150);
    if (started === true) {
        rect(950, camera.position.y + 250, 200, 20);
        fill("#ff0000");
        rect(950, camera.position.y + 250, playerCar.vel * -10, 20);
        if (nitroTime > 0) {
            fill("#0000ff");
            rect(950, camera.position.y + 200, nitroTime * 10, 20);
        }
    }
}

function switchTrack() {
    if (trackSelector === track1) {
        trackSelector = track2;
    } else if (trackSelector === track2) {
        trackSelector = track1;
    }
}

function keyPressed() {
    if (keyCode === 67) {
        window.location.href
    }
    if (keyCode === 38 && gameState === "mainmenu") {
        gameState = "play";
    }
    if (keyCode === 82) {
        window.location.reload(false);
    }
    if (keyCode === 37 && playerxPos > 0 && gameState === "play") {
        playerxPos -= 1;
        // console.log(playerX[playerxPos]);
        // for (var z = playerCar.car.x; z < playerX[playerxPos]; z--) {
        //     playerCar.car.x = z;
        // }
    }
    if (keyCode === 39 && playerxPos < 5 && gameState === "play") {
        playerxPos += 1;
    }
    if (keyCode === 32 && nitroTriggered === false) {        
        nitroTriggered = true;
        for (var ni = nitroTime; ni < nitroTime; n++) {
            console.log("triggered");
            setTimeout(() => {
                nitroTime -= 1;
            }, 100);
        }
    }
}
function distanceCheck(referencePoint1, referencePoint2, distanceParameter) {
    if (referencePoint1 - distanceParameter > referencePoint2) {
        return true;
    } else {
        return false;
    }
}