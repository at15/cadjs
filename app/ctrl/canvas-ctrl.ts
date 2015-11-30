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
        }
    }
}