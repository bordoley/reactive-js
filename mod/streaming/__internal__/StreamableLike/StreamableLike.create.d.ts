import { SchedulerLike } from "../../../scheduling.mjs";
import { StreamLike, StreamableLike } from "../../../streaming.mjs";
declare const create: <TReq, TData, TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>>(stream: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => TStream) => StreamableLike<TReq, TData, TStream>;
export { create as default };
