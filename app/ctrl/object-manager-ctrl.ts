/**
 * Created by gpl on 15/11/30.
 */
module App.Controllers {
    import Logger = App.Services.Logger;
    import ObjectManager = App.Services.ObjectManager;
    export class ObjectManagerCtrl {
        static $inject = ['Logger', 'ObjectManager', '$scope'];

        public title = 'object manager';
        public objects;
        public active;

        private logger:Logger;
        private manager:ObjectManager;
        private $scope:ng.IScope;

        constructor(logger:Logger, manager:ObjectManager, $scope:ng.IScope) {
            console.log(logger.ping());

            this.logger = logger;
            this.manager = manager;
            this.$scope = $scope;
            this.objects = this.manager.objects;

            this.$scope.$on('object.activate', (event:ng.IAngularEvent, obj:any) => {
                this.objectActivateHandler(obj);
            });


            this.logger.info('object manager ctrl init ');


        }

        public objectActivateHandler(obj:any) {
            this.active = obj;
        }
    }
}