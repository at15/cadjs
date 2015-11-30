/**
 * Created by gpl on 15/11/30.
 */

angular.module('cad', [])
    .service('Logger', App.Services.Logger)
    .service('ObjectManager', App.Services.ObjectManager)
    .service('Canvas', App.Services.Canvas)
    .controller('DebugCtrl', App.Controllers.DebugCtrl)
    .controller('ObjectManagerCtrl', App.Controllers.ObjectManagerCtrl)
    .controller('CanvasCtrl', App.Controllers.CanvasCtrl)
    .run(['$rootScope',function($rootScope){
        $rootScope.safeApply = function(fn) {
            var phase = this.$root.$$phase;
            if(phase == '$apply' || phase == '$digest') {
                if(fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };
    }]);
