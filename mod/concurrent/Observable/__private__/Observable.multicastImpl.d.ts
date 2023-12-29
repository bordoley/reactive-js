import { DeferredObservableLike, MulticastObservableLike, SchedulerLike, SubjectLike } from "../../../concurrent.js";
import { Function1, Optional } from "../../../functions.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../utils.js";
declare const Observable_multicastImpl: <T>(subjectFactory: Function1<Optional<{
    autoDispose: boolean;
    replay?: number | undefined;
}>, SubjectLike<T>>, scheduler: SchedulerLike, options?: {
    readonly autoDispose?: boolean;
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<DeferredObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;
export default Observable_multicastImpl;
