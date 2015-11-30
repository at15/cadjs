/**
 * Created by gpl on 15/11/30.
 */
module Cad {
    import Canvas = App.Services.Canvas;
    export class Polygon {
        // only used for auto close polygon
        private start:Point;
        private points:Array<Point> = [];
        private canvas:Canvas;

        constructor(canvas:Canvas) {
            this.start = null;
            this.canvas = canvas;
        }

        public isEmpty():boolean {
            return this.start === null;
        }

        public addPoint(point:Point):void {
            if (this.isEmpty()) {
                this.start = point;
            }
            this.points.push(point);

            // draw the lines
            // TODO: store the lines or the points for further dev
            var previousPoint:Point = this.getPreviousPoint();
            if (previousPoint == null) {
                return;
            } else {
                // TODO: put make line to a function, since close also use it
                this.canvas.makeLine(previousPoint, point);
            }
        }

        // TODO: get the returned line
        public close():void {
            this.canvas.makeLine(this.getLastPoint(), this.getFirstPoint());
        }

        protected getPreviousPoint():Point {
            if (this.points.length < 2) {
                return null;
            }
            return this.points[this.points.length - 2];
        }

        public getFirstPoint():Point {
            return this.points[0];
        }

        public getLastPoint():Point {
            return this.points[this.points.length - 1];
        }
    }
}