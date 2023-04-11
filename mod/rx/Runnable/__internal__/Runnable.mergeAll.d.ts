import { MergeAll, RunnableLike } from "../../../rx.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Runnable_mergeAll: MergeAll<RunnableLike, {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
}>["mergeAll"];
export default Runnable_mergeAll;
