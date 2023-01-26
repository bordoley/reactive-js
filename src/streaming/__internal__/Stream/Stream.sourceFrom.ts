import { Function1, pipe } from "../../../functions";
import { StreamLike, StreamableLike } from "../../../streaming";
import Streamable$sinkInto from "../Streamable/Streamable.sinkInto";

const Stream$sourceFrom =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
    streamable: StreamableLike<TReq, T>,
  ): Function1<TSinkStream, TSinkStream> =>
  dest => {
    pipe(streamable, Streamable$sinkInto(dest));
    return dest;
  };

export default Stream$sourceFrom;
