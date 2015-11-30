/**
 * Created by gpl on 15/11/30.
 */

angular.module('cad', [])
    .service('Logger', App.Services.Logger)
    .service('ObjManager', App.Services.ObjectManager)
    .service('Canvas', App.Services.Canvas)
    .controller('DebugCtrl', App.Controllers.DebugCtrl)
    .controller('ObjectManagerCtrl', App.Controllers.ObjectManagerCtrl)
    .controller('CanvasCtrl', App.Controllers.CanvasCtrl);
