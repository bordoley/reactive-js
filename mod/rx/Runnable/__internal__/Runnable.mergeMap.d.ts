import { MergeMap, RunnableLike } from "../../../rx.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Runnable_mergeMap: MergeMap<RunnableLike, {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
}>["mergeMap"];
export default Runnable_mergeMap;
