import { ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../core.js";
import { Optional } from "../../../functions.js";
declare const Observable_lastAsync: <T>(schedulerOrNone?: SchedulerLike, options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => (observable: ObservableLike<T>) => Promise<Optional<T>>;
export default Observable_lastAsync;
