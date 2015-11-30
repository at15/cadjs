/**
 * Created by gpl on 15/11/30.
 */

angular.module('cad', [])
    .service('Logger',App.Services.Logger)
    .controller('DebugCtrl', App.Controllers.DebugCtrl)
    .controller('ObjManagerCtrl',App.Controllers.ObjManagerCtrl);
