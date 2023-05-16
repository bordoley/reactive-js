import { Factory, Function1, Optional } from "../../functions.js";
import { DeferredObservableLike, DisposableLike, PublisherLike, QueueableLike, QueueableLike_backpressureStrategy, ReplayObservableLike, SchedulerLike } from "../../types.js";
declare const DeferredObservable_multicastImpl: <T>(publisherFactory: Function1<Optional<{
    replay?: number | undefined;
}>, PublisherLike<T>>, schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<DeferredObservableLike<T>, ReplayObservableLike<T> & DisposableLike>;
export default DeferredObservable_multicastImpl;
