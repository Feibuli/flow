angular
    .module('wis-sidenav', [
        'material.core'])
    .factory('$wisSidenav', WisSidenavService)
    .directive('wisSidenav', WisSidenavDirective)
    .controller('WisSidenavController', WisSidenavController);

function WisSidenavService($mdComponentRegistry, $mdUtil, $q, $log) {
    return function (handle) {
        return $mdComponentRegistry.get(handle);
    };
}

function WisSidenavDirective() {
    return {
        restrict: 'AE',
        scope: {},
        controller: 'WisSidenavController',
        transclude: true,
        templateUrl: 'app/main/directives/sidenav/sidenav.html',
        compile: function () {
            return postLink;
        }
    };
    function postLink(scope, element, attr) {
        var width = attr.width
        var element = angular.element(element);
        element.find('.sidenav_content').css("width", width);
        var transclude = element.find('ng-transclude');
        var tab = transclude.find('.tab');
        var height = element.find('.sidenav_content').innerHeight();
        // element.find('.sidenav_content').find("md-content").height(height);
        var kNum = 0;

        transclude.width(2 * width).css({
            'position': 'absolute'
        });
        tab.width(width).each(function () {
            var className = "btn" + kNum;
            var k = angular.copy(kNum);

            element.find('.nav').append('<div class="btn ' + className + '">' + angular.element(this).attr('label') + '</div>');
            element.on('click', '.' + className + '', function () {
                angular.element(this).addClass('active').siblings().removeClass('active');
                transclude.animate({
                    left: -(k * width)
                }, 500);
            });
            kNum++;
        });
        element.find('.btn0').addClass('active');

        scope.api.selectAlarm = selectAlarm;
        scope.api.selectScheduling = selectScheduling;

        function selectAlarm(){
            console.log('compile>selectAlarm');
            element.find('.btn0').click();
        }

        function selectScheduling(){
            console.log('compile>selectScheduling');
            element.find('.btn1').click();
        }
    }
}

function WisSidenavController($mdComponentRegistry, $attrs, $scope) {

    $mdComponentRegistry.register($scope, $attrs.mdComponentId);

    var vm = this;
    var ele = angular.element(document.querySelector('.ws-sidenav-wrap'));

    ele.on('click', '.toggle_left', closeSidenav);
    ele.on('click', '.toggle_right', openSidenav);

    $scope.api = {
        openSidenav: openSidenav,
        closeSidenav: closeSidenav,
        selectAlarm: selectAlarm,
        selectScheduling: selectScheduling
    }

    //打开界面
    function openSidenav() {
        ele.animate({right: 0}, 200, function () {
            ele.find('.toggle_right').removeClass('toggle_right').addClass('toggle_left')
                .find('md-icon').removeClass('icon-chevron-double-left').addClass('icon-chevron-double-right');
        });
    }

    //关闭界面
    function closeSidenav() {
        ele.animate({right: '-'+$attrs.width}, 200, function () {
            ele.find('.toggle_left').removeClass('toggle_left').addClass('toggle_right')
                .find('md-icon').removeClass('icon-chevron-double-right').addClass('icon-chevron-double-left');
        });
    }

    //选择报警界面
    function selectAlarm() {

    }

    //选择非运营调度界面
    function selectScheduling() {

    }

    //加入报警信息
    function addAlarmInfo(o) {
        console.log('进入wis-sidenav',o);
        //代码位置
    }

    //加入非运营调度信息
    function addSchedulingInfo(o) {
        console.log('进入wis-sidenav',o);
        //代码位置
    }

}
