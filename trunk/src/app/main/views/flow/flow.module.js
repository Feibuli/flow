/**
 * Created by HL on 2017/7/13.
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
                    'main@':{
                        templateUrl: 'app/core/layouts/content-only.html',
                        controller: 'MainController'
                    },
                    'content@app.flowapply': {
                        templateUrl: 'app/main/views/flow/flowapply/flowapply.html',
                        controller: 'FlowApplyController as vm'
                    }
                },
                //在路由中使用service查询数据
                resolve: {}
            })
            .state('app.flowdetail', {
                url: '/flowdetail',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/views/flow/flowdetail/flowdetail.html',
                        controller: 'FlowDetailController as vm'
                    }
                },
                resolve: {}
            })
    }
})();