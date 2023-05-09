import { DeferredObservableLike, DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike, SharedObservableLike } from "../../../core.js";
import { Factory, Function1 } from "../../../functions.js";
declare const DeferredObservable_share: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly replay?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => Function1<DeferredObservableLike<T>, SharedObservableLike<T>>;
export default DeferredObservable_share;
