import { Function1 } from "../../../functions.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../streaming.js";

const Streamable_stream =
  <TReq, T, TStream extends StreamLike<TReq, T>>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<StreamableLike<TReq, T, TStream>, TStream> =>
  streamable =>
    streamable[StreamableLike_stream](scheduler, options);

export default Streamable_stream;
