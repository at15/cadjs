/**
 * Created by gpl on 15/11/30.
 */
module Cad {
    export class Polygon {
        // only used for auto close polygon
        private start:Point;
        private points:Array<Point> = [];

        constructor() {
            this.start = null;
        }

        public isEmpty():boolean {
            return this.start === null;
        }

        public addPoint(point:Point):void {
            if (this.isEmpty()) {
                this.start = point;
            }
            // TODO: draw the line between points
            this.points.push(point);
        }

        public getFirstPoint():Point {
            return this.points[0];
        }
    }
}