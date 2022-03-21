"use strict";
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("whatwg-fetch");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_deep_force_update_1 = require("react-deep-force-update");
var query_string_1 = require("query-string");
var history_1 = require("history");
var App_1 = require("./components/App");
var createFetch_1 = require("./createFetch");
var configureStore_1 = require("./store/configureStore");
var history_2 = require("./history");
var DOMUtils_1 = require("./DOMUtils");
var router_1 = require("./router");
/* eslint-disable global-require */
var customFetch = (0, createFetch_1["default"])(self.fetch, {
    baseUrl: window.App.apiUrl
});
// Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html
var context = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: function () {
        var styles = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            styles[_i] = arguments[_i];
        }
        // eslint-disable-next-line no-underscore-dangle
        var removeCss = styles.map(function (x) { return x._insertCss(); });
        return function () {
            removeCss.forEach(function (f) { return f(); });
        };
    },
    // Universal HTTP client
    fetch: customFetch,
    // Initialize a new Redux store
    // http://redux.js.org/docs/basics/UsageWithReact.html
    store: (0, configureStore_1["default"])(window.App.state, { history: history_2["default"], fetch: customFetch }),
    storeSubscription: null
};
// Switch off the native scroll restoration behavior and handle it manually
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
var scrollPositionsHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
}
var onRenderComplete = function initialRenderComplete() {
    var elem = document.getElementById('css');
    if (elem)
        elem.parentNode.removeChild(elem);
    onRenderComplete = function renderComplete(route, location) {
        document.title = route.title;
        (0, DOMUtils_1.updateMeta)('description', route.description);
        // Update necessary tags in <head> at runtime here, ie:
        // updateMeta('keywords', route.keywords);
        // updateCustomMeta('og:url', route.canonicalUrl);
        // updateCustomMeta('og:image', route.imageUrl);
        // updateLink('canonical', route.canonicalUrl);
        // etc.
        var scrollX = 0;
        var scrollY = 0;
        var pos = scrollPositionsHistory[location.key];
        if (pos) {
            scrollX = pos.scrollX;
            scrollY = pos.scrollY;
        }
        else {
            var targetHash = location.hash.substr(1);
            if (targetHash) {
                var target = document.getElementById(targetHash);
                if (target) {
                    scrollY = window.pageYOffset + target.getBoundingClientRect().top;
                }
            }
        }
        // Restore the scroll position if it was saved into the state
        // or scroll to the given #hash anchor
        // or scroll to top of the page
        window.scrollTo(scrollX, scrollY);
        // Google Analytics tracking. Don't send 'pageview' event after
        // the initial rendering, as it was already sent
        if (window.ga && history_1.createPath) {
            window.ga('send', 'pageview', (0, history_1.createPath)(location));
        }
    };
};
var container = document.getElementById('app');
var appInstance;
var currentLocation = history_2["default"].location;
// Re-render the app when window.location changes
function onLocationChange(location, action) {
    return __awaiter(this, void 0, void 0, function () {
        var route_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Remember the latest scroll position for the previous location
                    scrollPositionsHistory[currentLocation.key] = {
                        scrollX: window.pageXOffset,
                        scrollY: window.pageYOffset
                    };
                    // Delete stored scroll position for next page if any
                    if (action === 'PUSH') {
                        delete scrollPositionsHistory[location.key];
                    }
                    currentLocation = location;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, router_1["default"].resolve(__assign(__assign({}, context), { path: location.pathname, query: query_string_1["default"].parse(location.search) }))];
                case 2:
                    route_1 = _a.sent();
                    // Prevent multiple page renders during the routing process
                    if (currentLocation.key !== location.key) {
                        return [2 /*return*/];
                    }
                    if (route_1.redirect) {
                        history_2["default"].replace(route_1.redirect);
                        return [2 /*return*/];
                    }
                    appInstance = react_dom_1["default"].render(<App_1["default"] context={context}>{route_1.component}</App_1["default"]>, container, function () { return onRenderComplete(route_1, location); });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    if (__DEV__) {
                        throw error_1;
                    }
                    console.error(error_1);
                    // Do a full page reload if error occurs during client-side navigation
                    if (action && currentLocation.key === location.key) {
                        window.location.reload();
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/mjackson/history#readme
history_2["default"].listen(onLocationChange);
onLocationChange(currentLocation);
// Enable Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept('./router', function () {
        if (appInstance) {
            // Force-update the whole tree, including components that refuse to update
            (0, react_deep_force_update_1["default"])(appInstance);
        }
        onLocationChange(currentLocation);
    });
}
