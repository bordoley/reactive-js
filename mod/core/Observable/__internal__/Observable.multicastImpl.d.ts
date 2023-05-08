import { DisposableLike, MulticastObservableLike, ObservableLike, PublisherLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../core.js";
import { Factory, Function1, Optional } from "../../../functions.js";
declare const Observable_multicastImpl: <T>(publisherFactory: Function1<Optional<{
    replay?: number | undefined;
}>, PublisherLike<T>>, schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<ObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;
export default Observable_multicastImpl;
