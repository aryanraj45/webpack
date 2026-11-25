import * as root from "./module";

it("should keep a star reexport's own exports when its CommonJS target starts requiring", () => {
	expect(Object.keys(root)).toEqual(expect.arrayContaining(["a", "b", "use"]));
	expect(root.a).toBe("module.a");
	expect(root.use()).toEqual(["imported.a"]);
});
