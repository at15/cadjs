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
            this.logger.info('canvas ctrl init');
        }

        public startDraw():void {
            this.canvas.startDrawing()
        }

        public stopDraw():void {
            this.canvas.stopDrawing();
        }

        public startPolygon():void {
            this.logger.info('start drawing polygon, click first point');
            this.canvas.startPolygon();
        }

        public stopPolygon():void {
            this.logger.info('stop drawing polygon');
            this.canvas.stopPolygon();
        }
    }
}