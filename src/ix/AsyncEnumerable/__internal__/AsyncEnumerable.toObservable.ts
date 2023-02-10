import { none, pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import { ToObservable } from "../../../rx";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe";
import Observer_getScheduler from "../../../rx/Observer/__internal__/Observer.getScheduler";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto";
import RunnableObservable_create from "../../../rx/RunnableObservable/__internal__/RunnableObservable.create";
import Dispatcher_dispatch from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";

const AsyncEnumerable_toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  () => enumerable =>
    // FIXME: Fairly sketchy. Need a way to prove any async enumerable is actually pure.
    RunnableObservable_create(observer => {
      const enumerator = pipe(
        enumerable,
        Streamable_stream(Observer_getScheduler(observer)),
        Disposable_addTo(observer),
      );

      pipe(
        enumerator,
        Observable_forEach(_ => {
          pipe(enumerator, Dispatcher_dispatch(none));
        }),
        Observable_onSubscribe(() => {
          pipe(enumerator, Dispatcher_dispatch(none));
        }),
        ReactiveContainer_sinkInto(observer),
      );
    });

export default AsyncEnumerable_toObservable;
