function mainMenuSetup(){
    
}

function mainMenu() {
    if (gameState === "menu") {
        if (changeCamera && gameState === "mainmenu" && camera.position.y >playerCar.car.x) {
            camera.position.y -= 10;
        } else {
            camera.position.y -= 10;
        }
    }
}