import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../util.js";
declare const Stream_create: <TReq, T>(op: ContainerOperator<ObservableContainer, TReq, T>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
}) => StreamLike<TReq, T> & DisposableLike;
export default Stream_create;
