import { Factory, Function1, Optional } from "../../../functions.js";
import { MulticastObservableLike, ObservableLike, PublisherLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Observable_multicastImpl: <T>(publisherFactory: Function1<Optional<{
    replay?: number | undefined;
}>, PublisherLike<T>>, schedulerOrFactory: SchedulerLike | Factory<SchedulerLike>, options?: {
    readonly replay?: number;
    readonly capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;
export default Observable_multicastImpl;
