import { ConcatAll } from "../../../containers.js";
import { EnumerableLike } from "../../../ix.js";
declare const Enumerable_mergeAll: ConcatAll<EnumerableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export default Enumerable_mergeAll;
