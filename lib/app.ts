/**
 * Created by gpl on 15/11/30.
 */

angular.module('cad', []);
//.controller('DebugCtrl',['scope', ($scope) => new App.Controllers.DebugCtrl($scope)]);
angular.module('cad')
    //.controller('DebugCtrl', DebugCtrl);
    //.controller('DebugCtrl', TestCtrl);
    .controller('DebugCtrl', App.Controllers.DebugCtrl);
//.controller('DebugCtrl', function ($scope) {
//    $scope.data = {message: 'Hello'};
//});

// just some comment to test watch