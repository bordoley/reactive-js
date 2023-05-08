import { DisposableLike, ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../core.js";
import { Factory } from "../../../functions.js";
declare const Observable_subscribeOn: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => (observable: ObservableLike<T>) => ObservableLike<T>;
export default Observable_subscribeOn;
