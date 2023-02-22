import { ConcatAll } from "../../../containers.js";
import { RunnableObservableLike } from "../../../rx.js";
declare const RunnableObservable_mergeAll: ConcatAll<RunnableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export default RunnableObservable_mergeAll;
