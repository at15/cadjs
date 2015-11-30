/**
 * Created by gpl on 15/11/30.
 */
module App.Services {
    import Logger = App.Services.Logger;
    import Point = Cad.Point;
    import ICircle = fabric.ICircle;

    export class ObjectManager {
        static $inject = ['Logger', '$rootScope'];

        private logger:Logger;
        private $rootScope:ng.IScope;

        public objects = [];
        private counter:number = 0;

        // temp vars
        private tempPoints:Array<Circle> = [];

        constructor(logger:Logger, $rootScope:ng.IScope) {
            this.logger = logger;
            this.$rootScope = $rootScope;
            this.logger.info('object manager service init');
        }

        // give the obj a name
        public add(obj:any) {
            var me = this;
            // FIXME: improve ts.d
            this.$rootScope.safeApply(function () {
                me.counter++;
                obj.name = 'id' + me.counter.toString();
                me.objects.push(obj);
            });
        }

        public createLine() {

        }

        public createTempCircle(point:Point):ICircle {
            var c = new fabric.Circle({
                left: point.x - 5,
                top: point.y - 5,
                strokeWidth: 2,
                radius: 5,
                fill: '#fff',
                stroke: '#666',
                selectable: false
            });
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
    }
}