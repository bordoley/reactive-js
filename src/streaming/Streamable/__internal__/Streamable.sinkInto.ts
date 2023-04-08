import { bindMethod, pipe, returns } from "../../../functions.js";
import { DispatcherLike_complete, ObservableLike } from "../../../rx.js";
import Observable_enqueue from "../../../rx/Observable/__internal__/Observable.enqueue.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_subscribeWithConfig from "../../../rx/Observable/__internal__/Observable.subscribeWithConfig.js";
import {
  StreamLike,
  StreamLike_scheduler,
  StreamableLike,
  StreamableLike_stream,
} from "../../../streaming.js";
import {
  BufferLike_capacity,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";

const Streamable_sinkInto =
  <TReq, T>(dest: StreamLike<T, TReq>) =>
  (src: StreamableLike<TReq, T>): StreamableLike<TReq, T> => {
    const capacity = dest[BufferLike_capacity];
    const backpressureStrategy = dest[QueueableLike_backpressureStrategy];
    const srcStream = src[StreamableLike_stream](dest[StreamLike_scheduler], {
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
      Observable_subscribeWithConfig(dest[StreamLike_scheduler], dest),
      Disposable_addTo(dest),
      Disposable_add(srcStream),
    );

    return src;
  };

export default Streamable_sinkInto;
