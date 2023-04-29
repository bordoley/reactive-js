import { ContainerOperator } from "../../../containers.js";
import { ObservableLike, PauseableObservableLike } from "../../../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../util.js";
declare const PauseableObservable_create: <T>(op: ContainerOperator<ObservableLike, boolean, T>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => PauseableObservableLike<T> & DisposableLike;
export default PauseableObservable_create;
