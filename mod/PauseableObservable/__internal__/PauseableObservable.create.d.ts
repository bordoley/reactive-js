import { Containers, DeferredObservableContainer } from "../../containers.js";
import { DisposableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
declare const PauseableObservable_create: <T>(op: Containers.Operator<DeferredObservableContainer, boolean, T>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => PauseableObservableLike<T> & DisposableLike;
export default PauseableObservable_create;
