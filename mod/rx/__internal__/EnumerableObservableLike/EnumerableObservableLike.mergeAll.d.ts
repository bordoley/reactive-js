import { ConcatAll } from "../../../containers.mjs";
import { EnumerableObservableLike } from "../../../rx.mjs";
declare const EnumerableObservableLike__mergeAll: ConcatAll<EnumerableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export { EnumerableObservableLike__mergeAll as default };
