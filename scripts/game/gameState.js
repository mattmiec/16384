define(['game/config'], function (config) {
        function emptyGrid() {
            let grid = new Array(config.gridSize);
            for (let i = 0; i < config.gridSize; i++) {
                grid[i] = new Array(config.gridSize);
            }
            return grid;
        }

        function gameState() {
            this.grid = emptyGrid();
            for (let i = 0; i < config.gridSize; i++) {
                for (let j = 0; j < config.gridSize; j++) {
                    this.grid[i][j] = null;
                }
            }
            this.getCells = function () {
                let cells = [];
                for (let i = 0; i < config.gridSize; i++) {
                    for (let j = 0; j < config.gridSize; j++) {
                        if (this.grid[i][j] != null) {
                            cells.push([i, j, this.grid[i][j]]);
                        }
                    }
                }
                return cells;
            };
            this.getEmptyCells = function () {
                let emptyCells = [];
                for (let i = 0; i < config.gridSize; i++) {
                    for (let j = 0; j < config.gridSize; j++) {
                        if (this.grid[i][j] == null) {
                            emptyCells.push([i, j]);
                        }
                    }
                }
                return emptyCells;
            };
            this.newTile = function () {
                let emptyCells = this.getEmptyCells();
                if (emptyCells.length == 0) {
                    return false;
                }
                let index = Math.floor(Math.random() * emptyCells.length);
                if (Math.random() < config.prob1) {
                    var newTile = 1;
                } else {
                    var newTile = 2;
                }
                this.grid[emptyCells[index][0]][emptyCells[index][1]] = newTile;
                return true;
            };
            this.reflectHorizontal = function () {
                let newGrid = emptyGrid();
                for (let i = 0; i < config.gridSize; i++) {
                    for (let j = 0; j < config.gridSize; j++) {
                        newGrid[i][j] = this.grid[config.gridSize - i - 1][j];
                    }
                }
                this.grid = newGrid;
            };
            this.reflectVertical = function () {
                let newGrid = emptyGrid();
                for (let i = 0; i < config.gridSize; i++) {
                    for (let j = 0; j < config.gridSize; j++) {
                        newGrid[i][j] = this.grid[i][config.gridSize - j - 1];
                    }
                }
                this.grid = newGrid;
            };
            this.swipeLeft = function () {
                let actionTaken = false;
                for (let j = 0; j < config.gridSize; j++) {
                    for (let i = 0; i < config.gridSize - 1; i++) {
                        for (let ii = i + 1; ii < config.gridSize; ii++) {
                            if ((this.grid[i][j] == null) && (this.grid[ii][j] != null)) {
                                this.grid[i][j] = this.grid[ii][j];
                                this.grid[ii][j] = null;
                                actionTaken = true;
                                break;
                            } else if ((this.grid[i][j] != null) && (this.grid[i][j] == this.grid[ii][j])) {
                                this.grid[i][j] = this.grid[i][j] * 2;
                                this.grid[ii][j] = null;
                                actionTaken = true;
                                break;
                            }
                        }
                    }
                }
                return actionTaken;
            };
            this.swipeRight = function () {
                this.reflectHorizontal();
                let actionTaken = this.swipeLeft();
                this.reflectHorizontal();
                return actionTaken;
            };
            this.swipeUp = function () {
                let actionTaken = false;
                for (let i = 0; i < config.gridSize; i++) {
                    for (let j = 0; j < config.gridSize - 1; j++) {
                        for (let jj = j + 1; jj < config.gridSize; jj++) {
                            if ((this.grid[i][j] == null) && (this.grid[i][jj] != null)) {
                                this.grid[i][j] = this.grid[i][jj];
                                this.grid[i][jj] = null;
                                actionTaken = true;
                                break;
                            } else if ((this.grid[i][j] != null) && (this.grid[i][j] == this.grid[i][jj])) {
                                this.grid[i][j] = this.grid[i][j] * 2;
                                this.grid[i][jj] = null;
                                actionTaken = true;
                                break;
                            }
                        }
                    }
                }
                return actionTaken;
            };
            this.swipeDown = function () {
                this.reflectVertical();
                let actionTaken = this.swipeUp();
                this.reflectVertical();
                return actionTaken;
            };
            this.getScore = function () {
                let score = 0;
                for (let i = 0; i < config.gridSize; i++) {
                    for (let j = 0; j < config.gridSize; j++) {
                        if (this.grid[i][j] != null) {
                            score += this.grid[i][j];
                        }
                    }
                }
                return score;
            }
        }
    return gameState;
});