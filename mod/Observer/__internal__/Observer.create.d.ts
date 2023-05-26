import { ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity, SchedulerLike } from "../../types.js";
declare const Observer_create: <T>(scheduler: SchedulerLike, config: Pick<QueueableLike, typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy>) => ObserverLike<T>;
export default Observer_create;
