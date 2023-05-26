import { ObservableBaseLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity, SchedulerLike } from "../../types.js";
declare const Observable_subscribeWithConfig: (scheduler: SchedulerLike, config: Pick<QueueableLike, typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy>) => (observable: ObservableBaseLike) => import("../../types.js").ObserverLike<unknown>;
export default Observable_subscribeWithConfig;
