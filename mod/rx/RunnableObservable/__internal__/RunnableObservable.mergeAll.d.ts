import { MergeAll, RunnableObservableLike } from "../../../rx.js";
declare const RunnableObservable_mergeAll: MergeAll<RunnableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["mergeAll"];
export default RunnableObservable_mergeAll;
