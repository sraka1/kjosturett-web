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
exports.__esModule = true;
/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch(fetch, _a) {
    var baseUrl = _a.baseUrl, cookie = _a.cookie;
    // NOTE: Tweak the default options to suite your application needs
    var defaults = {
        method: 'POST',
        mode: baseUrl ? 'cors' : 'same-origin',
        credentials: baseUrl ? 'include' : 'same-origin',
        headers: __assign({ Accept: 'application/json', 'Content-Type': 'application/json' }, (cookie ? { Cookie: cookie } : null))
    };
    return function (url, options) {
        return url.startsWith('/graphql') || url.startsWith('/api')
            ? fetch("".concat(baseUrl).concat(url), __assign(__assign(__assign({}, defaults), options), { headers: __assign(__assign({}, defaults.headers), (options && options.headers)) }))
            : fetch(url, options);
    };
}
exports["default"] = createFetch;
