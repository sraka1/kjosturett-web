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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var path_1 = require("path");
var multer_1 = require("multer");
var multer_s3_1 = require("multer-s3");
var aws_sdk_1 = require("aws-sdk");
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var node_fetch_1 = require("node-fetch");
var react_1 = require("react");
var server_1 = require("react-dom/server");
var pretty_error_1 = require("pretty-error");
var ioredis_1 = require("ioredis");
var uuid = require("uuid");
var App_1 = require("./components/App");
var Html_1 = require("./components/Html");
var ErrorPage_1 = require("./routes/error/ErrorPage");
var ErrorPage_css_1 = require("./routes/error/ErrorPage.css");
var createFetch_1 = require("./createFetch");
var router_1 = require("./router");
// import schema from './data/schema';
var assets_json_1 = require("./assets.json"); // eslint-disable-line import/no-unresolved
var configureStore_1 = require("./store/configureStore");
var config_1 = require("./config");
var kjorskra_1 = require("./lib/kjorskra");
var runtime_1 = require("./actions/runtime");
var redis;
if (process.env.REDIS_URL) {
    redis = new ioredis_1["default"](process.env.REDIS_URL, process.env.REDIS_URL.includes('rediss://')
        ? {
            tls: {
                rejectUnauthorized: false
            }
        }
        : {});
}
else {
    console.error('WARNING YOU ARE RUNNING THIS PROJECT WITHOUT PERMANENTLY STORING REPLY DATA');
}
var s3;
var upload;
if (process.env.NODE_ENV === 'production') {
    s3 = new aws_sdk_1["default"].S3({
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY
    });
    upload = (0, multer_1["default"])({
        storage: (0, multer_s3_1["default"])({
            s3: s3,
            bucket: process.env.S3_BUCKET,
            acl: 'public-read',
            key: function (req, file, cb) {
                return __awaiter(this, void 0, void 0, function () {
                    var token, ssn;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype))
                                    return [2 /*return*/, cb(new Error('Wrong filetype'))];
                                token = req.query.token;
                                if (!uuid.validate(token))
                                    throw Error('Rangt auðkenni. Hafðu samband við kjosturett@kjosturett.is ef þetta er röng villa.');
                                return [4 /*yield*/, redis.get("candidate-token:".concat(token))];
                            case 1:
                                ssn = _a.sent();
                                if (!ssn)
                                    return [2 /*return*/, cb(new Error('Rangur hlekkur. Hafðu samband við kjosturett@kjosturett.is ef þetta er röng villa.'))];
                                cb(null, "candidates/".concat(ssn, ".jpg"));
                                return [2 /*return*/];
                        }
                    });
                });
            }
        })
    });
}
else {
    upload = (0, multer_1["default"])({ dest: 'uploads/' });
}
var app = (0, express_1["default"])();
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';
//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express_1["default"].static(path_1["default"].resolve(__dirname, 'public')));
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.use(body_parser_1["default"].json());
if (__DEV__) {
    app.enable('trust proxy');
}
app.get('/og-image-kjorskra/:coordinates', function (req, res) {
    var coordinates = req.params.coordinates;
    var url = "https://kjosturett-is.imgix.net/og_kjorskra3.png?markalign=right%2Cmiddle&mark=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fstaticmap%3Fcenter%3D".concat(coordinates, "%26zoom%3D14%26size%3D600x630%26maptype%3Droadmap%26markers%3Dicon%3Ahttps%3A%2F%2Fimgix.kjosturett.is%2Fmap_marker3.png%7C").concat(coordinates);
    res.redirect(301, url);
});
app.get('/kjorskra-lookup/:kennitala', function (req, res, next) {
    (0, kjorskra_1["default"])(req.params.kennitala).then(function (d) { return res.json(d); }, next);
});
/**
 * Used to candidate profile upload
 */
app.post('/candidate/avatar', function (req, res) {
    return res.status(500).json({
        success: false,
        error: 'Kosningarnar eru búnar'
    });
});
// app.post('/candidate/avatar', upload.single('avatar'), (req, res) => {
//   if (!req.query.token)
//     return res.json({
//       success: false,
//       error: 'Failed to upload photo, missing token',
//     });
//   res.redirect(`/svar?token=${req.query.token}&upload=success`);
// });
// Used to gather replies from candidates and parties
app.post('/konnun/replies', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, token, reply, timestamp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [2 /*return*/, res.status(500).json({
                    success: false,
                    error: 'Kosningarnar eru búnar'
                })];
            case 1:
                _b.sent();
                res.json({ success: true });
                return [2 /*return*/];
        }
    });
}); });
// Used to gather replies from voters in an anonymous way
app.post('/konnun/replies/all', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reply, token, timestamp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [2 /*return*/, res.status(500).json({
                    success: false,
                    error: 'Kosningarnar eru búnar'
                })];
            case 1:
                _a.sent();
                res.json({ success: true });
                return [2 /*return*/];
        }
    });
}); });
//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var css_1, fetch_1, initialState, store, context, route, data, html, err_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                css_1 = new Set();
                fetch_1 = (0, createFetch_1["default"])(node_fetch_1["default"], {
                    baseUrl: config_1["default"].api.serverUrl,
                    cookie: req.headers.cookie
                });
                initialState = {};
                store = (0, configureStore_1["default"])(initialState, {
                    fetch: fetch_1
                });
                store.dispatch((0, runtime_1.setRuntimeVariable)({
                    name: 'initialNow',
                    value: Date.now()
                }));
                context = {
                    // Enables critical path CSS rendering
                    // https://github.com/kriasoft/isomorphic-style-loader
                    insertCss: function () {
                        var styles = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            styles[_i] = arguments[_i];
                        }
                        // eslint-disable-next-line no-underscore-dangle
                        styles.forEach(function (style) { return css_1.add(style._getCss()); });
                    },
                    fetch: fetch_1,
                    // You can access redux through react-redux connect
                    store: store,
                    storeSubscription: null
                };
                return [4 /*yield*/, router_1["default"].resolve(__assign(__assign({}, context), { path: req.path, query: req.query }))];
            case 1:
                route = _b.sent();
                if (route.redirect) {
                    res.redirect(route.status || 302, route.redirect);
                    return [2 /*return*/];
                }
                data = __assign({}, route);
                data.children = server_1["default"].renderToString(<App_1["default"] context={context} store={store}>
        {route.component}
      </App_1["default"]>);
                data.styles = [{ id: 'css', cssText: __spreadArray([], css_1, true).join('') }];
                data.scripts = [assets_json_1["default"].vendor.js];
                if (route.chunks) {
                    (_a = data.scripts).push.apply(_a, route.chunks.map(function (chunk) { return assets_json_1["default"][chunk].js; }));
                }
                data.scripts.push(assets_json_1["default"].client.js);
                data.app = {
                    apiUrl: config_1["default"].api.clientUrl,
                    state: context.store.getState()
                };
                html = server_1["default"].renderToStaticMarkup(<Html_1["default"] {...data}/>);
                res.status(route.status || 200);
                res.send("<!doctype html>".concat(html));
                return [3 /*break*/, 3];
            case 2:
                err_1 = _b.sent();
                next(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//
// Error handling
// -----------------------------------------------------------------------------
var pe = new pretty_error_1["default"]();
pe.skipNodeFiles();
pe.skipPackage('express');
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
    console.error(pe.render(err));
    var html = server_1["default"].renderToStaticMarkup(<Html_1["default"] title="Internal Server Error" description={err.message} styles={[{ id: 'css', cssText: ErrorPage_css_1["default"]._getCss() }]} // eslint-disable-line no-underscore-dangle
    >
      {server_1["default"].renderToString(<ErrorPage_1.ErrorPageWithoutStyle error={err}/>)}
    </Html_1["default"]>);
    res.status(err.status || 500);
    res.send("<!doctype html>".concat(html));
});
//
// Launch the server
// -----------------------------------------------------------------------------
if (!module.hot) {
    app.listen(config_1["default"].port, function () {
        console.info("The server is running at http://localhost:".concat(config_1["default"].port, "/"));
    });
}
//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
    app.hot = module.hot;
    module.hot.accept('./router');
}
exports["default"] = app;
