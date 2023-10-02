import { DeferredObservableLike, ReplayObservableLike, ReplayPublisherLike, RunnableLike, RunnableWithSideEffectsLike, SchedulerLike } from "../../../concurrent.js";
import { Factory, Function1, Optional } from "../../../functions.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../utils.js";
declare const Observable_multicastImpl: <T>(publisherFactory: Function1<Optional<{
    replay?: number | undefined;
}>, ReplayPublisherLike<T>>, schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<RunnableLike<T> | RunnableWithSideEffectsLike<T> | DeferredObservableLike<T>, ReplayObservableLike<T> & DisposableLike>;
export default Observable_multicastImpl;
