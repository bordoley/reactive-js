import Container_ignoreElements from "../../../containers/Container/__internal__/Container.ignoreElements.js";
import { pipe } from "../../../functions.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import Dispatcher_dispatchTo from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatchTo.js";
import { StreamLike, StreamableLike } from "../../../streaming.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";

import Streamable_stream from "./Streamable.stream.js";

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
