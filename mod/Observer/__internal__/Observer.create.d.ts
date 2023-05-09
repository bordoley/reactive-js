import { BufferLike_capacity, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
declare const Observer_create: <T>(scheduler: SchedulerLike, config: {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
}) => ObserverLike<T>;
export default Observer_create;
