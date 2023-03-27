import { none, pipe } from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ToObservable,
} from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import {
  AsyncEnumerableLike,
  StreamLike,
  StreamableLike_isEnumerable,
  StreamableLike_isRunnable,
  StreamableLike_stream,
} from "../../../streaming.js";
import {
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";

const AsyncEnumerable_toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =

    <T>() =>
    (enumerable: AsyncEnumerableLike<T>) => {
      const create = enumerable[StreamableLike_isEnumerable]
        ? Enumerable_create
        : enumerable[StreamableLike_isRunnable]
        ? Runnable_create
        : Observable_create;

      return create<T>((observer: ObserverLike<T>) => {
        const scheduler = observer[DispatcherLike_scheduler];
        const maxBufferSize = observer[QueueableLike_capacity];
        const enumerator: StreamLike<void, T> = pipe(
          enumerable[StreamableLike_stream](scheduler, { maxBufferSize }),
          Disposable_addTo<StreamLike<void, T>>(observer),
        );

        pipe(
          enumerator,
          Observable_forEach<ObservableLike, T>(_ => {
            enumerator[QueueableLike_enqueue](none);
          }),
          Observable_observeWith(observer),
        );

        enumerator[QueueableLike_enqueue](none);
      });
    };
export default AsyncEnumerable_toObservable;
