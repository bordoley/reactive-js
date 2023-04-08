import { ObserverLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { BufferLike_capacity, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Observer_create: <T>(scheduler: SchedulerLike, config: {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
}) => ObserverLike<T>;
export default Observer_create;
