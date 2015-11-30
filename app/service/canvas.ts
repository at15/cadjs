module App.Services {
    import Logger = App.Services.Logger;
    import ICanvas = fabric.ICanvas;
    export class Canvas {
        static $inject = ['Logger'];

        private logger:Logger;

        private canvasId = "canvas";
        private canvasWidth = 500;
        private canvasHeight = 500;
        private canvas:ICanvas;

        constructor(logger:Logger) {
            this.logger = logger;
            this.logger.log('canvas service initializing ... ');

            this.canvas = new fabric.Canvas(this.canvasId,
                {width: this.canvasWidth, height: this.canvasHeight});
            this.logger.log('canvas created ');

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