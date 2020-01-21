(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "https://review.rickheffren.com/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(52);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(54);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(27);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(28);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(55);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(20);

var _helpers = __webpack_require__(56);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);



var _this = undefined;

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: absolute;\n  top: 5%;\n  right: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 52;\n\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ", ";\n    background-color: ", ";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ", ";\n    }\n\n    :nth-child(2) {\n      opacity: ", ";\n      transform: ", ";\n    }\n\n    :nth-child(3) {\n      transform: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background: rgba(255,255,255, 0.8);\n  transform: ", ";\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  top: 0;\n  right: 0;\n  transition: transform 0.3s ease-in-out;\n  z-index: 51;\n\n  @media (max-width: 576px) {\n    background: rgba(255,255,255, 0.95);\n    padding: 0;\n    width: 100%;\n    }\n\n  a {\n    &:first-child {\n        margin-top: 5rem;\n    }\n    \n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 1.5rem 0;\n    letter-spacing: 0.5rem;\n    color: #0D0C1D;\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: 576px) {\n      font-size: 3rem;\n      text-align: center;\n    }\n\n    &:hover {\n      /* color: #343078; */\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.nav(_templateObject(), function (_ref) {
  var open = _ref.open;
  return open ? 'translateX(0)' : 'translateX(100%)';
});

var Menu = function Menu(_ref2) {
  var open = _ref2.open;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledMenu, {
    open: open
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/",
    onClick: function onClick() {
      return _this.setOpen(!open);
    }
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/pool-installs",
    onClick: function onClick() {
      return _this.setOpen(!open);
    }
  }, "Our Work"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/about"
  }, "About Us"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/contact",
    onClick: function onClick() {
      return _this.setOpen(!open);
    }
  }, "Get Started"));
};

var StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button(_templateObject2(), function (_ref3) {
  var open = _ref3.open;
  return open ? '#0D0C1D' : '#EFFFFA';
}, function (props) {
  return props.black ? "black" : "white";
}, function (_ref4) {
  var open = _ref4.open;
  return open ? 'rotate(45deg)' : 'rotate(0)';
}, function (_ref5) {
  var open = _ref5.open;
  return open ? '0' : '1';
}, function (_ref6) {
  var open = _ref6.open;
  return open ? 'translateX(20px)' : 'translateX(0)';
}, function (_ref7) {
  var open = _ref7.open;
  return open ? 'rotate(-45deg)' : 'rotate(0)';
});

var Burger = function Burger(_ref8) {
  var black = _ref8.black,
      open = _ref8.open,
      setOpen = _ref8.setOpen;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledBurger, {
    black: black,
    style: {
      color: 'black'
    },
    open: open,
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null));
}; // const useOnClickOutside = (ref, handler) => {
//     React.useEffect(() => {
//       const listener = event => {
//         if (!ref.current || ref.current.contains(event.target)) {
//           return;
//         }
//         handler(event);
//       };
//       document.addEventListener('mousedown', listener);
//       return () => {
//         document.removeEventListener('mousedown', listener);
//       };
//     },
//     [ref, handler],
//     );
//   };


var NavBar = function NavBar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var node = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    ref: node,
    style: {}
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Burger, {
    black: props.black,
    open: open,
    setOpen: setOpen
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Menu, {
    style: {
      zIndex: "1000"
    },
    open: open,
    setOpen: setOpen
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(20);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(53)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viewpager; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_use_gesture__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);




function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n    content: url(", ");\n    width: 10rem;\n    animation: ", " 3s ease-out infinite;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n    border-radius: 10px;\n    background-color: rgba(0,0,0,.5);\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n0% { transform: translateX(95px); }\n50% { transform: translateX(-95px); }\n100% { transform:  translateX(95px); }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n    cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39,\n    auto;\n    & > div {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        will-change: transform;\n    }\n\n    & > div > div {\n        border-radius: 10px;\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center center;\n        width: 100%;\n        height: 100%;\n        will-change: transform;\n        box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var swipeLeft = __webpack_require__(66); // import './style.css'


var ViewPagerContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject());
var rotateGesture = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["keyframes"])(_templateObject2());
var GestureContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject3());
var Gesture = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.img(_templateObject4(), swipeLeft, rotateGesture);
var pages = ['https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];
function Viewpager() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      wasClicked = _useState2[0],
      setWasClicked = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      divWidth = _useState4[0],
      setDivWidth = _useState4[1];

  var clickHandler = function clickHandler() {
    setWasClicked(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setDivWidth(document.getElementById("view-pager").offsetWidth);
  }, []);
  var index = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(0);

  var _useSprings = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSprings"])(pages.length, function (i) {
    return {
      x: i * divWidth,
      sc: 1,
      display: 'block'
    };
  }),
      _useSprings2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useSprings, 2),
      props = _useSprings2[0],
      set = _useSprings2[1];

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_6__["useGesture"])(function (_ref) {
    var down = _ref.down,
        _ref$delta = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref.delta, 1),
        xDelta = _ref$delta[0],
        _ref$direction = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref.direction, 1),
        xDir = _ref$direction[0],
        distance = _ref.distance,
        cancel = _ref.cancel;

    if (down && distance > divWidth / 2) cancel(index.current = lodash_es_clamp__WEBPACK_IMPORTED_MODULE_4___default()(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1));
    set(function (i) {
      if (i < index.current - 1 || i > index.current + 1) return {
        display: 'none'
      };
      var x = (i - index.current) * divWidth + (down ? xDelta : 0);
      var sc = down ? 1 - distance / divWidth / 2 : 1;
      return {
        x: x,
        sc: sc,
        display: 'block'
      };
    });
  });
  var viewPagerItems = props.map(function (_ref2, i) {
    var x = _ref2.x,
        display = _ref2.display,
        sc = _ref2.sc;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, bind(), {
      key: i,
      style: {
        display: display,
        transform: x.interpolate(function (x) {
          return "translate3d(".concat(x, "px,0,0)");
        })
      }
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
      style: {
        transform: sc.interpolate(function (s) {
          return "scale(".concat(s, ")");
        }),
        backgroundImage: "url(".concat(pages[i], ")")
      }
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ViewPagerContainer, {
    id: "view-pager"
  }, viewPagerItems, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(GestureContainer, {
    onClick: clickHandler,
    style: {
      display: wasClicked ? 'none' : 'flex'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Gesture, null)));
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-use-gesture");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "babel-polyfill"
var external_babel_polyfill_ = __webpack_require__(64);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-helmet-async"
var external_react_helmet_async_ = __webpack_require__(22);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(8);

// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/components/Router.js
var Router = __webpack_require__(5);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/App.js


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  /* @import url('https://fonts.googleapis.com/css?family=Oswald:300,700&display=swap\" rel=\"stylesheet'); */\n  /* @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:300,700|Roboto:300&display=swap'); */\n  /* alegreya-sans-sc-300 - latin */\n  @font-face {\n    font-family: 'Alegreya Sans SC';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Alegreya Sans SC Light'), local('AlegreyaSansSC-Light'),\n        url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n    /* alegreya-sans-sc-regular - latin */\n    @font-face {\n      font-family: 'Alegreya Sans SC';\n      font-style: normal;\n      font-weight: 400;\n      src: local('Alegreya Sans SC Regular'), local('AlegreyaSansSC-Regular'),\n          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n    /* alegreya-sans-sc-700 - latin */\n    @font-face {\n      font-family: 'Alegreya Sans SC';\n      font-style: normal;\n      font-weight: 700;\n      src: local('Alegreya Sans SC Bold'), local('AlegreyaSansSC-Bold'),\n          \n          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n    /* roboto-300 - latin */\n    @font-face {\n      font-family: 'Roboto';\n      font-style: normal;\n      font-weight: 300;\n      src: local('Roboto Light'), local('Roboto-Light'),\n          url('/fonts/roboto-v20-latin/roboto-v20-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n          url('/fonts/roboto-v20-latin/roboto-v20-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n    /* roboto-regular - latin */\n    @font-face {\n      font-family: 'Roboto';\n      font-style: normal;\n      font-weight: 400;\n      src: local('Roboto'), local('Roboto-Regular'),\n          url('/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n          url('/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  } \n\n  * {\n    scroll-behavior: smooth;\n  }\n  html {\n    font-size: 62.5%;\n  \n    body {\n      /* // font-family: 'Oswald', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; */\n\n      box-sizing: border-box;\n\n      font-family: 'Alegreya Sans SC', sans-serif;\n\n\n      font-weight: 300;\n      line-height: 2.6rem;\n      letter-spacing: .1rem;\n      font-size: 16px;\n      margin: 0;\n      padding: 0;\n      color: black;\n      h1 {\n        font-weight: bold;\n        color: black;\n      }\n      p {\n        font-family: 'Roboto', sans-serif;\n        line-height: 2.6rem;\n\n      }\n    }\n    @media(min-width: 534px) {\n      font-size: 70%;\n    } \n    @media(min-width: 1575px) {\n      font-size: 90%;\n    } \n  }\n  \n  a {\n    text-decoration: none;\n    color: white;\n  }\n\n  img {\n    max-width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







 // const backgroundPools = require('./images/backgrounds/poolPage.jpg')

var contactBackground = __webpack_require__(29);

var og_image = __webpack_require__(65); // Any routes that start with 'dynamic' will be treated as non-static routes


Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);
var theme = {
  secondaryColour: 'purple',
  lineHeight: "2.6rem"
};
var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject());

function App() {
  return external_react_default.a.createElement(external_react_helmet_async_["HelmetProvider"], null, external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
    theme: theme
  }, external_react_default.a.createElement(GlobalStyle, null), external_react_default.a.createElement(external_react_helmet_async_["Helmet"], null, external_react_default.a.createElement("title", null, "Your London Pool Builder"), external_react_default.a.createElement("meta", {
    property: "og:title",
    content: "Your London Pool Buider"
  }), external_react_default.a.createElement("meta", {
    property: "og:description",
    content: "We install quality in-ground swimming pools, lap pools and water features in the London Ontario area"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: "http://www.countrysidelandscape.com"
  }), external_react_default.a.createElement("meta", {
    property: "og:image",
    content: og_image
  }), external_react_default.a.createElement("meta", {
    property: "og:image:secure_url",
    content: og_image
  })), external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(Router["b" /* Router */], null, external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(12);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-helmet-async");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/react-static/lib/browser");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);












Object(_Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404 */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404";
  }
}), universalOptions);
t_0.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js';
var t_1 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about";
  }
}), universalOptions);
t_1.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js';
var t_2 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact";
  }
}), universalOptions);
t_2.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js';
var t_3 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index";
  }
}), universalOptions);
t_3.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js';
var t_4 = _Users_rickheffren_Documents_WebDevelopment_CountrysideLandscape_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/pools.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/pools */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/pools.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/pools";
  }
}), universalOptions);
t_4.template = '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/pools.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js': t_0,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/about.js': t_1,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/contact.js': t_2,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js': t_3,
  '/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/pools.js': t_4
}); // Not Found Template

var notFoundTemplate = "/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3f3443379d55530243038ca6d8c21147.jpg";

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _containers_springs_view_pager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);


function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  object-fit: cover;\n  width: 15rem;\n  margin: auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  padding: 8rem 0 0;\n  h1 {\n    text-align: center;\n  }\n  p {\n    padding-top: 2rem;\n  }\n  b {\n    font-weight: 700;\n  }\n  &:last-child {\n    padding-bottom: 8rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 23rem;\n  min-height: 7rem;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 100%;\n  height: 9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 85%;\n  height: 100%;\n  margin: auto;\n  @media(min-width: 883px) {\n    width: 65%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var logo = __webpack_require__(67);

var vince = __webpack_require__(68); // Styles


var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3(), logo);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var Photo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject5());
function About() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_springs_view_pager__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Photo, {
    src: vince
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Story"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Countryside Landscape"), " was established in the spring of 2008 by owner John Wall on a small scale performing interlocking stone installations. The business saw rapid expansion to include excavations, demolitions, carpentry, concrete work, wood structures and pavilions as a result of high quality workmanship. Today we are a trusted landscape company with the experience, knowledge and staff to create your landscape dream or property improvement safely, efficiently and affordably. Our team has grown to include a strong, friendly and professional staff including most recently our own landscape designer Vincent Long. He brings years of passionate design experience working for a private residential landscape architecture firm in Ottawa.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Mission"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "At Countryside Landscape, we hire only the best employees and provide excellent service to our vast clientele. Whether your project scope is a small pocket garden in a downtown location or a sprawling country estate, we are committed to excellence in every stage of our project. We are confident that the design resolution will be unique to your property and incorporate your requirements in a seamless manner to allow you your own slice of paradise. Our mission then is to provide you an exciting & effortless experience throughout the planning & construction phases and get you outside enjoying your tailored garden.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Commitment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "It is imperative to provide safe working practices for our employees, and safe working environments for our clients. We endeavour to assemble a staff of sincere, hardworking individuals so that we may be accountable to each other and our clients. We know the importance of listening, understanding and the value of supporting each other through teamwork. We not only teach, but we learn from others \u2013 we build together.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Our Vision"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "To assemble a friendly, professional staff who will cater to our clients\u2019 needs by offering services and products that create beautiful outdoor living spaces.")));
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _artibot_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);
/* harmony import */ var _artibot_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_artibot_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);



function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  h2, a { \n    color: #FFFFFFFF; \n    font-size: 1.75rem;\n  }\n  a { font-size: 2rem; }\n  position: absolute;\n  left: 2.5rem;\n  width: 23rem;\n  bottom: 0.75rem;\n  @media(min-width: 635px){\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  margin-top: 5rem;\n  color: white; \n  width: 100%; \n  text-align: center; \n  h2 { margin-bottom: 0; }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  background-color: rgba(255,255,255, .1);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  margin-top: 1.5rem;\n  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.1);\n  font-size: 1.75rem;\n  z-index: 200;\n  width: 11rem;\n  height: 4rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  margin:  5rem auto 0;\n  width: 23rem;\n  min-height: 8rem;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: absolute;  \n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 95%;\n  p {\n    margin-top: 0;\n    color: #fff;\n    font-weight: 400;\n    font-family: 'Alegreya Sans SC';\n    font-size: 4rem;\n  }\n  @media(min-width: 635px){\n    top: 60%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    background-image: url(", ");\n    background-size: cover;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  position: relative;\n  overflow-x: hidden;\n  width: 100%;\n  height: 100vh;\n  height: ", "px;\n  position: relative;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var logo = __webpack_require__(34);

var Background = __webpack_require__(29); // Styles


var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), function (props) {
  return props.vh;
});
var BackgroundContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2(), Background);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4(), logo);
var ContactButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button(_templateObject5());
var Address = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject6());
var FooterTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject7());
function Contact() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      viewHeight = _useState2[0],
      setViewHeight = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setViewHeight(window.innerHeight);
    window.addEventListener('resize', function () {
      setViewHeight(window.innerHeight);
    });
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.id = "artibot";
    script.setAttribute('crossorigin', 'SameSite=None');
    script.innerHTML = "!function(t,e){t.artibotApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};var a=!1,i=e.createElement('script');i.async=!0,i.type='text/javascript',i.src='https://app.artibot.ai/loader.js',e.getElementsByTagName('head').item(0).appendChild(i),i.onreadystatechange=i.onload=function(){if(!(a||this.readyState&&'loaded'!=this.readyState&&'complete'!=this.readyState)){new window.ArtiBot({i:'31743cbc-72f3-4c39-91de-9447c14185d7'});a=!0}}}(window,document);";
    document.body.appendChild(script);
    return function () {
      return window.removeEventListener('resize', function () {
        setViewHeight(window.innerHeight);
      });
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageContainer, {
    vh: viewHeight
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_navigation_navbar__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    black: true,
    style: {
      zIndex: "1000"
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackgroundContainer, null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Make it yours"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContactButton, {
    className: "artibot-button-expand"
  }, "QUOTE"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, {
    vh: viewHeight
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Address, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    style: {
      fontSize: "2.5rem"
    }
  }, "505 Talbot St. E. Aylmer, ON"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FooterTextContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    style: {
      textAlign: "left"
    }
  }, "JOHN", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "tel: 519-619-9593",
    style: {
      "float": "right"
    }
  }, "(519) 619-9593")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    style: {
      textAlign: "left"
    }
  }, "VINCE", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "tel: 519-619-9593",
    style: {
      "float": "right"
    }
  }, "(519) 619-9593"))));
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "976b6b9ce120905cde0fd2dbd4feca01.png";

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(3);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(9);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__(4);

// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/springs/ken-burns/ken_burns.css
var ken_burns = __webpack_require__(70);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/springs/ken-burns/kenBurns.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // Globals.injectFrame(
//     x => requestAnimationFrame(x),
//     x => cancelAnimationFrame(x)
//   );

var kenBurns_Image = function Image(_ref) {
  var url = _ref.url,
      duration = _ref.duration;
  var props = Object(external_react_spring_["useSpring"])({
    from: {
      transform: 'scale(1) translateX(0%)'
    },
    to: {
      transform: 'scale(1.5) translateX(0%)'
    },
    config: {
      duration: duration + 1
    }
  });
  return external_react_default.a.createElement(external_react_spring_["animated"].div, {
    className: "bg",
    style: _objectSpread({}, props, {
      backgroundImage: url,
      filter: "brightness(85%)"
    })
  });
};

function KenBurns(props) {
  var homePageSliderImages = props.images;
  var slides = [];
  homePageSliderImages.forEach(function (each, i) {
    slides.push({
      id: i,
      url: "".concat(each, "?w=1920&q=40&fl=progressive")
    });
  });
  var duration = 10000;

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      index = _useState2[0],
      set = _useState2[1];

  var transitions = Object(external_react_spring_["useTransition"])(slides[index], function (item) {
    return item.id;
  }, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: external_react_spring_["config"].molasses
  }, []);
  Object(external_react_["useEffect"])(function () {
    var interval = setInterval(function () {
      return set(function (state) {
        return (state + 1) % homePageSliderImages.length;
      });
    }, duration);
    return function () {
      return clearInterval(interval);
    };
  }, [homePageSliderImages.length, homePageSliderImages]);
  Object(external_react_["useEffect"])(function () {
    var toPreload = [];
    homePageSliderImages.forEach(function (link) {
      toPreload.push(["".concat(link, "?w=1920&q=40&fl=progressive")]);
    }); // console.log(toPreload)

    var head = document.getElementsByTagName('head')[0];
    toPreload.forEach(function (each) {
      var link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = each;
      head.appendChild(link);
    });
  }, [homePageSliderImages]);
  return transitions.map(function (_ref2) {
    var item = _ref2.item,
        props = _ref2.props,
        key = _ref2.key;
    return external_react_default.a.createElement(external_react_spring_["animated"].div, {
      key: key,
      style: _objectSpread({}, props)
    }, external_react_default.a.createElement(kenBurns_Image, {
      url: "url(".concat(item.url),
      duration: duration
    }));
  });
}
// EXTERNAL MODULE: external "react-browser-detection"
var external_react_browser_detection_ = __webpack_require__(40);
var external_react_browser_detection_default = /*#__PURE__*/__webpack_require__.n(external_react_browser_detection_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/components/Router.js
var Router = __webpack_require__(5);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/home/BannerNav.js


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    margin-bottom: -4rem;\n    padding: 0;\n    padding-top: ", ";\n    display: flex;\n    justify-content: center;\n    li {\n        a { \n            color: white; \n            text-shadow: 2px 2px 1px  rgba(0,0,0, 0.5);\n\n        }\n        font-size: 1.3rem;\n        list-style-type:none;\n        display: inline-block;\n        padding: 0 .8rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var NavList = external_styled_components_default.a.ul(_templateObject(), function (props) {
  return props.secondary ? "0" : "1.2rem";
});
function BannerNav(props) {
  return external_react_default.a.createElement(NavList, {
    secondary: props.secondary
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/about"
  }, "ABOUT US")), external_react_default.a.createElement("li", {
    style: {
      fontSize: "2rem",
      marginTop: "-.1rem",
      fontWeight: "bold"
    }
  }, external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/pool-installs",
    style: {
      color: "white"
    }
  }, "OUR WORK")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/contact"
  }, "CONTACT")));
}
// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/home/BannerText.js


function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    margin: 0 auto 1rem;\n    right: 1rem;\n    width: 23rem;\n    min-height: 8rem;\n    background-image: url(", ");\n    background-size: cover;\n    background-position: center center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function BannerText_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    color: white;\n    z-index: 2;\n    width: 85%;\n\n    position: absolute;\n    top: ", ";\n    left: 50%;\n    transform: translate(-50%, -100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    h1 {\n        margin-bottom: 0;\n        width: 100%;\n        font-size: 3rem;\n        font-weight: 300 !important;\n        text-align: center;\n    }\n"]);

  BannerText_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var logo = __webpack_require__(71); // styles


var TextContainer = external_styled_components_default.a.div(BannerText_templateObject(), function (props) {
  return props.secondary ? "0" : "50%";
});
var Logo = external_styled_components_default.a.div(_templateObject2(), logo);
function Banner(props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(TextContainer, null, external_react_default.a.createElement(Logo, null), external_react_default.a.createElement("h1", null, "Your London Pool Builder"), external_react_default.a.createElement(BannerNav, null)));
}
// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/navigation/navbar.js
var navbar = __webpack_require__(11);

// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/images/icons/instagram.png
var instagram = __webpack_require__(41);
var instagram_default = /*#__PURE__*/__webpack_require__.n(instagram);

// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/images/icons/facebook.png
var facebook = __webpack_require__(42);
var facebook_default = /*#__PURE__*/__webpack_require__.n(facebook);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });



function pages_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\nposition: absolute;\ntext-align: center;\nbottom: 0;\nwidth: 100%;\n"]);

  pages_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function pages_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  position: fixed;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n  /* height: calc(", " * 100); */\n  height: ", "px;\n  h1 { color: white; }\n"]);

  pages_templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var browserHandler = {
  chrome: function chrome() {
    console.log('This is Chrome');
    return external_react_default.a.createElement("div", null, "Chrome is fantastic!");
  },
  googlebot: function googlebot() {
    return external_react_default.a.createElement("div", null, "Hi GoogleBot!");
  },
  "default": function _default(browser) {
    console.log("This is: ", browser);
    return external_react_default.a.createElement("div", null, "Hi ", browser, "!");
  }
}; // Styles

var Container = external_styled_components_default.a.div(pages_templateObject(), function (props) {
  return props.vh;
}, function (props) {
  return props.vh;
});
var SocialIcons = external_styled_components_default.a.div(pages_templateObject2());
function Home() {
  var _useRouteData = Object(external_react_static_["useRouteData"])(),
      homePageSliderImages = _useRouteData.homePageSliderImages;

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      viewHeight = _useState2[0],
      setViewHeight = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(0),
      _useState4 = slicedToArray_default()(_useState3, 2),
      browser = _useState4[0],
      setBrowser = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    setViewHeight(window.innerHeight);
    window.addEventListener('resize', function () {
      setViewHeight(window.innerHeight);
    });
    setBrowser(external_react_default.a.createElement(external_react_browser_detection_default.a, null, browserHandler));
    return function () {
      return window.removeEventListener('resize', function () {
        setViewHeight(window.innerHeight);
      });
    };
  }, [setViewHeight]);
  return external_react_default.a.createElement(Container, {
    vh: viewHeight,
    style: {
      position: "relative",
      overflowX: "hidden"
    }
  }, browser, external_react_default.a.createElement(navbar["a" /* default */], {
    style: {
      zIndex: "1000"
    }
  }), external_react_default.a.createElement(KenBurns, {
    images: homePageSliderImages
  }), external_react_default.a.createElement(Banner, null), external_react_default.a.createElement(SocialIcons, null, external_react_default.a.createElement("img", {
    src: instagram_default.a,
    style: {
      width: "4rem",
      margin: "1rem"
    },
    alt: "Instagram icon"
  }), external_react_default.a.createElement("img", {
    src: facebook_default.a,
    style: {
      width: "4rem",
      margin: "1rem"
    },
    alt: "Facebook icon"
  })));
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/components/Router.js
var Router = __webpack_require__(5);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(8);

// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/navigation/navbar.js
var navbar = __webpack_require__(11);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(43);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(44);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(45);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(46);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(23);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(47);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(9);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__(4);

// EXTERNAL MODULE: external "react-spring/renderprops"
var renderprops_ = __webpack_require__(48);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/components/helperFuncrtions/createSrcSets.js
function createSrcSet(links) {
  var toPreload = [];
  links.forEach(function (image) {
    var resonsiveImageSet = {
      fourHundred: {
        "url": image.full1920x1280.fields.file.url,
        "oneX": "".concat(image.full1920x1280.fields.file.url, "?fm=jpg&w=400&q=50&fl=progressive"),
        "twoX": "".concat(image.full1920x1280.fields.file.url, "?fm=jpg&w=800&q=50&fl=progressive"),
        "threeX": "".concat(image.full1920x1280.fields.file.url, "?fm=jpg&w=1200&q=50&fl=progressive")
      }
    };
    toPreload.push(resonsiveImageSet);
  });
  var srcSets = [];
  toPreload.forEach(function (link) {
    var srcSet = link.fourHundred;
    srcSets.push([srcSet.url, "".concat(srcSet.oneX, " 400w, ").concat(srcSet.twoX, " 800w, ").concat(srcSet.threeX, " 1200w")]);
  });
  return srcSets;
}

/* harmony default export */ var createSrcSets = (createSrcSet);
// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/components/carousel/springCarousel.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    height: 400px;\n    position: relative;\n    width: 100%;\n    cursor: pointer;\n    & > div {\n    will-change: transform, opacity;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: 50% 50%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SliderContainer = external_styled_components_default.a.img(_templateObject());
var Container = external_styled_components_default.a.div(_templateObject2());

var springCarousel_getSlide = function getSlide(preLoadedImages) {
  return external_react_default.a.createElement(SliderContainer, {
    src: preLoadedImages[0],
    srcSet: preLoadedImages[1],
    sizes: "100vw",
    alt: "Pool"
  });
};

var springCarousel_Carousel =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Carousel, _React$Component);

  function Carousel() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Carousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      index: 0,
      length: 1,
      preLoadedImages: null
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggle", function (e) {
      return _this.setState(function (state) {
        return {
          index: state.index === state.length - 1 ? 0 : state.index + 1
        };
      });
    });

    return _this;
  }

  createClass_default()(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var images = this.props.imageData.pools;
      console.log('this.props: ', this.props);
      var links = createSrcSets(images);
      var head = document.getElementsByTagName('head')[0];
      links.forEach(function (each) {
        var link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = each[0];
        link.imageSrcset = each[1];
        link.imageSizes = "100vw";
        head.appendChild(link);
      });
      this.setState({
        length: images.length,
        preLoadedImages: links
      });
    }
  }, {
    key: "render",
    value: function render() {
      var index = this.state.index;
      var preLoadedImages = this.state.preLoadedImages;
      return external_react_default.a.createElement("div", {
        style: {
          backgroundColor: "".concat(this.props.backgroundColor)
        }
      }, external_react_default.a.createElement(Container, {
        onClick: this.toggle
      }, external_react_default.a.createElement(renderprops_["Transition"], {
        "native": true,
        reset: true,
        unique: true,
        items: index,
        from: {
          opacity: 0,
          transform: "translate3d(100%, 0 ,0)"
        },
        enter: {
          opacity: 1,
          transform: "translate3d(0%, 0, 0)"
        },
        leave: {
          opacity: 0,
          transform: "translate3d(-50%, 0, 0)"
        }
      }, function (index) {
        return function (style) {
          return external_react_default.a.createElement(external_react_spring_["animated"].div, {
            style: _objectSpread({}, style)
          }, springCarousel_getSlide(preLoadedImages[index]));
        };
      })));
    }
  }]);

  return Carousel;
}(external_react_default.a.Component);

/* harmony default export */ var springCarousel = (springCarousel_Carousel);
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(13);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(3);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react-use-gesture"
var external_react_use_gesture_ = __webpack_require__(16);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/springs/card-stack.js





function card_stack_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function card_stack_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { card_stack_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { card_stack_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function card_stack_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    z-index: 4999;\n    width: 100%;\n    height: 50rem;\n    cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto;\n\n    & > div {\n        z-index: 5000;\n        position: absolute;\n        width: 100vw;\n        height: 100vh;\n        will-change: transform;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    & > div > div {\n        z-index: 5001;\n        background-color: white;\n        background-size: auto 85%;\n        background-repeat: no-repeat;\n        background-position: center center;\n        width: 45vh;\n        max-width: 300px;\n        height: 85vh;\n        max-height: 570px;\n        will-change: transform;\n        border-radius: 10px;\n        box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);\n    }\n\n"]);

  card_stack_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // import './styles.css'
//

var CardContainer = external_styled_components_default.a.div(card_stack_templateObject());
var cards = ['https://images.ctfassets.net/ur1u6ni4z1cg/6ERc2090z9WdqnQ6qGrSXZ/9824fb7f0a104ed37ae3cf29679ee2db/1920X1280-63.jpg?w=620&q=40', 'https://images.ctfassets.net/ur1u6ni4z1cg/6ERc2090z9WdqnQ6qGrSXZ/9824fb7f0a104ed37ae3cf29679ee2db/1920X1280-63.jpg?w=620&q=40', 'https://images.ctfassets.net/ur1u6ni4z1cg/6ERc2090z9WdqnQ6qGrSXZ/9824fb7f0a104ed37ae3cf29679ee2db/1920X1280-63.jpg?w=620&q=40', 'https://images.ctfassets.net/ur1u6ni4z1cg/6ERc2090z9WdqnQ6qGrSXZ/9824fb7f0a104ed37ae3cf29679ee2db/1920X1280-63.jpg?w=620&q=40']; // These two are just helpers, they curate spring data, values that are later being interpolated into css

var to = function to(i) {
  return {
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100
  };
};

var from = function from(i) {
  return {
    x: 0,
    rot: 0,
    scale: 1.5,
    y: -1000
  };
}; // This is being used down there in the view, it interpolates rotation and scale into a css transform


var trans = function trans(r, s) {
  return "perspective(1500px) rotateX(30deg) rotateY(".concat(r / 10, "deg) rotateZ(").concat(r, "deg) scale(").concat(s, ")");
};

function Deck() {
  var _useState = Object(external_react_["useState"])(function () {
    return new Set();
  }),
      _useState2 = slicedToArray_default()(_useState, 1),
      gone = _useState2[0]; // The set flags all the cards that are flicked out


  var _useSprings = Object(external_react_spring_["useSprings"])(cards.length, function (i) {
    return card_stack_objectSpread({}, to(i), {
      from: from(i)
    });
  }),
      _useSprings2 = slicedToArray_default()(_useSprings, 2),
      props = _useSprings2[0],
      set = _useSprings2[1]; // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity


  var bind = Object(external_react_use_gesture_["useGesture"])(function (_ref) {
    var _ref$args = slicedToArray_default()(_ref.args, 1),
        index = _ref$args[0],
        down = _ref.down,
        _ref$delta = slicedToArray_default()(_ref.delta, 1),
        xDelta = _ref$delta[0],
        distance = _ref.distance,
        _ref$direction = slicedToArray_default()(_ref.direction, 1),
        xDir = _ref$direction[0],
        velocity = _ref.velocity;

    var trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out

    var dir = xDir < 0 ? -1 : 1; // Direction should either point left or right

    if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

    set(function (i) {
      if (index !== i) return; // We're only interested in changing spring-data for the current spring

      var isGone = gone.has(index);
      var x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero

      var rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster

      var scale = down ? 1.1 : 1; // Active cards lift up a bit

      return {
        x: x,
        rot: rot,
        scale: scale,
        delay: undefined,
        config: {
          friction: 50,
          tension: down ? 800 : isGone ? 200 : 500
        }
      };
    });
    if (!down && gone.size === cards.length) setTimeout(function () {
      return gone.clear() || set(function (i) {
        return to(i);
      });
    }, 600);
  });
  var cardsJSX = props.map(function (_ref2, i) {
    var x = _ref2.x,
        y = _ref2.y,
        rot = _ref2.rot,
        scale = _ref2.scale;
    return external_react_default.a.createElement(external_react_spring_["animated"].div, {
      key: i,
      style: {
        transform: Object(external_react_spring_["interpolate"])([x, y], function (x, y) {
          return "translate3d(".concat(x, "px,").concat(y, "px,0)");
        })
      }
    }, external_react_default.a.createElement(external_react_spring_["animated"].div, extends_default()({}, bind(i), {
      style: {
        transform: Object(external_react_spring_["interpolate"])([rot, scale], trans),
        backgroundImage: "url(".concat(cards[i], ")")
      }
    })));
  }); // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)

  return external_react_default.a.createElement(CardContainer, null, external_react_default.a.createElement("a", {
    href: "#"
  }, "Click here"), cardsJSX);
}
// EXTERNAL MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/containers/springs/view-pager.js
var view_pager = __webpack_require__(15);

// CONCATENATED MODULE: /Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/src/pages/pools.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pools; });


function _templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    position: relative;\n    width: 100%;\n    height: 91vw;\n    margin: 0 auto;\n    overflow: hidden;\n    border-radius: 7px;\n    @media( min-width: 675px ){\n        height: 66vw;\n    }\n    @media( min-width: 950px ){\n        height: 60rem;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    background-color: \"#264A65\";\n    width: 95%;\n    margin: auto;\n    top: 4rem;\n    padding-bottom: 8rem;\n    @media( min-width: 675px ) {\n        position: relative;\n        left: 1px;\n        width: 85vw;\n        box-shadow: 0px 0px 75px 0px rgba(0,0,0,0.75);\n    }\n    @media( min-width: 1575px ) {\n        /* width: 55vw; */\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    width: 95%;\n    margin: auto;\n    position: relative;\n    h1 { color: white; }\n    text-align: center;\n    p, h2 { \n        text-align: left;\n        color: white;\n     }\n     h2 {\n         padding-top: 4rem;\n     }\n     p { padding-bottom: 4rem; }\n    font-size: 1.25rem;\n    padding-top: 68vw;\n    @media( min-width: 950px ) {\n        padding-top: 48vw;\n        width: 68%;\n        margin: auto;\n    }\n    @media( min-width: 1575px ) {\n        padding-top: 50rem;\n        width: 69%;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n    position: absolute;\n    top: 48vw;\n    /* top: 22rem; */\n    left: calc(50% - 1rem);\n    transform: translateX(-50%);\n    width: 23rem;\n    min-height: 8rem;\n    background-image: url(", ");\n    background-size: cover;\n    background-position: center center;\n    z-index: 50;\n    @media( min-width: 673px ) {\n        top: 51vw;\n    }\n    @media( min-width: 771px ) {\n        width: 33rem;\n        min-height: 10rem;\n    }\n    @media( min-width: 950px ) {\n        top: 38vw;\n        width: 27vw;\n        min-height: 9vw;\n    }\n    @media( min-width: 1575px ) {\n        top: 42rem;\n        width: 25rem;\n        min-height: 8rem;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function pools_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\nwidth: 100vw;\nbackground-image: url(", ");\nbackground-repeat: no-repeat;\nbackground-size: contain;\nbackground-position: top center;\n@media( min-width: 950px ) {\n    background-image: url(", ");\n}\n@media( min-width: 1575px ) {\n    /* background-size: cover; */\n}\n"]);

  pools_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function pools_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    background-color: #2C5E7E;\n    height: auto;\n"]);

  pools_templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var background = __webpack_require__(72);

var backgroundLarge = __webpack_require__(73);

var logo = __webpack_require__(34);

var catalogue = __webpack_require__(74);

var PageContainer = external_styled_components_default.a.div(pools_templateObject());
var BackgroundContainer = external_styled_components_default.a.div(pools_templateObject2(), background, backgroundLarge);
var Logo = external_styled_components_default.a.div(_templateObject3(), logo);
var TextContainer = external_styled_components_default.a.div(_templateObject4());
var ContentContainer = external_styled_components_default.a.div(_templateObject5());
var ViewStackContainer = external_styled_components_default.a.div(_templateObject6());
function Pools() {
  var _useRouteData = Object(external_react_static_["useRouteData"])(),
      contentfulImages = _useRouteData.contentfulImages;

  return external_react_default.a.createElement(PageContainer, {
    style: {
      position: "relative",
      overflowX: "hidden"
    }
  }, external_react_default.a.createElement(BackgroundContainer, null, external_react_default.a.createElement(navbar["a" /* default */], {
    style: {
      zIndex: "1000"
    }
  }), external_react_default.a.createElement(ContentContainer, null, external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/"
  }, external_react_default.a.createElement(Logo, null)), external_react_default.a.createElement(TextContainer, null, external_react_default.a.createElement("h1", null, "Your London Pool Builder"), external_react_default.a.createElement("p", null, "We install quality fiberglass in ground swimming pools, fiberglass plunge pools, fiberglass lap pools and water features in and around London Ontario. We are a trusted landscape company with the experience, knowledge and staff to create your landscape dream safely, efficiently and affordably."), external_react_default.a.createElement("a", {
    href: catalogue,
    download: true
  }, "Download Pool Catalogue"), external_react_default.a.createElement(ViewStackContainer, null, external_react_default.a.createElement("h2", null, "View some of our recent work"), external_react_default.a.createElement(view_pager["a" /* default */], null))))));
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(8);

var _router = __webpack_require__(14);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("lodash-es/clamp");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-browser-detection");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9ad8f8e73f2fb019fb50520eea010bf0.png";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-spring/renderprops");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(51);
module.exports = __webpack_require__(57);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(24)["default"];

var _require = __webpack_require__(25),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(24)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(25),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(26),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(26),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(20);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 12,
	"./": 12,
	"./index": 12,
	"./index.js": 12
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 53;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(27);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(28);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(10);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(58);

var _interopRequireDefault = __webpack_require__(59);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(13));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(60));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(61);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(62)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("/Users/rickheffren/Documents/WebDevelopment/CountrysideLandscape/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(63)(module)))

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5b8f3d30a66d886940c33f144f2932dc.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5008926a1f3fe6680a9d9a1eb069d452.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f30daf4734c5408868c4edd9687d9ed.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "95ec78e7eaf6ec929481d8789d7e1789.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// Module
exports.push([module.i, "/* button.artibot-launcher--1dqxp.artibot-launcher-top-right--fH7j0 {\n    position: absolute !important;\n    left: 50% !important;\n    transform: translateX(-50%) !important;\n    top: 30rem !important;\n}\n\n.artibot-wrapper--19YJW.artibot-launcher--1dqxp.artibot-launcher-top-right--fH7j0 {\n    top: 30rem !important;\n\n} */", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// Module
exports.push([module.i, ".bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-size: cover;\n    background-position: center;\n    will-change: opacity;\n  }\n  ", ""]);



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "938f13a5cd0de28f42a31ec17703f36f.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e54a9c8ff39b31b0da4d2a1d14cd2359.jpg";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c3c3a96e3ad3b0f9d847c11992d6fbb8.jpg";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f4fc207e3889abad9e789841bd6fc4a7.pdf";

/***/ })
/******/ ]);
});