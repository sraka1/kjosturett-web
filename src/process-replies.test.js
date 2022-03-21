"use strict";
exports.__esModule = true;
var replies_candidates_json_1 = require("../data/build/replies-candidates.json");
var process_replies_1 = require("./process-replies");
var utils_1 = require("./utils");
describe('ProcessPoliticsTest: Candiate match ', function () {
    var answers = '1mm4u75:2d9heev:2jvmtsf';
    it('should calculate correct rating', function () {
        var candidates = (0, process_replies_1["default"])((0, utils_1.decodeAnswersToken)(answers), replies_candidates_json_1["default"]);
        expect(candidates).toMatchSnapshot();
    });
});
