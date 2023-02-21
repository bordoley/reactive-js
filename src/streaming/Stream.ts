import { Function1 } from "../functions.js";
import { StreamLike, StreamableLike } from "../streaming.js";

import Stream_sourceFrom from "./Stream/__internal__/Stream.sourceFrom.js";

export const sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
  streamable: StreamableLike<TReq, T>,
) => Function1<TSinkStream, TSinkStream> = Stream_sourceFrom;

/** @ignore */
const Stream = {
  sourceFrom,
};

export default Stream;
