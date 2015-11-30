/**
 * Created by gpl on 15/11/30.
 */

angular.module('cad', [])
    .service('Logger',App.Services.Logger)
    .service('Canvas',App.Services.Canvas)
    .controller('DebugCtrl', App.Controllers.DebugCtrl)
    .controller('ObjManagerCtrl',App.Controllers.ObjManagerCtrl)
    .controller('CanvasCtrl',App.Controllers.CanvasCtrl);
