import { Factory, Function1, Optional } from "../../functions.js";
import { DisposableLike, ObservableWithSideEffectsLike, PublisherLike, QueueableLike, QueueableLike_backpressureStrategy, ReplayObservableLike, SchedulerLike } from "../../types.js";
declare const Observable_multicastImpl: <T>(publisherFactory: Function1<Optional<{
    replay?: number | undefined;
}>, PublisherLike<T>>, schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<ObservableWithSideEffectsLike<T>, ReplayObservableLike<T> & DisposableLike>;
export default Observable_multicastImpl;
