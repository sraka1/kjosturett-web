"use strict";
/* eslint-disable import/prefer-default-export */
exports.__esModule = true;
exports.setRuntimeVariable = exports.SET_RUNTIME_VARIABLE = void 0;
exports.SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
function setRuntimeVariable(_a) {
    var name = _a.name, value = _a.value;
    return {
        type: exports.SET_RUNTIME_VARIABLE,
        payload: {
            name: name,
            value: value
        }
    };
}
exports.setRuntimeVariable = setRuntimeVariable;
