(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PlanRegforoutSider', PlanRegforoutSider);

    /** @ngInject */
    function PlanRegforoutSider(msApi) {

        function query(params) {
            return msApi.resolve('planregforoutsider@get', params);
        }

        function get(entry) {
            return msApi.resolve('planregforoutsider@get', {} ,entry);
        }

        function add(lineId) {
            return msApi.resolve('planregforoutsider@save', {} , entry);
        }

        function update(entry) {
            return msApi.resolve('planregforoutsider@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('planregforoutsider@remove', {}, {uuid: uuid});
        }

        return {
            query: query,
            get: get,
            add: add,
            update: update,
            remove: remove
        };
    }
})();
