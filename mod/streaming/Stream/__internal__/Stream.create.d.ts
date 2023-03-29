import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Stream_create: <TReq, T>(op: ContainerOperator<ObservableLike<unknown>, TReq, T>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
}) => StreamLike<TReq, T>;
export default Stream_create;
