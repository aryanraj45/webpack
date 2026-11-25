import { a as importedA } from "./target";
export const b = "module.b";
export function use() {
	return [importedA];
}
