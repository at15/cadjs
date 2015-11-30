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
            var me = this;
            this.logger = logger;
            this.logger.log('canvas service initializing ... ');

            this.manager = manager;
            console.log(manager);

            this.canvas = new fabric.Canvas(this.canvasId,
                {width: this.canvasWidth, height: this.canvasHeight});
            this.logger.log('canvas created ');

            // bind all the even handle here
            this.canvas.on('mouse:down', function (options) {
                me.mousedown(options);
            });
        }

        public add(obj:any) {
            this.canvas.add(obj);
            this.manager.add(obj);
        }

        private mousedown(options) {
            var target = options.e;
            // console.log(target);
            // draw a circle
            var radius = 20;
            var circle = new fabric.Circle({
                left: target.x - radius,
                top: target.y - radius,
                fill: 'white',
                radius: radius
            });
            this.add(circle);
        }

    }
}