import { ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../core.js";
import { Optional } from "../../../functions.js";
declare const Observable_firstAsync: <T>(scheduler?: SchedulerLike, options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => (observable: ObservableLike<T>) => Promise<Optional<T>>;
export default Observable_firstAsync;
