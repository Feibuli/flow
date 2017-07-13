(function () {
    'use strict';
    angular
        .module('app.core')
        // .constant('WisUrl', 'http://172.16.101.81:8001/')
        // .constant('WisUrl', 'http://172.16.101.81:8093/')
        // .constant('WisUrl', 'http://172.16.101.67:8099/')
        // .constant('WisUrl', 'http://172.16.101.81:8097/itbus/')                                  //智慧公交
        .constant('WisUrl', 'http://172.16.101.144:8097/itbus/')
        // .constant('WisUrl', 'http://172.16.101.96:8097/itbus/')
        // .constant('WisUrl', 'http://172.16.101.144:8097/itbus/')
        // .constant('OrgUrl', 'http://172.16.101.96:8080/org/')
        .constant('OrgUrl', 'http://172.16.102.150:8092/org/')                                   //组织
        // .constant('OrgUrl', 'http://172.16.101.150:8092/org/')
        // .constant('VehUrl', 'http://172.16.101.144:8093/veh/')
        .constant('VehUrl', 'http://172.16.102.150:8093/veh/')
        // .constant('VehUrl', 'http://172.16.101.144:8080/')                                    //车辆
        .constant('CorpUrl', 'http://172.16.102.150:8091/corp/')                                 //企业
        // .constant('FlowUrl', 'http://172.16.101.124:9090/zhcx_flow/')
        .constant('FlowUrl', 'http://flow.123cx.com:9090/zhcx_flow/')                            //审批流
        .constant('BaseUrl', 'http://172.16.102.101:8900/wisdombus-contrFoller/')                 //原始智慧公交
        .constant('AuthorityUrl', 'http://172.16.102.101:8900/authority-controller/')            //原始组织员工
        .constant('UploadUrl', 'http://172.16.102.150:8091/corp/enterprise/upload')
        .constant('LoginUrl', 'https://cas.123cx.com/cas/login?service=http://uc.123cx.com:8090/uc/cas')
        .constant('LogoutUrl', 'https://cas.123cx.com/cas?service=http://uc.123cx.com:8090/uc/logout')
        // .constant('WsUrl', 'http://172.16.101.96:9101/pull?type=');
        .constant('WsUrl', 'http://172.16.102.150:9101/pull?type=');
})();