require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		13: 0
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./chunks/" + ({"0":"compare-parties","1":"questionnaire-results","2":"embed-prof","3":"kjorskra","4":"prof","5":"malefnisingle","6":"partysingle","7":"topics-answers","8":"frontpage","9":"about","10":"malefni","11":"previous-elections","12":"not-found"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable max-len */

if (false) {
  throw new Error('Do not import `config.js` from inside the client-side code.');
}

let googleTrackingId;

if (true) {
  googleTrackingId = 'UA-39870444-1';
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || `http://localhost:${process.env.PORT || 3000}` || '',
    // API URL to be used in the server-side code
    serverUrl: process.env.API_SERVER_URL || `http://localhost:${process.env.PORT || 3000}`
  },

  // Web analytics
  analytics: {
    googleTrackingId
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(32);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = setRuntimeVariable;
/* eslint-disable import/prefer-default-export */

const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
/* harmony export (immutable) */ __webpack_exports__["a"] = SET_RUNTIME_VARIABLE;


function setRuntimeVariable({ name, value }) {
  return {
    type: SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value
    }
  };
}

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(33);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(34);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("kennitala");

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14);
module.exports = __webpack_require__(15);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_multer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer_s3__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer_s3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_multer_s3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aws_sdk__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_aws_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_node_fetch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom_server__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pretty_error__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ioredis__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ioredis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ioredis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uuid__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_App__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Html__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__routes_error_ErrorPage_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__createFetch__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_json__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__store_configureStore__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lib_kjorskra__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lib_kjorskra___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__lib_kjorskra__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__actions_runtime__ = __webpack_require__(5);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




















// import schema from './data/schema';
 // eslint-disable-line import/no-unresolved





let redis;
if (process.env.REDIS_URL) {
  redis = new __WEBPACK_IMPORTED_MODULE_10_ioredis___default.a(process.env.REDIS_URL, process.env.REDIS_URL.includes('rediss://') ? {
    tls: {
      rejectUnauthorized: false,
      family: process.env.FLY_APP_NAME ? 6 : 4
    }
  } : {
    family: process.env.FLY_APP_NAME ? 6 : 4
  });
} else {
  console.error('WARNING YOU ARE RUNNING THIS PROJECT WITHOUT PERMANENTLY STORING REPLY DATA');
}

// let s3;
// let upload;

/*
  if (process.env.NODE_ENV === 'production') {
    s3 = new aws.S3({
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    });
    upload = multer({
      storage: multerS3({
        s3,
        bucket: process.env.S3_BUCKET,
        acl: 'public-read',
        async key(req, file, cb) {
          if (!['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype))
            return cb(new Error('Wrong filetype'));

          const token = req.query.token;
          if (!uuid.validate(token))
            throw Error(
              'Rangt auðkenni. Hafðu samband við kjosturett@voliprav.si ef þetta er röng villa.',
            );
          const ssn = await redis.get(`candidate-token:${token}`);

          if (!ssn)
            return cb(
              new Error(
                'Rangur hlekkur. Hafðu samband við kjosturett@voliprav.si ef þetta er röng villa.',
              ),
            );

          cb(null, `candidates/${ssn}.jpg`);
        },
      }),
    });
  } else {
    upload = multer({ dest: 'uploads/' });
  }
*/

const app = __WEBPACK_IMPORTED_MODULE_4_express___default()();

// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_4_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.resolve(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.json());

if (false) {
  app.enable('trust proxy');
}

app.get('/og-image-kjorskra/:coordinates', (req, res) => {
  const { coordinates } = req.params;
  const url = `https://kjosturett-is.imgix.net/og_kjorskra3.png?markalign=right%2Cmiddle&mark=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fstaticmap%3Fcenter%3D${coordinates}%26zoom%3D14%26size%3D600x630%26maptype%3Droadmap%26markers%3Dicon%3Ahttps%3A%2F%2Fimgix.voliprav.si%2Fmap_marker3.png%7C${coordinates}`;
  res.redirect(301, url);
});

app.get('/kjorskra-lookup/:kennitala', (req, res, next) => {
  __WEBPACK_IMPORTED_MODULE_21__lib_kjorskra___default()(req.params.kennitala).then(d => res.json(d), next);
});

/**
 * Used to candidate profile upload
 */
/*
app.post('/candidate/avatar', upload.single('avatar'), (req, res) => {
  if (!req.query.token)
    return res.json({
      success: false,
      error: 'Failed to upload photo, missing token',
    });

  res.redirect(`/svar?token=${req.query.token}&upload=success`);
});
*/

// Used to gather replies from candidates and parties
app.post('/konnun/replies', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    /*
      if (Date.now() > 1632614400000) {
        return res.json({
          success: false,
          error: 'Kosningarnar eru búnar',
        });
      }
    */

    const { token, party, reply } = req.body;

    const timestamp = Math.round(Date.now() / 1000);

    yield redis.set(`poll:private:${party}:${token}:${timestamp}`, reply);
    res.json({ success: true });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

app.post('/konnun/topics', (() => {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    /*
      if (Date.now() > 1632614400000) {
        return res.json({
          success: false,
          error: 'Kosningarnar eru búnar',
        });
      }
    */

    const { token, party, answers } = req.body;

    const timestamp = Math.round(Date.now() / 1000);

    yield redis.set(`topics:private:${party}:${token}:${timestamp}`, JSON.stringify(answers));
    res.json({ success: true });
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})());

// Used to gather replies from voters in an anonymous way
app.post('/konnun/replies/all', (() => {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    const { reply } = req.body;

    const token = __WEBPACK_IMPORTED_MODULE_11_uuid__["v4"]();
    const timestamp = Math.round(Date.now() / 1000);

    yield redis.set(`poll:public:${token}:${timestamp}`, reply);
    res.json({ success: true });
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
})());

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', (() => {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    try {
      const css = new Set();

      // Universal HTTP client
      const fetch = Object(__WEBPACK_IMPORTED_MODULE_16__createFetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6_node_fetch___default.a, {
        baseUrl: __WEBPACK_IMPORTED_MODULE_20__config___default.a.api.serverUrl,
        cookie: req.headers.cookie
      });

      const initialState = {};

      const store = Object(__WEBPACK_IMPORTED_MODULE_19__store_configureStore__["a" /* default */])(initialState, {
        fetch
      });

      store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_22__actions_runtime__["b" /* setRuntimeVariable */])({
        name: 'initialNow',
        value: Date.now()
      }));

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html

      // console.log('in here creating context with', req.headers.cookie, req.user);
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss: function (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach(function (style) {
            return css.add(style._getCss());
          });
        },
        fetch,
        // You can access redux through react-redux connect
        store,
        storeSubscription: null
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_17__router__["a" /* default */].resolve(_extends({}, context, {
        path: req.path,
        query: req.query
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);
      data.children = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToString(_jsx(__WEBPACK_IMPORTED_MODULE_12__components_App__["a" /* default */], {
        context: context,
        store: store
      }, void 0, route.component));
      data.styles = [{ id: 'css', cssText: [...css].join('') }];
      data.scripts = [__WEBPACK_IMPORTED_MODULE_18__assets_json___default.a.vendor.js];
      if (route.chunks) {
        data.scripts.push(...route.chunks.map(function (chunk) {
          return __WEBPACK_IMPORTED_MODULE_18__assets_json___default.a[chunk].js;
        }));
      }
      data.scripts.push(__WEBPACK_IMPORTED_MODULE_18__assets_json___default.a.client.js);
      data.app = {
        apiUrl: __WEBPACK_IMPORTED_MODULE_20__config___default.a.api.clientUrl,
        state: context.store.getState()
      };

      const html = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_Html__["a" /* default */], data));
      res.status(route.status || 200);
      res.send(`<!doctype html>${html}`);
    } catch (err) {
      next(err);
    }
  });

  return function (_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new __WEBPACK_IMPORTED_MODULE_9_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err));
  const html = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToStaticMarkup(_jsx(__WEBPACK_IMPORTED_MODULE_13__components_Html__["a" /* default */], {
    title: 'Internal Server Error',
    description: err.message,
    styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_15__routes_error_ErrorPage_css___default.a._getCss() }]
  }, void 0, __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToString(_jsx(__WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], {
    error: err
  }))));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
if (true) {
  app.listen(__WEBPACK_IMPORTED_MODULE_20__config___default.a.port, () => {
    console.info(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_20__config___default.a.port}/`);
  });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (false) {
  app.hot = module.hot;
  module.hot.accept('./router');
}

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("multer-s3");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("ioredis");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const ContextType = _extends({
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  // Universal HTTP client
  fetch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
}, __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"].childContextTypes);

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
  }
}

App.childContextTypes = ContextType;
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






/* eslint-disable react/no-danger */

var _ref = _jsx('meta', {
  charSet: 'utf-8'
});

var _ref2 = _jsx('meta', {
  httpEquiv: 'x-ua-compatible',
  content: 'ie=edge'
});

var _ref3 = _jsx('meta', {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
});

var _ref4 = _jsx('meta', {
  property: 'og:locale',
  content: 'is_IS'
});

var _ref5 = _jsx('meta', {
  name: 'keywords',
  content: 'volitve,volitve 2022,parlamentarne,voli,voliti,koga voliti,program,program stranke,sds,lm\u0161,sd,konkretno,nsi,pirati,levica'
});

var _ref6 = _jsx('meta', {
  property: 'og:site_name',
  content: 'Voli prav 2022'
});

var _ref7 = _jsx('meta', {
  property: 'og:type',
  content: 'website'
});

var _ref8 = _jsx('link', {
  rel: 'apple-touch-icon',
  sizes: '180x180',
  href: '/apple-touch-icon.png'
});

var _ref9 = _jsx('link', {
  rel: 'icon',
  type: 'image/png',
  sizes: '32x32',
  href: '/favicon-32x32.png'
});

var _ref10 = _jsx('link', {
  rel: 'icon',
  type: 'image/png',
  sizes: '16x16',
  href: '/favicon-16x16.png'
});

var _ref11 = _jsx('link', {
  rel: 'manifest',
  href: '/manifest.json'
});

var _ref12 = _jsx('link', {
  rel: 'mask-icon',
  href: '/safari-pinned-tab.svg',
  color: '#5bbad5'
});

var _ref13 = _jsx('meta', {
  name: 'theme-color',
  content: '#ffffff'
});

var _ref14 = _jsx('meta', {
  property: 'og:image',
  content: 'https://voliprav.si/og_2022.png'
});

var _ref15 = _jsx('meta', {
  name: 'twitter:card',
  content: 'summary_large_image'
});

var _ref16 = _jsx('meta', {
  name: 'twitter:title',
  content: 'Voli prav 2022'
});

var _ref17 = _jsx('link', {
  href: 'https://fonts.googleapis.com/css?family=Lora|Roboto:300,400,500,900',
  rel: 'stylesheet'
});

var _ref18 = _jsx('script', {
  src: 'https://www.google-analytics.com/analytics.js',
  async: true,
  defer: true
});

function Html(props) {
  const {
    title = 'Voli prav 2022',
    description = 'Informacije o političnih strankah in njihovih stališčih predstavljene javnosti.',
    path = '/',
    styles,
    scripts,
    app,
    children,
    ogImage,
    ogImageWidth,
    ogImageHeight
  } = props;

  return _jsx('html', {
    className: 'no-js',
    lang: 'en'
  }, void 0, _jsx('head', {}, void 0, _ref, _ref2, _jsx('title', {}, void 0, title), _ref3, _ref4, _jsx('meta', {
    name: 'description',
    content: description
  }), _ref5, _jsx('meta', {
    property: 'og:title',
    content: title
  }), _ref6, _jsx('meta', {
    property: 'og:url',
    content: `https://voliprav.si${path}`
  }), _jsx('meta', {
    property: 'og:description',
    content: description
  }), _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, ogImageWidth && _jsx('meta', {
    property: 'og:image:width',
    content: ogImageWidth
  }), ogImageHeight && _jsx('meta', {
    property: 'og:image:height',
    content: ogImageHeight
  }), ogImage && _jsx('meta', {
    property: 'og:image',
    content: ogImage
  }), !ogImage && _ref14, _ref15, _ref16, _jsx('meta', {
    name: 'twitter:description',
    content: description
  }), _ref17, scripts.map(script => _jsx('link', {
    rel: 'preload',
    href: script,
    as: 'script'
  }, script)), styles.map(style => _jsx('style', {
    id: style.id,
    dangerouslySetInnerHTML: { __html: style.cssText }
  }, style.id))), _jsx('body', {
    style: { margin: 0 }
  }, void 0, _jsx('div', {
    id: 'app',
    dangerouslySetInnerHTML: { __html: children }
  }), _jsx('script', {
    dangerouslySetInnerHTML: { __html: `window.App=${__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(app)}` }
  }), scripts.map(script => _jsx('script', {
    src: script
  }, script)), __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && _jsx('script', {
    dangerouslySetInnerHTML: {
      __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + `ga('create','${__WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId}','auto');ga('send','pageview')`
    }
  }), __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && _ref18));
}

Html.defaultProps = {
  styles: [],
  scripts: []
};


/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var _ref = _jsx('div', {}, void 0, _jsx('h1', {}, void 0, 'Error'), _jsx('p', {}, void 0, 'Sorry, a critical error occurred on this page.'));

function ErrorPage(props) {
  if (false) {
    return _jsx('div', {}, void 0, _jsx('h1', {}, void 0, props.error.name), _jsx('pre', {}, void 0, props.error.stack));
  }

  return _ref;
}

ErrorPage.defaultProps = {
  error: null
};



/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 32px;padding:0 2rem;height:100%;font-family:sans-serif;text-align:center;color:#888}body{margin:0}h1{font-weight:400;color:#555}pre{white-space:pre-wrap;text-align:left}", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function createFetch(fetch, { baseUrl, cookie }) {
  // NOTE: Tweak the default options to suite your application needs
  const defaults = {
    method: 'POST', // handy with GraphQL backends
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: _extends({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, cookie ? { Cookie: cookie } : null)
  };

  return (url, options) => url.startsWith('/graphql') || url.startsWith('/api') ? fetch(`${baseUrl}${url}`, _extends({}, defaults, options, {
    headers: _extends({}, defaults.headers, options && options.headers)
  })) : fetch(url, options);
}

/* harmony default export */ __webpack_exports__["a"] = (createFetch);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(38);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */], {
  resolveRoute(context, params) {
    if (typeof context.route.load === 'function') {
      return context.route.load().then(action => action.default(context, params));
    }
    if (typeof context.route.action === 'function') {
      return context.route.action(context, params);
    }
    return null;
  }
}));

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [{
    path: '/',
    load: () => __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 62))
  }, {
    path: '/4e94afa38918c6f2dcc12fd8a04d3972',
    load: () => __webpack_require__.e/* import() */(4/* duplicate */).then(__webpack_require__.bind(null, 9))
  }, {
    path: '/5e94afa38918c6f2dcc12fd8a04d3972',
    load: () => __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 63))
  }, {
    path: '/embed',
    children: [{
      path: '/vprasalnik',
      children: [{
        path: '',
        load: () => __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 64))
      }, {
        path: '/:results',
        load: () => __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 65))
      }]
    }]
  }, {
    path: '/svar',
    load: () => __webpack_require__.e/* import() */(4/* duplicate */).then(__webpack_require__.bind(null, 9))
  }, {
    path: '/vprasalnik',
    children: [{
      path: '',
      load: () => __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 66))
    }, {
      path: '/:results',
      load: () => __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 67))
    }]
  }, {
    path: '/prejsnje-volitve',
    load: () => __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 68))
  }, {
    path: '/tematike',
    load: () => __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 69))
  }, {
    path: '/o-nas',
    load: () => __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 70))
  }, {
    path: '/kjorskra',
    load: () => __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 10))
  }, {
    path: '/kjorskra/:nidurstada',
    load: () => __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 10))
  }, {
    path: '/tematike/:malefni',
    load: () => __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 73))
  }, {
    path: '/stranke/primerjaj',
    children: [{
      path: '',
      load: () => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 12))
    }, {
      path: '/:letters',
      load: () => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 12))
    }]
  }, {
    path: '/stranke/:party',
    load: () => __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 74))
  },
  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  {
    path: '*',
    load: () => __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 75))
  }],

  action({ next }) {
    return _asyncToGenerator(function* () {
      // Execute each child route until one of them return the result
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = route.title || 'Voli prav';
      route.description = route.description || '';

      return route;
    })();
  }
};

// The error page is available by permanent url for development mode
if (false) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default
  });
}

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(45);






function configureStore(initialState, helpersConfig) {
  const helpers = Object(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  const middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  let enhancer;

  if (false) {
    middleware.push(createLogger());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (process.env.BROWSER && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = compose(applyMiddleware(...middleware), devToolsExtension);
  } else {
    enhancer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', () =>
    // eslint-disable-next-line global-require
    store.replaceReducer(require('../reducers').default));
  }

  return store;
}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__runtime__ = __webpack_require__(43);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  runtime: __WEBPACK_IMPORTED_MODULE_1__runtime__["a" /* default */]
}));

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_runtime__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function runtime(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_runtime__["a" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, {
        [action.payload.name]: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
function createHelpers({ fetch, history }) {
  return {
    fetch,
    history
  };
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);


function inspectObject(object) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_util__["inspect"])(object, {
    colors: true
  });
}

function singleLine(str) {
  return str.replace(/\s+/g, ' ');
}

const actionFormatters = {
  // This is used at feature/apollo branch, but it can help you when implementing Apollo
  APOLLO_QUERY_INIT: a => `queryId:${a.queryId} variables:${inspectObject(a.variables)}\n   ${singleLine(a.queryString)}`,

  APOLLO_QUERY_RESULT: a => `queryId:${a.queryId}\n   ${singleLine(inspectObject(a.result))}`,

  APOLLO_QUERY_STOP: a => `queryId:${a.queryId}`
};

// Server side redux action logger
function createLogger() {
  // eslint-disable-next-line no-unused-vars
  return store => next => action => {
    let formattedPayload = '';
    const actionFormatter = actionFormatters[action.type];
    if (typeof actionFormatter === 'function') {
      formattedPayload = actionFormatter(action);
    } else if (action.toString !== Object.prototype.toString) {
      formattedPayload = action.toString();
    } else if (typeof action.payload !== 'undefined') {
      formattedPayload = inspectObject(action.payload);
    } else {
      formattedPayload = inspectObject(action);
    }

    console.log(` * ${action.type}: ${formattedPayload}`); // eslint-disable-line no-console
    return next(action);
  };
}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const cheerio = __webpack_require__(49);
const { clean, isPerson } = __webpack_require__(11);
const request = __webpack_require__(50);
const bluebird = __webpack_require__(51);
const requestAsync = bluebird.promisify(request);
const fields = ['kennitala', 'nafn', 'logheimili', 'kjordaemi', 'sveitafelag', 'kjorstadur', 'kjordeild'];

module.exports = (() => {
  var _ref = _asyncToGenerator(function* (kt) {
    if (!isPerson(kt)) {
      return {
        success: false,
        message: 'Kennitala not valid'
      };
    }

    let res, $;
    let form = {};

    // Ensure hyphen is in the right place
    const kt_cleaned = clean(kt);
    const kt_formatted = kt_cleaned.slice(0, 6) + '-' + kt_cleaned.slice(6);

    res = yield requestAsync({
      url: 'https://kjorskra.skra.is/kjorskra/',
      method: 'GET',
      gzip: true
    });
    $ = cheerio.load(res.body);
    $('form input').each(function (i, v) {
      form[$(v).attr('name')] = $(v).attr('value');
    });

    form.txtKennitala_Raw = kt_formatted;
    form.txtKennitala = kt_formatted;
    form.ASPxGridView1$DXKVInput = kt_cleaned;

    res = yield requestAsync({
      url: 'https://kjorskra.skra.is/kjorskra/',
      method: 'POST',
      gzip: true,
      form
    });

    $ = cheerio.load(res.body);

    const response = $('#ASPxGridView1_DXDataRow0 td').map(function (i, v) {
      return $(v).text();
    }).toArray().reduce(function (p, d, i) {
      p[fields[i]] = d.trim();
      return p;
    }, {
      success: true
    });

    if (!response.kennitala) return {
      success: false,
      message: 'Kennitala not found'
    };else return response;
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();

if (!module.parent) {
  if (!process.argv[2]) console.log('CLI usage: node kjorskra [kennitala]');else module.exports(process.argv[2]).then(console.log, console.log);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("react-countdown-now");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-collapse");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("rc-slider");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map