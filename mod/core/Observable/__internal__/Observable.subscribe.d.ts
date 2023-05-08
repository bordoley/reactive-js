import { DisposableLike, ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const Observable_subscribe: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => Function1<ObservableLike<T>, DisposableLike>;
export default Observable_subscribe;
