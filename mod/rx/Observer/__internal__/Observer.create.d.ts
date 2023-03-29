import { ObserverLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Observer_create: <T>(scheduler: SchedulerLike, capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => ObserverLike<T>;
export default Observer_create;
