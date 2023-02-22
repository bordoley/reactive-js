import { Function1 } from "../functions.js";
import { StreamLike, StreamableLike } from "../streaming.js";
export declare const sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(streamable: StreamableLike<TReq, T>) => Function1<TSinkStream, TSinkStream>;
/** @ignore */
declare const Stream: {
    sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(streamable: StreamableLike<TReq, T, StreamLike<TReq, T>>) => Function1<TSinkStream, TSinkStream>;
};
export default Stream;
