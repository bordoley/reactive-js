import { Factory, Function1, Optional } from "../../../functions.js";
import { MulticastObservableLike, ObservableLike, PublisherLike } from "../../../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../util.js";
declare const Observable_multicastImpl: <T>(publisherFactory: Function1<Optional<{
    replay?: number | undefined;
}>, PublisherLike<T>>, schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<ObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;
export default Observable_multicastImpl;
