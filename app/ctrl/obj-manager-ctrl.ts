/**
 * Created by gpl on 15/11/30.
 */
module App.Controllers {
    import Logger = App.Services.Logger;
    export class ObjManagerCtrl {
        static $inject = ['Logger'];

        public title = 'object manager';
        public filterWord = '';
        public objects = ['a', 'b', 'c'];

        private logger:Logger;

        constructor(logger:Logger) {
            console.log(logger.ping());
            this.logger = logger;
            this.logger.log('object manager init ');
        }
    }
}