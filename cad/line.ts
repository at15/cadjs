/**
 * Created by gpl on 15/11/30.
 */
module Cad {
    import ILine = fabric.ILine;
    export class Line {
        public start:Point;
        public end:Point;
        private uiLine:ILine;
        //private lines:

        constructor(start:Point, end:Point) {
            this.start = start;
            this.end = end;
        }

        public setUiLine(line:ILine):void {
            this.uiLine = line;
        }

    }
}