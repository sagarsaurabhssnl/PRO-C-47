function playState() {
    if (gameState === "play") {
        playerCar.controls();
        police.controls();
        nitroSpawn();
    }
}