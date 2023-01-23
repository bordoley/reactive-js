import { StreamLike, StreamableLike } from "../../../streaming.js";
declare const StreamableLike__sinkInto: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(dest: TSinkStream) => (src: StreamableLike<TReq, T, StreamLike<TReq, T>>) => StreamableLike<TReq, T, StreamLike<TReq, T>>;
export { StreamableLike__sinkInto as default };
