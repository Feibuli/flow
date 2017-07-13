(function ()
{
    'use strict';

    angular
        .module('app.main')
        .filter('upLineInfoFmt', upLineInfoFmt);

    /** @ngInject */
    function upLineInfoFmt()
    {
        return function (value)
        {
            return '';
        };
    }

})();
