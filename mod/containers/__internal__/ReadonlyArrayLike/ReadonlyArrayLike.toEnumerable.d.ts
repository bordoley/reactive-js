import { ReadonlyArrayLike } from "../../../containers.mjs";
import { ToEnumerable } from "../../../ix.mjs";
declare const toEnumerable: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toEnumerable"];
export { toEnumerable as default };
