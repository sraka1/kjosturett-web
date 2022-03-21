"use strict";
// Adapted from @borgar's gist: https://gist.github.com/borgar/5b59dc2d70d1a93bdce5e4fb15ec7d71#file-matchranking-js
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
exports.match = void 0;
var valueMap = {
    '1': -1,
    '2': -0.8,
    '3': 0,
    '4': 0.8,
    '5': 1,
    '6': null
};
function mapToValues(answers) {
    return answers.map(function (value) { return valueMap[value]; });
}
function match(answers, matchersAnswers) {
    if (!matchersAnswers) {
        return 0;
    }
    var ranks = 0;
    var distance = 0;
    answers.forEach(function (my, i) {
        var them = matchersAnswers[i];
        if (my != null && them != null) {
            distance += Math.abs(my - them);
            ranks += 1;
        }
    });
    return (2 - distance / ranks) / 2 * 100;
}
exports.match = match;
var sortByRating = function (a, b) { return b.score - a.score; };
function getResultsByScore(answers, dataset) {
    var answerValues = mapToValues(answers);
    return dataset
        .map(function (data) { return (__assign(__assign({}, data), { score: match(answerValues, data.reply && mapToValues(data.reply.split(''))) })); })
        .sort(sortByRating);
}
exports["default"] = getResultsByScore;
