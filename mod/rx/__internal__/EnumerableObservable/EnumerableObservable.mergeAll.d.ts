import { ConcatAll } from "../../../containers.js";
import { EnumerableObservableLike } from "../../../rx.js";
declare const EnumerableObservable$mergeAll: ConcatAll<EnumerableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export { EnumerableObservable$mergeAll as default };
