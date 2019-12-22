define([], function () {
    return function inputHandler (grid, nextState) {
        this.swipeUp = window.swipeUp = function swipeUp() {
            nextState(grid.swipeUp());
        };
        this.swipeLeft = window.swipeLeft = function swipeLeft() {
            nextState(grid.swipeLeft());
        };
        this.swipeRight = window.swipeRight = function swipeRight() {
            nextState(grid.swipeRight());
        };
        this.swipeDown = window.swipeDown = function swipeDown() {
            nextState(grid.swipeDown());
        };
    }
})
