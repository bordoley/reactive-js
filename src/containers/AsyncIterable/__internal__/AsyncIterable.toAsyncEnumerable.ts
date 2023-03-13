import { AsyncIterableLike } from "../../../containers.js";
import { error, pipe, returns } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  ObservableLike,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import { AsyncEnumerableLike, ToAsyncEnumerable } from "../../../streaming.js";
import Streamable_createLifted from "../../../streaming/Streamable/__internal__/Streamable.createLifted.js";
import { DisposableLike_dispose, QueueableLike_push } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";

const AsyncIterable_toAsyncEnumerable: ToAsyncEnumerable<AsyncIterableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ returns(
    (iterable: AsyncIterableLike): AsyncEnumerableLike =>
      Streamable_createLifted(
        observable =>
          Observable_create(observer => {
            const iterator = iterable[Symbol.asyncIterator]();

            pipe(
              observable,
              Observable_forEach<ObservableLike, void>(async _ => {
                try {
                  // Note: In theory a caller could dispatch multiple move requests
                  // without waiting for the responses. In this case, we don't guarantee
                  // the order in which they will be produced by the enumerator stream.
                  // they could very well be out of order depending on when the promises
                  // resolve.
                  const next = await iterator.next();

                  if (!next.done) {
                    observer[QueueableLike_push](next.value);
                  } else {
                    observer[DispatcherLike_complete]();
                  }
                } catch (e) {
                  observer[DisposableLike_dispose](error(e));
                }
              }),
              Observable_subscribe(observer[DispatcherLike_scheduler]),
              Disposable_addTo(observer),
              Disposable_onComplete(() => observer[DispatcherLike_complete]()),
            );
          }),
        true,
        false,
        false,
      ),
  );

export default AsyncIterable_toAsyncEnumerable;
