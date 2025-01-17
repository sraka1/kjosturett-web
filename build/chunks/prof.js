require("source-map-support").install();
exports.ids = [4];
exports.modules = {

/***/ 100:
/***/ (function(module, exports) {

module.exports = {"default":"6","textMap":{"1":"Se ne strinjam","2":"Se deloma ne strinjam","3":"Nevtralno","4":"Se deloma strinjam","5":"Se strinjam","6":"Brez odgovora"}}

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_query_string__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__KosningaProf_scss__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__KosningaProf_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__KosningaProf_scss__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








const answerMap = {
  1: 'Se ne strinjamo',
  2: 'Se deloma ne strinjamo',
  3: 'Nevtralni',
  4: 'Se deloma strinjamo',
  5: 'Se strinjamo',
  6: 'Ne želimo odgovoriti'
};
const areYouSure = 'Ste prepričani, da želite zapustiti stran? Vaši odgovori bodo izgubljeni.';
const defaultAnswer = '3';

var _ref = _jsx('h3', {}, void 0, 'Breyta um mynd');

var _ref2 = _jsx('p', {}, void 0, 'H\xE9rna getur \xFE\xFA hla\xF0i\xF0 upp n\xFDrri mynd af \xFE\xE9r sem ver\xF0ur notu\xF0 \xED kosningapr\xF3finu');

var _ref3 = _jsx('input', {
  type: 'file',
  name: 'avatar'
});

class UploadCandidateImage extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  render() {
    const { token, uploadSuccess, uploadFailure } = this.props;

    if (uploadSuccess) {
      return _jsx('p', {
        className: __WEBPACK_IMPORTED_MODULE_5__KosningaProf_scss___default.a.uploadSuccess
      }, void 0, 'Innsending \xE1 mynd t\xF3kst!');
    }
    if (uploadFailure) {
      return _jsx('p', {
        className: __WEBPACK_IMPORTED_MODULE_5__KosningaProf_scss___default.a.uploadFailure
      }, void 0, 'Innsending \xE1 mynd t\xF3kst ekki.');
    }
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__KosningaProf_scss___default.a.uploadForm
    }, void 0, _ref, _ref2, _jsx('form', {
      id: 'uploadForm',
      action: `/candidate/avatar?token=${token}`,
      method: 'post',
      encType: 'multipart/form-data'
    }, void 0, _ref3, _jsx('input', {
      type: 'hidden',
      name: 'token',
      value: token
    }), _jsx('input', {
      type: 'submit',
      value: 'Senda inn mynd',
      className: __WEBPACK_IMPORTED_MODULE_5__KosningaProf_scss___default.a.uploadSubmit
    })));
  }
}

var _ref4 = _jsx('h3', {}, void 0, 'Hvala za sodelovanje!');

var _ref5 = _jsx('h1', {}, void 0, 'Vpra\u0161alnik (za stranke) - Voli prav 2022');

var _ref6 = _jsx('p', {}, void 0, 'Odgovori na vpra\u0161alnik bodo vidni v roku nekaj ur po oddaji. Zadnji odgovori prepi\u0161ejo prej\u0161nje.');

class Kosningaprof extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      token: null,
      party: null,
      finished: false,
      answers: this.props.questions.reduce((all, { id }) => {
        // eslint-disable-next-line
        all[id] = defaultAnswer;
        return all;
      }, {})
    };

    this.onChange = id => ({ target }) => {
      this.setState(({ answers, started }) => {
        if (!started) {
          window.onbeforeunload = event => {
            // eslint-disable-next-line
            event.returnValue = areYouSure;
            return areYouSure;
          };
        }
        return {
          started: true,
          answers: _extends({}, answers, {
            [id]: target.value
          })
        };
      });
    };

    this.onSend = this.onSend.bind(this);
  }
  componentDidMount() {
    const { token, party } = __WEBPACK_IMPORTED_MODULE_2_query_string___default.a.parse(window.location.search);
    if (!token) {
      window.location = '/';
    }
    // eslint-disable-next-line
    this.setState({ token, party });
  }
  componentWillUnmount() {
    window.onbeforeunload = null;
  }

  onSend() {
    var _this = this;

    return _asyncToGenerator(function* () {
      console.log('this is', _this);
      const { answers, token, party } = _this.state;

      yield _this.context.fetch(`/konnun/replies?timestamp=${Date.now()}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          party,
          token,
          reply: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["encodeAnswersToken"])(Object.keys(answers).map(function (x) {
            return answers[x];
          }))
        })
      });

      _this.setState({ finished: true });
    })();
  }
  render() {
    const { questions, token, uploadSuccess, uploadFailure } = this.props;
    const { answers, started, finished, party } = this.state;
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__KosningaProf_scss___default.a.root
    }, void 0, !finished && false && _jsx(UploadCandidateImage, {
      token: token,
      uploadSuccess: uploadSuccess,
      uploadFailure: uploadFailure
    }), finished && _ref4, !finished && _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__KosningaProf_scss___default.a.intro
    }, void 0, _ref5, _jsx('h3', {}, void 0, '\u0160ifra stranke: ', _jsx('code', {}, void 0, party)), _ref6), !finished && questions.map(({ question, id }) => _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_5__KosningaProf_scss___default.a.question
    }, id, _jsx('h3', {}, void 0, id, '. ', question), Object.keys(answerMap).map(value => {
      const name = `${id}_${value}`;
      return _jsx('div', {}, value, _jsx('input', {
        id: name,
        name: name,
        value: value,
        type: 'radio',
        checked: answers[id] === value,
        onChange: this.onChange(id)
      }), _jsx('label', {
        htmlFor: name
      }, void 0, answerMap[value]));
    }))), started && !finished && _jsx('button', {
      onClick: this.onSend
    }, void 0, 'Po\u0161lji'));
  }
}

Kosningaprof.contextTypes = {
  fetch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__KosningaProf_scss___default.a)(Kosningaprof));

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(185);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./KosningaProf.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./KosningaProf.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "._3ajKx{max-width:500px;margin:48px auto 64px;margin:3rem auto 4rem}._3ajKx h3{font-family:Lora,serif;margin-bottom:1em}._3ajKx input{margin-right:15px}._3ajKx button{background:#353535;color:#fff;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:1em 1.4em;margin-top:48px;margin-top:3rem}._1yZep+._1yZep{padding-top:64px;padding-top:4rem}._88k0X{margin-bottom:3em}._1tWE9{margin-bottom:6em}._3Q2na{background:#353535;color:#fff;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:1em 1.4em;margin-top:48px;margin-top:3rem}._2dvIl{background:#339067}._2dvIl,._2Rn8t{padding:.8em 3em;margin-bottom:2em;text-align:center;font-size:19.2px;font-size:1.2rem;border-radius:4px;color:#fff}._2Rn8t{background:#903333}", ""]);

// exports
exports.locals = {
	"root": "_3ajKx",
	"question": "_1yZep",
	"intro": "_88k0X",
	"uploadForm": "_1tWE9",
	"uploadSubmit": "_3Q2na",
	"uploadSuccess": "_2dvIl",
	"uploadFailure": "_2Rn8t"
};

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = "/assets/5314b16f.svg";

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(81);
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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Container__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Container__["a"]; });


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container_scss__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Container_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





const Container = ({ children }) => _jsx('div', {
  className: __WEBPACK_IMPORTED_MODULE_2__Container_scss___default.a.root
}, void 0, children);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Container_scss___default.a)(Container));

/***/ }),

/***/ 81:
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

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_scss__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Layout_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Container__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_svg__ = __webpack_require__(77);
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
        href: 'https://voliprav.si/',
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

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(84);
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

/***/ 84:
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

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Countdown__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Link__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_scss__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Header_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_svg__ = __webpack_require__(77);
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

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(87);
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

/***/ 87:
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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_countdown_now__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_countdown_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_countdown_now__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Countdown_scss__ = __webpack_require__(89);
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

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__KosningaProf__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_poll_questions_json__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_poll_questions_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__data_poll_questions_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_poll_answers_json__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_poll_answers_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__data_poll_answers_json__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();







/* harmony default export */ __webpack_exports__["default"] = (({ params, url, query }) => {
  const { token, upload } = query;

  return {
    chunks: ['prof'],
    title: `Voli prav - Vprašalnik`,
    path: url,
    component: _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
      page: 'prof',
      showHeader: false
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__KosningaProf__["a" /* default */], {
      answers: __WEBPACK_IMPORTED_MODULE_4__data_poll_answers_json___default.a,
      questions: __WEBPACK_IMPORTED_MODULE_3__data_poll_questions_json___default.a,
      token: token,
      uploadSuccess: upload === 'success',
      uploadFailure: upload === 'failure'
    }))
  };
});

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(92);
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

/***/ 92:
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

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Footer__["a"]; });


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_scss__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Container_Container__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_svg__ = __webpack_require__(77);
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
}, void 0, 'Prej\u0161nje volitve'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.link,
  target: '_blank',
  href: 'https://github.com/sraka1/voliprav-web'
}, void 0, 'GitHub')))));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a)(Footer));

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(96);
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

/***/ 96:
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

/***/ 97:
/***/ (function(module, exports) {



// const URL = 'https://assets.voliprav.si';
// const URL = 'http://localhost:3000';
// Temporary, until DNS propagates
const URL = 'https://voliprav.si';

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

/***/ 99:
/***/ (function(module, exports) {

module.exports = [{"id":1,"question":"Vsi prebivalci Slovenije bi morali imeti dostop do primarnega zdravstva v domačem kraju oz. bližnji okolici."},{"id":2,"question":"Dopustiti je treba povečano zasebno delovanje v zdravstvenem sistemu."},{"id":3,"question":"Širitev javnega potniškega prometa bistveno pripomore k povezljivosti Slovenije in se mora izvesti prioritetno."},{"id":4,"question":"Slovenija naj v sodelovanju z mednarodnimi organizacijami sprejme več prosilcev za mednarodno zaščito."},{"id":5,"question":"Štipendiranje študentov naj bo v višjih zneskih in dostopnejše vsem študentom."},{"id":6,"question":"Drugi in tretji pokojninski steber (dodatno pokojninsko zavarovanje in zasebni pokojninski skladi) bi morala imeti vidnejšo vlogo v pokojninskem sistemu."},{"id":7,"question":"Prejemke za invalidsko pokojnino je treba povečati tako, da bodo v vsakem trenutku ustrezali vsaj minimalni plači."},{"id":8,"question":"Prejemke za starostno pokojnino je treba povečati tako, da bodo v vsakem trenutku ustrezali vsaj minimalni plači."},{"id":9,"question":"Država naj uvede univerzalni temeljni dohodek (UTD)."},{"id":10,"question":"Država naj stori več glede decentralizacije Slovenije."},{"id":11,"question":"Pokrajine naj se uvedejo do konca prihajajočega mandata."},{"id":12,"question":"Nadzor in sankcije na področju koruptivnih dejanj je treba povečati."},{"id":13,"question":"Povečati je treba prispevek Slovenije k razvojnemu sodelovanju in dejavnostim pomoči v revnejših državah sveta."},{"id":14,"question":"Zveza NATO naj ima vidno vlogo pri zagotavljanju teritorialne celovitosti Slovenije."},{"id":15,"question":"Vlada mora varovati položaj verskih ustanov v slovenski družbi s pomočjo javnega financiranja."},{"id":16,"question":"Kazni za spolno in družinsko nasilje bi bilo treba povečati."},{"id":17,"question":"Za vlado naj bo pomembno, da s finančnimi spodbudami reši težave slovenskih kmetovalcev."},{"id":18,"question":"Slovenija naj podpre globlje in tesnejše povezovanje v sklopu Evropske Unije."},{"id":19,"question":"Država naj stori več za spodbujanje vseživljenjskega izobraževanja."},{"id":20,"question":"V prihajajočem volilnem mandatu je treba legalizirati uporabo konoplje."},{"id":21,"question":"Vlada bi morala globlje poseči v stanovanjski trg z namenom regulacije rasti cen nepremičnin."},{"id":22,"question":"Naložbe v infrastrukturo (npr. v promet, telekomunikacije in zdravstveni sistem) naj imajo prednost pred odplačilom dolga državne blagajne."},{"id":23,"question":"Država naj ohrani lastništvo v sistemsko pomembnih bančnih ustanovah."},{"id":24,"question":"Znižati je treba prispevke na plače, ki jih podjetja plačujejo državi."},{"id":25,"question":"Davke na visoke dohodke je treba dvigniti."},{"id":26,"question":"Država naj poenostavi postopke za zaposlitev visoko-kvalificirane delovne sile iz tretjih držav."},{"id":27,"question":"Država naj ohrani deleže v gospodarskih subjektih, ki so vitalnega državnega pomena."},{"id":28,"question":"Slovenija naj bo prehrambeno samooskrbna."},{"id":29,"question":"Država naj odpravi omejitve delovnega časa ob nedeljah."},{"id":30,"question":"Država si naj prizadeva za izboljšanje zmogljivosti in dostopa do turističnih znamenitosti v njeni lasti ali upravljanju."},{"id":31,"question":"Država naj proda svoj delež v energetskih podjetjih."},{"id":32,"question":"Interesi varovanja narave bi morali prevladati nad finančnimi interesi pri odločanju vlade glede ustvarjanja novih delovnih mest."},{"id":33,"question":"Vlada bi morala upoštevati priporočila epidemiološke stroke glede nalezljivih bolezni, tudi kadar ta negativno vplivajo na gospodarstvo."},{"id":34,"question":"Slovenija naj poveča investicije v digitalno preobrazbo družbe in države ter obenem skuša privabiti tehnološka podjetja."},{"id":35,"question":"Pravica do dostopa do interneta naj bo zapisana v ustavi."},{"id":36,"question":"Država naj ustanovi državnega letalskega prevoznika."},{"id":37,"question":"Država naj poenostavi in pohitri postopke prostorskega umeščanja za ključne državne projekte."},{"id":38,"question":"Država naj nadaljuje z vlaganjem v izgradnjo 2. bloka jedrske elektrarne Krško."},{"id":39,"question":"Država naj pospeši časovnico za prepoved prve registracije vozil z notranjim izgorevanjem."},{"id":40,"question":"Država naj aktivno spodbuja krožno gospodarstvo z namenom zmanjšanja količine odpadkov in ogljičnega odtisa Slovenije."}]

/***/ })

};;
//# sourceMappingURL=prof.js.map