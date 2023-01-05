import { Function1, pipe } from "../../../functions";
import { StreamLike, StreamableLike } from "../../../streaming";
import StreamableLike__sinkInto from "../StreamableLike/StreamableLike.sinkInto";

const StreamLike__sourceFrom =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
    streamable: StreamableLike<TReq, T>,
  ): Function1<TSinkStream, TSinkStream> =>
  dest => {
    pipe(streamable, StreamableLike__sinkInto(dest));
    return dest;
  };

export default StreamLike__sourceFrom;
