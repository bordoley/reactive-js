import { none, pipe } from "../../../functions.js";
import { AsyncEnumerableLike } from "../../../ix.js";
import { ToObservable } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observer_getScheduler from "../../../rx/Observer/__internal__/Observer.getScheduler.js";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Queueable_push from "../../../util/Queueable/__internal__/Queueable.push.js";

const AsyncEnumerable_toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  () => enumerable =>
    Observable_create(observer => {
      const enumerator = pipe(
        enumerable,
        Streamable_stream(Observer_getScheduler(observer)),
        Disposable_addTo(observer),
      );

      pipe(
        enumerator,
        Observable_forEach(_ => {
          pipe(enumerator, Queueable_push(none));
        }),
        Observable_onSubscribe(() => {
          pipe(enumerator, Queueable_push(none));
        }),
        ReactiveContainer_sinkInto(observer),
      );
    });

export default AsyncEnumerable_toObservable;
