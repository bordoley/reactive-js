import { Factory, Optional } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Observable_lastAsync: <T>(options?: {
    readonly scheduler?: SchedulerLike | Factory<SchedulerLike & DisposableLike>;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => (observable: ObservableLike<T>) => Promise<Optional<T>>;
export default Observable_lastAsync;
