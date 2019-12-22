define([], function() {
    return {
        canvasSize: 500,
        gridSize: 5,
        prob1: 0.8,
        textColor: 'white',
        textSize: '24px',
        textFont: 'Georgia',
        cellColorMap: new Map([
            [1, "#00A5F9"],
            [2, "#87C735"],
            [4, "#FF9A00"],
            [8, "#FF5500"],
            [16, "#3E49BB"],
            [32, "#009888"],
            [64, "#5F7D8E"],
            [128, "#FFCD00"],
            [256, "#32C12C"],
            [512, "#7C5547"],
            [1024, "#50342C"],
            [2048, "#526EFF"],
            [4096, "#7F4FC9"],
            [8192, "#682CBF"],
            [16384, "#000000"]
        ])
    }
});
