import { none, pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import { ToObservable } from "../../../rx";
import Observable_forEach from "../../../rx/__internal__/Observable/Observable.forEach";
import Observable_onSubscribe from "../../../rx/__internal__/Observable/Observable.onSubscribe";
import Observer_getScheduler from "../../../rx/__internal__/Observer/Observer.getScheduler";
import ReactiveContainer_sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import RunnableObservable_create from "../../../rx/__internal__/RunnableObservable/RunnableObservable.create";
import Dispatcher_dispatch from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch";
import Streamable_stream from "../../../streaming/__internal__/Streamable/Streamable.stream";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";

const AsyncEnumerable_toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  () => enumerable =>
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
