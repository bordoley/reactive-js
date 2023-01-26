import { Function1 } from "../../../functions.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike, StreamableLike } from "../../../streaming.js";
declare const Streamable$stream: <TReq, T, TStream extends StreamLike<TReq, T>>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<StreamableLike<TReq, T, TStream>, TStream>;
export { Streamable$stream as default };
