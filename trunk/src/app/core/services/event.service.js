(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('eventService', eventService);

    /** @ngInject */
    function eventService() {

        var win = $(window);
        
        function trigger() {
            var params = [];
            for (var o in arguments) {
                if (o != 0) {
                    params.push(arguments[o]);
                }
            }
            win.trigger(arguments[0], params);
        }

        function on() {
            var c = function () {
                var params = [];
                for (var o in arguments) {
                    if (o != 0) {
                        params.push(arguments[o]);
                    }
                }
                func.apply(this, params);
            };
            win.on(name, c);
            return function () {
                win.off(name, c);
            };
        }

        var service = {
            trigger: trigger,
            on: on
        };

        return service;
    }

})();

