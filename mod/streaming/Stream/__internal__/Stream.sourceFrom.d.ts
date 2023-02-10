import { Function1 } from "../../../functions.js";
import { StreamLike, StreamableLike } from "../../../streaming.js";
declare const Stream_sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(streamable: StreamableLike<TReq, T, StreamLike<TReq, T>>) => Function1<TSinkStream, TSinkStream>;
export { Stream_sourceFrom as default };
