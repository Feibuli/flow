/**
 * Created by HL on 2017/5/11.
 */
(function () {
    'use strict';
    angular
    //声明子模块
        .module('app.flow', [])
        .config(config);
    /** @ngInject */
    function config($stateProvider) {
        // State 子模块路由配置
        $stateProvider
            .state('app.flowapply', {
                url: '/flowapply',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/views/flow/flowapply/h5.html',
                        controller: 'H5Controller as vm'
                    }
                },
                //在路由中使用service查询数据
                resolve: {}
            })
            .state('app.flowdetail', {
                url: '/flowdetail',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/views/flow/h5/h5.html',
                        controller: 'H5Controller as vm'
                    }
                },
                resolve: {}
            })
    }
})();