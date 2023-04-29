import { Factory, Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../util.js";
declare const Observable_share: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly replay?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => Function1<ObservableLike<T>, ObservableLike<T>>;
export default Observable_share;
