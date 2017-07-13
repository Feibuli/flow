(function () {
    'use strict';

    angular
        .module('app.main')
        .run(runBlock);

    /** @ngInject */
    function runBlock(msUtils, $location, $cookies, LoginUrl, Util) {
        console.log('come on!');
        // localStorage.user = window.name;
        // var value = window.name.split('"jid"')[1].split(':')[1].split(',')[0];
        // $cookies.put('_sid', value);
        // var user = Util.localStorage.get('user');
        // if (!user && Util.isJSON(window.name)) {
        //     user = window.name;
        //     Util.localStorage.put('user', user);
        // }
        // if (!user || !Util.isJSON(user)) {
        //     window.location.href = LoginUrl;
        // }
    }
})();
