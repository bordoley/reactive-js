import { Function1 } from "../functions.js";
import { StreamLike, StreamableLike } from "../streaming.js";
declare const sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(streamable: StreamableLike<TReq, T>) => Function1<TSinkStream, TSinkStream>;
export { sourceFrom };
