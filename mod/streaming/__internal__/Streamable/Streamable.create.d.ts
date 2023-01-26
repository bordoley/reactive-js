import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike, StreamableLike } from "../../../streaming.js";
declare const Streamable$create: <TReq, TData, TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>>(stream: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => TStream) => StreamableLike<TReq, TData, TStream>;
export { Streamable$create as default };
