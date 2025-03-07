import { ObservableLike, ObserverLike } from "../../../computations.js";
import { QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity, SchedulerLike } from "../../../utils.js";
declare const Observable_subscribeWithConfig: (scheduler: SchedulerLike, config: Pick<QueueableLike, typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy>) => (observable: ObservableLike) => ObserverLike<unknown>;
export default Observable_subscribeWithConfig;
