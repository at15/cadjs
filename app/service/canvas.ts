module App.Services {
    import Logger = App.Services.Logger;
    import ObjectManager = App.Services.ObjectManager;

    import ICanvas = fabric.ICanvas;

    export class Canvas {
        static $inject = ['Logger', 'ObjectManager'];

        private logger:Logger;
        private manager:ObjectManager;

        private canvasId = "canvas";
        private canvasWidth = 500;
        private canvasHeight = 500;
        private canvas:ICanvas;

        constructor(logger:Logger, manager:ObjectManager) {
            this.logger = logger;
            this.logger.log('canvas service initializing ... ');

            this.manager = manager;

            this.canvas = new fabric.Canvas(this.canvasId,
                {width: this.canvasWidth, height: this.canvasHeight});
            this.logger.log('canvas created ');

            // bind all the even handle here
        }

        public add(obj:any) {
            this.manager.add(obj);
            this.canvas.add(obj);
        }

    }
}