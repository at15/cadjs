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
            this.logger.log('object manager service init');
        }

        // TODO: trigger angular digest
        public add(obj:any) {
            console.log('add to object manager!');
            var me = this;
            me.counter++;
            obj.name = 'id' + me.counter.toString();
            me.objects.push(obj);
            console.log(me.objects.length);
        }

        public createRect() {

        }
    }
}