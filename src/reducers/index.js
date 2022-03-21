"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var runtime_1 = require("./runtime");
exports["default"] = (0, redux_1.combineReducers)({
    runtime: runtime_1["default"]
});
