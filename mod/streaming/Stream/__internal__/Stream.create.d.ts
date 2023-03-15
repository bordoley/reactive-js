import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
declare const Stream_create: <TReq, T>(op: ContainerOperator<ObservableLike<unknown>, TReq, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
    readonly maxBufferSize?: number;
}) => StreamLike<TReq, T>;
export default Stream_create;
