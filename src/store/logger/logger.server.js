"use strict";
exports.__esModule = true;
var util_1 = require("util");
function inspectObject(object) {
    return (0, util_1.inspect)(object, {
        colors: true
    });
}
function singleLine(str) {
    return str.replace(/\s+/g, ' ');
}
var actionFormatters = {
    // This is used at feature/apollo branch, but it can help you when implementing Apollo
    APOLLO_QUERY_INIT: function (a) {
        return "queryId:".concat(a.queryId, " variables:").concat(inspectObject(a.variables), "\n   ").concat(singleLine(a.queryString));
    },
    APOLLO_QUERY_RESULT: function (a) {
        return "queryId:".concat(a.queryId, "\n   ").concat(singleLine(inspectObject(a.result)));
    },
    APOLLO_QUERY_STOP: function (a) { return "queryId:".concat(a.queryId); }
};
// Server side redux action logger
function createLogger() {
    // eslint-disable-next-line no-unused-vars
    return function (store) { return function (next) { return function (action) {
        var formattedPayload = '';
        var actionFormatter = actionFormatters[action.type];
        if (typeof actionFormatter === 'function') {
            formattedPayload = actionFormatter(action);
        }
        else if (action.toString !== Object.prototype.toString) {
            formattedPayload = action.toString();
        }
        else if (typeof action.payload !== 'undefined') {
            formattedPayload = inspectObject(action.payload);
        }
        else {
            formattedPayload = inspectObject(action);
        }
        console.log(" * ".concat(action.type, ": ").concat(formattedPayload)); // eslint-disable-line no-console
        return next(action);
    }; }; };
}
exports["default"] = createLogger;
