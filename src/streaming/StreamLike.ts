import { Function1 } from "../functions";
import { StreamLike, StreamableLike } from "../streaming";

import StreamLike__sourceFrom from "./__internal__/StreamLike/StreamLike.sourceFrom";

export const sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
  streamable: StreamableLike<TReq, T>,
) => Function1<TSinkStream, TSinkStream> = StreamLike__sourceFrom;
