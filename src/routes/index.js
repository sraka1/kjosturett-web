"use strict";
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
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
/* eslint-disable global-require */
// The top-level (parent) route
var routes = {
    path: '/',
    // Keep in mind, routes are evaluated in order
    children: [
        {
            path: '/',
            load: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: 'frontpage' */ './frontpage'); }); }
        },
        {
            path: '/4e94afa38918c6f2dcc12fd8a04d3972',
            load: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: 'prof' */ './prof'); }); }
        },
        {
            path: '/embed',
            children: [
                {
                    path: '/kosningaprof',
                    children: [
                        {
                            path: '',
                            load: function () {
                                return Promise.resolve().then(function () { return require(
                                /* webpackChunkName: 'embed-prof' */ './embed/kosningaprof'); });
                            }
                        },
                        {
                            path: '/:nidurstodur',
                            load: function () {
                                return Promise.resolve().then(function () { return require(
                                /* webpackChunkName: 'embed-prof' */ './embed/kosningaprof/results'); });
                            }
                        },
                    ]
                },
            ]
        },
        {
            path: '/svar',
            load: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: 'prof' */ './prof'); }); }
        },
        {
            path: '/kosningaprof',
            children: [
                {
                    path: '',
                    load: function () {
                        return Promise.resolve().then(function () { return require(
                        /* webpackChunkName: 'prof-nidurstodur' */ './prof-nidurstodur'); });
                    }
                },
                {
                    path: '/:nidurstodur',
                    load: function () {
                        return Promise.resolve().then(function () { return require(
                        /* webpackChunkName: 'prof-nidurstodur' */ './prof-nidurstodur/results'); });
                    }
                },
            ]
        },
        {
            path: '/fyrri-kosningar',
            load: function () {
                return Promise.resolve().then(function () { return require(/* webpackChunkName: 'fyrri-kosningar' */ './fyrri-kosningar'); });
            }
        },
        {
            path: '/malefni',
            load: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: 'malefni' */ './malefni'); }); }
        },
        {
            path: '/verkefnid',
            load: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: 'about' */ './about'); }); }
        },
        {
            path: '/kjorskra',
            load: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: 'kjorskra' */ './kjorskra'); }); }
        },
        {
            path: '/kjorskra/:nidurstada',
            load: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: 'kjorskra' */ './kjorskra'); }); }
        },
        {
            path: '/malefni/:malefni',
            load: function () {
                return Promise.resolve().then(function () { return require(/* webpackChunkName: 'malefnisingle' */ './malefnisingle'); });
            }
        },
        {
            path: '/flokkar/bera-saman',
            children: [
                {
                    path: '',
                    load: function () {
                        return Promise.resolve().then(function () { return require(
                        /* webpackChunkName: 'compare-parties' */ './compare-parties'); });
                    }
                },
                {
                    path: '/:letters',
                    load: function () {
                        return Promise.resolve().then(function () { return require(
                        /* webpackChunkName: 'compare-parties' */ './compare-parties'); });
                    }
                },
            ]
        },
        {
            path: '/flokkur/:party',
            load: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: 'partysingle' */ './partysingle'); }); }
        },
        // Wildcard routes, e.g. { path: '*', ... } (must go last)
        {
            path: '*',
            load: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: 'not-found' */ './not-found'); }); }
        },
    ],
    action: function (_a) {
        var next = _a.next;
        return __awaiter(this, void 0, void 0, function () {
            var route;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, next()];
                    case 1:
                        route = _b.sent();
                        // Provide default values for title, description etc.
                        route.title = route.title || 'Kjóstu rétt';
                        route.description = route.description || '';
                        return [2 /*return*/, route];
                }
            });
        });
    }
};
// The error page is available by permanent url for development mode
if (__DEV__) {
    routes.children.unshift({
        path: '/error',
        action: require('./error')["default"]
    });
}
exports["default"] = routes;
