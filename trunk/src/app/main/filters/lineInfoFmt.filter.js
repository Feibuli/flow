(function ()
{
    'use strict';

    angular
        .module('app.main')
        .filter('lineInfoFmt', lineInfoFmt);

    /** @ngInject */
    function lineInfoFmt()
    {
        return function (value)
        {
            return '';
        };
    }

})();
