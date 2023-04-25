import { ContainerOperator } from "../../../containers.js";
import { FlowableObservableLike, ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const FlowableObservable_create: <T>(op: ContainerOperator<ObservableLike, boolean, T>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
}) => FlowableObservableLike<T> & DisposableLike;
export default FlowableObservable_create;
