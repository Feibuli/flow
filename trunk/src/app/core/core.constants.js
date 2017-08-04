(function () {
    'use strict';
    console.log('production');
    angular
        .module('app.core')
        //测试
        .constant('AuthorityUrl', 'http://itbus.123cx.com:8092/org/')//
        .constant('BaseUrl', 'http://itbus.123cx.com:8097/itbus/')
        .constant('WisUrl', 'http://itbus.123cx.com:8097/itbus/')//智慧公交，对应的msApiProvider注册方法wisRegister
        .constant('OrgUrl', 'http://itbus.123cx.com:8092/org/') //组织地址，对应的msApiProvider注册方法orgRegister
        .constant('VehUrl', 'http://itbus.123cx.com:8093/veh/') //车辆地址，对应的msApiProvider注册方法vehRegister
        .constant('CorpUrl', 'http://itbus.123cx.com:8091/corp/') //企业地址，对应的msApiProvider注册方法corpRegister
        // .constant('FlowUrl', 'http://flow.example.com:9090/zhcx_flow/')   //审批流，对应的msApiProvider注册方法flowRegister
        .constant('FlowUrl', 'http://172.16.101.124:8098/flow/')   //审批流，对应的msApiProvider注册方法flowRegister
        .constant('UploadUrl', 'http://itbus.123cx.com:8091/corp/enterprise/upload')//图片上传地址
        .constant('LoginUrl', 'https://cas.123cx.com/cas/login?service=http://uc.123cx.com:8090/uc/cas') //登录地址
        .constant('LogoutUrl', 'https://cas.123cx.com/cas?service=http://uc.123cx.com:8090/uc/logout')//注销地址
        .constant('WsUrl', 'http://itbus.123cx.com:9101/pull?type=');

    //线上
    // .constant('AuthorityUrl', 'http://itbus.123cx.com/org/')//
    // .constant('BaseUrl', 'http://itbus.123cx.com/itbus/')
    // .constant('WisUrl', 'http://itbus.123cx.com/itbus/')//智慧公交，对应的msApiProvider注册方法wisRegister
    // .constant('OrgUrl', 'http://itbus.123cx.com/org/') //组织地址，对应的msApiProvider注册方法orgRegister
    // .constant('VehUrl', 'http://itbus.123cx.com/veh/') //车辆地址，对应的msApiProvider注册方法vehRegister
    // .constant('CorpUrl', 'http://itbus.123cx.com/corp/') //企业地址，对应的msApiProvider注册方法corpRegister
    // .constant('FlowUrl', 'http://flow.example.com:9090/zhcx_flow/')   //审批流，对应的msApiProvider注册方法flowRegister
    // .constant('UploadUrl', 'http://itbus.123cx.com/corp/enterprise/upload')//图片上传地址
    // .constant('LoginUrl', 'http://wisdombus-authority.com/cas/login?service=http://tomcat_server:9000/authority-controller/cas') //登录地址
    // .constant('LogoutUrl', 'https://wisdombus-authority.com/cas/login?service=http://app1.example.com:8080/authority-controller/cas')//注销地址
    // .constant('WsUrl', 'http://172.16.200.43:9101/pull?type=');
})();
