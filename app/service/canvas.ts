module App.Services {
    import Logger = App.Services.Logger;
    import ObjectManager = App.Services.ObjectManager;
    import Polygon = Cad.Polygon;

    import ICanvas = fabric.ICanvas;
    import Polygon = Cad.Polygon;
    import Point = Cad.Point;
    import ICircleStatic = fabric.ICircleStatic;
    import Circle = fabric.Circle;
    import Line = Cad.Line;

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

        constructor(logger:Logger, manager:ObjectManager) {
            this.logger = logger;
            this.logger.info('canvas service initializing ... ');

            this.manager = manager;
            console.log(manager);

            this.canvas = new fabric.Canvas(this.canvasId,
                {width: this.canvasWidth, height: this.canvasHeight});
            this.logger.info('canvas created ');

            // bind all the even handle here, need have a wrapper to allow use real this
            this.canvas.on('mouse:down', (options) => {
                this.mouseDownHandler(options);
            });
            // handle object select, show detail in object manager
            this.canvas.on('object:selected', (e) => {
                this.objectSelectHandler(e);
            });
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
            this.currentPolygon = new Polygon(this);
            this.cleanTempPoints();
        }

        public stopPolygon() {
            // draw last point
            // TODO: should through error when it is not a polygon
            this.currentPolygon.close();
            // do the clean up
            this.stopDrawing();
            this.drawingPolygon = false;
            this.cleanTempPoints();
        }

        protected drawTempPoint(point:Point):void {
            var c = this.manager.createTempCircle(point);
            this.canvas.add(c);
        }

        protected cleanTempPoints() {
            this.manager.cleanTemp();
        }

        public makeLine(start:Point, end:Point):Line {
            var line:Line = this.manager.createLine(start, end);
            this.canvas.add(line.getUI());
            this.logger.debug('line add to canvas');
            return line;
        }

        private mouseDownHandler(options):void {
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
                var currentPoint:Point = new Point(x, y);
                // draw a temp point to indicate
                this.drawTempPoint(currentPoint);
                // add this point to polygon, polygon itself will handle draw line
                this.currentPolygon.addPoint(currentPoint);
            }
        }

        private objectSelectHandler(e):void {
            if (this.isDrawing()) {
                return;
            }

            var object = e.target;
            var metaObject = object._cad_meta;
            console.log(object);
            this.logger.debug('[select]' + metaObject._cad_name);
            this.manager.activateObject(metaObject, this);
        }
    }
}