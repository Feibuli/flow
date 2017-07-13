(function ()
{
    'use strict';

    angular
        .module('app.main')
        .filter('downLineInfoFmt', downLineInfoFmt);

    /** @ngInject */
    function downLineInfoFmt()
    {
        return function (value)
        {
            return '';
        };
    }

})();
