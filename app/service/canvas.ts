module App.Services {
    import Logger = App.Services.Logger;
    export class Canvas {
        private logger:Logger;

        static $inject = ['Logger'];

        constructor(logger:Logger) {
            this.logger = logger;
            this.logger.log('canvas service init')
        }

    }
}