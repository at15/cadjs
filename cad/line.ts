/**
 * Created by gpl on 15/11/30.
 */
module Cad {
    import ILine = fabric.ILine;
    export class Line extends Meta {
        public start:Point;
        public end:Point;
        public ui:ILine;

        constructor(start:Point, end:Point) {
            this.start = start;
            this.end = end;
            this._cad_type = 'line';
        }

        public setUI(line:ILine) {
            this.ui = line;
        }

        public getUI():ILine {
            return this.ui;
        }

    }
}