/**
 * Created by gpl on 15/11/30.
 */
module App.Services {
    import Logger = App.Services.Logger;
    import Point = Cad.Point;
    import Line = Cad.Line;
    import ICircle = fabric.ICircle;
    import Line = Cad.Line;


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
        private tempPoints = [];

        constructor(logger:Logger, $rootScope:ng.IScope) {
            this.logger = logger;
            this.$rootScope = $rootScope;
            this.logger.info('object manager service init');
        }

        // give the obj a name
        protected add(obj:any) {
            this.$rootScope.safeApply(() => {
                obj.setName(this.generateName());
                // TODO: a hack to get the meta object
                obj.getUI()._cad_meta = obj;
                this.objects.push(obj);
            });
        }

        protected generateName() {
            this.counter++;
            return 'id-' + this.counter.toString();
        }

        public createLine(start:Point, end:Point):Line {
            var ui = new fabric.Line([
                start.x,
                start.y,
                end.x,
                end.y
            ], {
                fill: 'red',
                stroke: 'red',
                strokeWidth: 5
            });
            var line = new Line(start, end);
            line.setUI(ui);
            this.add(line);
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
            var points = this.tempPoints;
            for (var i = 0; i < points.length; i++) {
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