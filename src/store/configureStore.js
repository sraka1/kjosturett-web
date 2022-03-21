"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var reducers_1 = require("../reducers");
var createHelpers_1 = require("./createHelpers");
var logger_1 = require("./logger");
function configureStore(initialState, helpersConfig) {
    var helpers = (0, createHelpers_1["default"])(helpersConfig);
    var middleware = [redux_thunk_1["default"].withExtraArgument(helpers)];
    var enhancer;
    if (__DEV__) {
        middleware.push((0, logger_1["default"])());
        // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
        var devToolsExtension = function (f) { return f; };
        if (process.env.BROWSER && window.devToolsExtension) {
            devToolsExtension = window.devToolsExtension();
        }
        enhancer = (0, redux_1.compose)(redux_1.applyMiddleware.apply(void 0, middleware), devToolsExtension);
    }
    else {
        enhancer = redux_1.applyMiddleware.apply(void 0, middleware);
    }
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    var store = (0, redux_1.createStore)(reducers_1["default"], initialState, enhancer);
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (__DEV__ && module.hot) {
        module.hot.accept('../reducers', function () {
            // eslint-disable-next-line global-require
            return store.replaceReducer(require('../reducers')["default"]);
        });
    }
    return store;
}
exports["default"] = configureStore;
