(function () {
    'use strict';

    angular
        .module('app.core')
        .config(config);
    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider, $httpProvider, $ariaProvider, $logProvider, msScrollConfigProvider, fuseConfigProvider, msApiProvider, socketClientProvider, BaseUrl, AuthorityUrl, WsUrl, WisUrl, OrgUrl, CorpUrl, VehUrl, FlowUrl) {

        msApiProvider.setBaseUrl(BaseUrl);
        msApiProvider.setAuthorityUrl(AuthorityUrl);
        msApiProvider.setWisUrl(WisUrl);
        msApiProvider.setOrgUrl(OrgUrl);
        msApiProvider.setVehUrl(VehUrl);
        msApiProvider.setCorpUrl(CorpUrl);
        msApiProvider.setFlowUrl(FlowUrl);

        socketClientProvider.setWsUrl(WsUrl);
        $stateProvider.addState = function (module, config) {
            $stateProvider.state(module, config);
        };
        msNavigationServiceProvider.addItem = function (module, config) {
            msNavigationServiceProvider.saveItem(module, config);
        };
        // Enable debug logging
        $httpProvider.defaults.withCredentials = true;
        $logProvider.debugEnabled(true);
        $httpProvider.interceptors.push(HttpInterceptor);
        /*eslint-disable */

        // ng-aria configuration
        $ariaProvider.config({
            tabindex: false
        });

        // Fuse theme configurations
        fuseConfigProvider.config({
            'disableCustomScrollbars': false,
            'disableCustomScrollbarsOnMobile': true,
            'disableMdInkRippleOnMobile': true
        });

        // msScroll configuration
        msScrollConfigProvider.config({
            wheelPropagation: true
        });

        /*eslint-enable */
    }

    function HttpInterceptor($q, $window, LoginUrl) {
        return {
            request: function (config) {
                return config;
            },
            requestError: function (err) {
                return $q.reject(err);
            },
            response: function (res) {
                return res;
            },
            responseError: function (err) {
                // $window.location.href = LoginUrl;
                if (-1 === err.status) {
                } else if (500 === err.status && -99 === JSON.parse(err.data.message).code) {
                    $window.location.href = LoginUrl;
                } else if (501 === err.status) {
                }
                return $q.reject(err);
            }
        };
    }
})();
