define([], function () {
    return function KeyboardHandler(grid, callback) {
        this.handled = false;
        window.addEventListener('keydown', function (e) {
            if (this.handled) {
                return;
            }
            this.handled = true;
            let actionTaken = false
            if (e.key == "ArrowRight") {
                actionTaken = grid.swipeRight();
            } else if (e.key == "ArrowDown") {
                actionTaken = grid.swipeDown();
            } else if (e.key == "ArrowLeft") {
                actionTaken = grid.swipeLeft();
            } else if (e.key == "ArrowUp") {
                actionTaken = grid.swipeUp();
            }
            callback(actionTaken);
        });
        window.addEventListener('keyup', function (e) {
            this.handled = false;
        });
    };
});