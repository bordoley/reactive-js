import { Function1 } from "../functions.js";
import { StreamLike, StreamableLike } from "../streaming.js";

import Stream_sourceFrom from "./Stream/__internal__/Stream.sourceFrom.js";
import Stream_syncState from "./Stream/__internal__/Stream.syncState.js";

export const sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
  streamable: StreamableLike<TReq, T>,
) => Function1<TSinkStream, TSinkStream> = Stream_sourceFrom;

export const syncState = Stream_syncState;
