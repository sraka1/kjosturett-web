"use strict";
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
exports.__esModule = true;
var universal_router_1 = require("universal-router");
var routes_1 = require("./routes");
exports["default"] = new universal_router_1["default"](routes_1["default"], {
    resolveRoute: function (context, params) {
        if (typeof context.route.load === 'function') {
            return context.route
                .load()
                .then(function (action) { return action["default"](context, params); });
        }
        if (typeof context.route.action === 'function') {
            return context.route.action(context, params);
        }
        return null;
    }
});
