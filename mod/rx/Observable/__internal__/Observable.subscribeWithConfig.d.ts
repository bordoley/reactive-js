import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { BufferLike_capacity, DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Observable_subscribeWithConfig: <T>(scheduler: SchedulerLike, config: {
    [BufferLike_capacity]: number;
    [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<ObservableLike<T>, DisposableLike>;
export default Observable_subscribeWithConfig;
