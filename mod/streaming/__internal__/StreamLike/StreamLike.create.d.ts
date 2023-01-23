import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
declare const StreamLike__create: <TReq, T>(op: ContainerOperator<ObservableLike<unknown>, TReq, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => StreamLike<TReq, T>;
export { StreamLike__create as default };
