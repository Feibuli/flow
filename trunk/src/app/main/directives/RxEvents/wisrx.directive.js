/**
 * Created by zb on 2017/2/4.
 */
(function () {
    'use strict';
    angular.forEach('Click Keyup'.split(' '),function(eventName){
        angular
            .module('app.main')
            .directive('wisRx'+eventName, wisRxDirective)

        function wisRxDirective($parse) {
            return {
                restrict: 'EA',
                link:function(scope, element, attr, ctrl){
                    var fn = $parse(attr['wisRx'+eventName]);
                    console.log(eventName.toLowerCase());
                    var clicks = Rx.Observable.fromEvent(element.context,eventName.toLowerCase())
                        .debounce(500)
                        .distinctUntilChanged()

                    clicks.subscribe(function(data){
                        fn(scope);
                    });
                }
            }
        }
    })
})();
