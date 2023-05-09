import { Factory, Function1 } from "../../functions.js";
import { DeferredObservableLike, DisposableLike, MulticastObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
declare const DeferredObservable_multicast: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<DeferredObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;
export default DeferredObservable_multicast;
