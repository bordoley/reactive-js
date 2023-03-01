import { MergeAll, RunnableLike } from "../../../rx.js";
declare const Runnable_mergeAll: MergeAll<RunnableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["mergeAll"];
export default Runnable_mergeAll;
