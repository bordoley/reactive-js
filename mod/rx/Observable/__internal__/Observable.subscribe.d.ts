import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../util.js";
declare const Observable_subscribe: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => Function1<ObservableLike<T>, DisposableLike>;
export default Observable_subscribe;
