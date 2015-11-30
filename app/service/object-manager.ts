/**
 * Created by gpl on 15/11/30.
 */
module App.Services {
    import Logger = App.Services.Logger;
    export class ObjectManager {
        static $inject = ['Logger', '$rootScope'];
        private logger:Logger;
        private $rootScope:ng.IScope;
        public objects = [];
        private counter:number = 0;

        constructor(logger:Logger, $rootScope:ng.IScope) {
            this.logger = logger;
            this.$rootScope = $rootScope;
            this.logger.info('object manager service init');
        }

        // give the obj a name
        public add(obj:any) {
            var me = this;
            // FIXME: improve ts.d
            this.$rootScope.safeApply(function () {
                me.counter++;
                obj.name = 'id' + me.counter.toString();
                me.objects.push(obj);
            });
        }

        public createRect() {

        }
    }
}