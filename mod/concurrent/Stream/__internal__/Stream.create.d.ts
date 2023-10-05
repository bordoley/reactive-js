import { DeferredObservableLike, SchedulerLike, StreamLike } from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../utils.js";
declare const Stream_create: <TReq, T>(op: Function1<DeferredObservableLike<TReq>, DeferredObservableLike<T>>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
}) => StreamLike<TReq, T> & DisposableLike;
export default Stream_create;
