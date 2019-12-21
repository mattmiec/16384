define(['game/config',
    'game/gameArea',
    'game/keyboard',
    'game/gameState'],
    function (config,
              gameArea,
              keyboard,
              gameState)
    {

    gameArea.setup();
    let grid = new gameState();
    grid.newTile();
    let inputHandler = new keyboard(grid, nextState);
    gameArea.draw(grid.getCells());

    function nextState(actionTaken) {
        if (!actionTaken) {
            return;
        }
        grid.newTile();
        gameArea.draw(grid.getCells());
    }
});

