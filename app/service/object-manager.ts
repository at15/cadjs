/**
 * Created by gpl on 15/11/30.
 */
module App.Services {
    import Logger = App.Services.Logger;
    export class ObjectManager {
        static $inject = ['Logger'];
        private logger:Logger;

        constructor(logger:Logger) {
            this.logger = logger;
            this.logger.log('object manager service init');
        }
    }
}