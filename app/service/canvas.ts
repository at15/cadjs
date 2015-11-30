module App.Services {
    import Logger = App.Services.Logger;
    import ObjectManager = App.Services.ObjectManager;
    import Polygon = Cad.Polygon;

    import ICanvas = fabric.ICanvas;
    import Polygon = Cad.Polygon;
    import Point = Cad.Point;
    import ICircleStatic = fabric.ICircleStatic;

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
        private drawingPolygon:boolean = false;

        // temp vars
        private currentPolygon:Polygon;
        private tempPoints:Array<ICircleStatic> = [];

        constructor(logger:Logger, manager:ObjectManager) {
            var me = this;
            this.logger = logger;
            this.logger.info('canvas service initializing ... ');

            this.manager = manager;
            console.log(manager);

            this.canvas = new fabric.Canvas(this.canvasId,
                {width: this.canvasWidth, height: this.canvasHeight});
            this.logger.info('canvas created ');

            // bind all the even handle here, need have a wrapper to allow use real this
            this.canvas.on('mouse:down', function (options) {
                me.mousedown(options);
            });
        }

        // TODO: this should not be used directly
        public add(obj:any):void {
            this.canvas.add(obj);
            this.manager.add(obj);
        }

        public isDrawing():boolean {
            return this.drawing;
        }

        public startDrawing():void {
            this.drawing = true;
        }

        public stopDrawing():void {
            this.drawing = false;
        }

        public isDrawingPolygon():boolean {
            return this.isDrawing() && this.drawingPolygon;
        }

        public startPolygon() {
            this.startDrawing();
            this.drawingPolygon = true;
            this.currentPolygon = new Polygon();

        }

        public stopPolygon() {
            this.stopDrawing();
            this.drawingPolygon = false;
        }

        public drawTempPoint(x:number, y:number):void {
            var c = new fabric.Circle({
                left: x,
                top: y,
                strokeWidth: 2,
                radius: 5,
                fill: '#fff',
                stroke: '#666'
            });
            this.canvas.add(c);
            this.tempPoints.push(c);
        }

        private mousedown(options):void {
            // skip if we are not in drawing mode
            if (!this.isDrawing()) {
                return;
            }

            var target = options.e;
            var x = target.x;
            var y = target.y;

            // target.x, target.y
            this.logger.debug('x:' + x + ' y:' + y);

            // determine we are drawing polygon or adding restriction
            if (this.isDrawingPolygon()) {
                this.logger.debug('drawing polygon');
                this.currentPolygon.addPoint(new Point(x, y));
                // draw a temp point to
                this.drawTempPoint(x, y);

            }


        }

    }
}