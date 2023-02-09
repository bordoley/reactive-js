import { Function1 } from "../functions";
import { StreamLike, StreamableLike } from "../streaming";

import Stream_sourceFrom from "./__internal__/Stream/Stream.sourceFrom";

export const sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
  streamable: StreamableLike<TReq, T>,
) => Function1<TSinkStream, TSinkStream> = Stream_sourceFrom;

/** @ignore */
const Stream = {
  sourceFrom,
};

export default Stream;
