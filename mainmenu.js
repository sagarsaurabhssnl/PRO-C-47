function mainMenuSetup() {

}

function mainMenu() {
    if (changeCamera === true && gameState === "mainmenu" && camera.position.y > playerCar.car.y) {
        camera.position.y -= 50;
    } else if(camera.position.y > playerCar.car.y){
        camera.position.y -= 2;
    }
}