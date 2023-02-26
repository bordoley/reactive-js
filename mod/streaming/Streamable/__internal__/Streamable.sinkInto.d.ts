import { StreamLike, StreamableLike } from "../../../streaming.js";
declare const Streamable_sinkInto: <TReq, T>(dest: StreamLike<T, TReq>) => (src: StreamableLike<TReq, T, StreamLike<TReq, T>>) => StreamableLike<TReq, T, StreamLike<TReq, T>>;
export default Streamable_sinkInto;
