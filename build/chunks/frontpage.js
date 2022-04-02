require("source-map-support").install();
exports.ids = [8];
exports.modules = {

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Party__ = __webpack_require__(162);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Party__["a"]; });


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Party_scss__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Party_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Party_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Link__ = __webpack_require__(76);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();








const Container = ({
  url,
  href,
  onClick,
  isSelected,
  isFaded,
  letter,
  name,
  leader,
  leaderShort
}) => {
  const Wrap = href ? __WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */] : 'button';
  return _jsx(Wrap, {
    href: href,
    onClick: onClick,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__Party_scss___default.a.party, isSelected && __WEBPACK_IMPORTED_MODULE_3__Party_scss___default.a.isSelected, isFaded && __WEBPACK_IMPORTED_MODULE_3__Party_scss___default.a.isFaded)
  }, void 0, _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_3__Party_scss___default.a.imgWrap
  }, void 0, _jsx('img', {
    src: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["getAssetUrl"])(false, 'party-icons', url),
    className: __WEBPACK_IMPORTED_MODULE_3__Party_scss___default.a.image,
    alt: `${name}'s logo`
  })), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_3__Party_scss___default.a.info
  }, void 0, _jsx('h3', {
    className: __WEBPACK_IMPORTED_MODULE_3__Party_scss___default.a.name
  }, void 0, name), _jsx('p', {
    className: __WEBPACK_IMPORTED_MODULE_3__Party_scss___default.a.leader
  }, void 0, leaderShort ? leaderShort : leader), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_3__Party_scss___default.a.letter
  }, void 0, letter)));
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Party_scss___default.a)(Container));

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(164);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Party.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Party.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "._2n2ob{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0 solid #efefef;border-top-width:1px;background:#fff;color:#555;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;font-size:1rem;height:65px;line-height:1;padding:0;position:relative;text-align:left;text-decoration:none;-webkit-transition:-webkit-filter .4s;transition:-webkit-filter .4s;-o-transition:filter .4s;transition:filter .4s;transition:filter .4s,-webkit-filter .4s;width:100%}._2n2ob:hover{filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"4\" /><feOffset dx=\"1\" dy=\"5\" result=\"offsetblur\" /><feFlood flood-color=\"rgba(0,0,0,0.1)\" /><feComposite in2=\"offsetblur\" operator=\"in\" /><feMerge><feMergeNode /><feMergeNode in=\"SourceGraphic\" /></feMerge></filter></svg>#filter');-webkit-filter:drop-shadow(0 4px 4px rgba(0,0,0,.1));filter:drop-shadow(0 4px 4px rgba(0,0,0,.1));-webkit-transition-duration:.25s;-o-transition-duration:.25s;transition-duration:.25s}._2n2ob._2qT6O{border-color:#0a2645}._2n2ob.BCIPi{opacity:.6}@media(min-width:600px){._2n2ob{border-width:1px;height:200px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}._1nDyJ{border:1px solid #efefef;border-right:0;border-top:0;color:#aaa;font-size:16px;font-size:1rem;padding:10px 12px;position:absolute;right:0;top:0}._1nDyJ span{font-size:19.2px;font-size:1.2rem}@media(max-width:599px){._1nDyJ{display:none}}._3yvZg{font-size:16px;font-size:1rem;margin-top:0!important;margin-bottom:.2em}._1fpd4{color:#777;font-size:.8em}._2Jno1{margin-right:8px;margin-right:.5rem;width:32px;width:2rem}.TPyW2{height:auto;max-height:70px;max-width:30px}@media(min-width:600px){._3iGan{line-height:1.2;padding-right:.5rem;width:60%}._2Jno1{margin-left:.5rem;text-align:center;width:calc(40% - .5rem)}.TPyW2{height:auto;max-height:70px;max-width:100px}}", ""]);

// exports
exports.locals = {
	"party": "_2n2ob",
	"isSelected": "_2qT6O",
	"isFaded": "BCIPi",
	"letter": "_1nDyJ",
	"name": "_3yvZg",
	"leader": "_1fpd4",
	"imgWrap": "_2Jno1",
	"image": "TPyW2",
	"info": "_3iGan"
};

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PartyGrid__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__PartyGrid__["a"]; });


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PartyGrid_scss__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PartyGrid_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PartyGrid_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





const PartyGrid = ({ children }) => _jsx('div', {
  className: __WEBPACK_IMPORTED_MODULE_2__PartyGrid_scss___default.a.grid
}, void 0, children);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__PartyGrid_scss___default.a)(PartyGrid));

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(168);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./PartyGrid.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./PartyGrid.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "._3CsGN{display:grid}@media(min-width:600px){._3CsGN{grid-template-columns:1fr 1fr;grid-gap:1rem}}@media(min-width:900px){._3CsGN{grid-template-columns:1fr 1fr 1fr}}", ""]);

// exports
exports.locals = {
	"grid": "_3CsGN"
};

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_build_parties_json__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_build_parties_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_build_parties_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Frontpage_scss__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Frontpage_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Frontpage_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Party__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PartyGrid__ = __webpack_require__(165);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();










var _ref = _jsx('p', {}, void 0, 'Pozdrav volivec, uspe\u0161no izbiro na volitvah ti \u017Eeli ekipa Voli prav!');

class FrontPage extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  render() {
    const showElectionDayMessage = Date.now() > 1650751200000 && Date.now() < 1650837600000;
    // const showElectionDayMessage = true;

    return _jsx('div', {}, void 0, showElectionDayMessage && _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__Frontpage_scss___default.a.voteCTA
    }, void 0, _ref, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__Frontpage_scss___default.a.ctaButtons
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
      href: '/vprasalnik',
      className: __WEBPACK_IMPORTED_MODULE_4__Frontpage_scss___default.a.button
    }, void 0, '1. Izpolnite vpra\u0161alnik'), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__Frontpage_scss___default.a.arrow
    }, void 0, '\u2192'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
      href: '/tematike/davki',
      className: __WEBPACK_IMPORTED_MODULE_4__Frontpage_scss___default.a.button
    }, void 0, '2. Spoznajte tematike'), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__Frontpage_scss___default.a.arrow
    }, void 0, '\u2192'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
      href: 'https://www.dvk-rs.si/volisca/#/',
      className: __WEBPACK_IMPORTED_MODULE_4__Frontpage_scss___default.a.button
    }, void 0, '3. Preverite kje voliti'))), _jsx(__WEBPACK_IMPORTED_MODULE_6__components_PartyGrid__["a" /* default */], {}, void 0, __WEBPACK_IMPORTED_MODULE_2__data_build_parties_json___default.a.map(party => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Party__["a" /* default */], _extends({}, party, {
      key: party.letter,
      href: `/stranke/${party.url}`
    })))));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Frontpage_scss___default.a)(FrontPage));

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(179);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Frontpage.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Frontpage.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "._1dGrj{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid #efefef;margin-bottom:1em;padding:1em;font-size:17.6px;font-size:1.1rem;text-align:center;background:#fafafa}._1dGrj,._1dGrj ._3KU9x{display:-webkit-box;display:-ms-flexbox;display:flex}._1dGrj ._3KU9x{margin-top:10px}@media(max-width:850px){._1dGrj ._3KU9x{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}._1dGrj ._3KU9x .pysAM{padding:.45em .8em;font-weight:500;cursor:pointer;text-decoration:none;color:#343434}@media(max-width:850px){._1dGrj ._3KU9x .pysAM{padding:.3em .5em}}._1dGrj ._3KU9x ._2f5nM{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 10px}@media(max-width:850px){._1dGrj ._3KU9x ._2f5nM{display:none}}._1dGrj ._3KU9x .pysAM:hover{background:#eaeaea}", ""]);

// exports
exports.locals = {
	"voteCTA": "_1dGrj",
	"ctaButtons": "_3KU9x",
	"button": "pysAM",
	"arrow": "_2f5nM"
};

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Frontpage__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(80);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
  page: 'parties'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Frontpage__["a" /* default */], {}));

/* harmony default export */ __webpack_exports__["default"] = (({ url }) => ({
  chunks: ['frontpage'],
  title: 'Voli prav - Volitve 2022',
  description: 'Politične stranke v volitvah v DZ 2022.',
  path: url,
  component: _ref
}));

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = "/assets/5314b16f.svg";

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(79);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





function isMainClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function isRemote(href) {
  if (__WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */] == null || !href) {
    return false;
  }

  const locationHost = __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].location.host;
  const match = href.match(/^(?:\w+:)?\/\/([^/\s]+)/);
  return match && match[1] !== locationHost;
}

function isProtocol(href) {
  return href.match(/^(?:tel|mailto):/);
}

const Link = (_ref) => {
  let { href, afterClick } = _ref,
      rest = _objectWithoutProperties(_ref, ['href', 'afterClick']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({
    href: href
  }, rest.target === '_blank' && {
    rel: 'noreferrer noopener'
  }, rest, {
    onClick: event => {
      if (__WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */] == null) {
        return;
      }

      if (isRemote(href)) {
        return;
      }

      if (isProtocol(href)) {
        return;
      }

      if (isModifiedEvent(event) || !isMainClickEvent(event)) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(href);
      if (typeof afterClick === 'function') {
        afterClick(href);
      }
      event.preventDefault();
    }
  }));
};

Link.protoTypes = {
  href: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  afterClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Container__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Container__["a"]; });


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container_scss__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Container_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





const Container = ({ children }) => _jsx('div', {
  className: __WEBPACK_IMPORTED_MODULE_2__Container_scss___default.a.root
}, void 0, children);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Container_scss___default.a)(Container));

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (false && Object(__WEBPACK_IMPORTED_MODULE_0_history__["createBrowserHistory"])());

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_scss__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Layout_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Container__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_svg__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__logo_svg__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();









var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4__Footer__["a" /* default */], {});

class Layout extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    const {
      page,
      title,
      altTitle,
      altTitleTwo,
      children,
      color,
      textColor,
      isEmbed = false,
      showHeader = true
    } = this.props;

    if (isEmbed) {
      return _jsx('div', {
        className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.root
      }, void 0, _jsx('header', {}, void 0, _jsx('a', {
        href: 'https://beta.voliprav.si/',
        target: '_blank'
      }, void 0, _jsx('img', {
        className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.logo,
        src: __WEBPACK_IMPORTED_MODULE_6__logo_svg___default.a,
        alt: 'Voli prav'
      }))), _jsx('main', {
        className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.main
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5__Container__["a" /* default */], {}, void 0, children)));
    }

    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.root
    }, void 0, showHeader && _jsx(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
      page: page
    }), _jsx('main', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.main
    }, void 0, title && _jsx('header', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.subHeader,
      style: color == null ? undefined : {
        backgroundColor: color
      }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5__Container__["a" /* default */], {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.subHeaderContent
    }, void 0, _jsx('h2', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.title,
      style: textColor ? {
        color: textColor
      } : undefined
    }, void 0, title), _jsx('p', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.altTitle,
      style: textColor ? {
        color: textColor
      } : undefined
    }, void 0, altTitle), altTitleTwo && _jsx('p', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.altTitle,
      style: textColor ? {
        color: textColor
      } : undefined
    }, void 0, altTitleTwo)))), _jsx(__WEBPACK_IMPORTED_MODULE_5__Container__["a" /* default */], {}, void 0, children)), _ref);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a)(Layout));

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(82);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Layout.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Layout.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit;margin:0;padding:0}html{color:#222;font-weight:400;font-size:16px;font-family:Roboto,sans-serif;line-height:1.75;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}._1fqjz{display:-webkit-box;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}._2LtWy{background:#909dab;margin-bottom:2em;padding-bottom:calc(5px + .91667vw);padding-top:calc(5px + .91667vw)}@media(min-width:1200px){._2LtWy{padding-bottom:16px;padding-top:16px}}._2G7HN{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._3ox9c,._3ox9c a,.wnyMH{color:#fff;text-decoration:none;font-size:calc(12px + .33333vw)}@media(min-width:1200px){._3ox9c,._3ox9c a,.wnyMH{font-size:16px}}._36cKf{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}._1qVSm{display:block;margin:48px auto 0;margin:3rem auto 0;width:140px}", ""]);

// exports
exports.locals = {
	"root": "_1fqjz",
	"subHeader": "_2LtWy",
	"subHeaderContent": "_2G7HN",
	"altTitle": "_3ox9c",
	"title": "wnyMH",
	"main": "_36cKf",
	"logo": "_1qVSm"
};

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Countdown__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Link__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_scss__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Header_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_svg__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__logo_svg__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();










var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4__Countdown__["a" /* default */], {});

class Header extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      isTop: true,
      isOpen: false
    }, this.lastScrollPos = undefined, this.scroll = () => {
      const scroll = window.pageYOffset;
      if (this.lastScrollPos === scroll) {
        return;
      }

      this.lastScrollPos = scroll;
      this.setState({
        isTop: scroll < 120
      });
    }, _temp;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
    this.scroll();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  toggle(state) {
    const force = state == null;
    this.setState(({ isOpen }) => ({
      isOpen: force ? !isOpen : state
    }));
  }
  renderLinks() {
    const { page } = this.props;

    console.log('page', page);

    return [_jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: '/',
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.politics, page === 'parties' ? __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.active : null)
    }, 'home', 'Stranke'), _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: '/tematike/davki',
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(page === 'tematike' ? __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.active : null)
    }, 'tematike-davki', 'Programske tematike'), _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: 'https://www.dvk-rs.si/volisca/#/',
      target: '_blank'
    }, 'zemljevid', 'Zemljevid voli\u0161\u010D'), _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: '/vprasalnik',
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(page === 'kosningaprof' ? __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.active : null)
    }, 'vprasalnik', 'Vpra\u0161alnik'), _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: '/stranke/primerjaj',
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(page === 'compare-parties' ? __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.active : null)
    }, 'stranke/primerjaj', 'Primerjaj'), _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(page === 'prejsnje-volitve' ? __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.active : null),
      href: '/prejsnje-volitve'
    }, 'prejsnje-volitve', 'Prej\u0161nje volitve')];
  }
  render() {
    const { isTop, isOpen } = this.state;
    return _jsx('div', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.fake
    }), _jsx('header', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.root, isOpen && __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.isOpen, !isTop && __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.sticky)
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__Container__["a" /* default */], {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.wrap
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.leftWrap
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: '/'
    }, void 0, _jsx('img', {
      src: __WEBPACK_IMPORTED_MODULE_7__logo_svg___default.a,
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.logo
    })), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.countdown)
    }, void 0, _ref)), _jsx('nav', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.desktopNav)
    }, void 0, _jsx('button', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.hamburgerBtn, isOpen && __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.isOpen),
      onClick: () => this.toggle()
    }, void 0, _jsx('i', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.hamburger
    }), ' Meni'), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.links
    }, void 0, this.renderLinks()))))), _jsx('nav', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.mobileNav, !isTop && __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.sticky, isOpen && __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.isOpen)
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.links
    }, void 0, this.renderLinks())));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a)(Header));

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(85);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Container.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Container.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "._1XpNO{-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:auto;margin-right:auto;max-width:1200px;padding-left:15px;padding-right:15px;width:100%}", ""]);

// exports
exports.locals = {
	"root": "_1XpNO"
};

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_countdown_now__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_countdown_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_countdown_now__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Countdown_scss__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Countdown_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Countdown_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var _ref = _jsx('div', {}, void 0, 'Dr\u017Eavnozborske volitve 2022');

const Countdown = () => _jsx(__WEBPACK_IMPORTED_MODULE_2_react_countdown_now___default.a, {
  date: new Date('Sunday, April 24, 2022 7:00:00 AM'),
  renderer: ({ days, completed }) => {
    if (completed) {
      // Render a completed state
      return _ref;
    }
    let out = '';
    if (days > 0) {
      out = `${days + 1} dni do volitev`;
    }

    return _jsx('span', {}, void 0, out);
  }
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Countdown_scss___default.a)(Countdown));

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(88);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Countdown.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Countdown.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(90);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Header.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Header.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "._14IZ-{background:#fff;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);left:0;position:fixed;top:0;-webkit-transition:background-color .3s,-webkit-box-shadow .25s,-webkit-transform .25s;transition:background-color .3s,-webkit-box-shadow .25s,-webkit-transform .25s;-o-transition:background-color .3s,box-shadow .25s,transform .25s;transition:background-color .3s,box-shadow .25s,transform .25s;transition:background-color .3s,box-shadow .25s,transform .25s,-webkit-box-shadow .25s,-webkit-transform .25s;width:100%;z-index:10}._14IZ-._1Epgq{background:hsla(0,0%,100%,.9);-webkit-box-shadow:none;box-shadow:none}._1v_7G,._3A-Ww,._3SOFP{-webkit-transition:-webkit-transform .25s;transition:-webkit-transform .25s;-o-transition:transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s}._3Ep1Z{-webkit-transition:opacity .25s;-o-transition:opacity .25s;transition:opacity .25s}._3zCJn,._302yF{height:calc(8.88889px + 9.25926vw)}@media(max-width:767px){._3zCJn,._302yF{height:80px}}@media(min-width:1200px){._3zCJn,._302yF{height:120px}}._2HiBp{background:hsla(0,0%,100%,.9);-webkit-box-shadow:0 2px 10px rgba(0,0,0,.12);box-shadow:0 2px 10px rgba(0,0,0,.12);-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px)}._2HiBp ._3Ep1Z{opacity:0}._2HiBp ._3SOFP{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px)}._2HiBp ._1v_7G,._2HiBp ._3A-Ww{-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px)}@media(min-width:1200px){._2HiBp{-webkit-transform:translateY(-60px);-ms-transform:translateY(-60px);transform:translateY(-60px)}._2HiBp ._3Ep1Z{opacity:0}._2HiBp ._3SOFP{-webkit-transform:translateY(35px);-ms-transform:translateY(35px);transform:translateY(35px)}._2HiBp ._1v_7G{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px)}}._1vXac ._1v_7G{display:none}@media(min-width:768px){._1vXac ._1v_7G{display:block}}._3cNHi{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:hsla(0,0%,100%,.9);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);display:-webkit-box;display:-ms-flexbox;display:flex;bottom:-30px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;left:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;position:fixed;-webkit-transition:-webkit-transform .4s ease-in-out;transition:-webkit-transform .4s ease-in-out;-o-transition:transform .4s ease-in-out;transition:transform .4s ease-in-out;transition:transform .4s ease-in-out,-webkit-transform .4s ease-in-out;-webkit-transform:translateY(-140%);-ms-transform:translateY(-140%);transform:translateY(-140%);width:100%;z-index:9;top:calc(8.88889px + 9.25926vw)}._3cNHi._1Epgq{pointer-events:auto;-webkit-transform:none;-ms-transform:none;transform:none}._3cNHi._2HiBp._1Epgq{-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px)}._3cNHi ._1v_7G{text-align:center;padding-bottom:30px}._3cNHi ._1v_7G a{background-position:0 1.7em;font-size:32px;font-size:2rem;margin:0 auto;display:table;padding:.3em 0}@media(max-width:767px){._3cNHi{top:80px}}@media(min-width:1200px){._3cNHi{top:120px}}._3A-Ww{border:none;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:16px;font-size:1rem;outline:none}@media(min-width:768px){._3A-Ww,._3cNHi{display:none}}._3VBnB{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:16px;width:16px;margin-right:8px;margin-top:-2px;vertical-align:middle}._3VBnB:after,._3VBnB:before{display:block;content:\"\";height:2px;background:#777;-webkit-transition:-webkit-transform .4s,-webkit-filter .4s;transition:-webkit-transform .4s,-webkit-filter .4s;-o-transition:transform .4s,filter .4s;transition:transform .4s,filter .4s;transition:transform .4s,filter .4s,-webkit-transform .4s,-webkit-filter .4s;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;width:100%}._3VBnB:before{filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"0\" /><feOffset dx=\"1\" dy=\"8\" result=\"offsetblur\" /><feFlood flood-color=\"rgba(119,119,119,1)\" /><feComposite in2=\"offsetblur\" operator=\"in\" /><feMerge><feMergeNode /><feMergeNode in=\"SourceGraphic\" /></feMerge></filter></svg>#filter');-webkit-filter:drop-shadow(0 7px 0 #777);filter:drop-shadow(0 7px 0 #777)}._1Epgq ._3VBnB:before{filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"0\" /><feOffset dx=\"1\" dy=\"15\" result=\"offsetblur\" /><feFlood flood-color=\"rgba(255,255,255,0)\" /><feComposite in2=\"offsetblur\" operator=\"in\" /><feMerge><feMergeNode /><feMergeNode in=\"SourceGraphic\" /></feMerge></filter></svg>#filter');-webkit-filter:drop-shadow(0 14px 0 hsla(0,0%,100%,0));filter:drop-shadow(0 14px 0 rgba(255,255,255,0));-webkit-transform:translateY(7px) rotate(225deg);-ms-transform:translateY(7px) rotate(225deg);transform:translateY(7px) rotate(225deg)}._1Epgq ._3VBnB:after{-webkit-transform:translateY(-7px) rotate(-225deg);-ms-transform:translateY(-7px) rotate(-225deg);transform:translateY(-7px) rotate(-225deg)}._302yF{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._3SOFP{position:relative}._1AtfL{width:90px}@media(min-width:370px){._1AtfL{width:120px}}._3Ep1Z{bottom:-5px;font-size:9px;opacity:.7;position:absolute;left:0;white-space:nowrap}@media(min-width:370px){._3Ep1Z{font-size:11px;bottom:-8px;left:auto;right:0}}._1v_7G a{display:inline-block;background-image:-webkit-gradient(linear,left bottom,left top,from(#555),to(#555));background-image:-webkit-linear-gradient(bottom,#555,#555);background-image:-o-linear-gradient(bottom,#555,#555);background-image:linear-gradient(0deg,#555,#555);background-position:0 calc(2em + 4px);background-repeat:no-repeat;background-size:100% 1px;color:#0a2645;margin-left:1.5em;padding:1em 0;-webkit-transition:background-size .25s,background-position .25s;-o-transition:background-size .25s,background-position .25s;transition:background-size .25s,background-position .25s;text-decoration:none;text-shadow:1px 1px #fff,-1px 1px #fff,0 -1px #fff}@media(max-width:510px){._1v_7G a{font-size:.9em;margin-left:.7em;padding:.8em 0}}._1v_7G a:not(._1Z5Aq){background-size:0 1px;background-position-x:50%;opacity:.5}._1v_7G a._1Z5Aq{cursor:default}._1v_7G a:last-child:first-letter,._2M3Iw:first-letter{text-transform:uppercase}@media(max-width:510px){.lfe4P{display:none}}._3Ep1Z{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}", ""]);

// exports
exports.locals = {
	"root": "_14IZ-",
	"isOpen": "_1Epgq",
	"hamburgerBtn": "_3A-Ww",
	"leftWrap": "_3SOFP",
	"links": "_1v_7G",
	"countdown": "_3Ep1Z",
	"fake": "_3zCJn",
	"wrap": "_302yF",
	"sticky": "_2HiBp",
	"desktopNav": "_1vXac",
	"mobileNav": "_3cNHi",
	"hamburger": "_3VBnB",
	"logo": "_1AtfL",
	"active": "_1Z5Aq",
	"politics": "_2M3Iw",
	"politicsPrefix": "lfe4P"
};

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Footer__["a"]; });


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_scss__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Container_Container__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_svg__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__logo_svg__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();








const Footer = () => _jsx('footer', {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.footer
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Container_Container__["a" /* default */], {}, void 0, _jsx('div', {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.wrap
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
  href: '/'
}, void 0, _jsx('img', {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.logo,
  src: __WEBPACK_IMPORTED_MODULE_5__logo_svg___default.a,
  alt: 'Logo'
})), _jsx('nav', {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.nav
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.link,
  href: '/o-nas'
}, void 0, 'O nas'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.link,
  href: '/prejsnje-volitve'
}, void 0, 'Pre\u0161nje volitve'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.link,
  target: '_blank',
  href: 'https://github.com/sraka1/voliprav-web'
}, void 0, 'GitHub')))));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a)(Footer));

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(94);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Footer.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Footer.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "._2nhzB{background:#fff;border-top:1px solid #efefef;color:#313131;opacity:.8;margin-top:48px;margin-top:3rem}._3aBnd{padding:1em 0}@media(min-width:578px){._3aBnd{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}}@media(min-width:578px){._3aBnd,._36Xgk{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}}.NoJN3{display:block;color:inherit;text-decoration:none}@media(min-width:578px){.NoJN3{padding-left:1em}}._1W3uT{display:inherit;width:90px}@media(min-width:370px){._1W3uT{width:120px}}", ""]);

// exports
exports.locals = {
	"footer": "_2nhzB",
	"wrap": "_3aBnd",
	"nav": "_36Xgk",
	"link": "NoJN3",
	"logo": "_1W3uT"
};

/***/ }),

/***/ 95:
/***/ (function(module, exports) {



// const URL = 'https://assets.voliprav.si';
// const URL = 'http://localhost:3000';
// Temporary, until DNS propagates
const URL = 'https://beta.voliprav.si';

exports.getAssetUrl = (isJpg = false, ...assets) => {
  return `${URL}/${assets.join('/')}.${isJpg ? 'jpg' : 'png'}`;
};

exports.candidateImage = slug => {
  return `https://kjosturett.imgix.net/${slug}.jpg?fit=facearea&facepad=2.0&w=500&h=500`;
};

exports.pleasantUrl = url => {
  return url.replace(/^(https?:)?\/\/(www\.)?/i, '').replace(/\/$/, '');
};

exports.encodeAnswersToken = answers => {
  const chunkLength = Math.floor(answers.length / 3);

  const first = parseInt(answers.slice(0, chunkLength).join(''), 10).toString(36);
  const second = parseInt(answers.slice(chunkLength, chunkLength * 2).join(''), 10).toString(36);
  const third = parseInt(answers.slice(chunkLength * 2, answers.length).join(''), 10).toString(36);

  return `${first}:${second}:${third}`;
};

exports.decodeAnswersToken = token => {
  const decode = part => parseInt(part, 36).toString().split('');
  return token.split(':').map(decode).reduce((a, b) => a.concat(b), []);
};

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports = [{"letter":"DOM","url":"dom","name":"Domovinska liga","nameDeflected":"Domovinske lige","website":"https://domovinskaliga.si","leader":"mag. Bernard Brščič","leaderTitle":"Predsednik","reply":"6666666666666666666666666666666666666666","color":"#03A65E","textColor":"#FFFFFF"},{"letter":"DeSUS","url":"desus","name":"Demokratska Stranka Upokojencev Slovenije","nameDeflected":"DeSUS","website":"https://desus.si/","leader":"Ljubo Jasnič","leaderTitle":"Predsednik","reply":"6666666666666666666666666666666666666666","color":"#A0C539","textColor":"#FFFFFF"},{"letter":"GS","url":"gibanje-svoboda","name":"Gibanje Svoboda","nameDeflected":"Gibanje Svoboda","website":"https://gibanjesvoboda.si/","leader":"Robert Golob","leaderTitle":"Predsednik","reply":"6666666666666666666666666666666666666666","color":"#005EA4"},{"letter":"L","url":"levica","name":"Levica","nameDeflected":"Levice","website":"https://www.levica.si","leader":"Luka Mesec","leaderTitle":"Koordinator","reply":"6666666666666666666666666666666666666666","color":"#E82C26","textColor":"#FFFFFF"},{"letter":"LBP","url":"lbp","name":"Lista Borisa Popoviča - Digitalizirajmo Slovenijo","nameDeflected":"Liste Borisa Popoviča - Digitalizirajmo Slovenijo","website":"","leader":"Boris Popovič","leaderTitle":"Predsednik","reply":"6666666666666666666666666666666666666666","color":"#005AAB","textColor":"#FFFFFF"},{"letter":"LL","url":"ljudska-lista","name":"Ljudska lista gibanja Zdrava družba","nameDeflected":"Ljudske liste gibanja Zdrava družba","website":"https://www.ljudskalista.si/","leader":"Karel Lipič","leaderTitle":"Vodja volilnega štaba","reply":"6666666666666666666666666666666666666666","color":"#005EA4"},{"letter":"LMŠ","url":"lms","name":"Lista Marjana Šarca","nameDeflected":"Liste Marjana Šarca","website":"https://www.strankalms.si","leader":"Marjan Šarec","leaderTitle":"Predsednik","reply":"6666666666666666666666666666666666666666","color":"#005AAB","textColor":"#FFFFFF"},{"letter":"ND","url":"nasa-dezela","name":"Naša Dežela","nameDeflected":"stranke Naša Dežela","website":"https://nasadezela.si/","leader":"Aleksandra Pivec","leaderTitle":"Predsednica","reply":"6666666666666666666666666666666666666666","color":"#65B32E","textColor":"#FFFFFF"},{"letter":"NP-DD","url":"nasa-prihodnost-dobra-drzava","name":"Naša prihodnost in Dobra država","nameDeflected":"Naše prihodnosti in Dobre države","website":"https://nasaprihodnost.si/","websiteTwo":"https://www.dobradrzava.si/","leader":"Ivan Gale (Naša prihodnost) in Smiljan Mekicar (Dobra država)","leaderTitle":"Predsednika","reply":"6666666666666666666666666666666666666666","color":"#00699A","textColor":"#FFFFFF"},{"letter":"NSi","url":"nsi","name":"Nova Slovenija - Krščanski demokrati","nameDeflected":"stranke Nova Slovenija","website":"https://nsi.si","leader":"Matej Tonin","leaderTitle":"Predsednik","reply":"6666666666666666666666666666666666666666","color":"#009AC7","textColor":"#FFFFFF"},{"letter":"P","url":"piratska-stranka","name":"Piratska Stranka","nameDeflected":"Piratske Stranke","website":"https://piratskastranka.si","leader":"Boštjan Tavčar","leaderTitle":"Predsednik","reply":"6666666666666666666666666666666666666666","color":"#000000"},{"letter":"PoS","url":"povezimo-slovenijo","name":"Povežimo Slovenijo (Konkretno, Zeleni, SLS, NLS, NS)","nameDeflected":"gibanja Povežimo Slovenijo","website":"https://povezimoslovenijo.si/","leader":"Nada Pavšer","leaderTitle":"Koordinatorka","reply":"6666666666666666666666666666666666666666","color":"#002C70","textColor":"#FFFFFF"},{"letter":"R","url":"resnica","name":"Resni.ca","nameDeflected":"stranke Resni.ca","website":"https://stranka-resnica.si","leader":"Zoran Stevanović","leaderTitle":"Predsednik","reply":"6666666666666666666666666666666666666666","color":"#0054A6","textColor":"#FFFFFF"},{"letter":"SAB","url":"sab","name":"Stranka Alenke Bratušek","nameDeflected":"Stranke Alenke Bratušek","website":"https://sab.si","leader":"Alenka Bratušek","leaderTitle":"Predsednica","reply":"6666666666666666666666666666666666666666","color":"#ED1941","textColor":"#FFFFFF"},{"letter":"SD","url":"sd","name":"Socialni Demokrati","nameDeflected":"Socialnih Demokratov","website":"https://socialnidemokrati.si/","leader":"Tanja Fajon","leaderTitle":"Predsednica","reply":"6666666666666666666666666666666666666666","color":"#E13439","textColor":"#FFFFFF"},{"letter":"SDS","url":"sds","name":"Slovenska Demokratska Stranka","nameDeflected":"Slovenske Demokratske Stranke","website":"https://www.sds.si","leader":"Ivan Janez Janša","leaderTitle":"Predsednik","reply":"6666666666666666666666666666666666666666","color":"#FFE800","textColor":"#313131"},{"letter":"SNS","url":"sns","name":"Slovenska Nacionalna Stranka","nameDeflected":"Slovenske Nacionalne Stranke","website":"http://sns.si/","leader":"Zmago Jelinčič Plemeniti","leaderTitle":"Predsednik","reply":"6666666666666666666666666666666666666666","color":"#FEE520","textColor":"#313131"},{"letter":"VESNA","url":"vesna","name":"VESNA - zelena stranka","nameDeflected":"stranke VESNA - zelene stranke","website":"https://www.vesnazelenastranka.si","leader":"Uroš Macerl in Urša Zgojznik","leaderTitle":"Sopredsednika","reply":"6666666666666666666666666666666666666666","color":"#03A65E","textColor":"#FFFFFF"},{"letter":"ZLS","url":"zls","name":"Za ljudstvo Slovenije","nameDeflected":"Za ljudstvo Slovenije","website":"https://www.zaljudstvoslovenije.si","leader":"Anica Bidar","leaderTitle":"Predsednica","reply":"6666666666666666666666666666666666666666","color":"#03A65E","textColor":"#FFFFFF"},{"letter":"ZOS","url":"zos","name":"Zavezništvo Osvobodimo Slovenijo","nameDeflected":"Zavezništva Osvobodimo Slovenijo","website":"https://osvobodimo.si","leader":"Andrej Šiško (Gibanje zedinjena Slovenija), Ludvik Poljanec (Stara pravda stranka prava), Aleksander Kamenik (Stranka Aleksandra Kamenika), Janko Veber (Sloga), Miha Majc (Stranka Slovenskega naroda) in Klemen Piber (Slovenska praanarhistična stranka)","leaderShort":"Andrej Šiško, Ludvik Poljanec, Aleksander Kamenik, Janko Veber, Miha Majc, Klemen Piber","leaderTitle":"Predsedniki združenih strank","reply":"6666666666666666666666666666666666666666","color":"#03A65E","textColor":"#FFFFFF"}]

/***/ })

};;
//# sourceMappingURL=frontpage.js.map