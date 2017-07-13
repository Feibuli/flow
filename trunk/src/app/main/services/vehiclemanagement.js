(function () {
	'use strict';

	angular
		.module('app.main')
		.factory('VehicleManagementService', VehicleManagementService);

	/** @ngInject */
	function VehicleManagementService(msApi) {

		function query(params) {
			return msApi.resolve('vehicle@get', params);
		}

		function get(uuid) {
			return msApi.resolve('vehicle@get', {uuid: uuid});
		}

		function add(entry) {
			return msApi.resolve('vehicle@save', {}, entry);
		}

		function update(entry) {
			return msApi.resolve('vehicle@update', {}, entry);
		}

		function remove(uuid) {
			return msApi.resolve('vehicle@remove', {}, {typeId: uuid});
		}

		function getdict(params){
			return msApi.resolve('vehicle@get', {props:params},{typeId:'dict'});
		}

		return {
			query: query,
			get: get,
			add: add,
			update: update,
			remove: remove,
			getdict:getdict
		};
	}
})();
/**
 * Created by Administrator on 2017/5/23 0023.
 */
