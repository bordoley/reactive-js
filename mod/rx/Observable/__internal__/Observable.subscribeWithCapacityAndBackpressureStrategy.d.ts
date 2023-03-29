import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Observable_subscribeWithCapacityAndBackpressureStrategy: <T>(scheduler: SchedulerLike, capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => Function1<ObservableLike<T>, DisposableLike>;
export default Observable_subscribeWithCapacityAndBackpressureStrategy;
