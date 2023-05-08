import { Containers, DisposableLike, ObservableContainer, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike, StreamLike } from "../../../core.js";
declare const Stream_create: <TReq, T>(op: Containers.Operator<ObservableContainer, TReq, T>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
}) => StreamLike<TReq, T> & DisposableLike;
export default Stream_create;
