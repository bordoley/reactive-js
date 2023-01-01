import { ignoreElements } from "../../../containers/ContainerLike";
import { pipe } from "../../../functions";
import {
  forEach,
  keepT,
  merge,
  onSubscribe,
  subscribe,
} from "../../../rx/ObservableLike";
import { DispatcherLike_scheduler } from "../../../scheduling";
import { dispatchTo } from "../../../scheduling/DispatcherLike";
import { StreamLike, StreamableLike } from "../../../streaming";
import { add, addTo } from "../../../util/DisposableLike";

import StreamableLike__stream from "./StreamableLike.stream";

const StreamableLike__sinkInto =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(dest: TSinkStream) =>
  (src: StreamableLike<TReq, T>): StreamableLike<TReq, T> => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, StreamableLike__stream(scheduler));

    pipe(
      merge(
        pipe(
          srcStream,
          forEach(dispatchTo(dest)),
          ignoreElements(keepT),
          onSubscribe(() => dest),
        ),
        pipe(dest, forEach<TReq>(dispatchTo(srcStream)), ignoreElements(keepT)),
      ),
      ignoreElements(keepT),
      subscribe(scheduler),
      addTo(dest),
      add(srcStream),
    );

    return src;
  };

export default StreamableLike__sinkInto;
