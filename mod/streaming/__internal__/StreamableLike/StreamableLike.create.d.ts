import { SchedulerLike } from "../../../scheduling.mjs";
import { StreamLike, StreamableLike } from "../../../streaming.mjs";
declare const StreamableLike__create: <TReq, TData, TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>>(stream: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => TStream) => StreamableLike<TReq, TData, TStream>;
export { StreamableLike__create as default };
