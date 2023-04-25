import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { FlowableStreamLike } from "../../../streaming.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const FlowableStream_create: <T>(op: ContainerOperator<ObservableLike, boolean, T>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
}) => FlowableStreamLike<T> & DisposableLike;
export default FlowableStream_create;
