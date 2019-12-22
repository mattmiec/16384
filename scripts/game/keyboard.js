define([], function () {
    return {
        handled : false,
        init : function (inputHandler) {
            window.addEventListener('keydown', function (e) {
                if (this.handled) {
                    return;
                }
                this.handled = true;
                if (e.key == "ArrowRight") {
                    return inputHandler.swipeRight();
                } else if (e.key == "ArrowDown") {
                    return inputHandler.swipeDown();
                } else if (e.key == "ArrowLeft") {
                    return inputHandler.swipeLeft();
                } else if (e.key == "ArrowUp") {
                    return inputHandler.swipeUp();
                }
            });
            window.addEventListener('keyup', function (e) {
                this.handled = false;
            });
        }
    };
});