import { newInstance } from "../../../functions";
import { SchedulerLike } from "../../../scheduling";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../streaming";

const Streamable$create = /*@__PURE__*/ (() => {
  class CreateStreamable<
    TReq,
    TData,
    TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>,
  > implements StreamableLike<TReq, TData, TStream>
  {
    constructor(
      readonly stream: (
        scheduler: SchedulerLike,
        options?: { readonly replay?: number },
      ) => TStream,
    ) {}

    [StreamableLike_stream](
      scheduler: SchedulerLike,
      options?: { readonly replay?: number },
    ): TStream {
      return this.stream(scheduler, options);
    }
  }

  return <
    TReq,
    TData,
    TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>,
  >(
    stream: (
      scheduler: SchedulerLike,
      options?: { readonly replay?: number },
    ) => TStream,
  ): StreamableLike<TReq, TData, TStream> =>
    newInstance(CreateStreamable, stream);
})();

export default Streamable$create;
