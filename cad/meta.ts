/**
 * Created by gpl on 15/12/1.
 */
module Cad {
    export abstract class Meta {
        public _cad_name:string;
        public _cad_type:string;

        public abstract getUI():any;

        public setName(name:string) {
            this._cad_name = name;
        }
    }
}