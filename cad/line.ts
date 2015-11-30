/**
 * Created by gpl on 15/11/30.
 */
module Cad {
    export class Line extends Meta{
        public start:Point;
        public end:Point;

        constructor(start:Point, end:Point) {
            //super();
            this.start = start;
            this.end = end;
        }

    }
}