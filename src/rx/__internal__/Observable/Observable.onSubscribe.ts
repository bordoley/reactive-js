import { Factory } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable_create from "../../../rx/__internal__/Observable/Observable.create";
import { DisposableOrTeardown } from "../../../util";
import EnumerableObservable_create from "../EnumerableObservable/EnumerableObservable.create";
import Observable_isEnumerable from "../Observable/Observable.isEnumerable";
import Observable_isRunnable from "../Observable/Observable.isRunnable";
import ReactiveContainer_onSink from "../ReactiveContainer/ReactiveContainer.onSink";
import RunnableObservable_create from "../RunnableObservable/RunnableObservable.create";

const Observable_onSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    return ReactiveContainer_onSink(
      onSink =>
        Observable_isEnumerable(obs)
          ? EnumerableObservable_create(onSink)
          : Observable_isRunnable(obs)
          ? RunnableObservable_create(onSink)
          : Observable_create(onSink),
      obs,
      f,
    );
  };

export default Observable_onSubscribe;
