import { Function1, pipe } from "../../../functions.js";
import { StreamLike, StreamableLike } from "../../../streaming.js";
import Streamable_sinkInto from "../../Streamable/__internal__/Streamable.sinkInto.js";

const Stream_sourceFrom =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
    streamable: StreamableLike<TReq, T>,
  ): Function1<TSinkStream, TSinkStream> =>
  dest => {
    pipe(streamable, Streamable_sinkInto(dest));
    return dest;
  };

export default Stream_sourceFrom;
