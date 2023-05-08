import { Containers, DisposableLike, ObservableContainer, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../core.js";
declare const PauseableObservable_create: <T>(op: Containers.Operator<ObservableContainer, boolean, T>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => PauseableObservableLike<T> & DisposableLike;
export default PauseableObservable_create;
