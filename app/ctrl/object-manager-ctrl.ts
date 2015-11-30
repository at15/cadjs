/**
 * Created by gpl on 15/11/30.
 */
module App.Controllers {
    import Logger = App.Services.Logger;
    import ObjectManager = App.Services.ObjectManager;
    export class ObjectManagerCtrl {
        static $inject = ['Logger','ObjectManager'];

        public title = 'object manager';
        public objects = ['a', 'b', 'c'];

        private logger:Logger;
        private manager:ObjectManager;

        constructor(logger:Logger, manager:ObjectManager) {
            console.log(logger.ping());
            this.logger = logger;
            this.manager = manager;
            this.logger.log('object manager ctrl init ');
        }
    }
}