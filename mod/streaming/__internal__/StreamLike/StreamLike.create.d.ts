import { ContainerOperator } from "../../../containers.mjs";
import { ObservableLike } from "../../../rx.mjs";
import { SchedulerLike } from "../../../scheduling.mjs";
import { StreamLike } from "../../../streaming.mjs";
declare const StreamLike__create: <TReq, T>(op: ContainerOperator<ObservableLike<unknown>, TReq, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => StreamLike<TReq, T>;
export { StreamLike__create as default };
