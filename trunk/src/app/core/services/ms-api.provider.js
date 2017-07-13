(function () {
    'use strict';

    angular
        .module('app.core')
        .provider('msApi', msApiProvider);

    /** @ngInject **/
    function msApiProvider() {
        /* ----------------- */
        /* Provider          */
        /* ----------------- */
        var provider = this;

        // Inject the $log service
        var $log = angular.injector(['ng']).get('$log');

        // Data
        var baseUrl = '';
        var authorityUrl = '';
        var wisUrl = '';
        var userUrl = '';
        var corpUrl = '';
        var orgUrl = '';
        var vehUrl = '';
        var itbusUrl = '';
        var flowUrl = '';
        var api = [];

        // Methods
        provider.setBaseUrl = setBaseUrl;
        provider.getBaseUrl = getBaseUrl;
        provider.setAuthorityUrl = setAuthorityUrl;
        provider.getAuthorityUrl = getAuthorityUrl;
        provider.setWisUrl = setWisUrl;
        provider.getWisUrl = getWisUrl;

        provider.setUserUrl = setUserUrl;
        provider.getUserUrl = getUserUrl;
        provider.setCorpUrl = setCorpUrl;
        provider.getCorpUrl = getCorpUrl;
        provider.setOrgUrl = setOrgUrl;
        provider.getOrgUrl = getOrgUrl;
        provider.setVehUrl = setVehUrl;
        provider.getVehUrl = getVehUrl;
        provider.setItbusUrl = setItbusUrl;
        provider.getItbusUrl = getItbusUrl;
        provider.setFlowUrl = setFlowUrl;
        provider.getFlowUrl = getFlowUrl;
        provider.getApiObject = getApiObject;
        provider.register = register;
        provider.authorityRegister = authorityRegister;
        provider.wisRegister = wisRegister;

        provider.userRegister = userRegister;
        provider.corpRegister = corpRegister;
        provider.orgRegister = orgRegister;
        provider.vehRegister = vehRegister;
        provider.itbusRegister = itbusRegister;
        provider.flowRegister = flowRegister;
        //////////
        /**
         * Set base url for API endpoints
         *
         * @param url {string}
         */
        function
        setBaseUrl(url) {
            baseUrl = url;
        }

        /**
         * Return the base url
         *
         * @returns {string}
         */
        function getBaseUrl() {
            return baseUrl;
        }

        /**
         * Set authority url for API endpoints
         *
         * @param url {string}
         */
        function setAuthorityUrl(url) {
            authorityUrl = url;
        }

        /**
         * Return the authority url
         *
         * @returns {string}
         */
        function getAuthorityUrl() {
            return authorityUrl;
        }

        function setWisUrl(url) {
            wisUrl = url;
        }

        /**
         * Return the authority url
         *
         * @returns {string}
         */
        function getWisUrl() {
            return wisUrl;
        }

        function setUserUrl(url) {
            userUrl = url;
        }

        function getUserUrl() {
            return userUrl;
        }

        function setCorpUrl(url) {
            corpUrl = url;
        }

        function getCorpUrl() {
            return corpUrl;
        }

        function setOrgUrl(url) {
            orgUrl = url;
        }

        function getOrgUrl() {
            return orgUrl;
        }

        function setVehUrl(url) {
            vehUrl = url;
        }

        function getVehUrl() {
            return vehUrl;
        }

        function setItbusUrl(url) {
            itbusUrl = url;
        }

        function getItbusUrl() {
            return itbusUrl;
        }

        function setFlowUrl(url) {
            flowUrl = url;
        }

        function getFlowUrl() {
            return flowUrl;
        }

        /**
         * Return the api object
         *
         * @returns {object}
         */
        function getApiObject() {
            return api;
        }

        /**
         * Register API endpoint
         *
         * @param key
         * @param resource
         */
        function register(key, resource) {
            commonRegister('base', key, resource);
        }

        function authorityRegister(key, resource) {
            commonRegister('authority', key, resource);
        }

        function wisRegister(key, resource) {
            commonRegister('wis', key, resource);
        }

        function userRegister(key, resource) {
            commonRegister('user', key, resource);
        }

        function corpRegister(key, resource) {
            commonRegister('corp', key, resource);
        }

        function orgRegister(key, resource) {
            commonRegister('org', key, resource);
        }

        function vehRegister(key, resource) {
            commonRegister('veh', key, resource);
        }

        function itbusRegister(key, resource) {
            commonRegister('itbus', key, resource);
        }

        function flowRegister(key, resource) {
            commonRegister('flow', key, resource);
        }

        function commonRegister(urlType, key, resource) {
            if (!angular.isString(key)) {
                $log.error('"path" must be a string (eg. `dashboard.project`)');
                return;
            }

            if (!angular.isArray(resource)) {
                $log.error('"resource" must be an array and it must follow $resource definition');
                return;
            }

            // Store the API object
            api[key] = {
                paramDefaults: resource[1] || [],
                actions: resource[2] || [],
                options: resource[3] || {}
            };
            if (resource[0].indexOf('json') > 0) {
                api[key].url = (resource[0] || '');
            } else {
                switch (urlType) {
                    case 'user':
                        api[key].url = userUrl + (resource[0] || '');
                        break;
                    case 'corp':
                        api[key].url = corpUrl + (resource[0] || '');
                        break;
                    case 'org':
                        api[key].url = orgUrl + (resource[0] || '');
                        break;
                    case 'veh':
                        api[key].url = vehUrl + (resource[0] || '');
                        break;
                    case 'itbus':
                        api[key].url = itbusUrl + (resource[0] || '');
                        break;
                    case 'flow':
                        api[key].url = flowUrl + (resource[0] || '');
                        break;
                    case 'base':
                        api[key].url = baseUrl + (resource[0] || '');
                        break;
                    case'authority':
                        api[key].url = authorityUrl + (resource[0] || '');
                        break;
                    case 'wis':
                        api[key].url = wisUrl + (resource[0] || '');
                        break;
                }

            }
        }

        /* ----------------- */
        /* Service           */
        /* ----------------- */
        this.$get = function ($log, $q, $resource, $rootScope) {
            // Data

            // Methods
            var service = {
                setBaseUrl: setBaseUrl,
                getBaseUrl: getBaseUrl,
                setAuthorityUrl: setAuthorityUrl,
                getAuthorityUrl: getAuthorityUrl,
                setWisUrl: setWisUrl,
                getWisUrl: getWisUrl,
                register: register,
                authorityRegister: authorityRegister,
                wisRegister: wisRegister,

                etUserUrl: setUserUrl,
                getUserUrl: getUserUrl,
                setCorpUrl: setCorpUrl,
                getCorpUrl: getCorpUrl,
                setOrgUrl: setOrgUrl,
                getOrgUrl: getOrgUrl,
                setVehUrl: setVehUrl,
                getVehUrl: getVehUrl,
                setItbusUrl: setItbusUrl,
                getItbusUrl: getItbusUrl,
                setFlowUrl: setFlowUrl,
                getFlowUrl: getFlowUrl,
                userRegister: userRegister,
                corpRegister: corpRegister,
                orgRegister: orgRegister,
                vehRegister: vehRegister,
                itbusRegister: itbusRegister,
                flowRegister: flowRegister,
                resolve: resolve,
                request: request
            };

            return service;

            //////////

            /**
             * Resolve an API endpoint
             *
             * @param action {string}
             * @param parameters {object}
             * @returns {promise|boolean}
             */
            function resolve(action, parameters, payload) {

                // Emit an event
                $rootScope.$broadcast('msApi::resolveStart');

                var actionParts = action.split('@'),
                    resource = actionParts[0],
                    method = actionParts[1],
                    params = parameters || {},
                    payload = payload || {};

                if (!resource || !method) {
                    $log.error('msApi.resolve requires correct action parameter (resourceName@methodName)');
                    return false;
                }

                // Create a new deferred object
                var deferred = $q.defer();

                // Get the correct resource definition from api object
                var apiObject = api[resource];

                if (!apiObject) {
                    $log.error('Resource "' + resource + '" is not defined in the api service!');
                    deferred.reject('Resource "' + resource + '" is not defined in the api service!');
                }
                else {
                    // Generate the $resource object based on the stored API object
                    var resourceObject = $resource(apiObject.url, apiObject.paramDefaults, {
                        update: {
                            method: 'put'
                        }
                    }, apiObject.options);

                    // Make the call...
                    resourceObject[method](params, payload,

                        // Success
                        function (response) {
                            deferred.resolve(response);

                            // Emit an event
                            $rootScope.$broadcast('msApi::resolveSuccess');
                        }
                    );
                }

                // Return the promise
                return deferred.promise;
            }

            /**
             * Make a request to an API endpoint
             *
             * @param action {string}
             * @param [parameters] {object}
             * @param [success] {function}
             * @param [error] {function}
             *
             * @returns {promise|boolean}
             */
            function request(action, parameters, success, error) {
                // Emit an event
                $rootScope.$broadcast('msApi::requestStart');

                var actionParts = action.split('@'),
                    resource = actionParts[0],
                    method = actionParts[1],
                    params = parameters || {};

                if (!resource || !method) {
                    $log.error('msApi.resolve requires correct action parameter (resourceName@methodName)');
                    return false;
                }

                // Create a new deferred object
                var deferred = $q.defer();

                // Get the correct resource definition from api object
                var apiObject = api[resource];

                if (!apiObject) {
                    $log.error('Resource "' + resource + '" is not defined in the api service!');
                    deferred.reject('Resource "' + resource + '" is not defined in the api service!');
                }
                else {
                    // Generate the $resource object based on the stored API object
                    var resourceObject = $resource(apiObject.url, apiObject.paramDefaults, apiObject.actions, apiObject.options);

                    // Make the call...
                    resourceObject[method](params,

                        // SUCCESS
                        function (response) {
                            // Emit an event
                            $rootScope.$broadcast('msApi::requestSuccess');

                            // Resolve the promise
                            deferred.resolve(response);

                            // Call the success function if there is one
                            if (angular.isDefined(success) && angular.isFunction(success)) {
                                success(response);
                            }
                        },

                        // ERROR
                        function (response) {
                            // Emit an event
                            $rootScope.$broadcast('msApi::requestError');

                            // Reject the promise
                            deferred.reject(response);

                            // Call the error function if there is one
                            if (angular.isDefined(error) && angular.isFunction(error)) {
                                error(response);
                            }
                        }
                    );
                }

                // Return the promise
                return deferred.promise;
            }
        };
    }
})();
