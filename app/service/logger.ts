/**
 * Created by gpl on 15/11/30.
 */
module App.Services {
    export class Logger {
        static $inject = ['$rootScope'];
        private $rootScope:ng.IScope;
        public data = [];
        private pingCount:number;

        constructor($rootScope:ng.IScope) {
            this.pingCount = 0;
            this.$rootScope = $rootScope;
        }

        public ping() {
            this.pingCount++;
            return "pong " + this.pingCount.toString();
        }

        private log(msg:string) {
            var me = this;
            this.$rootScope.safeApply(function () {
                me.data.push(msg);
            });
        }

        public info(msg:string):void {
            this.log('[info] ' + msg);
            console.info(msg);
        }

        public debug(msg:string):void {
            this.log('[debug] ' + msg);
            console.debug(msg);
        }

        public clear() {
            this.data.length = 0;
            // NOTE: this.data = []; won't work, because controller using this will lost reference
        }
    }
}