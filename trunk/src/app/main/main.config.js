(function () {
    'use strict';

    angular
        .module('app.main')
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider, msApiProvider) {
        // Navigation
        msNavigationServiceProvider.saveItem('base', {
            title: '基础信息',
            icon: 'icon-basic-data',
            weight: 1
        });
        msNavigationServiceProvider.saveItem('schedule', {
            title: '排班管理',
            icon: 'icon-schedule',
            weight: 1
        });
        msNavigationServiceProvider.saveItem('dispatch', {
            title: '运营调度',
            icon: 'icon-dispatch',
            weight: 1
        });
        // msNavigationServiceProvider.saveItem('monitor', {
        //     title: '综合监控',
        //     icon: 'icon-monitor',
        //     weight: 1
        // });
        // msNavigationServiceProvider.saveItem('statistic', {
        //     title: '统计分析',
        //     icon: 'icon-statistic',
        //     weight: 1
        // });
        // msNavigationServiceProvider.saveItem('manage', {
        //     title: '企业管理',
        //     icon: 'icon-city',
        //     weight: 1
        // });
        // msNavigationServiceProvider.saveItem('user', {
        //     title: '用户中心',
        //     icon: 'icon-user',
        //     weight: 1
        // });

        // Service
        // msApiProvider.register('busline', [
        //     'common/busline/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);
        msApiProvider.wisRegister('busline', [
            'commline/:id',
            {
                id: '@uuid'
            }
        ]);
        // msApiProvider.register('busstation', [
        //     'common/busstation/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        msApiProvider.wisRegister('busstop', [
            'commsite/:id',
            {
                id: '@uuid'
            }
        ]);

        msApiProvider.wisRegister('station', [
            'commplace/:id',
            {
                id: '@uuid'
            }
        ]);

        // msApiProvider.register('car', [
        //     'common/car/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('cartype', [
        //     'common/cartype/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('corp', [
        //     'common/corp/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('dept', [
        //     'common/dept/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('device', [
        //     'common/dev/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('drivinglicence', [
        //     'common/drivinglicence/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('employee', [
        //     'common/empl/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('posttype', [
        //     'common/posttype/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);
        msApiProvider.orgRegister('post', [
            'post/:id',
            {
                id: '@uuid'
            }
        ]);
        // msApiProvider.register('scheduletype', [
        //     'common/scheduletype/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('scheduleway', [
        //     'common/scheduleway/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('user', [
        //     'common/user/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('linestop', [
        //     'common/linestop/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('vehicle', [
        //     'vehicle/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        msApiProvider.wisRegister('plantype', [
            'plantimetypecontroller/:id',
            {
                id: '@uuid'
            }
        ]);

        msApiProvider.wisRegister('planperiod', [
            'plantimetypeperiodcontroller/:id',
            {
                id: '@uuid'
            }
        ]);
        // msApiProvider.register('planclass', [
        //     'plan/class/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('empl', [
        //     'common/empl/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);

        // msApiProvider.register('planregforoutsider', [
        //     'plan/linereg/:id',
        //     {
        //         id: '@lineId'
        //     }
        // ]);

        // msApiProvider.register('plansend', [
        //     'plan/send/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);
        // msApiProvider.register('plansendpublish', [
        //     'plan/send/publish/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);
        // msApiProvider.register('plansendpreview', [
        //     'plan/send/preview/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);
        // msApiProvider.register('schedulealertinfo', [
        //     'schedule/alertinfo/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);
        // msApiProvider.register('report', [
        //     'report/showAlarm/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);
        // msApiProvider.register('startrecording', [
        //     'schedule/realisyRecord/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);
        msApiProvider.wisRegister('holiday', [
            'planVacation/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.wisRegister('carconfig', [
            'relationlinevehicle/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.wisRegister('emplconfig', [
            'relationlineempl/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.wisRegister('carempl', [
            'vehicleempl/:id',
            {
                id: '@uuid'
            }
        ]);
        // msApiProvider.authorityRegister('organization', [
        //     'common/departMentInfo/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);
        msApiProvider.orgRegister('organization', [
            'group/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.orgRegister('dictionary', [
            'dict/data/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.orgRegister('emplinfo', [
            'empl/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.orgRegister('emplsearch', [
            'empl/search/:id',
            {
                id: '@condition'
            }
        ]);
        msApiProvider.authorityRegister('roleassignment', [
            'common/userroleref/:id',
            {
                id: '@uuid'
            }
        ]);
        // msApiProvider.register('lineemplvehicle', [
        //     'common/lineemplvehicle/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);
        // msApiProvider.register('electronicmap', [
        //     'common/bustreegather/gettreeset/:id',
        //     {
        //         id: '@uuid'
        //     }
        // ]);
        msApiProvider.flowRegister('flow', [
            'flowCfg/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.flowRegister('flowSetting', [
            'flowCfg/:params',
            {
                params: '@uuid'
            }
        ]);
        msApiProvider.flowRegister('flowGroup', [
            'flowGroup/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.flowRegister('flowApply', [
            'task/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.flowRegister('user', [
            'user/:id',
            {
                id: '@uuid'
            }
        ]);
        // msApiProvider.register('chinesecities', ['app/data/ChineseCities.json']);

        //------------- start ----------------------------

        msApiProvider.wisRegister('commline', [
            'commline/:id',
            {
                id: '@uuid'
            }
        ]);

        msApiProvider.wisRegister('commplace', [
            'commplace/:id',
            {
                id: '@uuid'
            }
        ]);

        msApiProvider.wisRegister('commsite', [
            'commsite/:id',
            {
                id: '@uuid'
            }
        ]);

        msApiProvider.wisRegister('relationgroupline', [
            'relationgroupline/:id',
            {
                id: '@uuid'
            }
        ]);

        msApiProvider.wisRegister('relationlineempl', [
            'relationlineempl/:id',
            {
                id: '@uuid'
            }
        ]);

        msApiProvider.wisRegister('relationlineplace', [
            'relationlineplace/:id',
            {
                id: '@uuid'
            }
        ]);

        msApiProvider.wisRegister('relationlinevehicle', [
            'relationlinevehicle/:id',
            {
                id: '@uuid'
            }
        ]);

        msApiProvider.wisRegister('relationsiteline', [
            'relationsiteline/:id',
            {
                id: '@uuid'
            }
        ]);

        //------------- end ----------------------------

        msApiProvider.vehRegister('vehicle', [
            'vehicle/:id',
            {
                id: '@typeId'
            }
        ]);
        msApiProvider.corpRegister('enterprise', [
            'enterprise/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.corpRegister('vehiclemanagement', [
            'vehiclemanagement/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.wisRegister('vehicleModel', [
            'plan/veh/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.wisRegister('vehicleModelTwo', [
            'plan/spply/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.wisRegister('getVehiclWithEmpl', [
            'vehicleempl/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.wisRegister('getEmpl', [
            'relationlineempl/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.wisRegister('addTargetspply', [
            'plan/targetspply/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.wisRegister('plansend', [
            'plan/send/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.wisRegister('targetspply', [
            'plan/targetspply/:id',
            {
                id: '@uuid'
            }
        ]);

        msApiProvider.wisRegister('planTimeTarget', [
            'planTimeTargetController/:id',
            {
                id: '@uuid'
            }
        ]);

        msApiProvider.wisRegister('planTargetspecial', [
            'plan/sendtarger/:id',
            {
                id: '@uuid'
            }
        ]);
        msApiProvider.wisRegister('planHistory', [
            'plan/history/:id',
            {
                id: '@uuid'
            }
        ])
        msApiProvider.wisRegister('schedulinglist', [
            'scheduling/list/:id',
            {
                id: '@uuid'
            }
        ])
    }
})();