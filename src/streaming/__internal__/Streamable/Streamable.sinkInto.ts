import Container_ignoreElements from "../../../containers/__internal__/Container/Container.ignoreElements";
import { pipe } from "../../../functions";
import Observable_forEach from "../../../rx/__internal__/Observable/Observable.forEach";
import Observable_keep from "../../../rx/__internal__/Observable/Observable.keep";
import Observable_merge from "../../../rx/__internal__/Observable/Observable.merge";
import Observable_onSubscribe from "../../../rx/__internal__/Observable/Observable.onSubscribe";
import Observable_subscribe from "../../../rx/__internal__/Observable/Observable.subscribe";
import { DispatcherLike_scheduler } from "../../../scheduling";
import Dispatcher_dispatchTo from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatchTo";
import { StreamLike, StreamableLike } from "../../../streaming";
import Disposable_add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";

import Streamable_stream from "./Streamable.stream";

const Streamable_sinkInto =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(dest: TSinkStream) =>
  (src: StreamableLike<TReq, T>): StreamableLike<TReq, T> => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, Streamable_stream(scheduler));

    pipe(
      Observable_merge(
        pipe(
          srcStream,
          Observable_forEach(Dispatcher_dispatchTo(dest)),
          Container_ignoreElements({ keep: Observable_keep }),
          Observable_onSubscribe(() => dest),
        ),
        pipe(
          dest,
          Observable_forEach<TReq>(Dispatcher_dispatchTo(srcStream)),
          Container_ignoreElements({ keep: Observable_keep }),
        ),
      ),
      Container_ignoreElements({ keep: Observable_keep }),
      Observable_subscribe(scheduler),
      Disposable_addTo(dest),
      Disposable_add(srcStream),
    );

    return src;
  };

export default Streamable_sinkInto;
