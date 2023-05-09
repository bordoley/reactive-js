import { Function1 } from "../../functions.js";
import { BufferLike_capacity, DisposableLike, ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
declare const Observable_subscribeWithConfig: <T>(scheduler: SchedulerLike, config: {
    [BufferLike_capacity]: number;
    [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<ObservableLike<T>, DisposableLike>;
export default Observable_subscribeWithConfig;
