"use strict";

/** @type {(threads: boolean) => import("../../../../").Configuration} */
const config = (threads) => ({
	mode: "development",
	experiments: threads ? { threads: { max: 1 } } : {},
	module: {
		rules: [
			{
				test: /value\.js$/,
				use: ["./loader"],
				threads: true
			}
		]
	}
});

/** @type {import("../../../../").Configuration[]} */
module.exports = [config(true), config(false)];
