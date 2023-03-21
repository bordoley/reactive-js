import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { FlowableState, FlowableStreamLike } from "../../../streaming.js";
declare const FlowableStream_create: (op: ContainerOperator<ObservableLike<unknown>, FlowableState, unknown>, scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
    readonly maxBufferSize?: number | undefined;
} | undefined) => FlowableStreamLike<unknown>;
export default FlowableStream_create;
