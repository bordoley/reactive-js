import { DisposableLike, ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../core.js";
import { Factory, Function1 } from "../../../functions.js";
declare const Observable_share: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly replay?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => Function1<ObservableLike<T>, ObservableLike<T>>;
export default Observable_share;
