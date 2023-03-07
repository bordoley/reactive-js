import { none, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
  ToObservable,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";
import { QueueLike_push } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";

const AsyncEnumerable_toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =

    <T>() =>
    (enumerable: AsyncEnumerableLike<T>) =>
      Observable_create<T>((observer: ObserverLike<T>) => {
        const enumerator: StreamLike<void, T> = pipe(
          enumerable,
          Streamable_stream<void, T>(observer[ObserverLike_scheduler]),
          Disposable_addTo<StreamLike<void, T>>(observer),
        );

        pipe(
          enumerator,
          Observable_forEach<ObservableLike, T>(_ => {
            enumerator[QueueLike_push](none);
          }),
          Observable_onSubscribe(() => {
            enumerator[QueueLike_push](none);
          }),
          Observable_observeWith(observer),
        );
      });

export default AsyncEnumerable_toObservable;
