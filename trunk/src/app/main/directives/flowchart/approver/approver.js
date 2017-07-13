/**
 * Created by Administrator on 2017/6/23.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('FlowChartSetApproverController', FlowChartSetApproverController);

    function FlowChartSetApproverController($mdDialog, User, Job, assignee, approveType, assigneeType, Util) {
        var vm = this;
        vm.closeDialog = closeDialog;
        vm.approveType = approveType || '0';
        vm.assigneeType = assigneeType || '0';
        vm.saveEvent = saveEvent;
        vm.querySearch = querySearch;
        vm.staffs = loadStaffs();
        vm.selectedStaffs = assigneeType == '0' ? assignee : [];
        vm.transformChip = transformChip;
        vm.elem = {
            title: '职位',
            selectedElem: {},
            model: assigneeType == '1' ? assignee[0].uuid : null,
            data: Job,
            nameField: 'postName',
            valueField: 'uuid',
            required: 'true',
            placeholder: '输入职位进行查询',
        };
        console.log(assignee);

        /**
         * Return the proper object when the append is called.
         */
        function transformChip(chip) {
            // If it is an object, it's already a known chip
            if (angular.isObject(chip)) {
                return chip;
            }
            // Otherwise, create a new one
            return {name: chip, type: 'new'}
        }

        /**
         * Search for staffs.
         */
        function querySearch(query) {
            var results = query ? vm.staffs.filter(createFilterFor(query)) : [];
            return results;
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(vegetable) {
                return (vegetable._lowername.indexOf(lowercaseQuery) !== -1);
            };
        }

        function loadStaffs() {
            return User.map(function (veg) {
                veg._lowername = veg.name.toLowerCase();
                return veg;
            });
        }


        //!$scope.selectedVegetables.length && ($scope.selectedVegetables = ['没有相关数据选项']);

        /*$scope.vegetables = ['Corn' ,'Onions' ,'Kale' ,'Arugula' ,'Peas', 'Zucchini'];
         $scope.searchTerm;
         $scope.clearSearchTerm = function() {
         $scope.searchTerm = '';
         };
         // The md-select directive eats keydown events for some quick select
         // logic. Since we have a search input here, we don't need that logic.
         $element.find('input').on('keydown', function(ev) {
         ev.stopPropagation();
         });*/

        /*EditFlowService.getUser({cropId: 10000}).then(function (res) {
         vm.elem = {
         title: '选择审批人',
         name: 'staff',
         selectedElem: null,
         model: [],
         data: res.beans,
         nameField: 'name',
         valueField: 'uuid',
         required: 'true',
         placeholder: '至少选择一名员工',
         };
         vm.data = res.beans;
         console.log(vm.data);
         });*/
        /*$scope.clearSearchTerm = function() {
         vm.search = '';
         };*/

        /*angular.element(document.getElementById("search")).on('keydown', function(ev) {
         ev.stopPropagation();
         });*/


        function saveEvent() {
            switch (vm.assigneeType) {
                case '0':       //审批人(多选)
                    var obj = {
                        assignee: [],
                        approveType: vm.approveType,
                        assigneeType: '0'
                    };
                    angular.forEach(vm.selectedStaffs, function (item) {
                        obj.assignee.push({
                            name: item.name,
                            uuid: item.uuid
                        });
                    });
                    if (vm.approveType == 1) {
                        if (obj.assignee.length < 2) {
                            Util.showToast('多人审批会签需要设置多个审批人');
                            return;
                        }
                    }
                    $mdDialog.hide(obj);
                    break;
                case '1':       //审批职位(单选)
                    var obj = {
                        assignee: [{
                            name: vm.elem.selectedElem.name,
                            uuid: vm.elem.selectedElem.value
                        }],
                        approveType: vm.approveType,
                        assigneeType: '1'
                    };
                    $mdDialog.hide(obj);
                    break;
            }
        }

        function closeDialog() {
            $mdDialog.cancel();
        }
    }

})();