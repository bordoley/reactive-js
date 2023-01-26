import { none, pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import { ToObservable } from "../../../rx";
import Observable$forEach from "../../../rx/__internal__/Observable/Observable.forEach";
import Observable$onSubscribe from "../../../rx/__internal__/Observable/Observable.onSubscribe";
import Observer$getScheduler from "../../../rx/__internal__/Observer/Observer.getScheduler";
import ReactiveContainer$sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import RunnableObservable$create from "../../../rx/__internal__/RunnableObservable/RunnableObservable.create";
import Dispatcher$dispatch from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch";
import Streamable$stream from "../../../streaming/__internal__/Streamable/Streamable.stream";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";

const AsyncEnumerable$toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  () => enumerable =>
    RunnableObservable$create(observer => {
      const enumerator = pipe(
        enumerable,
        Streamable$stream(Observer$getScheduler(observer)),
        Disposable$addTo(observer),
      );

      pipe(
        enumerator,
        Observable$forEach(_ => {
          pipe(enumerator, Dispatcher$dispatch(none));
        }),
        Observable$onSubscribe(() => {
          pipe(enumerator, Dispatcher$dispatch(none));
        }),
        ReactiveContainer$sinkInto(observer),
      );
    });

export default AsyncEnumerable$toObservable;
