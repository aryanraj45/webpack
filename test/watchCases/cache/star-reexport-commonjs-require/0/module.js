import { a as importedA } from "./imported";
export * from "./commonjs";
export const a = "module.a";
export const b = "module.b";
export function use() {
	return [importedA];
}
