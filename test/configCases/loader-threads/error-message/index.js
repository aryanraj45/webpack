it("reports a loader error as the main thread does", () => {
	let message;
	try {
		require("./value");
	} catch (err) {
		message = err.message;
	}
	expect(message).toMatch(
		/^Module build failed \(from \.\/loader\.js\):\nError: loader refused value\.js\n\s+at /
	);
});
