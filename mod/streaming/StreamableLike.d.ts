import { Function1 } from "../functions.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { StreamLike, StreamableLike } from "../streaming.mjs";
declare const stream: <TReq, T, TStream extends StreamLike<TReq, T>>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<StreamableLike<TReq, T, TStream>, TStream>;
declare const sinkInto: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(dest: TSinkStream) => (src: StreamableLike<TReq, T, StreamLike<TReq, T>>) => StreamableLike<TReq, T, StreamLike<TReq, T>>;
export { sinkInto, stream };
