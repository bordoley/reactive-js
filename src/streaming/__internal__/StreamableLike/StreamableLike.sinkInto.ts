import ContainerLike__ignoreElements from "../../../containers/__internal__/ContainerLike/ContainerLike.ignoreElements";
import { pipe } from "../../../functions";
import ObservableLike__forEach from "../../../rx/__internal__/ObservableLike/ObservableLike.forEach";
import ObservableLike__keep from "../../../rx/__internal__/ObservableLike/ObservableLike.keep";
import ObservableLike__merge from "../../../rx/__internal__/ObservableLike/ObservableLike.merge";
import ObservableLike__onSubscribe from "../../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe";
import ObservableLike__subscribe from "../../../rx/__internal__/ObservableLike/ObservableLike.subscribe";
import { DispatcherLike_scheduler } from "../../../scheduling";
import DispatcherLike__dispatchTo from "../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatchTo";
import { StreamLike, StreamableLike } from "../../../streaming";
import DisposableLike__add from "../../../util/__internal__/DisposableLike/DisposableLike.add";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";

import StreamableLike__stream from "./StreamableLike.stream";

const StreamableLike__sinkInto =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(dest: TSinkStream) =>
  (src: StreamableLike<TReq, T>): StreamableLike<TReq, T> => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, StreamableLike__stream(scheduler));

    pipe(
      ObservableLike__merge(
        pipe(
          srcStream,
          ObservableLike__forEach(DispatcherLike__dispatchTo(dest)),
          ContainerLike__ignoreElements({ keep: ObservableLike__keep }),
          ObservableLike__onSubscribe(() => dest),
        ),
        pipe(
          dest,
          ObservableLike__forEach<TReq>(DispatcherLike__dispatchTo(srcStream)),
          ContainerLike__ignoreElements({ keep: ObservableLike__keep }),
        ),
      ),
      ContainerLike__ignoreElements({ keep: ObservableLike__keep }),
      ObservableLike__subscribe(scheduler),
      DisposableLike__addTo(dest),
      DisposableLike__add(srcStream),
    );

    return src;
  };

export default StreamableLike__sinkInto;
