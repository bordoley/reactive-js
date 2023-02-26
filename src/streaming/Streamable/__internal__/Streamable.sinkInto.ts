import { pipe } from "../../../functions.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import { StreamLike, StreamableLike } from "../../../streaming.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Queue_pushTo from "../../../util/Queue/__internal__/Queue.pushTo.js";

import Streamable_stream from "./Streamable.stream.js";

const Streamable_sinkInto =
  <TReq, T>(dest: StreamLike<T, TReq>) =>
  (src: StreamableLike<TReq, T>): StreamableLike<TReq, T> => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, Streamable_stream(scheduler));

    pipe(
      Observable_merge(
        pipe(
          srcStream,
          Observable_forEach(Queue_pushTo(dest)),
          Observable_ignoreElements(),
          Observable_onSubscribe(() => dest),
        ),
        pipe(
          dest,
          Observable_forEach<TReq>(Queue_pushTo(srcStream)),
          Observable_ignoreElements(),
        ),
      ),
      Observable_ignoreElements(),
      Observable_subscribe(scheduler),
      Disposable_addTo(dest),
      Disposable_add(srcStream),
    );

    return src;
  };

export default Streamable_sinkInto;
