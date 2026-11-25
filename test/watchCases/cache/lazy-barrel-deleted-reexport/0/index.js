import * as root from "./module";

it("should report a missing reexport target of a lazy barrel once", () => {
	expect(Object.keys(root)).toContain("b");
	expect(root.b).toBe("module.b");
});
