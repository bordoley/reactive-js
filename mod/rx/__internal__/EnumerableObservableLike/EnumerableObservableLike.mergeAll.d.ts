import { ConcatAll } from "../../../containers.js";
import { EnumerableObservableLike } from "../../../rx.js";
declare const EnumerableObservableLike__mergeAll: ConcatAll<EnumerableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export { EnumerableObservableLike__mergeAll as default };
