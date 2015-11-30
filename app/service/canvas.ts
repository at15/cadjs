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

        // flags
        private drawing:boolean = false;

        constructor(logger:Logger, manager:ObjectManager) {
            var me = this;
            this.logger = logger;
            this.logger.log('canvas service initializing ... ');

            this.manager = manager;
            console.log(manager);

            this.canvas = new fabric.Canvas(this.canvasId,
                {width: this.canvasWidth, height: this.canvasHeight});
            this.logger.log('canvas created ');

            // bind all the even handle here, need have a wrapper to allow use real this
            this.canvas.on('mouse:down', function (options) {
                me.mousedown(options);
            });
        }

        public add(obj:any):void {
            this.canvas.add(obj);
            this.manager.add(obj);
        }

        public isDrawing():boolean {
            return this.drawing;
        }

        public setDrawing():void {
            this.drawing = true;
        }

        public disableDrawing():void {
            this.drawing = false;
        }

        private mousedown(options):void {
            // skip if we are not in drawing mode
            if (!this.isDrawing()) {
                return;
            }
            // detrmine we are drawing polygon or adding restriction

            var target = options.e;
            // target.x, target.y
        }

    }
}