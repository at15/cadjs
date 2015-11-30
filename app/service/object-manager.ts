/**
 * Created by gpl on 15/11/30.
 */
module App.Services {
    import Logger = App.Services.Logger;
    import Point = Cad.Point;
    import ICircle = fabric.ICircle;
    import ILine = fabric.ILine;

    export class ObjectManager {
        static $inject = ['Logger', '$rootScope'];

        private logger:Logger;
        //private $rootScope:ng.IScope;
        private $rootScope;


        public objects = [];
        // counter for generate id
        private counter:number = 0;

        // cursor
        public currentObject = null;

        // temp vars
        private tempPoints:Array<Circle> = [];

        constructor(logger:Logger, $rootScope:ng.IScope) {
            this.logger = logger;
            this.$rootScope = $rootScope;
            this.logger.info('object manager service init');
        }

        // give the obj a name
        protected add(obj:any, type:string) {
            var me = this;
            // FIXME: improve ts.d
            this.$rootScope.safeApply(function () {
                me.counter++;
                obj._cad_name = 'id-' + me.counter.toString();
                obj._cad_type = type;
                me.objects.push(obj);
            });
        }

        public createLine(start:Point, end:Point):ILine {
            var line = new fabric.Line([
                start.x,
                start.y,
                end.x,
                end.y
            ], {
                fill: 'red',
                stroke: 'red',
                strokeWidth: 5
                //selectable: false
            });
            this.add(line, 'line');
            this.logger.debug('[create][line]');
            return line;
        }

        public createTempCircle(point:Point):ICircle {
            // TODO: set the color for the previous temp point
            var c = new fabric.Circle({
                left: point.x - 5,
                top: point.y - 5,
                strokeWidth: 2,
                radius: 5,
                fill: '#fff',
                stroke: '#666',
                selectable: false
            });
            this.logger.debug('[create][circle][tmp]');
            this.tempPoints.push(c);
            return c;
        }

        public cleanTemp() {
            // clean temp points
            var points = this.tempPoints;
            for (var i = 0; i < points.length; i++) {
                // FIXME: blame on .d.ts or var points = xx?
                points[i].remove();
            }
            this.logger.info('clean up all the temp points');
        }

        public activateObject(obj:any, canvas:Canvas) {
            this.logger.debug('[manager][activate] ' + obj._cad_name);
            this.currentObject = obj;
            this.$rootScope.$broadcast('object.activate', obj);
        }
    }
}