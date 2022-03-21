"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var history_1 = require("./history");
function isMainClickEvent(event) {
    return event.button === 0;
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function isRemote(href) {
    if (history_1["default"] == null || !href) {
        return false;
    }
    var locationHost = history_1["default"].location.host;
    var match = href.match(/^(?:\w+:)?\/\/([^/\s]+)/);
    return match && match[1] !== locationHost;
}
function isProtocol(href) {
    return href.match(/^(?:tel|mailto):/);
}
var Link = function (_a) {
    var href = _a.href, afterClick = _a.afterClick, rest = __rest(_a, ["href", "afterClick"]);
    return (<a href={href} {...(rest.target === '_blank' && {
        rel: 'noreferrer noopener'
    })} {...rest} onClick={function (event) {
            if (history_1["default"] == null) {
                return;
            }
            if (isRemote(href)) {
                return;
            }
            if (isProtocol(href)) {
                return;
            }
            if (isModifiedEvent(event) || !isMainClickEvent(event)) {
                return;
            }
            history_1["default"].push(href);
            if (typeof afterClick === 'function') {
                afterClick(href);
            }
            event.preventDefault();
        }}/>);
};
Link.protoTypes = {
    href: prop_types_1["default"].string.isRequired,
    afterClick: prop_types_1["default"].func
};
exports["default"] = Link;
