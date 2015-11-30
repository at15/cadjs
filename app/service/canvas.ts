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
        private canvas:ICanvas;

        constructor(logger:Logger) {
            this.logger = logger;
            this.logger.log('canvas service init');

            //// init the real canvas
            //this.paper = Raphael(document.getElementById(this.paperId),
            //    this.paperWidth, this.paperHeight);
            //// TODO: check if the logger truly init
            //this.logger.log('paper init');

            this.canvas = new fabric.Canvas(this.canvasId);
            this.logger.log('canvas init');
        }

    }
}