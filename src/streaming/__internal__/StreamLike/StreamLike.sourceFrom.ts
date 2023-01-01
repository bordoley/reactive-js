import { Function1, pipe } from "../../../functions";
import { StreamLike, StreamableLike } from "../../../streaming";
import { sinkInto } from "../../StreamableLike";

const StreamLike__sourceFrom =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
    streamable: StreamableLike<TReq, T>,
  ): Function1<TSinkStream, TSinkStream> =>
  dest => {
    pipe(streamable, sinkInto(dest));
    return dest;
  };

export default StreamLike__sourceFrom;
