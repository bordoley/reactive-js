import { AsyncIterableLike } from "../../../containers.js";
import { pipe, returns } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  ObservableLike,
} from "../../../rx.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithMaxBufferSize from "../../../rx/Observable/__internal__/Observable.subscribeWithMaxBufferSize.js";
import { AsyncEnumerableLike, ToAsyncEnumerable } from "../../../streaming.js";
import Streamable_createLifted from "../../../streaming/Streamable/__internal__/Streamable.createLifted.js";
import {
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Promiseable_toObservable from "../../Promiseable/__internal__/Promiseable.toObservable.js";

const AsyncIterable_toAsyncEnumerable: ToAsyncEnumerable<AsyncIterableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ returns(
    (iterable: AsyncIterableLike): AsyncEnumerableLike =>
      Streamable_createLifted(
        observable =>
          Observable_create(observer => {
            const iterator = iterable[Symbol.asyncIterator]();

            pipe(
              observable,
              Observable_concatMap<void, IteratorResult<unknown, any>>(_ =>
                pipe(iterator.next(), Promiseable_toObservable()),
              ),
              Observable_forEach<ObservableLike, IteratorResult<unknown, any>>(
                result => {
                  if (!result.done) {
                    observer[QueueableLike_push](result.value);
                  } else {
                    observer[DispatcherLike_complete]();
                  }
                },
              ),
              Observable_subscribeWithMaxBufferSize(
                observer[DispatcherLike_scheduler],
                observer[QueueableLike_maxBufferSize],
              ),
              Disposable_addTo(observer),
              Disposable_onComplete(
                observer[DispatcherLike_complete],
                observer,
              ),
            );
          }),
        true,
        false,
        false,
      ),
  );

export default AsyncIterable_toAsyncEnumerable;
