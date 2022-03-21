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
exports.updateLink = exports.updateCustomMeta = exports.updateMeta = exports.updateTag = void 0;
function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
    var node = document.head.querySelector("".concat(tagName, "[").concat(keyName, "=\"").concat(keyValue, "\"]"));
    if (node && node.getAttribute(attrName) === attrValue)
        return;
    // Remove and create a new tag in order to make it work with bookmarks in Safari
    if (node) {
        node.parentNode.removeChild(node);
    }
    if (typeof attrValue === 'string') {
        var nextNode = document.createElement(tagName);
        nextNode.setAttribute(keyName, keyValue);
        nextNode.setAttribute(attrName, attrValue);
        document.head.appendChild(nextNode);
    }
}
exports.updateTag = updateTag;
function updateMeta(name, content) {
    updateTag('meta', 'name', name, 'content', content);
}
exports.updateMeta = updateMeta;
function updateCustomMeta(property, content) {
    updateTag('meta', 'property', property, 'content', content);
}
exports.updateCustomMeta = updateCustomMeta;
function updateLink(rel, href) {
    updateTag('link', 'rel', rel, 'href', href);
}
exports.updateLink = updateLink;
