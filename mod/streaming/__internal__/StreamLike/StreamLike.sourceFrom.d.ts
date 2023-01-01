import { Function1 } from "../../../functions.mjs";
import { StreamLike, StreamableLike } from "../../../streaming.mjs";
declare const StreamLike__sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(streamable: StreamableLike<TReq, T, StreamLike<TReq, T>>) => Function1<TSinkStream, TSinkStream>;
export { StreamLike__sourceFrom as default };
