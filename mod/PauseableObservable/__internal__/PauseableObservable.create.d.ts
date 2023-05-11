import type * as DeferredObservable from "../../DeferredObservable.js";
import { ContainerOperator, DisposableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
declare const PauseableObservable_create: <T>(op: ContainerOperator<DeferredObservable.Type, boolean, T>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => PauseableObservableLike<T> & DisposableLike;
export default PauseableObservable_create;
