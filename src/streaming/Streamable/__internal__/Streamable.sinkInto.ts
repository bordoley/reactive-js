import { bindMethod, pipe, returns } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  ObservableLike,
} from "../../../rx.js";
import Observable_enqueue from "../../../rx/Observable/__internal__/Observable.enqueue.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "../../../rx/Observable/__internal__/Observable.subscribeWithCapacityAndBackpressureStrategy.js";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../streaming.js";
import {
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";

const Streamable_sinkInto =
  <TReq, T>(dest: StreamLike<T, TReq>) =>
  (src: StreamableLike<TReq, T>): StreamableLike<TReq, T> => {
    const scheduler = dest[DispatcherLike_scheduler];
    const capacity = dest[QueueableLike_capacity];
    const backpressureStrategy = dest[QueueableLike_backpressureStrategy];
    const srcStream = src[StreamableLike_stream](scheduler, {
      backpressureStrategy,
      capacity,
    });

    pipe(
      Observable_merge(
        pipe(
          srcStream,
          Observable_enqueue<ObservableLike, T>(dest),
          Observable_ignoreElements<ObservableLike, unknown>(),
          Observable_onSubscribe(
            returns(bindMethod(dest, DispatcherLike_complete)),
          ),
        ),
        pipe(
          dest,
          Observable_enqueue<ObservableLike, TReq>(srcStream),
          Observable_ignoreElements<ObservableLike, unknown>(),
        ),
      ),
      Observable_ignoreElements<ObservableLike, unknown>(),
      Observable_subscribeWithCapacityAndBackpressureStrategy(
        scheduler,
        dest[QueueableLike_capacity],
        dest[QueueableLike_backpressureStrategy],
      ),
      Disposable_addTo(dest),
      Disposable_add(srcStream),
    );

    return src;
  };

export default Streamable_sinkInto;
