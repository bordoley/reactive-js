import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { FlowableStreamLike } from "../../../streaming.js";
declare const FlowableStream_create: (op: ContainerOperator<ObservableLike<unknown>, boolean, unknown>, scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
    readonly maxBufferSize?: number | undefined;
} | undefined) => FlowableStreamLike<unknown>;
export default FlowableStream_create;
