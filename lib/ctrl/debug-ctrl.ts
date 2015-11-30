/**
 * Created by gpl on 15/11/30.
 */
module App.Controllers {
    export class DebugCtrl {
        //scope:any;
        public title = 'debug';
        static $inject = ['$scope'];

        //constructor($scope:ng.IScope) {
        //    this.scope = $scope;
        //}
        constructor() {
        }

        public ping() {
            this.title = 'ping';
        }
    }
}