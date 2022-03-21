// @flow
var URL = 'https://assets.kjosturett.is';
exports.getAssetUrl = function () {
    var assets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        assets[_i] = arguments[_i];
    }
    return "".concat(URL, "/").concat(assets.join('/'), ".png");
};
exports.candidateImage = function (slug) {
    return "https://kjosturett.imgix.net/".concat(slug, ".jpg?fit=facearea&facepad=2.0&w=500&h=500");
};
exports.pleasantUrl = function (url) {
    return url.replace(/^(https?:)?\/\/(www\.)?/i, '').replace(/\/$/, '');
};
exports.encodeAnswersToken = function (answers) {
    var chunkLength = Math.floor(answers.length / 3);
    var first = parseInt(answers.slice(0, chunkLength).join(''), 10).toString(36);
    var second = parseInt(answers.slice(chunkLength, chunkLength * 2).join(''), 10).toString(36);
    var third = parseInt(answers.slice(chunkLength * 2, answers.length).join(''), 10).toString(36);
    return "".concat(first, ":").concat(second, ":").concat(third);
};
exports.decodeAnswersToken = function (token) {
    var decode = function (part) {
        return parseInt(part, 36)
            .toString()
            .split('');
    };
    return token
        .split(':')
        .map(decode)
        .reduce(function (a, b) { return a.concat(b); }, []);
};
