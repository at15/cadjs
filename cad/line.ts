/**
 * Created by gpl on 15/11/30.
 */
module Cad {
    import ILine = fabric.ILine;
    //export class Line extends ILine implements Meta{
    //export class Line extends ILine{
    export class Line {
        public start:Point;
        public end:Point;

        constructor(start:Point, end:Point) {
            super();
            this.start = start;
            this.end = end;
        }

    }
}