import { newInstance } from "../../../functions.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../streaming.js";

const Streamable_stream = Symbol("Streamable_stream");

class Streamable<
  TReq,
  TData,
  TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>,
> implements StreamableLike<TReq, TData, TStream>
{
  readonly [Streamable_stream]: (
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ) => TStream;

  constructor(
    stream: (
      scheduler: SchedulerLike,
      options?: { readonly replay?: number },
    ) => TStream,
  ) {
    this[Streamable_stream] = stream;
  }

  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): TStream {
    return this[Streamable_stream](scheduler, options);
  }
}

const Streamable_create = <
  TReq,
  TData,
  TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>,
>(
  stream: (
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ) => TStream,
): StreamableLike<TReq, TData, TStream> => newInstance(Streamable, stream);

export default Streamable_create;
