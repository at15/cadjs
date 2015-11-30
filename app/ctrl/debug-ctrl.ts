/**
 * Created by gpl on 15/11/30.
 */
module App.Controllers {
    import Logger = App.Services.Logger;
    export class DebugCtrl {
        static $inject = ['Logger'];

        public title = 'debug';
        public filterWord = '';
        public logs = [];
        private logger:Logger;

        constructor(logger:Logger) {
            console.log(logger.ping());
            this.logger = logger;
            this.logs = logger.data;

            this.logger.log('debug ctrl init');
        }

        public clear() {
            this.logger.clear();
        }
    }
}