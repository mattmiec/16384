define(['game/config',
    'game/gameArea',
    'game/keyboard',
    'game/gameState',
    'game/input'],
    function (config,
              gameArea,
              keyboard,
              gameState,
              input)
    {

    gameArea.setup();
    let grid = new gameState();
    grid.newTile();
    let inputHandler = new input(grid, nextState);
    keyboard.init(inputHandler);
    gameArea.draw(grid.getCells());

    function nextState(actionTaken) {
        if (!actionTaken) {
            return;
        }
        document.getElementById("score").innerHTML = grid.getScore();
        grid.newTile();
        gameArea.draw(grid.getCells());
    }
});

