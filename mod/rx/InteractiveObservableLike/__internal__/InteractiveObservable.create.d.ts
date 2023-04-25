import { ContainerOperator } from "../../../containers.js";
import { InteractiveObservableLike, ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const InteractiveObservable_create: <T>(op: ContainerOperator<ObservableLike, void, T>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
}) => InteractiveObservableLike<T> & DisposableLike;
export default InteractiveObservable_create;
