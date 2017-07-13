(function () {
    'use strict';

    angular
        .module('app.core')
        .provider('socketClient', socketClient);

    /** @ngInject **/
    function socketClient() {
        /* ----------------- */
        /* Provider          */
        /* ----------------- */
        var provider = this;
        // Inject the $log service
        var $log = angular.injector(['ng']).get('$log');

        // Data
        var wsUrl = '';

        // Methods
        provider.setWsUrl = setWsUrl;
        provider.getWsUrl = getWsUrl;

        //////////

        /**
         * Set base url for API endpoints
         *
         * @param url {string}
         */
        function setWsUrl(url) {
            wsUrl = url;
        }

        /**
         * Return the base url
         *
         * @returns {string}
         */
        function getWsUrl() {
            return wsUrl;
        }

        /* ----------------- */
        /* Service           */
        /* ----------------- */
        this.$get = function ($log) {

            // Methods
            var service = {
                setWsUrl: setWsUrl,
                getWsUrl: getWsUrl,
                conn: conn,
                on: on,
                send: send,
                disconnect: disconnect,
                events: [],
                tempData: {},
                useState: false
            };

            return service;

            //////////

            var socket = null;

            function conn(mark) {
                // if (!socket) {
                // } else {
                //     // socket.connect();
                // }
                socket && socket.disconnect();
                socket = io(wsUrl + mark);
                return service;
            }

            function on(event, processer) {
                if (this.events.indexOf(event) < 0) {
                    this.events.push(event);
                }
                socket.on(event, function (a, b) {
                    processer.apply(this, arguments);
                });
            }

            function send(event, msg) {
                socket && socket.emit(event, msg);
            }

            function disconnect() {
                socket && socket.disconnect();
                socket = null;
            }

        };
    }
})();
