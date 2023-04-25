import { StreamLike } from "../../../streaming.js";
import { DisposableLike } from "../../../util.js";
declare const Stream_sinkInto: <TReq, T>(dest: StreamLike<T, TReq>) => (src: StreamLike<TReq, T>) => DisposableLike;
export default Stream_sinkInto;
