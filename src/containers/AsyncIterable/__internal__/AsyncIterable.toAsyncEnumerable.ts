import { AsyncIterableLike } from "../../../containers.js";
import { error, pipe, returns } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import Observer_getDispatcher from "../../../rx/Observer/__internal__/Observer.getDispatcher.js";
import Observer_getScheduler from "../../../rx/Observer/__internal__/Observer.getScheduler.js";
import { AsyncEnumerableLike, ToAsyncEnumerable } from "../../../streaming.js";
import AsyncEnumerable_create from "../../../streaming/AsyncEnumerable/__internal__/AsyncEnumerable.create.js";
import { QueueLike_push } from "../../../util.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";

const AsyncIterable_toAsyncEnumerable: ToAsyncEnumerable<AsyncIterableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ returns(
    (iterable: AsyncIterableLike): AsyncEnumerableLike =>
      AsyncEnumerable_create(observable =>
        Observable_create(observer => {
          const dispatcher = Observer_getDispatcher(observer);
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

                if (!next.done && !Disposable_isDisposed(dispatcher)) {
                  dispatcher[QueueLike_push](next.value);
                } else {
                  pipe(dispatcher, Disposable_dispose());
                }
              } catch (e) {
                pipe(dispatcher, Disposable_dispose(error(e)));
              }
            }),
            Observable_subscribe(Observer_getScheduler(observer)),
            Disposable_bindTo(observer),
          );
        }),
      ),
  );

export default AsyncIterable_toAsyncEnumerable;
