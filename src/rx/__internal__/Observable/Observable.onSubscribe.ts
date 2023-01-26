import { Factory } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable$create from "../../../rx/__internal__/Observable/Observable.create";
import { DisposableOrTeardown } from "../../../util";
import EnumerableObservable$create from "../EnumerableObservable/EnumerableObservable.create";
import Observable$isEnumerable from "../Observable/Observable.isEnumerable";
import Observable$isRunnable from "../Observable/Observable.isRunnable";
import ReactiveContainer$onSink from "../ReactiveContainer/ReactiveContainer.onSink";
import RunnableObservable$create from "../RunnableObservable/RunnableObservable.create";

const Observable$onSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    return ReactiveContainer$onSink(
      onSink =>
        Observable$isEnumerable(obs)
          ? EnumerableObservable$create(onSink)
          : Observable$isRunnable(obs)
          ? RunnableObservable$create(onSink)
          : Observable$create(onSink),
      obs,
      f,
    );
  };

export default Observable$onSubscribe;
