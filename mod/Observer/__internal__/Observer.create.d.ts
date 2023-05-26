import { BufferLike_capacity, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
declare const Observer_create: <T>(scheduler: SchedulerLike, config: Pick<QueueableLike, typeof BufferLike_capacity | typeof QueueableLike_backpressureStrategy>) => ObserverLike<T>;
export default Observer_create;
