import { Function1 } from "../functions.mjs";
import { StreamLike, StreamableLike } from "../streaming.mjs";
declare const sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(streamable: StreamableLike<TReq, T>) => Function1<TSinkStream, TSinkStream>;
export { sourceFrom };
