import { StreamLike, StreamableLike } from "../../../streaming.js";
import { DisposableLike } from "../../../util.js";
declare const Streamable_sinkInto: <TReq, T>(dest: StreamLike<T, TReq>) => (src: StreamableLike<TReq, T, StreamLike<TReq, T>>) => DisposableLike;
export default Streamable_sinkInto;
