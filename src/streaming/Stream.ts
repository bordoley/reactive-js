import { Function1 } from "../functions";
import { StreamLike, StreamableLike } from "../streaming";

import Stream$sourceFrom from "./__internal__/Stream/Stream.sourceFrom";

export const sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
  streamable: StreamableLike<TReq, T>,
) => Function1<TSinkStream, TSinkStream> = Stream$sourceFrom;
