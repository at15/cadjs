module App.Services {
    import Logger = App.Services.Logger;
    import ICanvas = fabric.ICanvas;
    export class Canvas {
        static $inject = ['Logger'];

        private logger:Logger;
        //private paper:RaphaelPaper;
        //private paperId = "paper";
        //private paperWidth = 500;
        //private paperHeight = 500;

        private canvasId = "canvas";
        private canvasWidth = 500;
        private canvasHeight = 500;
        private canvas:ICanvas;

        constructor(logger:Logger) {
            this.logger = logger;
            this.logger.log('canvas service init');

            //// init the real canvas
            //this.paper = Raphael(document.getElementById(this.paperId),
            //    this.paperWidth, this.paperHeight);
            //// TODO: check if the logger truly init
            //this.logger.log('paper init');

            // TODO: change the size of the canvas
            this.canvas = new fabric.Canvas(this.canvasId,
                {width: this.canvasWidth, height: this.canvasHeight});
            this.logger.log('canvas init');

            // create a rectangle object
            var rect = new fabric.Rect({
                left: 100,
                top: 100,
                fill: 'white',
                width: 20,
                height: 20,
                angle: 45
            });

            // "add" rectangle onto canvas
            this.canvas.add(rect);
        }

    }
}