import { Optional } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Observable_firstAsync: <T>(scheduler?: SchedulerLike, options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => (observable: ObservableLike<T>) => Promise<Optional<T>>;
export default Observable_firstAsync;
