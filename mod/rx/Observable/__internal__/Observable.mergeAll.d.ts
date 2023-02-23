import { MergeAll, ObservableLike } from "../../../rx.js";
declare const Observable_mergeAll: MergeAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["mergeAll"];
export default Observable_mergeAll;
