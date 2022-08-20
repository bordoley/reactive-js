import { ContainerOperator } from "../../containers.mjs";
import { ObservableLike } from "../../rx.mjs";
import { SchedulerLike } from "../../scheduling.mjs";
import { StreamLike } from "../../streaming.mjs";
import { Mixin3 } from "../util/__internal__Objects.mjs";
declare const streamMixin: <TReq, T>() => Mixin3<StreamLike<TReq, T>, ContainerOperator<ObservableLike, TReq, T>, SchedulerLike, number>;
declare const createStream: <TReq, T>(op: ContainerOperator<ObservableLike<unknown>, TReq, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => StreamLike<TReq, T>;
export { createStream, streamMixin };
