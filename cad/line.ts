/**
 * Created by gpl on 15/11/30.
 */
module Cad {
    export class Line {
        public start:Point;
        public end:Point;

        constructor(start:Point, end:Point) {
            this.start = start;
            this.end = end;
        }
    }
}