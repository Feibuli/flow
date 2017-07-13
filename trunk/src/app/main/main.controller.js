(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $rootScope, $cookies) {
        // Data
        //////////
        // setting main animate
        // $cookies.put('_sid', '1pM89Y5s9pNQ9pp9YwFlU5NthgA4cxk0; sessionId=9oJllkFhM40c44dY8cFkwdo49gc9s49M');
        // $cookies.put('user_info', '{"accountId":69,"accountType":"1","id":71,"loginName":"18670371990","corpId":0,"corpName":null,"userType":"1","userStatus":"1","loginDate":1499788477988,"jid":"9oJllkFhM40c44dY8cFkwdo49gc9s49M"}');
        $scope.wisdomAnimate = true;
        // Remove the splash screen
        $scope.$on('$viewContentAnimationEnded', function (event) {
            if (event.targetScope.$id === $scope.$id) {
                $rootScope.$broadcast('msSplashScreen::remove');
            }
        });
        // $rootScope.$on('$stateChangeStart', function (event, current) {
        //     if (current.url === '/spotdispatch') {
        //         $rootScope.haveDispatchTransition = true;
        //     }
        // });
    }
})();
