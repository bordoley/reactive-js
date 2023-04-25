import { AsyncIterableLike } from "../../../containers.js";
import { bindMethod, pipe } from "../../../functions.js";
import { EnumerateAsync, ObservableLike } from "../../../rx.js";
import InteractiveObservable_create from "../../../rx/InteractiveObservableLike/__internal__/InteractiveObservable.create.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../../rx/Observable/__internal__/Observable.subscribeWithConfig.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  DispatcherLike_complete,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Promiseable_toObservable from "../../Promiseable/__internal__/Promiseable.toObservable.js";

const AsyncIterable_enumerateAsync: EnumerateAsync<AsyncIterableLike>["enumerateAsync"] =

    <T>(
      scheduler: SchedulerLike,
      options?: {
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      },
    ) =>
    (iterable: AsyncIterableLike) =>
      InteractiveObservable_create<T>(
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
                    observer[QueueableLike_enqueue](result.value);
                  } else {
                    observer[DispatcherLike_complete]();
                  }
                },
              ),
              Observable_subscribeWithConfig(observer, observer),
              Disposable_addTo(observer),
              Disposable_onComplete(
                bindMethod(observer, DispatcherLike_complete),
              ),
            );
          }),
        scheduler,
        options,
      );

export default AsyncIterable_enumerateAsync;
