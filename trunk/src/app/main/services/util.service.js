(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('Util', UtilService);

    /** @ngInject */
    function UtilService($mdToast, $window, $filter, toastr, toastrConfig, $cookies) {
        !function init() {
            angular.extend(toastrConfig, {
                maxOpened: 1,
                positionClass: 'toast-top-center'
            });
        }();
        function bind(items, item, id) {
            for (var i = 0; i < items.length; i++) {
                var _item = items[i];
                if (_item[id] === item[id]) {
                    item = _item;
                    break;
                }
            }
            return [items, item];
        }

        /*start arrayData按key排序 start*/
        function sortByKey(arrayData, key, strNum, reverse) {
            if (arrayData instanceof Array) {
                //数组长度小于2 或 没有指定排序字段 或 不是json格式数据
                if (arrayData.length < 2 || !key || typeof arrayData[0] !== "object") return arrayData;
                //数字类型排序
                if (typeof arrayData[0][key] === "number") {
                    arrayData.sort(function (x, y) {
                        return x[key] - y[key];
                    });
                }
                //字符串类型排序
                if (typeof arrayData[0][key] === "string") {
                    strNum === 'num' ? (function () {
                        arrayData.sort(function (x, y) {
                            return x[key] - y[key];
                        });
                    })() : (function () {
                        arrayData.sort(function (x, y) {
                            if (x && y && x[key] && y[key]) {
                                return x[key].localeCompare(y[key]);
                            }
                        });
                    })();
                }
                //倒序
                if (reverse) {
                    arrayData.reverse();
                }
            }
            return arrayData;
        }

        /*end arrayData按key排序 end*/
        /*start toast初始配置 start*/
        function showToast(text) {
            toastr.info(text, {
                timeOut: 2000,
                iconClass: 'toast-info md-accent-bg'
            });
        }

        /*end toast初始配置 end*/
        /*start 对象值的比较 start*/
        function isObjectValueEqual(a, b) {
            var aProps = Object.getOwnPropertyNames(a);
            var bProps = Object.getOwnPropertyNames(b);
            if (aProps.length !== bProps.length) {
                return false;
            }
            for (var i = 0; i < aProps.length; i++) {
                var propName = aProps[i];
                if (a[propName] !== b[propName]) {
                    return false;
                }
            }
            return true;
        }

        /*end 对象值的比较 end*/
        /*start localStorage start*/
        function LocalStorage() {
            var self = this;
            self.put = put;
            self.get = get;
            self.putObject = putObject;
            self.getObject = getObject;
            self.clear = clear;
            self.removeItem = removeItem;
            function put(key, value) {
                $window.localStorage[key] = value;
            }

            //读取单个属性
            function get(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            }

            //存储对象，以JSON格式字符串存储
            function putObject(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            }

            //读取对象
            function getObject(key) {
                var value = $window.localStorage[key];
                return isJSON(value) ? JSON.parse(value) : {};
            }

            //清除localStorage
            function clear() {
                $window.localStorage.clear();
            }

            //删除单个元素
            function removeItem(key) {
                $window.localStorage.removeItem(key);
            }
        }

        /*end localStorage end*/
        /*start Date年月日加减及格式化 start*/
        function HandleDate() {
            var self = this;
            self.addY = addY;
            self.addM = addM;
            self.addD = addD;
            self.format = format;
            function addY(date, num) {
                return typeof num === 'number' ? new Date(date.getYear() + num + 1900, date.getMonth(), date.getDate()) : undefined;
            }

            function addM(date, num) {
                return typeof num === 'number' ? new Date(date.getYear() + 1900, date.getMonth() + num, date.getDate()) : undefined;
            }

            function addD(date, num) {
                return typeof num === 'number' ? new Date(date.getYear() + 1900, date.getMonth(), date.getDate() + num) : undefined;
            }

            function format(date, layout) {
                return $filter('date')(date, layout);
            }
        }

        /*end Date年月日加减 end*/
        /*start 配置auto-complete模糊搜索 start*/
        function autoCompleteSearch(query, name, date) {
            function createFilterFor(query) {
                return function filterFn(state) {
                    return (state[name].indexOf(query) !== -1 ||
                        state[name].indexOf(query.toLowerCase()) !== -1 ||
                        state[name].indexOf(query.toUpperCase()) !== -1
                    );
                };
            }

            return query ? date.filter(createFilterFor(query)) : date;
        }

        /*end 配置auto-complete搜索 end*/
        /*start 时间显示转换 start*/
        function saveDateTime(str) {
            var array = str.split(':');
            return (array[0] - 0) * 60 + (array[1] - 0);
        }

        function showDateTime(min) {
            var result = '00:00';
            if (typeof min === 'number') {
                var hour = parseInt(min / 60),
                    m = min % 60;
                hour < 10 && (hour = '0' + hour);
                m < 10 && (m = '0' + m);
                result = hour + ':' + m;
            }
            return result;
        }

        /*end xx:xx时间转分钟 end*/
        /*start 解析socket报警字段 start*/
        function analysisAlarmInfo(query) {
            var model = {
                vehicle_id: '',
                route_num: '',
                violation_type: '',
                violation_value: '',
                violation_criterion: '',
                latitude: '',
                longitude: '',
                height: '',
                speed: '',
                direction: '',
                time: '',
                reissueIdentifying: '',
                remark: ''
            };

            var scArr = [];

            angular.forEach(query, function (data) {
                var arr = data.split(',');
                var list = angular.copy(model);
                if (arr.length === Object.getOwnPropertyNames(model).length) {
                    var pushList = {};
                    var key = 0;
                    angular.forEach(list, function (listData, index) {
                        pushList[index] = arr[key++];
                    });
                    scArr.push(pushList);
                }
            });
            return scArr;
        }

        /*end 解析socket报警字段 end*/
        /*start 判断json格式 start*/
        function isJSON(str) {
            if (typeof str !== 'string') return false;

            str = str.replace(/\s/g, '').replace(/\n|\r/, '');

            if (/^\{(.*?)\}$/.test(str))
                return /"(.*?)":(.*?)/g.test(str);

            if (/^\[(.*?)\]$/.test(str)) {
                return str.replace(/^\[/, '')
                    .replace(/\]$/, '')
                    .replace(/},{/g, '}\n{')
                    .split(/\n/)
                    .map(function (s) {
                        return isJSON(s);
                    })
                    .reduce(function (prev, curr) {
                        return !!curr;
                    });
            }

            return false;
        }

        /*end 判断json格式 end*/
        /*start 根据uuid数组对象过滤去重 start*/
        function dataFilter(od, filterData) {
            var originalData = _.compact(od);
            if (angular.isArray(originalData) && angular.isArray(filterData)) {
                for (var i = 0; i < originalData.length; i++) {
                    for (var j = 0; j < filterData.length; j++) {
                        if (originalData[i].uuid == filterData[j].uuid) {
                            delete originalData[i];
                            break;
                        }
                    }
                }
                return _.compact(originalData);
            }
        }

        /*end 根据uuid数组对象过滤去重 end*/
        /*start 判断document全屏状态 start*/
        function judgeFullScreen() {
            return document.fullscreen ||
                document.webkitIsFullScreen ||
                document.mozFullScreen ||
                false;
        }

        /*end 判断document全屏状态 end*/
        /*start cookie start*/
        function cookie() {
            var self = this;
            self.get = get;

            //读取单个属性
            function get(key) {
                return $cookies.get(key);
            }
        }

        /*end cookie end*/
        return {
            bind: bind,
            sortByKey: sortByKey,
            showToast: showToast,
            isObjectValueEqual: isObjectValueEqual,
            autoCompleteSearch: autoCompleteSearch,
            saveDateTime: saveDateTime,
            showDateTime: showDateTime,
            analysisAlarmInfo: analysisAlarmInfo,
            isJSON: isJSON,
            dataFilter: dataFilter,
            judgeFullScreen: judgeFullScreen,
            localStorage: new LocalStorage(),
            handleDate: new HandleDate(),
            cookie: new cookie()
        }
    }
})();
