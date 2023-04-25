import { bindMethod, pipe, returns } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_enqueue from "../../../rx/Observable/__internal__/Observable.enqueue.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observable_subscribeWithConfig from "../../../rx/Observable/__internal__/Observable.subscribeWithConfig.js";
import { StreamLike, StreamLike_scheduler } from "../../../streaming.js";
import { DispatcherLike_complete, DisposableLike } from "../../../util.js";

const Stream_sinkInto =
  <TReq, T>(dest: StreamLike<T, TReq>) =>
  (src: StreamLike<TReq, T>): DisposableLike => {
    return pipe(
      Observable_merge(
        pipe(
          src,
          Observable_enqueue<ObservableLike, T>(dest),
          Observable_ignoreElements<ObservableLike, unknown>(),
          Observable_onSubscribe(
            returns(bindMethod(dest, DispatcherLike_complete)),
          ),
        ),
        pipe(
          dest,
          Observable_enqueue<ObservableLike, TReq>(src),
          Observable_ignoreElements<ObservableLike, unknown>(),
        ),
      ),
      Observable_ignoreElements<ObservableLike, unknown>(),
      Observable_subscribeWithConfig(dest[StreamLike_scheduler], dest),
    );
  };

export default Stream_sinkInto;
