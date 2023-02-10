import { ReadonlyArrayLike } from "../../../containers.js";
import { ToEnumerable } from "../../../ix.js";
declare const ReadonlyArray_toEnumerable: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toEnumerable"];
export { ReadonlyArray_toEnumerable as default };
