import { DisposableLike, MulticastObservableLike, ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../core.js";
import { Factory, Function1 } from "../../../functions.js";
declare const Observable_multicast: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<ObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;
export default Observable_multicast;
