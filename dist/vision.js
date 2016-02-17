(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["vision"] = factory(require("react"), require("react-dom"));
	else
		root["vision"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var vision = {
	  Button: __webpack_require__(4),
	  Label: __webpack_require__(11)
	};
	
	vision.version = __webpack_require__(16).version;
	
	var ReactVersion = _react2["default"].version;
	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(17);
	  var semver = __webpack_require__(18);
	  var reactVersionInDeps = __webpack_require__(16).devDependencies.react;
	  warning(semver.satisfies(ReactVersion, reactVersionInDeps) || semver.gtr(ReactVersion, reactVersionInDeps), 'vision@' + vision.version + ' need react@' + reactVersionInDeps + ' or higher, which is react@' + ReactVersion + ' now.');
	}
	
	module.exports = vision;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Button = __webpack_require__(5);
	
	exports["default"] = Button;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(6);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(10);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Insert one space between two chinese characters automatically.
	function insertSpace(child) {
	    // if (isString(child) && isTwoCNChar(child)) {
	    //     return child.split('').join(' ');
	    // }
	
	    // if (isString(child.type) && isTwoCNChar(child.props.children)) {
	    //     return React.cloneElement(child, {},
	    //         child.props.children.split('').join(' '));
	    // }
	
	    return child;
	}
	var prefix = 'Button--';
	
	var Button = function (_React$Component) {
	    _inherits(Button, _React$Component);
	
	    function Button() {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
	    }
	
	    _createClass(Button, [{
	        key: 'render',
	        value: function render() {
	            var _classNames;
	
	            var _props = this.props;
	            var type = _props.type;
	            var size = _props.size;
	            var onClick = _props.onClick;
	            var className = _props.className;
	            var children = _props.children;
	
	            var others = _objectWithoutProperties(_props, ['type', 'size', 'onClick', 'className', 'children']);
	
	            var classes = (0, _classnames2["default"])((_classNames = {
	                'Button': true
	            }, _defineProperty(_classNames, prefix + type, type), _defineProperty(_classNames, prefix + size, size), _defineProperty(_classNames, className, className), _classNames));
	
	            var kids = _react2["default"].Children.map(children, insertSpace);
	
	            return _react2["default"].createElement(
	                'button',
	                _extends({}, others, {
	                    className: classes,
	                    onClick: onClick
	                }),
	                kids
	            );
	        }
	    }]);
	
	    return Button;
	}(_react2["default"].Component);
	
	exports["default"] = Button;
	
	Button.propTypes = {
	    type: _react2["default"].PropTypes.string,
	    size: _react2["default"].PropTypes.string,
	    onClick: _react2["default"].PropTypes.func,
	    className: _react2["default"].PropTypes.string
	};
	
	Button.defaultProps = {
	    onClick: function onClick() {}
	};
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?importLoaders=2!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/sass-loader/index.js?sourceMap&includePaths[]=/Users/yinfeng/code/Vision/vision-design/node_modules!./Button.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?importLoaders=2!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/sass-loader/index.js?sourceMap&includePaths[]=/Users/yinfeng/code/Vision/vision-design/node_modules!./Button.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nvideo {\n  display: inline-block; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden] {\n  display: none; }\n\nhtml {\n  -webkit-text-size-adjust: 100%; }\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: sans-serif; }\n\nbody {\n  margin: 0; }\n\na:focus {\n  outline: thin dotted; }\n\na:hover, a:active {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, serif;\n  font-size: 1em; }\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word; }\n\nq {\n  quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\"; }\n\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 0; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0;\n  white-space: normal; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  vertical-align: baseline; }\n\nbutton,\ninput {\n  line-height: normal; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\ninput[disabled] {\n  cursor: default; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"search\"] {\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  -webkit-text-size-adjust: 100%; }\n\nimg {\n  border: 0 none;\n  vertical-align: middle; }\n\ntextarea {\n  resize: vertical; }\n\nh1, h2, h3, h4, h5, h6, p, figure, form {\n  margin: 0; }\n\nul, ol, li, dl, dd {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  list-style: none outside none; }\n\n.red {\n  color: #f7665e !important; }\n\n.orangeRed {\n  color: #f94 !important; }\n\n.yellow {\n  color: #ffc600 !important; }\n\n.gray {\n  color: #949494 !important; }\n\n.blue {\n  color: #1b97ff !important; }\n\n.black {\n  color: #333 !important; }\n\n.green {\n  color: #29cc6d !important; }\n\n.main-color {\n  color: #29cc6d !important; }\n\n.user-select-text {\n  -webkit-user-select: text; }\n\n.user-select-none {\n  -webkit-user-select: none; }\n\nimg {\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-pointer-events: none; }\n\n/* 事件焦点不显示 */\n.tap-none {\n  -webkit-tap-highlight-color: transparent; }\n\n/* 过长晃示省略号... */\n.ell {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n\n/* 透明 */\n.center {\n  text-align: center !important; }\n\n.left {\n  text-align: left !important; }\n\n.right {\n  text-align: right !important; }\n\n.in-b {\n  display: inline-block !important; }\n\n.no-border {\n  border: none !important; }\n\n.mlr0 {\n  margin-left: -15px !important;\n  margin-right: -15px !important; }\n\nhtml, .btn, .btnR, .btnB, .btnG, .btnDisabled, .btn-box {\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  min-height: 100%;\n  background-color: #fff; }\n\nbody {\n  color: #666;\n  font: 13px Helvetica, STHeiTi, sans-serif;\n  -webkit-text-size-adjust: 100% !important;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none; }\n\na {\n  color: #666;\n  text-decoration: none;\n  outline: none; }\n  a:visited {\n    color: inherit; }\n\ni {\n  font-style: normal; }\n\nbutton, input, select, textarea {\n  color: #666;\n  font: 1.68rem Arial;\n  outline: none; }\n\n.mp0 {\n  margin: 0 !important;\n  padding: 0 !important; }\n\n.mp0-patch {\n  margin-left: -10px !important;\n  margin-right: -10px !important; }\n\nli.mp0 {\n  list-style-type: none; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: .5em 0; }\n\nb, strong {\n  color: #666; }\n\n.hr {\n  overflow: hidden;\n  border: none;\n  height: 1px;\n  margin: 11px 0;\n  background-color: #f0f0f0; }\n\n.full-screen {\n  position: fixed;\n  z-index: 998;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6); }\n\n::-webkit-input-placeholder {\n  color: #949494; }\n\n.btn, .btnR, .btnB, .btnG, .btnDisabled {\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  margin: .5em 0;\n  padding: .6em 2em .4em;\n  font-size: 1.68rem;\n  line-height: 1;\n  text-align: center;\n  text-decoration: none; }\n\n.btn-box {\n  margin: 20px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  width: 100%; }\n  .btn-box [class^=\"btn\"] {\n    display: block !important;\n    -webkit-box-flex: 1;\n    -moz-box-flex: 1;\n    -ms-flex: 1;\n    margin: 0 5px;\n    width: 50%; }\n    .btn-box [class^=\"btn\"]:first-of-type {\n      margin-left: 0; }\n    .btn-box [class^=\"btn\"]:last-of-type {\n      margin-right: 0; }\n    .btn-box [class^=\"btn\"]:only-of-type {\n      width: 100%; }\n  .btn-box.grid1-1 [class^=\"btn\"]:first-of-type:not(:only-of-type),\n  .btn-box.grid1-1 [class^=\"btn\"]:nth-of-type(2):not(:only-of-type) {\n    width: 50%; }\n  .btn-box.block [class*=\"btn\"],\n  .btn-box .block[class*=\"btn\"] {\n    display: block;\n    margin: 1.2em auto;\n    width: inherit !important; }\n\n.btn {\n  background: #efefef;\n  border-radius: 2px;\n  color: #666 !important; }\n  .btn.blue {\n    background: #1b97ff !important;\n    color: #fff !important; }\n\n.btnR {\n  background: #f7675f;\n  border-radius: 2px;\n  color: #fff !important; }\n\n.btnB {\n  background: #1cb1fe;\n  border-radius: 2px;\n  color: #fff !important; }\n\n.btnG {\n  background: #29cc6d;\n  border-radius: 2px;\n  color: #fff !important; }\n\n.btnDisabled {\n  background: #d7d8dc;\n  border-radius: 2px;\n  color: #999 !important;\n  cursor: default; }\n\nli.arr-r-checkmark:after, .arr-r-checkmark > li:after,\na.arr-r-checkmark:after, .total-info.arr-r:after,\n.arr-r-self:after,\n.arr-r > a:after,\n.arr-r > li:after,\nli.arr-r:after,\na.arr-r:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border: #ddd solid 2px;\n  border-left: none;\n  border-top: none;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg); }\n\nli.arr-r-checkmark:after, .arr-r-checkmark > li:after,\na.arr-r-checkmark:after, .total-info.arr-r:after,\n.arr-r-self:after,\n.arr-r > a:after,\n.arr-r > li:after,\nli.arr-r:after,\na.arr-r:after {\n  right: 10px;\n  top: 50%;\n  margin-top: -3.5px; }\n\nli.arr-r-checkmark:after, .arr-r-checkmark > li:after,\na.arr-r-checkmark:after {\n  -webkit-transform: rotate(45deg) !important;\n  -moz-transform: rotate(45deg) !important;\n  -ms-transform: rotate(45deg) !important;\n  border-color: #29cc6d;\n  width: 7px;\n  height: 15px; }\n\nli.arr-r-checkmark:after {\n  margin-top: -11px; }\n\n.arr-r,\n.arr-r-self,\n.arr-r > li,\n.arr-r > a,\n.arr-r-checkmark,\n.arr-r-checkmark > li {\n  display: block;\n  position: relative; }\n\n.arr-r-checkmark > li:after,\nli.arr-r-checkmark:after,\na.arr-r-checkmark:after {\n  margin-top: -10px; }\n\n.in-b.arr-r:after {\n  left: 100%;\n  right: inherit;\n  margin-left: 5px; }\n\n.margin-both-nge {\n  margin-left: -10px;\n  margin-right: -10px; }\n\n.m-table {\n  display: table; }\n\n.table-header,\n.m-theader {\n  display: table-header-group; }\n\n.table-body,\n.m-tbody {\n  display: table-row-group; }\n\n.table-footer,\n.m-tfooter {\n  display: table-footer-group; }\n\n.table-row,\n.m-tr {\n  display: table-row; }\n\n.m-td, .m-th {\n  display: table-cell; }\n\n.m-table {\n  width: 100%;\n  box-sizing: border-box;\n  border-collapse: collapse; }\n\n.m-td, .m-th {\n  padding: 5px; }\n\n.m-th {\n  font-weight: bold; }\n\n.Button {\n  border-radius: 2px;\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  margin: .5em 0;\n  padding: .6em .4em;\n  font-size: 1.3rem;\n  line-height: 1;\n  text-align: center;\n  text-decoration: none;\n  background: #29cc6d;\n  border: 1px solid #29cc6d;\n  color: #fff; }\n  .Button--inverse {\n    color: #29cc6d;\n    background: transparent; }\n  .Button--primary {\n    background: #1b97ff;\n    border: 1px solid #1b97ff;\n    color: #fff; }\n  .Button--primary-inverse {\n    color: #1b97ff;\n    border: 1px solid #1b97ff;\n    background: transparent; }\n  .Button--secondary {\n    background: #f7665e;\n    border: 1px solid #f7665e;\n    color: #fff; }\n  .Button--secondary-inverse {\n    color: #f7665e;\n    border: 1px solid #f7665e;\n    background: transparent; }\n  .Button--large {\n    display: block;\n    width: 100%;\n    font-size: 1.68rem; }\n  .Button[disabled] {\n    background: #E5E5E5;\n    color: #999;\n    border: 1px solid #e5e5e5; }\n  .Button[class*=\"inverse\"][disabled] {\n    background: #fff;\n    color: #999;\n    border: 1px solid #e5e5e5; }\n", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

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
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
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
	}
	
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
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
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
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
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
			update = updateLink.bind(null, styleElement);
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
		var sourceMap = obj.sourceMap;
	
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
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
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


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Label = __webpack_require__(12);
	
	exports["default"] = Label;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(13);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(10);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _reactDom = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var prefix = 'Label--';
	
	var Label = function (_React$Component) {
	    _inherits(Label, _React$Component);
	
	    function Label() {
	        _classCallCheck(this, Label);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Label).apply(this, arguments));
	    }
	
	    _createClass(Label, [{
	        key: 'render',
	        value: function render() {
	            var _classnames;
	
	            var _props = this.props;
	            var type = _props.type;
	            var className = _props.className;
	            var children = _props.children;
	
	            var others = _objectWithoutProperties(_props, ['type', 'className', 'children']);
	
	            var classes = (0, _classnames3["default"])((_classnames = {
	                'Label': true
	            }, _defineProperty(_classnames, prefix + type, type), _defineProperty(_classnames, className, className), _classnames));
	
	            return _react2["default"].createElement(
	                'label',
	                _extends({}, others, {
	                    className: classes }),
	                children
	            );
	        }
	    }]);
	
	    return Label;
	}(_react2["default"].Component);
	
	exports["default"] = Label;
	
	Label.propTypes = {
	    type: _react2["default"].PropTypes.string
	};
	
	Label.defaultProps = {
	    onClick: function onClick() {}
	};
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?importLoaders=2!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/sass-loader/index.js?sourceMap&includePaths[]=/Users/yinfeng/code/Vision/vision-design/node_modules!./Label.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?importLoaders=2!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/sass-loader/index.js?sourceMap&includePaths[]=/Users/yinfeng/code/Vision/vision-design/node_modules!./Label.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nvideo {\n  display: inline-block; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden] {\n  display: none; }\n\nhtml {\n  -webkit-text-size-adjust: 100%; }\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: sans-serif; }\n\nbody {\n  margin: 0; }\n\na:focus {\n  outline: thin dotted; }\n\na:hover, a:active {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, serif;\n  font-size: 1em; }\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word; }\n\nq {\n  quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\"; }\n\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 0; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0;\n  white-space: normal; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  vertical-align: baseline; }\n\nbutton,\ninput {\n  line-height: normal; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\ninput[disabled] {\n  cursor: default; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"search\"] {\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  -webkit-text-size-adjust: 100%; }\n\nimg {\n  border: 0 none;\n  vertical-align: middle; }\n\ntextarea {\n  resize: vertical; }\n\nh1, h2, h3, h4, h5, h6, p, figure, form {\n  margin: 0; }\n\nul, ol, li, dl, dd {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  list-style: none outside none; }\n\n.red {\n  color: #f7665e !important; }\n\n.orangeRed {\n  color: #f94 !important; }\n\n.yellow {\n  color: #ffc600 !important; }\n\n.gray {\n  color: #949494 !important; }\n\n.blue {\n  color: #1b97ff !important; }\n\n.black {\n  color: #333 !important; }\n\n.green {\n  color: #29cc6d !important; }\n\n.main-color {\n  color: #29cc6d !important; }\n\n.user-select-text {\n  -webkit-user-select: text; }\n\n.user-select-none {\n  -webkit-user-select: none; }\n\nimg {\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-pointer-events: none; }\n\n/* 事件焦点不显示 */\n.tap-none {\n  -webkit-tap-highlight-color: transparent; }\n\n/* 过长晃示省略号... */\n.ell {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n\n/* 透明 */\n.center {\n  text-align: center !important; }\n\n.left {\n  text-align: left !important; }\n\n.right {\n  text-align: right !important; }\n\n.in-b {\n  display: inline-block !important; }\n\n.no-border {\n  border: none !important; }\n\n.mlr0 {\n  margin-left: -15px !important;\n  margin-right: -15px !important; }\n\nhtml, .btn, .btnR, .btnB, .btnG, .btnDisabled, .btn-box {\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  min-height: 100%;\n  background-color: #fff; }\n\nbody {\n  color: #666;\n  font: 13px Helvetica, STHeiTi, sans-serif;\n  -webkit-text-size-adjust: 100% !important;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none; }\n\na {\n  color: #666;\n  text-decoration: none;\n  outline: none; }\n  a:visited {\n    color: inherit; }\n\ni {\n  font-style: normal; }\n\nbutton, input, select, textarea {\n  color: #666;\n  font: 1.68rem Arial;\n  outline: none; }\n\n.mp0 {\n  margin: 0 !important;\n  padding: 0 !important; }\n\n.mp0-patch {\n  margin-left: -10px !important;\n  margin-right: -10px !important; }\n\nli.mp0 {\n  list-style-type: none; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: .5em 0; }\n\nb, strong {\n  color: #666; }\n\n.hr {\n  overflow: hidden;\n  border: none;\n  height: 1px;\n  margin: 11px 0;\n  background-color: #f0f0f0; }\n\n.full-screen {\n  position: fixed;\n  z-index: 998;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6); }\n\n::-webkit-input-placeholder {\n  color: #949494; }\n\n.btn, .btnR, .btnB, .btnG, .btnDisabled {\n  display: inline-block;\n  outline: none;\n  cursor: pointer;\n  margin: .5em 0;\n  padding: .6em 2em .4em;\n  font-size: 1.68rem;\n  line-height: 1;\n  text-align: center;\n  text-decoration: none; }\n\n.btn-box {\n  margin: 20px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  width: 100%; }\n  .btn-box [class^=\"btn\"] {\n    display: block !important;\n    -webkit-box-flex: 1;\n    -moz-box-flex: 1;\n    -ms-flex: 1;\n    margin: 0 5px;\n    width: 50%; }\n    .btn-box [class^=\"btn\"]:first-of-type {\n      margin-left: 0; }\n    .btn-box [class^=\"btn\"]:last-of-type {\n      margin-right: 0; }\n    .btn-box [class^=\"btn\"]:only-of-type {\n      width: 100%; }\n  .btn-box.grid1-1 [class^=\"btn\"]:first-of-type:not(:only-of-type),\n  .btn-box.grid1-1 [class^=\"btn\"]:nth-of-type(2):not(:only-of-type) {\n    width: 50%; }\n  .btn-box.block [class*=\"btn\"],\n  .btn-box .block[class*=\"btn\"] {\n    display: block;\n    margin: 1.2em auto;\n    width: inherit !important; }\n\n.btn {\n  background: #efefef;\n  border-radius: 2px;\n  color: #666 !important; }\n  .btn.blue {\n    background: #1b97ff !important;\n    color: #fff !important; }\n\n.btnR {\n  background: #f7675f;\n  border-radius: 2px;\n  color: #fff !important; }\n\n.btnB {\n  background: #1cb1fe;\n  border-radius: 2px;\n  color: #fff !important; }\n\n.btnG {\n  background: #29cc6d;\n  border-radius: 2px;\n  color: #fff !important; }\n\n.btnDisabled {\n  background: #d7d8dc;\n  border-radius: 2px;\n  color: #999 !important;\n  cursor: default; }\n\nli.arr-r-checkmark:after, .arr-r-checkmark > li:after,\na.arr-r-checkmark:after, .total-info.arr-r:after,\n.arr-r-self:after,\n.arr-r > a:after,\n.arr-r > li:after,\nli.arr-r:after,\na.arr-r:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border: #ddd solid 2px;\n  border-left: none;\n  border-top: none;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg); }\n\nli.arr-r-checkmark:after, .arr-r-checkmark > li:after,\na.arr-r-checkmark:after, .total-info.arr-r:after,\n.arr-r-self:after,\n.arr-r > a:after,\n.arr-r > li:after,\nli.arr-r:after,\na.arr-r:after {\n  right: 10px;\n  top: 50%;\n  margin-top: -3.5px; }\n\nli.arr-r-checkmark:after, .arr-r-checkmark > li:after,\na.arr-r-checkmark:after {\n  -webkit-transform: rotate(45deg) !important;\n  -moz-transform: rotate(45deg) !important;\n  -ms-transform: rotate(45deg) !important;\n  border-color: #29cc6d;\n  width: 7px;\n  height: 15px; }\n\nli.arr-r-checkmark:after {\n  margin-top: -11px; }\n\n.arr-r,\n.arr-r-self,\n.arr-r > li,\n.arr-r > a,\n.arr-r-checkmark,\n.arr-r-checkmark > li {\n  display: block;\n  position: relative; }\n\n.arr-r-checkmark > li:after,\nli.arr-r-checkmark:after,\na.arr-r-checkmark:after {\n  margin-top: -10px; }\n\n.in-b.arr-r:after {\n  left: 100%;\n  right: inherit;\n  margin-left: 5px; }\n\n.margin-both-nge {\n  margin-left: -10px;\n  margin-right: -10px; }\n\n.m-table {\n  display: table; }\n\n.table-header,\n.m-theader {\n  display: table-header-group; }\n\n.table-body,\n.m-tbody {\n  display: table-row-group; }\n\n.table-footer,\n.m-tfooter {\n  display: table-footer-group; }\n\n.table-row,\n.m-tr {\n  display: table-row; }\n\n.m-td, .m-th {\n  display: table-cell; }\n\n.m-table {\n  width: 100%;\n  box-sizing: border-box;\n  border-collapse: collapse; }\n\n.m-td, .m-th {\n  padding: 5px; }\n\n.m-th {\n  font-weight: bold; }\n\n.Label {\n  display: inline-block;\n  height: 14px;\n  box-sizing: border-box;\n  padding: 2px 4px;\n  border-radius: 2px;\n  font-size: 0.9rem;\n  line-height: 1.2;\n  margin: 1px 4px 1px 1px;\n  box-shadow: 0 0 1px red inset;\n  background: #fff;\n  color: #f7665e; }\n  .Label--primary {\n    box-shadow: 0 0 1px #007ee7 inset;\n    color: #1b97ff; }\n  .Label--secondary {\n    box-shadow: 0 0 1px #19194d inset;\n    color: #7e8bb9; }\n  .Label[disabled] {\n    box-shadow: 0 0 1px gray inset;\n    color: #949494; }\n", ""]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
		"name": "vud",
		"version": "0.1.4",
		"title": "Vision Design",
		"description": "一个 UI 设计语言",
		"keywords": [
			"design",
			"react",
			"react-component",
			"component",
			"components",
			"ui",
			"framework",
			"frontend"
		],
		"repository": {
			"type": "git",
			"url": "https://github.com/ingf/vision-design"
		},
		"bugs": {
			"url": "https://github.com/ingf/vision-design/issues"
		},
		"main": "lib/index",
		"files": [
			"lib",
			"style"
		],
		"license": "MIT",
		"dependencies": {
			"classnames": "~2.2.0",
			"css-animation": "1.1.x",
			"gregorian-calendar": "~4.1.0",
			"gregorian-calendar-format": "~4.0.4",
			"object-assign": "~4.0.1",
			"react-slick": "~0.9.1",
			"semver": "~5.0.3",
			"util-deprecate": "~1.0.1",
			"velocity-animate": "~1.2.2",
			"vu-base": "^1.0.0",
			"vu-button": "^1.0.2",
			"vu-label": "^1.0.2",
			"warning": "~2.1.0"
		},
		"devDependencies": {
			"autoprefixer-loader": "^3.1.0",
			"babel-cli": "^6.2.0",
			"babel-core": "^6.2.1",
			"babel-jest": "^6.0.1",
			"babel-loader": "^6.2.0",
			"babel-plugin-add-module-exports": "^0.1.1",
			"babel-preset-es2015": "^6.1.18",
			"babel-preset-react": "^6.1.18",
			"babel-preset-stage-0": "^6.1.18",
			"busboy": "^0.2.9",
			"chalk": "^1.1.0",
			"css-loader": "^0.23.0",
			"es3ify-loader": "^0.1.0",
			"eslint": "^1.1.0",
			"eslint-config-airbnb": "^1.0.0",
			"eslint-plugin-babel": "^3.0.0",
			"eslint-plugin-markdown-antd": "0.0.0",
			"eslint-plugin-react": "^3.3.1",
			"extract-text-webpack-plugin": "^0.9.1",
			"gh-pages": "^0.5.0",
			"history": "^1.17.0",
			"jest-cli": "~0.8.0",
			"json-loader": "^0.5.1",
			"less": "~2.5.3",
			"less-loader": "^2.2.0",
			"lesshint-antd": "^1.2.1",
			"lodash": "^3.10.0",
			"nico-jsx": "~0.7.0",
			"node-sass": "^3.4.2",
			"pre-commit": "1.x",
			"react": "0.14.x",
			"react-addons-test-utils": "0.14.x",
			"react-copy-to-clipboard": "^3.0.4",
			"react-dom": "0.14.x",
			"react-router": "~1.0.3",
			"react-stateless-wrapper": "~1.0.2",
			"reqwest": "~2.0.5",
			"sass-loader": "^3.1.2",
			"style-loader": "^0.13.0",
			"webpack": "^1.10.1",
			"webpack-babel-jest": "^1.0.0",
			"webpack-dev-middleware": "^1.2.0"
		},
		"scripts": {
			"babel": "babel components index.js --out-dir lib",
			"start": "npm run clean && npm run cp && nico server --watch",
			"clean": "rm -rf _site dist",
			"cp": "cp -r node_modules/vu-* ./components",
			"site": "npm run clean && npm run cp && webpack --config webpack.deploy.config.js && webpack --config webpack.antd.config.js && NODE_ENV=PRODUCTION nico build",
			"deploy": "rm -rf node_modules && npm run just-deploy",
			"just-deploy": "npm run site && node scripts/deploy.js",
			"lint": "eslint components test index.js --ext '.js,.jsx' && npm run mdlint && npm run lesshint",
			"mdlint": "eslint components/*/demo/*.md --ext '.md' --global 'React,ReactDOM,mountNode' --rule 'no-console: 0'",
			"lesshint": "lesshint style/ -e 'style/+(core|mixins)/+(base|iconfont|normalize|layouts|compatibility|grid).less'",
			"test": "npm run lint && webpack && npm run jest",
			"jest": "jest",
			"pub": "sh ./scripts/publish.sh",
			"webpack": "webpack",
			"beta": "sh ./scripts/publish.sh --tag beta"
		},
		"jest": {
			"testRunner": "<rootDir>/node_modules/jest-cli/src/testRunners/jasmine/jasmine2",
			"moduleFileExtensions": [
				"js",
				"jsx",
				"json"
			],
			"unmockedModulePathPatterns": [
				"<rootDir>/node_modules/*"
			],
			"testPathIgnorePatterns": [
				"/node_modules/",
				"/_site/"
			],
			"scriptPreprocessor": "<rootDir>/node_modules/webpack-babel-jest",
			"testDirectoryName": "tests",
			"preprocessCachingDisabled": false
		},
		"pre-commit": [
			"lint"
		],
		"babel": {
			"presets": [
				"es2015",
				"react",
				"stage-0"
			],
			"plugins": [
				"add-module-exports"
			]
		}
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = SemVer;
	
	// The debug function is excluded entirely from the minified version.
	/* nomin */ var debug;
	/* nomin */ if (typeof process === 'object' &&
	    /* nomin */ process.env &&
	    /* nomin */ process.env.NODE_DEBUG &&
	    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
	  /* nomin */ debug = function() {
	    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */ args.unshift('SEMVER');
	    /* nomin */ console.log.apply(console, args);
	    /* nomin */ };
	/* nomin */ else
	  /* nomin */ debug = function() {};
	
	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';
	
	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	
	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;
	
	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.
	
	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.
	
	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';
	
	
	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.
	
	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
	
	
	// ## Main Version
	// Three dot-separated numeric identifiers.
	
	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')';
	
	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';
	
	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.
	
	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
	                            '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
	                                 '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	
	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.
	
	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
	                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
	
	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
	                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';
	
	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.
	
	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';
	
	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.
	
	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
	             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';
	
	
	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.
	
	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.
	
	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] +
	                src[PRERELEASE] + '?' +
	                src[BUILD] + '?';
	
	src[FULL] = '^' + FULLPLAIN + '$';
	
	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
	                 src[PRERELEASELOOSE] + '?' +
	                 src[BUILD] + '?';
	
	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';
	
	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';
	
	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
	
	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:' + src[PRERELEASE] + ')?' +
	                   src[BUILD] + '?' +
	                   ')?)?';
	
	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:' + src[PRERELEASELOOSE] + ')?' +
	                        src[BUILD] + '?' +
	                        ')?)?';
	
	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';
	
	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';
	
	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';
	
	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';
	
	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';
	
	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';
	
	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';
	
	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';
	
	
	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
	                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';
	
	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';
	
	
	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
	                   '\\s+-\\s+' +
	                   '(' + src[XRANGEPLAIN] + ')' +
	                   '\\s*$';
	
	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s+-\\s+' +
	                        '(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s*$';
	
	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';
	
	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i])
	    re[i] = new RegExp(src[i]);
	}
	
	exports.parse = parse;
	function parse(version, loose) {
	  if (version instanceof SemVer)
	    return version;
	
	  if (typeof version !== 'string')
	    return null;
	
	  if (version.length > MAX_LENGTH)
	    return null;
	
	  var r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version))
	    return null;
	
	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}
	
	
	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
	}
	
	exports.SemVer = SemVer;
	
	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose)
	      return version;
	    else
	      version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }
	
	  if (version.length > MAX_LENGTH)
	    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
	
	  if (!(this instanceof SemVer))
	    return new SemVer(version, loose);
	
	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
	
	  if (!m)
	    throw new TypeError('Invalid Version: ' + version);
	
	  this.raw = version;
	
	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];
	
	  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
	    throw new TypeError('Invalid major version')
	
	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
	    throw new TypeError('Invalid minor version')
	
	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
	    throw new TypeError('Invalid patch version')
	
	  // numberify any prerelease numeric ids
	  if (!m[4])
	    this.prerelease = [];
	  else
	    this.prerelease = m[4].split('.').map(function(id) {
	      if (/^[0-9]+$/.test(id)) {
	        var num = +id
	        if (num >= 0 && num < MAX_SAFE_INTEGER)
	          return num
	      }
	      return id;
	    });
	
	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}
	
	SemVer.prototype.format = function() {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length)
	    this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};
	
	SemVer.prototype.inspect = function() {
	  return '<SemVer "' + this + '">';
	};
	
	SemVer.prototype.toString = function() {
	  return this.version;
	};
	
	SemVer.prototype.compare = function(other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  return this.compareMain(other) || this.comparePre(other);
	};
	
	SemVer.prototype.compareMain = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  return compareIdentifiers(this.major, other.major) ||
	         compareIdentifiers(this.minor, other.minor) ||
	         compareIdentifiers(this.patch, other.patch);
	};
	
	SemVer.prototype.comparePre = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length)
	    return -1;
	  else if (!this.prerelease.length && other.prerelease.length)
	    return 1;
	  else if (!this.prerelease.length && !other.prerelease.length)
	    return 0;
	
	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined)
	      return 0;
	    else if (b === undefined)
	      return 1;
	    else if (a === undefined)
	      return -1;
	    else if (a === b)
	      continue;
	    else
	      return compareIdentifiers(a, b);
	  } while (++i);
	};
	
	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function(release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0)
	        this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	
	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
	        this.major++;
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0)
	        this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0)
	        this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0)
	        this.prerelease = [0];
	      else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1]))
	            this.prerelease = [identifier, 0];
	        } else
	          this.prerelease = [identifier, 0];
	      }
	      break;
	
	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
	};
	
	exports.inc = inc;
	function inc(version, release, loose, identifier) {
	  if (typeof(loose) === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }
	
	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.diff = diff;
	function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return 'pre'+key;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
	  }
	}
	
	exports.compareIdentifiers = compareIdentifiers;
	
	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);
	
	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }
	
	  return (anum && !bnum) ? -1 :
	         (bnum && !anum) ? 1 :
	         a < b ? -1 :
	         a > b ? 1 :
	         0;
	}
	
	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}
	
	exports.major = major;
	function major(a, loose) {
	  return new SemVer(a, loose).major;
	}
	
	exports.minor = minor;
	function minor(a, loose) {
	  return new SemVer(a, loose).minor;
	}
	
	exports.patch = patch;
	function patch(a, loose) {
	  return new SemVer(a, loose).patch;
	}
	
	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(b);
	}
	
	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}
	
	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}
	
	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.compare(a, b, loose);
	  });
	}
	
	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}
	
	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}
	
	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}
	
	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}
	
	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}
	
	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}
	
	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}
	
	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '': case '=': case '==': ret = eq(a, b, loose); break;
	    case '!=': ret = neq(a, b, loose); break;
	    case '>': ret = gt(a, b, loose); break;
	    case '>=': ret = gte(a, b, loose); break;
	    case '<': ret = lt(a, b, loose); break;
	    case '<=': ret = lte(a, b, loose); break;
	    default: throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}
	
	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose)
	      return comp;
	    else
	      comp = comp.value;
	  }
	
	  if (!(this instanceof Comparator))
	    return new Comparator(comp, loose);
	
	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);
	
	  if (this.semver === ANY)
	    this.value = '';
	  else
	    this.value = this.operator + this.semver.version;
	
	  debug('comp', this);
	}
	
	var ANY = {};
	Comparator.prototype.parse = function(comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);
	
	  if (!m)
	    throw new TypeError('Invalid comparator: ' + comp);
	
	  this.operator = m[1];
	  if (this.operator === '=')
	    this.operator = '';
	
	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2])
	    this.semver = ANY;
	  else
	    this.semver = new SemVer(m[2], this.loose);
	};
	
	Comparator.prototype.inspect = function() {
	  return '<SemVer Comparator "' + this + '">';
	};
	
	Comparator.prototype.toString = function() {
	  return this.value;
	};
	
	Comparator.prototype.test = function(version) {
	  debug('Comparator.test', version, this.loose);
	
	  if (this.semver === ANY)
	    return true;
	
	  if (typeof version === 'string')
	    version = new SemVer(version, this.loose);
	
	  return cmp(version, this.operator, this.semver, this.loose);
	};
	
	
	exports.Range = Range;
	function Range(range, loose) {
	  if ((range instanceof Range) && range.loose === loose)
	    return range;
	
	  if (!(this instanceof Range))
	    return new Range(range, loose);
	
	  this.loose = loose;
	
	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function(c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });
	
	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }
	
	  this.format();
	}
	
	Range.prototype.inspect = function() {
	  return '<SemVer Range "' + this.range + '">';
	};
	
	Range.prototype.format = function() {
	  this.range = this.set.map(function(comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};
	
	Range.prototype.toString = function() {
	  return this.range;
	};
	
	Range.prototype.parseRange = function(range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);
	
	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);
	
	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);
	
	  // normalize spaces
	  range = range.split(/\s+/).join(' ');
	
	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.
	
	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function(comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function(comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function(comp) {
	    return new Comparator(comp, loose);
	  });
	
	  return set;
	};
	
	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function(comp) {
	    return comp.map(function(c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}
	
	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}
	
	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}
	
	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}
	
	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    else if (isX(p))
	      // ~1.2 == >=1.2.0- <1.3.0-
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr +
	            ' <' + M + '.' + (+m + 1) + '.0';
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p +
	            ' <' + M + '.' + (+m + 1) + '.0';
	
	    debug('tilde return', ret);
	    return ret;
	  });
	}
	
	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}
	
	function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    else if (isX(p)) {
	      if (M === '0')
	        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	      else
	        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0')
	          ret = '>=' + M + '.' + m + '.' + p + pr +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        else
	          ret = '>=' + M + '.' + m + '.' + p + pr +
	                ' <' + M + '.' + (+m + 1) + '.0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p + pr +
	              ' <' + (+M + 1) + '.0.0';
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0')
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        else
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + (+m + 1) + '.0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p +
	              ' <' + (+M + 1) + '.0.0';
	    }
	
	    debug('caret return', ret);
	    return ret;
	  });
	}
	
	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function(comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}
	
	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;
	
	    if (gtlt === '=' && anyX)
	      gtlt = '';
	
	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm)
	        m = 0;
	      if (xp)
	        p = 0;
	
	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<'
	        if (xm)
	          M = +M + 1
	        else
	          m = +m + 1
	      }
	
	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }
	
	    debug('xRange return', ret);
	
	    return ret;
	  });
	}
	
	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}
	
	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace($0,
	                       from, fM, fm, fp, fpr, fb,
	                       to, tM, tm, tp, tpr, tb) {
	
	  if (isX(fM))
	    from = '';
	  else if (isX(fm))
	    from = '>=' + fM + '.0.0';
	  else if (isX(fp))
	    from = '>=' + fM + '.' + fm + '.0';
	  else
	    from = '>=' + from;
	
	  if (isX(tM))
	    to = '';
	  else if (isX(tm))
	    to = '<' + (+tM + 1) + '.0.0';
	  else if (isX(tp))
	    to = '<' + tM + '.' + (+tm + 1) + '.0';
	  else if (tpr)
	    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
	  else
	    to = '<=' + to;
	
	  return (from + ' ' + to).trim();
	}
	
	
	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function(version) {
	  if (!version)
	    return false;
	
	  if (typeof version === 'string')
	    version = new SemVer(version, this.loose);
	
	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version))
	      return true;
	  }
	  return false;
	};
	
	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version))
	      return false;
	  }
	
	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY)
	        continue;
	
	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major &&
	            allowed.minor === version.minor &&
	            allowed.patch === version.patch)
	          return true;
	      }
	    }
	
	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }
	
	  return true;
	}
	
	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}
	
	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  return versions.filter(function(version) {
	    return satisfies(version, range, loose);
	  }).sort(function(a, b) {
	    return rcompare(a, b, loose);
	  })[0] || null;
	}
	
	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}
	
	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}
	
	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}
	
	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);
	
	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }
	
	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }
	
	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.
	
	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];
	
	    var high = null;
	    var low = null;
	
	    comparators.forEach(function(comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0')
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });
	
	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }
	
	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) &&
	        ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vision.js.map