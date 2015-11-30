/**
 * Created by gpl on 15/11/30.
 */
module App.Services {
    export class Logger {
        public data = [];
        private pingCount:number;

        constructor() {
            this.pingCount = 0;
        }

        public ping() {
            this.pingCount++;
            return "pong " + this.pingCount.toString();
        }

        public log(msg:string) {
            this.data.push(msg);
        }

        public clear() {
            this.data.length = 0;
            // NOTE: this.data = []; won't work, because controller using this will lost reference
        }
    }
}