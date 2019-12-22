define(['game/config'], function(config) {
    return {
        canvas : document.createElement("canvas"),
        width : function() {
            return this.canvas.width;
        },
        height : function() {
            return this.canvas.height;
        },
        setup : function() {
            this.canvas.width = config.canvasSize;
            this.canvas.height = config.canvasSize;
            this.ctx = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.getElementById("controls")); //.body.childNodes[0]);
        },
        drawCell : function(i, j, value) {
            var color = config.cellColorMap.get(value);
            if (color) {
                this.ctx.fillStyle = config.cellColorMap.get(value);
            } else {
                this.ctx.fillStyle = "#000000";
            }
            let gridPixels = config.canvasSize / config.gridSize;
            this.ctx.fillRect(gridPixels * i, gridPixels * j, gridPixels, gridPixels);
            this.ctx.font = config.textSize + " " + config.textFont;
            this.ctx.fillStyle = config.textColor;
            this.ctx.textAlign = "center";
            this.ctx.fillText(value.toString(), gridPixels * (i + 0.5), gridPixels * (j + 0.5));
        },
        draw : function(cells) {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
            for (cell of cells) {
                this.drawCell(cell[0], cell[1], cell[2]);
            }
        }
    };
});
