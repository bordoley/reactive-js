import { Function1 } from "../../functions.js";
import { DeferredObservableBaseLike, DisposableLike, MulticastObservableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
declare const PauseableObservable_create: <T>(op: Function1<MulticastObservableLike<boolean>, DeferredObservableBaseLike<T>>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => PauseableObservableLike<T> & DisposableLike;
export default PauseableObservable_create;
