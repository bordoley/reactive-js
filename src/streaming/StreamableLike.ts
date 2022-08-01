import { Function1 } from "../functions";
import { SchedulerLike } from "../scheduling";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming";

export const stream =
  <TReq, T, TStream extends StreamLike<TReq, T>>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<StreamableLike<TReq, T, TStream>, TStream> =>
  streamable =>
    streamable[StreamableLike_stream](scheduler, options);

/*
    export const sinkInto =
    <TReq, T, TSinkStream extends StreamLike<T, TReq>>(dest: TSinkStream) =>
    (src: StreamableLike<TReq, T>): StreamableLike<TReq, T> => {
      const { scheduler } = dest;
      const srcStream = pipe(src, stream(scheduler));
  
      pipe(
        merge(
          pipe(
            srcStream,
            onNotify<T>(dispatchTo(dest)),
            ignoreElements(keepT),
            onSubscribe(() => dest),
          ),
          pipe(dest, onNotify(dispatchTo(srcStream)), ignoreElements(keepT)),
        ),
        ignoreElements(keepT),
        subscribe(scheduler),
        addTo(dest),
        add(srcStream),
      );
  
      return src;
    };
  */
