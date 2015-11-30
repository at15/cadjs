/**
 * Created by gpl on 15/11/30.
 */
module App.Controllers {
    import Canvas = App.Services.Canvas;
    import Logger = App.Services.Logger;

    export class CanvasCtrl {
        static $inject = ['Logger', 'Canvas'];
        private canvas:Canvas;
        private logger:Logger;

        constructor(logger:Logger, canvas:Canvas) {
            this.canvas = canvas;
            this.logger = logger;
            this.logger.log('canvas ctrl init');

            // create a rectangle object
            var rect = new fabric.Rect({
                left: 100,
                top: 100,
                fill: 'white',
                width: 20,
                height: 20,
                angle: 45
            });

            this.canvas.add(rect);
        }
    }
}