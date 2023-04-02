import { ConcatAll } from "../../../containers.js";
import { EnumerableLike } from "../../../rx.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Enumerable_mergeAll: ConcatAll<EnumerableLike, {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export default Enumerable_mergeAll;
