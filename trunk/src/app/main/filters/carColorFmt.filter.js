/**
 * Created by VPS on 2017/4/17.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .filter('carColorFmt', carColorFmtFilter);
    function carColorFmtFilter() {
        return function (value) {
            var result = '--';
            switch (value) {
                case '1':
                    result = '蓝色';
                    break;
                case '2':
                    result = '黄色';
                    break;
                case '3':
                    result = '黑色';
                    break;
                case '4':
                    result = '白色';
                    break;
                case '9':
                    result = '其他';
                    break;
            }
            return result;
        }
    }
})();