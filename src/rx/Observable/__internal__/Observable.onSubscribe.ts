import { Factory } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create";
import { DisposableOrTeardown } from "../../../util";
import EnumerableObservable_create from "../../EnumerableObservable/__internal__/EnumerableObservable.create";
import Observable_isEnumerable from "../../Observable/__internal__/Observable.isEnumerable";
import Observable_isRunnable from "../../Observable/__internal__/Observable.isRunnable";
import ReactiveContainer_onSink from "../../ReactiveContainer/__internal__/ReactiveContainer.onSink";
import RunnableObservable_create from "../../RunnableObservable/__internal__/RunnableObservable.create";

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
