import Container$ignoreElements from "../../../containers/__internal__/Container/Container.ignoreElements";
import { pipe } from "../../../functions";
import Observable$forEach from "../../../rx/__internal__/Observable/Observable.forEach";
import Observable$keep from "../../../rx/__internal__/Observable/Observable.keep";
import Observable$merge from "../../../rx/__internal__/Observable/Observable.merge";
import Observable$onSubscribe from "../../../rx/__internal__/Observable/Observable.onSubscribe";
import Observable$subscribe from "../../../rx/__internal__/Observable/Observable.subscribe";
import { DispatcherLike_scheduler } from "../../../scheduling";
import Dispatcher$dispatchTo from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatchTo";
import { StreamLike, StreamableLike } from "../../../streaming";
import Disposable$add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";

import Streamable$stream from "./Streamable.stream";

const Streamable$sinkInto =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(dest: TSinkStream) =>
  (src: StreamableLike<TReq, T>): StreamableLike<TReq, T> => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, Streamable$stream(scheduler));

    pipe(
      Observable$merge(
        pipe(
          srcStream,
          Observable$forEach(Dispatcher$dispatchTo(dest)),
          Container$ignoreElements({ keep: Observable$keep }),
          Observable$onSubscribe(() => dest),
        ),
        pipe(
          dest,
          Observable$forEach<TReq>(Dispatcher$dispatchTo(srcStream)),
          Container$ignoreElements({ keep: Observable$keep }),
        ),
      ),
      Container$ignoreElements({ keep: Observable$keep }),
      Observable$subscribe(scheduler),
      Disposable$addTo(dest),
      Disposable$add(srcStream),
    );

    return src;
  };

export default Streamable$sinkInto;
