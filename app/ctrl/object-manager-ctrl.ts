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

            var me = this;

            this.logger = logger;
            this.manager = manager;
            this.$scope = $scope;
            this.objects = this.manager.objects;

            this.$scope.$on('object.activate', function (event:ng.IAngularEvent, obj:any) {
                me.objectActivateHandler(obj);
            });


            this.logger.info('object manager ctrl init ');


        }

        public objectActivateHandler(obj:any) {
            ////console.log('got obj!', obj);
            //var me = this;
            //this.$scope.$apply(function () {
            //    me.active = obj;
            //});
            ////console.log(arguments);
            this.active = obj;
        }
    }
}