/**
 * Created by gpl on 15/11/30.
 */
// a dev console service and controller, it shows
// 1. current position of cursor in browser
// 2. current position of cursor in canvas
// 3. error and debug log

function Console() {
    var c = this;
    var data = [];
    c.data = data;

    c.log = function () {
        // TODO: parse and add useful information
        data.push(arguments[0]);
        // just log every thing to console as well
        //console.log(arguments);
        console.log.apply(console, arguments);
    };

    c.click = function () {
        // TODO: implement log for click
    }
}

function ConsoleCtrl(Console) {
    var ctrl = this;
    var console = Console;
    ctrl.logs = Console.data;

    ctrl.click = function () {
        console.log('test', 2, 3);
    }
}

angular.module('cad')
    .service('Console', [Console])
    .controller('ConsoleCtrl', ['Console', ConsoleCtrl]);