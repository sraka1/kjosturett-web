"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
describe('answers token', function () {
    it('should encode/decode answers correctly', function () {
        var answers = '11254112345123451234512345123432452432'.split('');
        var token = (0, utils_1.encodeAnswersToken)(answers);
        expect((0, utils_1.decodeAnswersToken)(token)).toEqual(answers);
    });
    it('should encode/decode answers correctly', function () {
        var answers = '55555555555555555555555555555555555555'.split('');
        var token = (0, utils_1.encodeAnswersToken)(answers);
        expect((0, utils_1.decodeAnswersToken)(token)).toEqual(answers);
    });
    it('should decode answers correctly', function () {
        var encodedAnswers = '494q2639:494q2639:16jb8lowm';
        var correctDecodedAnswer = '3333333333333333333333333333333333334';
        expect((0, utils_1.decodeAnswersToken)(encodedAnswers).join('')).toEqual(correctDecodedAnswer);
    });
});
