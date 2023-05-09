import { Container, DeferredObservableContainer } from "../../containers.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike, StreamLike } from "../../types.js";
declare const Stream_create: <TReq, T>(op: Container.Operator<DeferredObservableContainer.Type, TReq, T>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
}) => StreamLike<TReq, T> & DisposableLike;
export default Stream_create;
