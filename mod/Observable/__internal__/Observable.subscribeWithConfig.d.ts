import { BufferLike_capacity, ObservableBaseLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
declare const Observable_subscribeWithConfig: (scheduler: SchedulerLike, config: {
    [BufferLike_capacity]: number;
    [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => (observable: ObservableBaseLike) => import("../../types.js").ObserverLike<unknown>;
export default Observable_subscribeWithConfig;
