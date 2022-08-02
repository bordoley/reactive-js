import { ignoreElements } from "../containers/ContainerLike";
import { Function1, pipe } from "../functions";
import {
  forEach,
  keepT,
  merge,
  onSubscribe,
  subscribe,
} from "../rx/ObservableLike";
import { DispatcherLike_scheduler, SchedulerLike } from "../scheduling";
import { dispatchTo } from "../scheduling/DispatcherLike";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming";
import { add, addTo } from "../util/DisposableLike";

export const stream =
  <TReq, T, TStream extends StreamLike<TReq, T>>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<StreamableLike<TReq, T, TStream>, TStream> =>
  streamable =>
    streamable[StreamableLike_stream](scheduler, options);

export const sinkInto =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(dest: TSinkStream) =>
  (src: StreamableLike<TReq, T>): StreamableLike<TReq, T> => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, stream(scheduler));

    pipe(
      merge(
        pipe(
          srcStream,
          forEach<T>(dispatchTo(dest)),
          ignoreElements(keepT),
          onSubscribe(() => dest),
        ),
        pipe(dest, forEach(dispatchTo(srcStream)), ignoreElements(keepT)),
      ),
      ignoreElements(keepT),
      subscribe(scheduler),
      addTo(dest),
      add(srcStream),
    );

    return src;
  };
