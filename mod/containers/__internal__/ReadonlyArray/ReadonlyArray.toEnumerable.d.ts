import { ReadonlyArrayLike } from "../../../containers.js";
import { ToEnumerable } from "../../../ix.js";
declare const ReadonlyArray$toEnumerable: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toEnumerable"];
export { ReadonlyArray$toEnumerable as default };
