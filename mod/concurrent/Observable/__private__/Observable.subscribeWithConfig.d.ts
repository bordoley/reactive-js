import { ObservableLike, ObserverLike, SchedulerLike } from "../../../concurrent.js";
import { QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../../utils.js";
declare const Observable_subscribeWithConfig: (scheduler: SchedulerLike, config: Pick<QueueableLike, typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy>) => (observable: ObservableLike) => ObserverLike<unknown>;
export default Observable_subscribeWithConfig;
