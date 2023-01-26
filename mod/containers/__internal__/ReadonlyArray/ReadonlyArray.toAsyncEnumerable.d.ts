import { ReadonlyArrayLike } from "../../../containers.js";
import { ToAsyncEnumerable } from "../../../ix.js";
declare const ReadonlyArray$toAsyncEnumerable: ToAsyncEnumerable<ReadonlyArrayLike, {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
}>["toAsyncEnumerable"];
export { ReadonlyArray$toAsyncEnumerable as default };
