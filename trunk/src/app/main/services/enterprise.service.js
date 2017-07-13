(function () {
	'use strict';

	angular
		.module('app.main')
		.factory('EnterpriseService', EnterpriseService);

	/** @ngInject */
	function EnterpriseService(msApi) {

		function query(params) {
			return msApi.resolve('enterprise@get', params, {uuid:params.corpId});
		}

		function get(uuid) {
			return msApi.resolve('enterprise@get', {uuid: uuid});
		}

		function add(entry) {
			return msApi.resolve('enterprise@save', {}, entry);
		}

		function update(entry) {
			return msApi.resolve('enterprise@update', {}, entry);
		}

		function remove(uuid) {
			return msApi.resolve('enterprise@remove', {}, {uuid: uuid});
		}

		function getDict() {
			return msApi.resolve('enterprise@save', {}, {uuid:'typeall'});
		}


		return {
			query: query,
			get: get,
			add: add,
			update: update,
			remove: remove,
			getDict:getDict
		};
	}
})();
