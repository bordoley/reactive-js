import { Function1, pipe } from "../../../functions";
import { StreamLike, StreamableLike } from "../../../streaming";
import Streamable_sinkInto from "../Streamable/Streamable.sinkInto";

const Stream_sourceFrom =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
    streamable: StreamableLike<TReq, T>,
  ): Function1<TSinkStream, TSinkStream> =>
  dest => {
    pipe(streamable, Streamable_sinkInto(dest));
    return dest;
  };

export default Stream_sourceFrom;
