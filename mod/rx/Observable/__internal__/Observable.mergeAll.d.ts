import { MergeAll, ObservableLike } from "../../../rx.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Observable_mergeAll: MergeAll<ObservableLike, {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
}>["mergeAll"];
export default Observable_mergeAll;
