/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.util = undefined;

var _blueimpMd = __webpack_require__(15);

var _blueimpMd2 = _interopRequireDefault(_blueimpMd);

var _cache = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 工具算法单例类
 */
// import $ from 'jquery';
var util = exports.util = {

    /**
     * createUniqueId
     * @returns {*}
     */
    createUniqueId: function createUniqueId() {
        return 'nid' + (0, _blueimpMd2.default)(Math.random(1000)).substr(10, 8);
    },


    /**
     * getMatrix
     * @param elem
     * @returns {{a: Number, b: Number, c: Number, d: Number, e: Number, f: Number}}
     */
    getMatrix: function getMatrix(elem) {
        var matrix = $(elem).css('transform');
        matrix = matrix.replace('matrix(', '').replace(')', '').split(',');
        return {
            a: parseFloat(matrix[0]),
            b: parseFloat(matrix[1]),
            c: parseFloat(matrix[2]),
            d: parseFloat(matrix[3]),
            e: parseFloat(matrix[4]),
            f: parseFloat(matrix[5])
        };
    },


    /**
     * setMatrix
     * @param elem
     * @param a
     * @param b
     * @param c
     * @param d
     * @param e
     * @param f
     */
    setMatrix: function setMatrix(elem, a, b, c, d, e, f) {
        $(elem).css('transform', 'matrix(' + a + ',' + b + ',' + c + ',' + d + ',' + e + ',' + f + ')');
    },


    /**
     * setScale
     * @param elem
     * @param scale
     */
    setScale: function setScale(elem, scale) {
        var matrix = this.getMatrix(elem);
        this.setMatrix(elem, scale, matrix.b, matrix.c, scale, matrix.e, matrix.f);
    },


    /**
     * setTranslate
     * @param elem
     * @param translate
     */
    setTranslate: function setTranslate(elem, translate) {
        var matrix = this.getMatrix(elem);
        this.setMatrix(elem, matrix.a, matrix.b, matrix.c, matrix.d, translate.x, translate.y);
    },


    /**
     * setTranslateX
     * @param elem
     * @param translateX
     */
    setTranslateX: function setTranslateX(elem, translateX) {
        var matrix = this.getMatrix(elem);
        this.setMatrix(elem, matrix.a, matrix.b, matrix.c, matrix.d, translateX, matrix.f);
    },


    /**
     * setTranslateY
     * @param elem
     * @param translateY
     */
    setTranslateY: function setTranslateY(elem, translateY) {
        var matrix = this.getMatrix(elem);
        this.setMatrix(elem, matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, translateY);
    },


    /**
     * getTranslateX
     * @param elem
     * @returns {Number|*}
     */
    getTranslateX: function getTranslateX(elem) {
        return this.getMatrix(elem).e;
    },


    /**
     * getTranslateY
     * @param elem
     * @returns {Number|*}
     */
    getTranslateY: function getTranslateY(elem) {
        return this.getMatrix(elem).f;
    },


    /**
     * setOutputPosition
     * @param node
     */
    setOutputPosition: function setOutputPosition(node) {
        var output = node.getOutput();
        if (output.length != 0) {
            var firstOutput = output[0];
            if (firstOutput.type == 'MutexNode') {
                var input = firstOutput.getInput();
                for (var i = 0; i < input.length; i++) {
                    var _node2 = input[i];
                    for (var j = 0; j < input.length; j++) {
                        var _node = input[j];
                        if (_node2.y < _node.y) {
                            var temp = input[i];
                            input[i] = input[j];
                            input[j] = temp;
                        }
                    }
                }
                var firstInput = input[0];
                var lastInput = input[input.length - 1];
                firstOutput.y = firstInput.y + (lastInput.y + lastInput.h - firstInput.y) / 2 - firstOutput.h / 2;
            } else {
                var sumHeight = 0;
                for (var _i = 0; _i < output.length; _i++) {
                    sumHeight += output[_i].h;
                    if (_i != output.length - 1) {
                        sumHeight += output[_i].marginBottom;
                    }
                }
                firstOutput.y = node.y + node.h / 2 - sumHeight / 2;
                for (var _i2 = 1; _i2 < output.length; _i2++) {
                    output[_i2].y = output[_i2 - 1].y + output[_i2 - 1].h + output[_i2 - 1].marginBottom;
                }
            }
        }
    },


    /**
     * fixCoverUp
     * @param origin
     * @param check
     */
    fixCoverUp: function fixCoverUp(origin, check) {
        console.log('检查UP', origin.id, check.id);
        var output = check.getOutput();
        var deltaY = 0;
        if (output.length > 1) {
            var last = output[output.length - 1];
            if (last.y + last.h + last.marginBottom >= origin.y) {
                deltaY = origin.y - (last.y + last.h + last.marginBottom);
            }
            for (var i = 0; i < output.length; i++) {
                output[i].y += deltaY;
            }
        } else {
            if (check.y + check.h + check.marginBottom >= origin.y) {
                deltaY = origin.y - (check.y + check.h + check.marginBottom);
            }
            check.y += deltaY;
        }
    },


    /**
     * fixCoverDown
     * @param origin
     * @param check
     */
    fixCoverDown: function fixCoverDown(origin, check) {
        if (origin.type != 'Mutex' && check.getOutput().length == 1 && check.getInput().length == 1) {
            console.log('检查DOWN', origin.id, check.id);
            var deltaY = 0;
            if (origin.y + origin.h + origin.marginBottom >= check.y) {
                deltaY = origin.y + origin.h + origin.marginBottom - check.y;
            }
            check.y += deltaY;
        }
    },


    /**
     * 修复间距:当从右往左拖拽目标节点时,重新计算被目标节点覆盖的左侧节点
     * @param src
     */
    fixInputDistance: function fixInputDistance(src) {
        var _this = this;

        src.getInput().forEach(function (node) {
            if (_this.isJumpDeep(node, src)) {
                var nextDeepNode = _this.getNextDeepNode(node.deep);
                if (nextDeepNode) {
                    if (_this.calcDistance(node, nextDeepNode) < nextDeepNode.minDistance) {
                        if (node.getInput().length == 1) {
                            node.getFirstInput().getOutput().forEach(function (node) {
                                _this.resetInputPosition(node, nextDeepNode);
                            });
                        }
                    }
                }
            } else {
                if (_this.calcDistance(node, src) < src.minDistance) {
                    _this.resetInputPosition(node, src);
                }
            }
            _this.fixInputDistance(node);
        });
    },


    /**
     * 修复间距:当从左往右拖拽目标节点时,重新计算被目标节点覆盖的右侧节点
     * @param src
     */
    fixOutputDistance: function fixOutputDistance(src) {
        var _this2 = this;

        src.getOutput().forEach(function (output) {
            if (_this2.calcDistance(src, output) < output.minDistance) {
                output.x = src.x + src.w + output.minDistance;
            }
            _this2.fixOutputDistance(output);
        });
    },


    /**
     * isJumpDeep
     * @param src
     * @param dist
     * @returns {boolean}
     */
    isJumpDeep: function isJumpDeep(src, dist) {
        return Math.abs(src.deep - dist.deep) != 1 ? true : false;
    },


    /**
     * getNextDeepNode
     * @param deep
     * @returns {*}
     */
    getNextDeepNode: function getNextDeepNode(deep) {
        for (var i = 0; i < _cache.cache.nodes.length; i++) {
            var node = _cache.cache.nodes[i];
            if (node.deep == deep + 1) {
                return node;
            }
        }
        return null;
    },


    /**
     * 重置PrevNode坐标,根据NextNode位置向左推移PrevNode位置
     * @param prevNode
     * @param nextNode
     */
    resetInputPosition: function resetInputPosition(prevNode, nextNode) {
        prevNode.x = nextNode.x - nextNode.minDistance - prevNode.w;
    },


    /**
     * 计算两个节点间的X轴间距
     * @param node1
     * @param node2
     * @returns {number}
     */
    calcDistance: function calcDistance(node1, node2) {
        return node2.x - (node1.x + node1.w);
    },


    /**
     * 计算指定区域内的覆盖物
     * @param x
     * @param y
     * @param w
     * @param h
     * @returns {Array}
     */
    computeCover: function computeCover(x, y, w, h) {
        var beginX = x;
        var endX = x + w;
        var beginY = y;
        var endY = y + h;
        var nodes = [];
        for (var i = 0; i < _cache.cache.nodes.length; i++) {
            var node = _cache.cache.nodes[i];
            var rx1 = node.x;
            var rx2 = node.x + node.w;
            var ry1 = node.y;
            var ry2 = node.y + node.h;
            if (beginX < rx1 && endX > rx2 || beginX >= rx1 && beginX <= rx2 && endX >= rx2) {
                if (beginY <= ry1 && endY >= ry2 || beginY >= ry1 && beginY <= ry2 && endY >= ry2 || beginY <= ry1 && endY >= ry1 && endY < ry2) {
                    nodes.push(node);
                }
            }
        }
        for (var _i3 = 0; _i3 < nodes.length; _i3++) {
            for (var j = 0; j < nodes.length; j++) {
                var x1 = nodes[_i3].x + nodes[_i3].w;
                var x2 = nodes[j].x + nodes[_i3].w;
                if (x1 > x2) {
                    var temp = nodes[_i3];
                    nodes[_i3] = nodes[j];
                    nodes[j] = temp;
                }
            }
        }
        nodes.splice(0, 1);
        nodes.splice(nodes.length - 1, 1);
        return nodes;
    },


    /**
     * updateLink
     * @param node
     */
    updateLink: function updateLink(node) {
        var lines = [];
        if (node) {
            lines = node.getRelativeLine();
        } else {
            lines = _cache.cache.lines;
        }
        lines.forEach(function (line) {
            line.update();
        });
    },


    /**
     * resetPosition
     */
    resetPosition: function resetPosition(update) {
        _cache.cache.nodes.forEach(function (node) {
            node.reset(update);
        });
    },


    /**
     * updatePosition
     */
    updatePosition: function updatePosition() {
        _cache.cache.nodes.forEach(function (node) {
            node.update();
        });
    },


    /**
     * order
     */
    order: function order() {
        this.resetPosition();
        this.computePositionX();
        this.computePositionY();
        this.updatePosition();
        this.updateLink();
    },


    /**
     * 重新计算所有节点的X轴坐标
     */
    computePositionX: function computePositionX() {
        this.fixOutputDistance(_cache.cache.nodes[0]);
    },


    /**
     * 重新计算所有节点的Y轴坐标
     */
    computePositionY: function computePositionY() {
        this.cleanAllPath();
        var start = _cache.cache.nodes[0];
        var end = _cache.cache.nodes[_cache.cache.nodes.length - 1];
        this.createPath(start, end);
        this.computePath(start, end, false, start);
        var path = this.getPathByStart(start);
        this.computePathWrapHeight(path);
        this.computeLayout(start, end, false, start);
    },


    /**
     * 递归计算高度
     * @param node
     * @param end
     * @param isChild
     * @param pNode
     */
    computePath: function computePath(node, end, isChild, pNode) {
        var _this3 = this;

        if (node.id == '3') {
            node.getOutput();
        }
        node.wrapHeight = 0;
        if (node.type != 'MutexNode' && !node.mutex) {
            node.wrapHeight = node.h;
        }
        if (node.type != 'MutexNode') {
            if (isChild) {
                this.addNodeToPath(node, end, node);
            } else {
                this.addNodeToPath(pNode, end, node);
            }
        }
        if (node == end) return;
        if (node.mutex) {
            node.getOutput().forEach(function (n) {
                _this3.computePath(n, node.mutex, true, n);
            });
            if (isChild) {
                this.addNodeToPath(node, end, node.mutex);
            } else {
                this.addNodeToPath(pNode, end, node.mutex);
            }
            node.mutex.getOutput().forEach(function (n) {
                _this3.computePath(n, end, false, pNode);
            });
        } else {
            node.getOutput().forEach(function (n) {
                _this3.computePath(n, end, false, pNode);
            });
        }
    },


    /**
     * computePathWrapHeight
     * @param path
     * @returns {*}
     */
    computePathWrapHeight: function computePathWrapHeight(path) {
        var _this4 = this;

        if (path.start == path.end) {
            return;
        }
        var arrWrapHeight = [];
        path.nodes.forEach(function (node) {
            if (node.mutex && node.type != 'MutexNode') {
                var wrapHeight = 0;
                node.getOutput().forEach(function (n) {
                    var p = _this4.getPathByStart(n);
                    wrapHeight += _this4.computePathWrapHeight(p);
                });
                node.wrapHeight = wrapHeight;
            }
            arrWrapHeight.push(node.wrapHeight);
        });
        this.sort(arrWrapHeight);
        var maxWrapHeight = arrWrapHeight[arrWrapHeight.length - 1];
        path.nodes.forEach(function (node) {
            node.wrapHeight = maxWrapHeight;
        });
        return maxWrapHeight;
    },


    /**
     * 计算布局
     * @param node
     * @param end
     * @param isChild
     * @param pNode
     */
    computeLayout: function computeLayout(node, end) {
        var _this5 = this;

        this._computeLayoutY(node);
        if (node == end) {
            return;
        }
        if (node.mutex) {
            node.getOutput().forEach(function (n) {
                _this5.computeLayout(n, node.mutex);
            });
            node.mutex.getOutput().forEach(function (n) {
                _this5.computeLayout(n, end);
            });
        } else {
            node.getOutput().forEach(function (n) {
                _this5.computeLayout(n, end);
            });
        }
    },


    /**
     * 计算布局
     * @param node
     * @param wrapHeight
     * @private
     */
    _computeLayoutY: function _computeLayoutY(node) {
        // if (node.id == '582e6d8d') debugger;
        // node.shape.rect.css('background', 'red');
        var y = 0;
        var input = node.getFirstInput();
        if (input) {
            if (this.isSameLevelNode(input, node)) {
                y += input.y + input.h / 2; //复位
                y -= node.h / 2;
            } else {
                if (node.type == 'AssigneeNode') {
                    if (node.getIndex() == 0) {
                        y += input.y + input.h / 2; //复位
                        // y -= node.wrapHeight; //顶置
                        // y += (node.wrapHeight - node.h) / 2; //偏移
                        var sb = node.getSiblings(true);
                        var sh = 0;
                        sb.forEach(function (n) {
                            sh += n.wrapHeight;
                        });
                        y -= sh / 2;
                        y += (node.wrapHeight - node.h) / 2; //偏移
                    } else {
                        var before = node.getBefore();
                        y += before.y - (before.wrapHeight - before.h) / 2; //复位
                        y += before.wrapHeight; //顶置
                        y += (node.wrapHeight - node.h) / 2; //偏移
                    }
                } else if (node.type == 'MutexNode') {
                    y += node.fork.y + node.fork.h / 2; //复位
                    y -= node.h / 2;
                }
            }
        } else {
            y = -node.h / 2;
        }
        node.y = y;
        node.update();
    },


    /**
     * 冒泡排序
     * @param arr
     * @param key
     */
    sort: function sort(arr, key) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                var v1 = arr[i];
                var v2 = arr[j];
                if (key) {
                    v1 = v1[key];
                    v2 = v2[key];
                }
                if (v1 < v2) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    },
    cleanAllPath: function cleanAllPath() {
        this.allPath = [];
    },
    addNodeToPath: function addNodeToPath(start, end, node) {
        var path = this.getPath(start, end);
        if (!path) {
            path = this.createPath(start, end);
        }
        var nodes = path.nodes;
        var exist = false;
        nodes.forEach(function (n) {
            if (n == node) {
                exist = true;
            }
        });
        if (!exist) {
            path.nodes.push(node);
        }
    },
    createPath: function createPath(start, end) {
        var path = {
            start: start,
            end: end,
            nodes: []
        };
        this.allPath.push(path);
        return path;
    },
    getPath: function getPath(start, end) {
        for (var i = 0; i < this.allPath.length; i++) {
            var path = this.allPath[i];
            if (path.start == start && path.end == end) {
                return path;
            }
        }
        return null;
    },
    getPathByStart: function getPathByStart(start) {
        for (var i = 0; i < this.allPath.length; i++) {
            var path = this.allPath[i];
            if (path.start == start) {
                return path;
            }
        }
        return null;
    },
    getPathByNode: function getPathByNode(node) {
        for (var i = 0; i < this.allPath.length; i++) {
            var path = this.allPath[i];
            for (var j = 0; j < path.nodes.length; j++) {
                if (path.nodes[j] == node) {
                    return path;
                }
            }
        }
        return null;
    },
    isSameLevelNode: function isSameLevelNode(node1, node2) {
        var key1 = this.getPathKey(node1);
        var key2 = this.getPathKey(node2);
        if (key1 == key2) {
            return true;
        }
        return false;
    },
    getPathKey: function getPathKey(node) {
        for (var key in this.allPath) {
            var path = this.allPath[key];
            var nodes = path.nodes;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i] == node) {
                    return path.start.id + '-' + path.end.id;
                }
            }
        }
        return null;
    },
    clone: function clone(origin) {
        var originProto = Object.getPrototypeOf(origin);
        return Object.assign(Object.create(originProto), origin);
    },


    /**
     * 输出JSON
     * @returns {XML|string|void|*}
     */
    outputJSON: function outputJSON() {
        var json = '{';
        json += '"nodes":[';
        for (var i = 0; i < _cache.cache.nodes.length; i++) {
            var node = _cache.cache.nodes[i];
            if (i == 0) json += node.toJson();else json += ',' + node.toJson();
        }
        json += '],';
        json += '"lines":[';
        for (var _i4 = 0; _i4 < _cache.cache.lines.length; _i4++) {
            var line = _cache.cache.lines[_i4];
            if (_i4 == 0) json += line.toJson();else json += ',' + line.toJson();
        }
        json += ']';
        json += '}';
        return json;
    },


    /**
     * validate
     */
    validate: function validate() {
        var validation = true;
        for (var i = 0; i < _cache.cache.lines.length; i++) {
            var line = _cache.cache.lines[i];
            if (line.fromNode.getOutput().length > 1) {
                if (line.expressionText.length == 0) {
                    validation = false;
                    break;
                }
            }
        }
        return validation;
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cache = undefined;

var _node = __webpack_require__(12);

var _line = __webpack_require__(11);

var _util = __webpack_require__(0);

var cache = exports.cache = {
    nodes: [],
    lines: [],
    groupedNodes: [],
    nodeMap: new Map(),
    lineMap: new Map(),
    clean: function clean() {
        this.nodes = [];
        this.lines = [];
        this.groupedNodes = [];
        this.nodeMap = new Map();
        this.lineMap = new Map();
    },
    load: function load(data) {
        var _this = this;

        this.clean();
        data.nodes.forEach(function (node) {
            switch (node.nodeType) {
                case 0:
                    //start
                    _this.attachNode(new _node.StartNode(node, node.nodeId, node.nodeName, node.x, node.y));
                    break;
                case 1:
                    //end
                    _this.attachNode(new _node.EndNode(node, node.nodeId, node.nodeName, node.x, node.y));
                    break;
                case 2:
                    //apply
                    _this.attachNode(new _node.ApplyNode(node, node.nodeId, node.nodeName, node.x, node.y));
                    break;
                case 3:
                    //assignee
                    _this.attachNode(new _node.AssigneeNode(node, node.nodeId, node.nodeName, node.x, node.y));
                    break;
                case 4:
                    //mutex
                    _this.attachNode(new _node.MutexNode(node, node.nodeId, node.nodeName, node.x, node.y));
                    break;
            }
        });
        data.lines.forEach(function (line) {
            _this.attachLine(new _line.Line(line, line.id, line.name, line.from, line.to, line.expressionText, line.expression));
        });
        data.nodes.forEach(function (node) {
            if (node.forkId) {
                _this.nodeMap.get(node.nodeId).fork = _this.nodeMap.get(node.forkId);
            }
            if (node.mutexId) {

                _this.nodeMap.get(node.nodeId).mutex = _this.nodeMap.get(node.mutexId);
            }
        });
        this.updateDeep();
    },
    createNode: function createNode() {
        return new _node.AssigneeNode();
    },
    createMutex: function createMutex() {
        return new _node.MutexNode();
    },
    createLine: function createLine(fromId, toId) {
        return new _line.Line({}, _util.util.createUniqueId(), null, fromId, toId);
    },
    attachNode: function attachNode(node) {
        this.nodes.push(node);
        this.nodeMap.set(node.id, node);
    },
    detachNode: function detachNode(node) {
        var idx = this.nodes.indexOf(node);
        this.nodeMap.delete(node.id);
        this.nodes.splice(idx, 1);
    },
    attachLine: function attachLine(line) {
        this.lines.push(line);
        this.lineMap.set(line.id, line);
    },
    detachLine: function detachLine(line) {
        var idx = this.lines.indexOf(line);
        this.lineMap.delete(line.id);
        this.lines.splice(idx, 1);
    },
    updateDeep: function updateDeep() {
        // console.log('----计算前----');
        this.nodes.forEach(function (node) {
            node.deep = undefined;
        });
        // this.printlnNode();
        this.computeDeep(this.nodes[0], 1);
        this.orderByDeep();
        this.groupNodes();
        // console.log('----计算后----');
        // this.printlnNode();
    },
    computeDeep: function computeDeep(node, deep) {
        var _this2 = this;

        if (node.deep == undefined || node.deep < deep) {
            // console.log('----计算中----');
            // console.log(node.name, deep);
            node.deep = deep;
        }
        node.getOutput().forEach(function (n) {
            _this2.computeDeep(n, deep + 1);
        });
    },
    orderByDeep: function orderByDeep() {
        var arr = this.nodes;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[i].deep < arr[j].deep) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        for (var _i = 0; _i < arr.length; _i++) {
            if (_i != 0) {
                var prevNode = arr[_i - 1];
                var node = arr[_i];
                if (node.deep != prevNode.deep) {
                    if (node.deep != prevNode.deep + 1) {
                        node.deep = prevNode.deep + 1;
                    }
                }
            }
        }
    },
    groupNodes: function groupNodes() {
        var deep = null;
        var groupNodes = [];
        for (var i = 0; i < this.nodes.length; i++) {
            var node = this.nodes[i];
            if (i == 0) {
                groupNodes.push([node]);
            } else {
                if (node.deep == deep) {
                    var lastSubGroup = groupNodes[groupNodes.length - 1];
                    lastSubGroup.push(node);
                } else {
                    groupNodes.push([node]);
                }
            }
            deep = node.deep;
        }
        this.groupedNodes = groupNodes;
    },
    printlnNode: function printlnNode() {
        this.nodes.forEach(function (node) {
            console.log(node.id, node.deep);
        });
    },
    getAssigneeNode: function getAssigneeNode() {
        var nodes = [];
        this.nodes.forEach(function (node) {
            if (node.type == 'AssigneeNode') {
                nodes.push(node);
            }
        });
        return nodes;
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Constant = exports.Constant = {
    Container: 'fc-work-area',
    Elements: 'elements',
    code: {
        DELETE_ERROR_100: 'delete error 100', //删除失败，需要删除子节点之后才能删除该节点
        DELETE_ERROR_101: 'delete error 101'
    },
    node: {
        w: 150,
        h: 90,
        render: function render(node, nodeBody) {}
    },
    menu: {
        conditionFn: function conditionFn() {},
        appendMultipleNode: function appendMultipleNode(data, line) {}
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nodeSettings = nodeSettings;
exports.nodeService = nodeService;
exports.lineService = lineService;

var _cache = __webpack_require__(1);

var _util = __webpack_require__(0);

function nodeSettings(options) {
    return function (target) {
        target.prototype.enableSetName = options.enableSetName || false;
        target.prototype.enableSetApprover = options.enableSetApprover || false;
        target.prototype.enableAppendChild = options.enableAppendChild || false;
        target.prototype.enableAppendChildes = options.enableAppendChildes || false;
        target.prototype.enableInsertAfter = options.enableInsertAfter || false;
        target.prototype.enableRemove = options.enableRemove || false;
    };
}

function nodeService(target) {
    Object.assign(target.prototype, nodeServiceImpl);
}

var nodeServiceImpl = {
    appendNode: function appendNode(num) {
        num = num || 1;
        if (num == 1) {
            var node = _cache.cache.createNode();
            _cache.cache.attachNode(node);
            if (this.mutex) {
                node.mutex = this.mutex;
                node.mutex.fork = node;
                delete this.mutex;
            }
            this.getOutputLine().forEach(function (line) {
                _cache.cache.attachLine(_cache.cache.createLine(node.id, line.to));
                _cache.cache.detachLine(line.delete());
            });
            _cache.cache.attachLine(_cache.cache.createLine(this.id, node.id));
        } else {
            //>1
            var mutex = _cache.cache.createMutex();
            this.mutex = mutex;
            _cache.cache.attachNode(mutex);
            this.getOutputLine().forEach(function (line) {
                _cache.cache.attachLine(_cache.cache.createLine(mutex.id, line.to));
                _cache.cache.detachLine(line.delete());
            });
            for (var i = 0; i < num; i++) {
                var _node = _cache.cache.createNode();
                _cache.cache.attachNode(_node);
                _cache.cache.attachLine(_cache.cache.createLine(this.id, _node.id));
                _cache.cache.attachLine(_cache.cache.createLine(_node.id, mutex.id));
            }
            mutex.fork = this;
        }
        _cache.cache.updateDeep();
        _util.util.order();
    },
    addSibling: function addSibling() {
        if (this.getFirstInput().type == 'MutexNode') {
            return;
        }
        var node = _cache.cache.createNode();
        _cache.cache.attachNode(node);
        var firstInput = this.getFirstInput();
        _cache.cache.attachLine(_cache.cache.createLine(firstInput.id, node.id));
        if (firstInput.mutex) {
            _cache.cache.attachLine(_cache.cache.createLine(node.id, firstInput.mutex.id));
        } else {
            if (this.mutex) {
                var mutex = _cache.cache.createMutex();
                firstInput.mutex = mutex;
                mutex.fork = firstInput;
                _cache.cache.attachNode(mutex);
                _cache.cache.attachLine(_cache.cache.createLine(this.mutex.id, mutex.id));
                _cache.cache.attachLine(_cache.cache.createLine(node.id, mutex.id));
                var firstOutput = this.mutex.getFirstOutput();
                _cache.cache.attachLine(_cache.cache.createLine(mutex.id, firstOutput.id));
                var outputLine = this.mutex.getOutputLine()[0];
                _cache.cache.detachLine(outputLine.delete());
            } else {
                var _mutex = _cache.cache.createMutex();
                firstInput.mutex = _mutex;
                _mutex.fork = firstInput;
                _cache.cache.attachNode(_mutex);
                _cache.cache.attachLine(_cache.cache.createLine(this.id, _mutex.id));
                _cache.cache.attachLine(_cache.cache.createLine(node.id, _mutex.id));
                var _firstOutput = this.getFirstOutput();
                _cache.cache.attachLine(_cache.cache.createLine(_mutex.id, _firstOutput.id));
                var _outputLine = this.getOutputLine()[0];
                _cache.cache.detachLine(_outputLine.delete());
            }
        }
        _cache.cache.updateDeep();
        _util.util.order();
    },
    remove: function remove() {
        var path = _util.util.getPathByNode(this);
        //如果是Fork节点并且是一条路径的开始
        if (this.mutex) {
            //需要删除的Fork节点对应的Mutex点，与Mutex的下一个Output是同一路径，则无法删除该节点
            if (this == path.start && _util.util.isSameLevelNode(this.mutex, this.mutex.getFirstOutput())) {
                console.log('DELETE ERROR 100');
            } else if (this.getFirstInput().type == 'MutexNode') {
                console.log('DELETE ERROR 101');
            } else {
                var output = this.getOutput();
                var inputLine = this.getInputLine();
                var outputLine = this.getOutputLine();
                var firstInput = this.getFirstInput();
                var firstInputMutex = firstInput.mutex;
                _cache.cache.detachNode(this.delete());
                inputLine.forEach(function (line) {
                    _cache.cache.detachLine(line.delete());
                });
                outputLine.forEach(function (line) {
                    _cache.cache.detachLine(line.delete());
                });
                if (_util.util.isSameLevelNode(this, firstInput)) {
                    firstInput.mutex = this.mutex;
                    output.forEach(function (n) {
                        _cache.cache.attachLine(_cache.cache.createLine(firstInput.id, n.id));
                    });
                } else {
                    this.mutex.remove();
                    output.forEach(function (n) {
                        var path = _util.util.getPathByStart(n);
                        var lastNode = path.nodes[path.nodes.length - 1];
                        if (lastNode.mutex) {
                            lastNode = lastNode.mutex;
                        }
                        _cache.cache.attachLine(_cache.cache.createLine(firstInput.id, n.id));
                        _cache.cache.attachLine(_cache.cache.createLine(lastNode.id, firstInputMutex.id));
                    });
                }
            }
            _cache.cache.updateDeep();
            _util.util.order();
        } else if (this.type == 'MutexNode') {
            delete this.fork.mutex;
            var _inputLine = this.getInputLine();
            var _outputLine2 = this.getOutputLine();
            _cache.cache.detachNode(this.delete());
            _inputLine.forEach(function (line) {
                _cache.cache.detachLine(line.delete());
            });
            _outputLine2.forEach(function (line) {
                _cache.cache.detachLine(line.delete());
            });
        } else {
            var assignNodeCount = 0;
            path.nodes.forEach(function (n) {
                if (n.type == 'AssigneeNode') {
                    assignNodeCount++;
                }
            });
            //路径上删除本节点后就没有AssignNode了
            if (assignNodeCount == 1) {
                var _firstInput = this.getFirstInput();
                var pathCount = _firstInput.getOutput().length;
                //删除本身相关节点
                var _inputLine2 = this.getInputLine();
                var _outputLine3 = this.getOutputLine();
                _cache.cache.detachNode(this.delete());
                _inputLine2.forEach(function (line) {
                    _cache.cache.detachLine(line.delete());
                });
                _outputLine3.forEach(function (line) {
                    _cache.cache.detachLine(line.delete());
                });
                //删除之后分支就消失了，需要删除对应Mutex
                if (pathCount - 1 == 1) {
                    var n1 = _firstInput.mutex.getFirstOutput();
                    var n2 = _firstInput.getFirstOutput();
                    var p = _util.util.getPathByStart(n2);
                    var n3 = p.nodes[p.nodes.length - 1];
                    _firstInput.mutex.remove();
                    _cache.cache.attachLine(_cache.cache.createLine(n3.id, n1.id));
                }
            } else {
                //删除之后还有AssignNode,至需要连接前后的点
                var _firstInput2 = this.getFirstInput();
                var _inputLine3 = this.getInputLine();
                var _outputLine4 = this.getOutputLine();
                //修改fork和mutex关系
                if (this.mutex) {
                    _firstInput2.mutex = this.mutex;
                    this.mutex.fork = _firstInput2;
                }
                _cache.cache.detachNode(this.delete());
                _inputLine3.forEach(function (line) {
                    _cache.cache.detachLine(line.delete());
                });
                _outputLine4.forEach(function (line) {
                    _cache.cache.attachLine(_cache.cache.createLine(_inputLine3[0].from, line.to));
                    _cache.cache.detachLine(line.delete());
                });
            }
            _cache.cache.updateDeep();
            _util.util.order();
        }
    },
    getOutputLine: function getOutputLine() {
        return this.getRelativeLine('output');
    },
    getInputLine: function getInputLine() {
        return this.getRelativeLine('input');
    },
    getRelativeLine: function getRelativeLine(type) {
        var _this = this;

        var relativeLine = [];
        _cache.cache.lines.forEach(function (line) {
            if (type == 'from' || type == 'next' || type == 'output') {
                if (_this.id == line.from) {
                    relativeLine.push(line);
                }
            } else if (type == 'to' || type == 'prev' || type == 'input') {
                if (_this.id == line.to) {
                    relativeLine.push(line);
                }
            } else {
                if (_this.id == line.from || _this.id == line.to) {
                    relativeLine.push(line);
                }
            }
        });
        return relativeLine;
    },
    getOutput: function getOutput() {
        var relativeNodes = [];
        var lines = this.getRelativeLine('from');
        lines.forEach(function (line) {
            var node = line.getToNode();
            if (node) relativeNodes.push(node);
        });
        return relativeNodes;
    },
    getFirstOutput: function getFirstOutput() {
        var output = this.getOutput();
        return output[0];
    },
    getLastOutput: function getLastOutput() {
        var output = this.getOutput();
        return output[output.length - 1];
    },
    getInput: function getInput() {
        var relativeNodes = [];
        var lines = this.getRelativeLine('to');
        lines.forEach(function (line) {
            var node = line.getFromNode();
            if (node) relativeNodes.push(node);
        });
        return relativeNodes;
    },
    getFirstInput: function getFirstInput() {
        var input = this.getInput();
        return input[0];
    },
    getLastInput: function getLastInput() {
        var input = this.getInput();
        return input[input.length - 1];
    },
    getBefore: function getBefore() {
        var input = this.getInput();
        if (input.length != 0) {
            //非Mutex
            if (input.length == 1) {
                var siblings = input[0].getOutput();
                var index = siblings.indexOf(this);
                if (index - 1 >= 0) {
                    return siblings[index - 1];
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    },
    getAfter: function getAfter() {
        var input = this.getInput();
        if (input.length != 0) {
            //非Mutex
            if (input.length == 1) {
                var siblings = input[0].getOutput();
                var index = siblings.indexOf(this);
                if (index + 1 <= siblings.length - 1) {
                    return siblings[index + 1];
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    },

    /**
     * getSiblings
     * @param hasSelf
     * @returns {Array}
     */
    getSiblings: function getSiblings(hasSelf) {
        var _this2 = this;

        var siblings = [];
        if (this.type == 'StartNode') {
            return [this];
        }
        if (this.getInput().length == 1) {
            this.getFirstInput().getOutput().forEach(function (node) {
                if (!hasSelf) {
                    if (_this2 != node) {
                        siblings.push(node);
                    }
                } else {
                    siblings.push(node);
                }
            });
        }
        return siblings;
    },
    getIndex: function getIndex() {
        var idx = 0;
        var sb = this.getSiblings(true);
        if (sb.length != 0) {
            idx = sb.indexOf(this);
        }
        return idx;
    },
    toJson: function toJson() {
        var origin = _util.util.clone(this);
        origin.shape && delete origin.shape;
        origin.fork && delete origin.fork;
        origin.mutex && delete origin.mutex;
        var obj = Object.assign(origin, {
            nodeId: this.id,
            nodeName: this.name,
            nodeType: this.nodeType,
            forkId: this.fork && this.fork.id,
            mutexId: this.mutex && this.mutex.id
        });
        return JSON.stringify(obj);
    }
};

function lineService(target) {
    Object.assign(target.prototype, lineServiceImpl);
}

var lineServiceImpl = {
    getFromNode: function getFromNode() {
        return _cache.cache.nodeMap.get(this.from);
    },
    getToNode: function getToNode() {
        return _cache.cache.nodeMap.get(this.to);
    },
    toJson: function toJson() {
        var origin = _util.util.clone(this);
        origin.shape && delete origin.shape;
        origin.fromNode && delete origin.fromNode;
        origin.toNode && delete origin.toNode;
        return JSON.stringify(origin);
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../build/node_modules/.0.28.4@css-loader/index.js!../../build/node_modules/.6.0.5@sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../build/node_modules/.0.28.4@css-loader/index.js!../../build/node_modules/.6.0.5@sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlowChart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(10);

var _constant = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlowChart = exports.FlowChart = function () {
    function FlowChart(options) {
        _classCallCheck(this, FlowChart);

        var opt = {
            width: 'auto',
            height: 400,
            scale: 1
        };
        Object.assign(opt, options);
        opt.node.w && (_constant.Constant.node.w = opt.node.w);
        opt.node.h && (_constant.Constant.node.h = opt.node.h);
        opt.node.render && (_constant.Constant.node.render = opt.node.render);
        opt.customMenu && (_constant.Constant.customMenu = opt.customMenu);
        opt.menu.conditionFn && (_constant.Constant.menu.conditionFn = opt.menu.conditionFn);
        opt.menu.appendMultipleNode && (_constant.Constant.menu.appendMultipleNode = opt.menu.appendMultipleNode);
        this.engine = new _engine.RenderEngine(opt);
    }

    _createClass(FlowChart, [{
        key: 'load',
        value: function load(data) {
            this.engine.load(data);
        }
    }, {
        key: 'order',
        value: function order() {
            this.engine.order();
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.engine.reset();
        }
    }, {
        key: 'undo',
        value: function undo() {
            this.engine.undo();
        }
    }, {
        key: 'printJSON',
        value: function printJSON() {
            return this.engine.outputJSON();
        }
    }, {
        key: 'validate',
        value: function validate() {
            return this.engine.validate();
        }
    }]);

    return FlowChart;
}();

;
window.FlowChart = FlowChart;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(undefined);
// imports


// module
exports.push([module.i, ".fc-work-area {\n  position: relative;\n  overflow: hidden;\n  user-select: none;\n  cursor: -webkit-grab; }\n  .fc-work-area .elements {\n    position: absolute;\n    transform: translate(0, 0);\n    transform-origin: center;\n    top: 55%;\n    left: 15%; }\n    .fc-work-area .elements .line {\n      position: absolute; }\n    .fc-work-area .elements .line-text {\n      position: absolute; }\n      .fc-work-area .elements .line-text .text {\n        position: absolute;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        font-size: 12px;\n        cursor: text; }\n    .fc-work-area .elements .rect {\n      position: absolute;\n      border-radius: 3px;\n      background: #234b5e;\n      cursor: move;\n      box-sizing: border-box;\n      color: #f7ebca;\n      opacity: 0.8;\n      border: 2px solid #e1e1e1;\n      font-size: 14px; }\n      .fc-work-area .elements .rect .handle {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        z-index: 1000; }\n      .fc-work-area .elements .rect .drop-menu {\n        position: absolute;\n        z-index: 99999;\n        top: -1px;\n        left: 94px;\n        width: 125px;\n        padding: 8px 0;\n        border-radius: 5px;\n        background: #fff;\n        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);\n        display: none; }\n        .fc-work-area .elements .rect .drop-menu .drop-item {\n          line-height: 33px;\n          height: 33px;\n          display: block;\n          padding-left: 10px;\n          color: #666;\n          text-decoration: none; }\n          .fc-work-area .elements .rect .drop-menu .drop-item:hover {\n            background: #234b5e;\n            color: #fff; }\n    .fc-work-area .elements [data-type=\"StartNode\"],\n    .fc-work-area .elements [data-type=\"EndNode\"] {\n      font-size: 13px;\n      line-height: 34px;\n      position: absolute;\n      box-sizing: border-box;\n      text-align: center;\n      border-radius: 50px; }\n      .fc-work-area .elements [data-type=\"StartNode\"] .node-title,\n      .fc-work-area .elements [data-type=\"EndNode\"] .node-title {\n        line-height: 30px;\n        height: 30px; }\n    .fc-work-area .elements [data-type=\"ApplyNode\"],\n    .fc-work-area .elements [data-type=\"AssigneeNode\"] {\n      text-align: center;\n      vertical-align: middle;\n      border-radius: 3px; }\n      .fc-work-area .elements [data-type=\"ApplyNode\"] .node-title,\n      .fc-work-area .elements [data-type=\"AssigneeNode\"] .node-title {\n        border-bottom: 1px solid; }\n    .fc-work-area .elements [data-type=\"MutexNode\"] {\n      transform: rotate(45deg) scale(0.75);\n      border: 1px solid #ccc;\n      border-radius: 0; }\n      .fc-work-area .elements [data-type=\"MutexNode\"] .node-title {\n        border-bottom: 1px solid; }\n      .fc-work-area .elements [data-type=\"MutexNode\"] .drop-menu {\n        transform: rotate(-45deg) scale(1.25);\n        top: -80px;\n        left: 45px; }\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RenderEngine = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _cache = __webpack_require__(1);

var _util = __webpack_require__(0);

var _constant = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderEngine = exports.RenderEngine = function () {
    function RenderEngine(options) {
        _classCallCheck(this, RenderEngine);

        this.options = options;
        this.workarea = $(options.container).addClass(_constant.Constant.Container).css({
            width: this.options.width,
            height: this.options.height
        });
        this.elements = $('<div>').addClass(_constant.Constant.Elements).css({
            width: 50,
            height: 50
        }).appendTo(this.workarea);
        this.commonEvent();
    }

    /**
     * 加载数据
     * @param data
     */


    _createClass(RenderEngine, [{
        key: 'load',
        value: function load(data) {
            _cache.cache.load(data);
            _util.util.order();
        }

        /**
         * 重新排列
         */

    }, {
        key: 'order',
        value: function order() {
            _util.util.order();
        }

        /**
         * 重置所有数据
         */

    }, {
        key: 'reset',
        value: function reset() {}

        /**
         * 撤销
         */

    }, {
        key: 'undo',
        value: function undo() {}

        /**
         * validate
         */

    }, {
        key: 'validate',
        value: function validate() {
            return _util.util.validate();
        }

        /**
         * 输出JSON
         */

    }, {
        key: 'outputJSON',
        value: function outputJSON() {
            return _util.util.outputJSON();
        }

        /**
         * 公共事件
         */

    }, {
        key: 'commonEvent',
        value: function commonEvent() {
            this.scaleCanvas();
            this.dragCanvas();
            var that = this;
            this.workarea.bind("contextmenu", function () {
                return false;
            });
            this.elements.bind("contextmenu", function () {
                return false;
            });
            $(document).mousedown(function () {
                $('.drop-menu', that.options.container).hide();
            });
        }

        /**
         * 缩放画布
         */

    }, {
        key: 'scaleCanvas',
        value: function scaleCanvas() {
            var that = this;
            _util.util.setScale(this.elements, this.options.scale);
            this.workarea.mousewheel(function (event) {
                event.stopPropagation();
                event.preventDefault();
                if (window.navigator.userAgent.indexOf('Windows') >= 0) {
                    that.options.scale += event.deltaY / 50;
                } else {
                    that.options.scale += event.deltaY / 100000;
                }
                _util.util.setScale(that.elements, that.options.scale);
            });
        }

        /**
         * 拖拽画布
         */

    }, {
        key: 'dragCanvas',
        value: function dragCanvas() {
            var that = this;
            var ox = void 0;
            var oy = void 0;
            var target = that.elements;
            var _mousedown = function _mousedown(e) {
                if (3 != e.which) {
                    ox = e.pageX;
                    oy = e.pageY;
                    $(document).on('mousemove', _mousemove);
                    $(document).on('mouseup', _mouseup);
                }
            };
            var _mousemove = function _mousemove(e) {
                var dx = (e.pageX - ox) / that.options.scale;
                var dy = (e.pageY - oy) / that.options.scale;
                var x = _util.util.getTranslateX(target) + dx;
                var y = _util.util.getTranslateY(target) + dy;
                _util.util.setTranslate(target, {
                    x: x,
                    y: y
                });
                ox = e.pageX;
                oy = e.pageY;
            };
            var _mouseup = function _mouseup(e) {
                $(document).unbind('mousemove', _mousemove);
                $(document).unbind('mouseup', _mouseup);
            };
            this.workarea.mousedown(_mousedown);
        }
    }, {
        key: 'fit',
        value: function fit() {}
    }]);

    return RenderEngine;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Line = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _service = __webpack_require__(3);

var _shapeLine = __webpack_require__(13);

var _util = __webpack_require__(0);

var _cache = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = exports.Line = (0, _service.lineService)(_class = function () {
    function Line(originLine) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.util.createUniqueId();
        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var fromNodeId = arguments[3];
        var toNodeId = arguments[4];
        var expressionText = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
        var expression = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';

        _classCallCheck(this, Line);

        this.id = id;
        this.name = name;
        this.from = fromNodeId;
        this.to = toNodeId;
        this.fromNode = _cache.cache.nodeMap.get(this.from);
        this.toNode = _cache.cache.nodeMap.get(this.to);
        this.expressionText = expressionText;
        this.expression = expression;
        if (originLine) {
            Object.assign(this, originLine);
        }
        this.shape = new _shapeLine.ShapeLine(this);
    }

    _createClass(Line, [{
        key: 'update',
        value: function update() {
            this.shape.update();
            return this;
        }
    }, {
        key: 'delete',
        value: function _delete() {
            this.shape.delete();
            return this;
        }
    }]);

    return Line;
}()) || _class;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MutexNode = exports.AssigneeNode = exports.ApplyNode = exports.EndNode = exports.StartNode = exports.Node = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _dec, _class2, _dec2, _class3, _dec3, _class4;

var _service = __webpack_require__(3);

var _shapeNode = __webpack_require__(14);

var _util = __webpack_require__(0);

var _constant = __webpack_require__(2);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = exports.Node = (0, _service.nodeService)(_class = function () {
    function Node(originNode) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.util.createUniqueId();
        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'node';
        var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var w = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 120;
        var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 90;

        _classCallCheck(this, Node);

        this.id = this.nodeId = id;
        this.name = this.nodeName = name;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.wrapHeight = 0;
        if (originNode) {
            Object.assign(this, originNode);
        }
    }

    _createClass(Node, [{
        key: 'update',
        value: function update() {
            this.shape.update();
            return this;
        }
    }, {
        key: 'reset',
        value: function reset(update) {
            this.shape.reset(update);
            return this;
        }
    }, {
        key: 'delete',
        value: function _delete() {
            this.shape.delete();
            return this;
        }
    }]);

    return Node;
}()) || _class;

var StartNode = exports.StartNode = function (_Node) {
    _inherits(StartNode, _Node);

    function StartNode(originNode, id, name, x, y) {
        var w = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 62;
        var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 34;

        _classCallCheck(this, StartNode);

        var _this = _possibleConstructorReturn(this, (StartNode.__proto__ || Object.getPrototypeOf(StartNode)).call(this, originNode, id, name, x, y, w, h));

        _this.type = 'StartNode';
        _this.nodeType = 0;
        _this.shape = new _shapeNode.ShapeNode(_this);
        return _this;
    }

    return StartNode;
}(Node);

var EndNode = exports.EndNode = function (_Node2) {
    _inherits(EndNode, _Node2);

    function EndNode(originNode, id, name, x, y) {
        var w = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 62;
        var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 34;

        _classCallCheck(this, EndNode);

        var _this2 = _possibleConstructorReturn(this, (EndNode.__proto__ || Object.getPrototypeOf(EndNode)).call(this, originNode, id, name, x, y, w, h));

        _this2.type = 'EndNode';
        _this2.nodeType = 1;
        _this2.minDistance = 70;
        _this2.shape = new _shapeNode.ShapeNode(_this2);
        return _this2;
    }

    return EndNode;
}(Node);

var ApplyNode = exports.ApplyNode = (_dec = (0, _service.nodeSettings)({
    enableAppendChild: true,
    enableAppendChildes: true
}), _dec(_class2 = function (_Node3) {
    _inherits(ApplyNode, _Node3);

    function ApplyNode(originNode, id, name, x, y) {
        var w = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 96;
        var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 74;

        _classCallCheck(this, ApplyNode);

        var _this3 = _possibleConstructorReturn(this, (ApplyNode.__proto__ || Object.getPrototypeOf(ApplyNode)).call(this, originNode, id, name, x, y, w, h));

        _this3.type = 'ApplyNode';
        _this3.nodeType = 2;
        _this3.minDistance = 70;
        _this3.shape = new _shapeNode.ShapeNode(_this3);
        return _this3;
    }

    return ApplyNode;
}(Node)) || _class2);
var AssigneeNode = exports.AssigneeNode = (_dec2 = (0, _service.nodeSettings)({
    enableSetApprover: true,
    enableAppendChild: true,
    enableAppendChildes: true,
    enableInsertAfter: true,
    enableRemove: true
}), _dec2(_class3 = function (_Node4) {
    _inherits(AssigneeNode, _Node4);

    function AssigneeNode(originNode, id, name, x, y) {
        var w = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _constant.Constant.node.w;
        var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _constant.Constant.node.h;

        _classCallCheck(this, AssigneeNode);

        var _this4 = _possibleConstructorReturn(this, (AssigneeNode.__proto__ || Object.getPrototypeOf(AssigneeNode)).call(this, originNode, id, name, x, y, w, h));

        _this4.type = 'AssigneeNode';
        _this4.nodeType = 3;
        _this4.minDistance = 150;
        _this4.marginBottom = 50;
        _this4.shape = new _shapeNode.ShapeNode(_this4);
        return _this4;
    }

    return AssigneeNode;
}(Node)) || _class3);
var MutexNode = exports.MutexNode = (_dec3 = (0, _service.nodeSettings)({
    enableAppendChild: true
}), _dec3(_class4 = function (_Node5) {
    _inherits(MutexNode, _Node5);

    function MutexNode(originNode, id, name, x, y) {
        _classCallCheck(this, MutexNode);

        var _this5 = _possibleConstructorReturn(this, (MutexNode.__proto__ || Object.getPrototypeOf(MutexNode)).call(this, originNode, id, name, x, y, 50, 50));

        _this5.type = 'MutexNode';
        _this5.nodeType = 4;
        _this5.minDistance = 60;
        _this5.shape = new _shapeNode.ShapeNode(_this5);
        return _this5;
    }

    return MutexNode;
}(Node)) || _class4);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShapeLine = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _util = __webpack_require__(0);

var _constant = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShapeLine = exports.ShapeLine = function () {
    function ShapeLine(line) {
        var stroke = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#f76258';
        var strokeWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

        _classCallCheck(this, ShapeLine);

        this.line = line;
        this.svg = $('<svg class="line">').css({
            zIndex: 1
        }).appendTo('.' + _constant.Constant.Elements);
        var snap = Snap(this.svg[0]);
        var arrow = snap.paper.path('M2,2 L6,5 L2,8 L3,5 L2,2').attr({
            fill: '#f76258'
        }).marker(0, 0, 12, 12, 5.5, 5);
        this.path = snap.paper.path('M0 0 L0 0').attr({
            stroke: stroke,
            strokeWidth: strokeWidth,
            fill: 'none',
            'marker-end': arrow
        });
        this.lineText = $('<div class="line-text">').css({
            zIndex: 1
        }).appendTo('.' + _constant.Constant.Elements);
        //渲染Text
        var fromNode = this.line.getFromNode();
        var fromNodeOutput = fromNode.getOutput();
        var expressionText = this.line.expressionText || [{ label: '' }];
        var expressionArr = [];
        expressionText.forEach(function (expression) {
            expressionArr.push(expression.operate ? expression.operate + ' ' + expression.label : expression.label);
        });
        this.text = $('<div class="text" title="' + expressionArr.join('\n') + '">' + expressionArr.join('\n') + '</div>').appendTo(this.lineText);
    }

    _createClass(ShapeLine, [{
        key: 'update',
        value: function update() {
            var fromNode = this.line.fromNode;
            var toNode = this.line.toNode;
            var rect1x = fromNode.x;
            var rect1y = fromNode.y;
            var rect1w = fromNode.w;
            var rect1h = fromNode.h;
            var rect2x = toNode.x;
            var rect2y = toNode.y;
            var rect2w = toNode.w;
            var rect2h = toNode.h;
            var x = rect1x < rect2x ? rect1x : rect2x;
            var y = rect1y < rect2y ? rect1y : rect2y;
            var w = rect1x < rect2x ? rect2x - rect1x + rect2w : rect1x - rect2x + rect1w;
            var h = rect1y < rect2y ? rect2y - rect1y + rect2h : rect1y - rect2y + rect1h;
            var maxWidth = rect1w > rect2w ? rect1w : rect2w;
            var maxHeight = rect1h > rect2h ? rect1h : rect2h;
            if (w < maxWidth) {
                w = maxWidth;
            }
            if (h < maxHeight) {
                h = maxHeight;
            }
            this.svg.css({
                left: x,
                top: y,
                width: w,
                height: h
            });
            this.lineText.css({
                left: x,
                top: y,
                width: w,
                height: h
            });
            var svgX = parseFloat(this.svg.css('left'));
            var svgY = parseFloat(this.svg.css('top'));
            var point1 = [],
                point2 = [],
                point3 = [],
                point4 = [];
            point1[0] = rect1w;
            point1[1] = rect1y - svgY + rect1h / 2;
            point1[1] = rect1y - svgY + rect1h / 2;
            point2[0] = w - rect2w;
            point2[1] = rect2y - svgY + rect2h / 2;
            var covers = _util.util.computeCover(x, y, w, h);
            var cover = covers[0];
            //左
            if (rect2x < rect1x) {
                point1[0] = rect1x - rect2x;
                point2[0] = rect2w;
                point3[0] = point1[0] - 20;
                point3[1] = point1[1];
                point4[0] = point3[0];
                point4[1] = point2[1];
                //上
                if (_util.util.isJumpDeep(fromNode, toNode)) {
                    if (cover) {
                        point3[0] = cover.x - x + cover.w + 20;
                        point4[0] = point3[0];
                    }
                }
            } else {
                //右
                point3[0] = point1[0] + 20;
                point3[1] = point1[1];
                point4[0] = point3[0];
                point4[1] = point2[1];
                var path = _util.util.getPathByNode(fromNode);
                var index = path.nodes.indexOf(fromNode);
                if (index == path.nodes.length - 1) {
                    var firstInput = path.start.getFirstInput();
                    if (firstInput) {
                        var lastArray = [];
                        firstInput.getOutput().forEach(function (n) {
                            var p = _util.util.getPathByNode(n);
                            lastArray.push(p.nodes[p.nodes.length - 1]);
                        });
                        _util.util.sort(lastArray, 'x');
                        var maxXNode = lastArray[lastArray.length - 1];
                        point3[0] = maxXNode.x - x + maxXNode.w + 20;
                        point4[0] = point3[0];
                    }
                }
            }
            this.draw(point1, point3, point4, point2);
        }
    }, {
        key: 'draw',
        value: function draw(p1, p2, p3, p4) {
            var path = [];
            var radius = 8;
            var hr = radius;
            var vr = Math.abs(p2[1] - p3[1]) >= 12 ? radius : 0;
            //从左往右
            if (p1[0] < p2[0]) {
                hr = -1 * hr;
            } else if (p1[0] > p2[0]) {
                //从右往左
                hr = hr;
            } else {
                hr = 0;
            }
            if (p2[1] < p3[1]) {
                //从上往下
                vr = vr;
            } else if (p3[1] < p2[1]) {
                //从下往上
                vr = -1 * vr;
            } else {
                vr = 0;
            }
            var line1 = {
                start: {
                    x: p1[0],
                    y: p1[1]
                },
                end: {
                    x: p2[0] + hr,
                    y: p2[1]
                }
            };
            if (vr != 0) {
                var line2 = {
                    start: {
                        x: line1.end.x,
                        y: line1.end.y
                    },
                    Q: {
                        x: p2[0],
                        y: p2[1]
                    },
                    end: {
                        x: p2[0],
                        y: p2[1] + vr
                    }
                };
                var line3 = {
                    start: {
                        x: line2.end.x,
                        y: line2.end.y
                    },
                    end: {
                        x: p3[0],
                        y: p3[1] - vr
                    }
                };
            } else {
                var line3 = {
                    start: {
                        x: line1.end.x,
                        y: line1.end.y
                    },
                    end: {
                        x: p3[0],
                        y: p3[1] - vr
                    }
                };
            }
            var line4 = {
                start: {
                    x: line3.end.x,
                    y: line3.end.y
                },
                Q: {
                    x: p3[0],
                    y: p3[1]
                },
                end: {
                    x: p3[0] - hr,
                    y: p3[1]
                }
            };
            var line5 = {
                start: {
                    x: line4.end.x,
                    y: line4.end.y
                },
                end: {
                    x: p4[0],
                    y: p4[1]
                }
            };
            path.push('M' + line1.start.x + ' ' + line1.start.y + ' L' + line1.end.x + ' ' + line1.end.y);
            line2 && path.push('M' + line2.start.x + ' ' + line2.start.y + ' Q' + line2.Q.x + ' ' + line2.Q.y + ' ' + line2.end.x + ' ' + line2.end.y);
            path.push('M' + line3.start.x + ' ' + line3.start.y + ' L' + line3.end.x + ' ' + line3.end.y);
            path.push('M' + line4.start.x + ' ' + line4.start.y + ' Q' + line4.Q.x + ' ' + line4.Q.y + ' ' + line4.end.x + ' ' + line4.end.y);
            path.push('M' + line5.start.x + ' ' + line5.start.y + ' L' + line5.end.x + ' ' + line5.end.y);
            this.path.attr('d', path.join(''));
            this.updateLineExpression(line5.start.x, line5.start.y, line5.end.x - line5.start.x);
        }
    }, {
        key: 'updateLineExpression',
        value: function updateLineExpression(x, y, w) {
            //渲染Text
            var fromNode = this.line.getFromNode();
            var fromNodeOutput = fromNode.getOutput();
            var expressionText = [{ label: '' }];
            var expressionArr = [];
            if (fromNodeOutput.length > 1) {
                if (this.line.expressionText.length != 0) {
                    expressionText = this.line.expressionText;
                }
            } else {
                this.line.expressionText = expressionText;
                this.line.expression = '';
            }
            expressionText.forEach(function (expression) {
                expressionArr.push(expression.operate ? expression.operate + ' ' + expression.label : expression.label);
            });
            this.text.css({
                left: x,
                top: y - 18,
                width: w - 10
            }).text(expressionArr.join('\n')).attr('title', expressionArr.join('\n'));
        }
    }, {
        key: 'delete',
        value: function _delete() {
            this.svg.remove();
            this.lineText.remove();
        }
    }]);

    return ShapeLine;
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShapeNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import $ from 'jquery';


var _constant = __webpack_require__(2);

var _cache = __webpack_require__(1);

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShapeNode = exports.ShapeNode = function () {
    function ShapeNode(node) {
        _classCallCheck(this, ShapeNode);

        this.node = node;
        var rect = this.rect = $('<div class="rect"><div class="handle"></div><div class="node-body"></div>').css({
            left: node.x,
            top: node.y,
            width: node.w,
            height: node.h,
            zIndex: 100
        }).attr('data-type', node.type).appendTo('.' + _constant.Constant.Elements);
        if (_constant.Constant.node.render) {
            var $nodeBody = $('.node-body', rect);
            _constant.Constant.node.render(node, $nodeBody);
        }
        this.toggleMenu();
        this.dragRect();
    }

    _createClass(ShapeNode, [{
        key: 'dragRect',
        value: function dragRect() {
            var node = this.node;
            var rect = this.rect;
            var target = null;
            var ox = 0;
            var oy = 0;
            var oldX = 0;
            var oldY = 0;
            var _mousedown = function _mousedown(e) {
                e.stopPropagation();
                if (3 != e.which) {
                    ox = e.pageX;
                    oy = e.pageY;
                    target = $(e.target).parent();
                    oldX = parseFloat(target.css('left'));
                    oldY = parseFloat(target.css('top'));
                    $(document).on('mousemove', _mousemove);
                    $(document).on('mouseup', _mouseup);
                }
            };
            var _mousemove = function _mousemove(e) {
                e.stopPropagation();
                var dx = e.pageX - ox;
                var dy = e.pageY - oy;
                var x = parseFloat(target.css('left')) + dx;
                var y = parseFloat(target.css('top')) + dy;
                node.x = x;
                node.y = y;
                target.css({
                    left: x,
                    top: y
                });
                ox = e.pageX;
                oy = e.pageY;
                _util.util.updateLink(node);
            };
            var _mouseup = function _mouseup(e) {
                e.stopPropagation();
                var x = parseFloat(target.css('left'));
                if (x < oldX) {
                    _util.util.fixInputDistance(node);
                } else if (x > oldX) {
                    _util.util.fixOutputDistance(node);
                }
                _util.util.updatePosition();
                _util.util.updateLink();
                $(document).unbind('mousemove', _mousemove);
                $(document).unbind('mouseup', _mouseup);
            };
            $('.handle', rect).mousedown(_mousedown);
        }
    }, {
        key: 'createRectMenu',
        value: function createRectMenu() {
            var that = this;
            var node = this.node;
            var rect = this.rect;
            rect.find('.drop-menu').remove();
            var dropDownMenu = $('<div class="drop-menu"></div>').data('node', node).appendTo(rect);
            if (node.type == 'AssigneeNode') {
                if (_constant.Constant.customMenu) {
                    _constant.Constant.customMenu.forEach(function (menu) {
                        var $menu = $('<a class="drop-item" data-type="customMenu" href="javascript:;">' + menu.label + '</a>').appendTo(dropDownMenu);
                        $menu.click(function (e) {
                            menu.click(node, that);
                            dropDownMenu.hide();
                        });
                    });
                }
                //查看是否需要开启分支条件
                var firstInput = node.getFirstInput();
                var firstInputOutput = firstInput.getOutput();
                //需要开启分支条件
                if (firstInputOutput.length > 1) {
                    var $menu = $('<a class="drop-item" data-type="setCondition" href="javascript:;">设置分支条件</a>').appendTo(dropDownMenu);
                    $menu.click(function (e) {
                        var line = node.getInputLine()[0];
                        _constant.Constant.menu.conditionFn(line, line.shape);
                        dropDownMenu.hide();
                    });
                }
            }
            if (node.enableAppendChild) {
                $('<a class="drop-item" data-type="appendChild" href="javascript:;">添加下级单节点</a>').appendTo(dropDownMenu);
            }
            if (node.enableAppendChildes && !node.mutex) {
                $('<a class="drop-item" data-type="appendChildes" href="javascript:;">添加下级多节点</a>').appendTo(dropDownMenu);
            }
            if (node.enableInsertAfter) {
                $('<a class="drop-item" data-type="insertAfter" href="javascript:;">添加同级节点</a>').appendTo(dropDownMenu);
            }
            if (node.enableRemove) {
                $('<a class="drop-item" data-type="remove" href="javascript:;">删除</a>').appendTo(dropDownMenu);
            }
            dropDownMenu.mousedown(function (e) {
                e.stopPropagation();
            });
            $('.drop-item[data-type=appendChild], .drop-item[data-type=appendChildes], .drop-item[data-type=insertAfter], .drop-item[data-type=remove]', dropDownMenu).click(function (e) {
                e.stopPropagation();
                var type = $(this).attr('data-type');
                switch (type) {
                    case 'appendChild':
                        node.appendNode();
                        break;
                    case 'appendChildes':
                        _constant.Constant.menu.appendMultipleNode(node);
                        break;
                    case 'insertAfter':
                        node.addSibling();
                        break;
                    case 'remove':
                        if (_cache.cache.getAssigneeNode().length > 1) {
                            node.remove();
                        }
                        break;
                    default:
                }
                dropDownMenu.hide();
            });
        }
    }, {
        key: 'toggleMenu',
        value: function toggleMenu() {
            var that = this;
            var node = this.node;
            var rect = this.rect;
            $('.handle', rect).mousedown(function (e) {
                e.stopPropagation();
                if (3 == e.which) {
                    if (node.type != 'StartNode' && node.type != 'EndNode') {
                        that.createRectMenu(node, rect);
                        $('.rect', '.' + _constant.Constant.Container).css('zIndex', 100);
                        rect.css('zIndex', 9999);
                        $('.drop-menu', '.' + _constant.Constant.Container).hide();
                        $('.drop-menu', rect).show();
                    }
                }
            });
        }
    }, {
        key: 'update',
        value: function update() {
            var node = this.node;
            var rect = this.rect;
            if (_constant.Constant.node.render) {
                var $nodeBody = $('.node-body', rect);
                _constant.Constant.node.render(node, $nodeBody);
            }
            this.rect.css({
                left: this.node.x,
                top: this.node.y
            });
        }
    }, {
        key: 'reset',
        value: function reset(update) {
            this.node.x = 0;
            this.node.y = 0;
            if (update) {
                this.update();
            }
        }
    }, {
        key: 'delete',
        value: function _delete() {
            this.rect.remove();
        }
    }]);

    return ShapeNode;
}();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */

;(function ($) {
  'use strict'

  /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */
  function safeAdd (x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xFFFF)
  }

  /*
  * Bitwise rotate a 32-bit number to the left.
  */
  function bitRotateLeft (num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  /*
  * These functions implement the four basic operations the algorithm uses.
  */
  function md5cmn (q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
  }
  function md5ff (a, b, c, d, x, s, t) {
    return md5cmn((b & c) | ((~b) & d), a, b, x, s, t)
  }
  function md5gg (a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & (~d)), a, b, x, s, t)
  }
  function md5hh (a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t)
  }
  function md5ii (a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | (~d)), a, b, x, s, t)
  }

  /*
  * Calculate the MD5 of an array of little-endian words, and a bit length.
  */
  function binlMD5 (x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << (len % 32)
    x[(((len + 64) >>> 9) << 4) + 14] = len

    var i
    var olda
    var oldb
    var oldc
    var oldd
    var a = 1732584193
    var b = -271733879
    var c = -1732584194
    var d = 271733878

    for (i = 0; i < x.length; i += 16) {
      olda = a
      oldb = b
      oldc = c
      oldd = d

      a = md5ff(a, b, c, d, x[i], 7, -680876936)
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5gg(b, c, d, a, x[i], 20, -373897302)
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5hh(d, a, b, c, x[i], 11, -358537222)
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5ii(a, b, c, d, x[i], 6, -198630844)
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safeAdd(a, olda)
      b = safeAdd(b, oldb)
      c = safeAdd(c, oldc)
      d = safeAdd(d, oldd)
    }
    return [a, b, c, d]
  }

  /*
  * Convert an array of little-endian words to a string
  */
  function binl2rstr (input) {
    var i
    var output = ''
    var length32 = input.length * 32
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF)
    }
    return output
  }

  /*
  * Convert a raw string to an array of little-endian words
  * Characters >255 have their high-byte silently ignored.
  */
  function rstr2binl (input) {
    var i
    var output = []
    output[(input.length >> 2) - 1] = undefined
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0
    }
    var length8 = input.length * 8
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32)
    }
    return output
  }

  /*
  * Calculate the MD5 of a raw string
  */
  function rstrMD5 (s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
  }

  /*
  * Calculate the HMAC-MD5, of a key and some data (raw strings)
  */
  function rstrHMACMD5 (key, data) {
    var i
    var bkey = rstr2binl(key)
    var ipad = []
    var opad = []
    var hash
    ipad[15] = opad[15] = undefined
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8)
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636
      opad[i] = bkey[i] ^ 0x5C5C5C5C
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
  }

  /*
  * Convert a raw string to a hex string
  */
  function rstr2hex (input) {
    var hexTab = '0123456789abcdef'
    var output = ''
    var x
    var i
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i)
      output += hexTab.charAt((x >>> 4) & 0x0F) +
      hexTab.charAt(x & 0x0F)
    }
    return output
  }

  /*
  * Encode a string as utf-8
  */
  function str2rstrUTF8 (input) {
    return unescape(encodeURIComponent(input))
  }

  /*
  * Take string arguments and return either raw or hex encoded strings
  */
  function rawMD5 (s) {
    return rstrMD5(str2rstrUTF8(s))
  }
  function hexMD5 (s) {
    return rstr2hex(rawMD5(s))
  }
  function rawHMACMD5 (k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
  }
  function hexHMACMD5 (k, d) {
    return rstr2hex(rawHMACMD5(k, d))
  }

  function md5 (string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string)
      }
      return rawMD5(string)
    }
    if (!raw) {
      return hexHMACMD5(key, string)
    }
    return rawHMACMD5(key, string)
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return md5
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    module.exports = md5
  } else {
    $.md5 = md5
  }
}(this))


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ })
/******/ ]);