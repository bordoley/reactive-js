import { SchedulerLike } from '../scheduling/SchedulerLike.js';
import { StreamLike } from "./StreamLike.mjs";
declare const StreamableLike_stream: unique symbol;
interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>> {
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): TStream;
}
export { StreamableLike, StreamableLike_stream };
