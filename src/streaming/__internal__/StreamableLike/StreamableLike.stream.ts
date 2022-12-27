import { Function1 } from "../../../functions";
import { SchedulerLike } from "../../../scheduling";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../streaming";

const stream =
  <TReq, T, TStream extends StreamLike<TReq, T>>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<StreamableLike<TReq, T, TStream>, TStream> =>
  streamable =>
    streamable[StreamableLike_stream](scheduler, options);

export default stream;
