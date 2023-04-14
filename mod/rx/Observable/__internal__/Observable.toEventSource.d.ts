import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike, EventSourceLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Observable_toEventSource: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly replay?: number;
}) => Function1<ObservableLike<T>, EventSourceLike<T> & DisposableLike>;
export default Observable_toEventSource;
