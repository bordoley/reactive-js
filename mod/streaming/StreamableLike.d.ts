import { Function1 } from "../functions.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { StreamLike, StreamableLike } from "../streaming.mjs";
declare const stream: <TReq, T, TStream extends StreamLike<TReq, T>>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<StreamableLike<TReq, T, TStream>, TStream>;
export { stream };
