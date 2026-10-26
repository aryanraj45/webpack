"use strict";

const fs = require("fs");
const path = require("path");

module.exports = {
	afterExecute(options) {
		const code = fs.readFileSync(
			path.join(options.output.path, "bundle0.js"),
			"utf8"
		);
		expect(code).toContain('jsx("div",[jsx("b",[]),jsx("i",[])])');
		expect(code).toMatch(
			/let \w+=jsx\("i",\[\]\);return jsx\("div",\[log\("b"\),\w+\]\)/
		);
	}
};
