"use strict";
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
var runtime_1 = require("../actions/runtime");
function runtime(state, action) {
    var _a;
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case runtime_1.SET_RUNTIME_VARIABLE:
            return __assign(__assign({}, state), (_a = {}, _a[action.payload.name] = action.payload.value, _a));
        default:
            return state;
    }
}
exports["default"] = runtime;
