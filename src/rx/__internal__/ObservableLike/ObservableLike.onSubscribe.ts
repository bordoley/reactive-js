import {
  createEnumerableObservable,
  createObservable,
  createRunnableObservable,
} from "../../../__internal__/rx/ObservableLike.create";
import { Factory } from "../../../functions";
import { ObservableLike } from "../../../rx";
import { DisposableOrTeardown } from "../../../util";
import ObservableLike__isEnumerable from "../ObservableLike/ObservableLike.isEnumerable";
import ObservableLike__isRunnable from "../ObservableLike/ObservableLike.isRunnable";
import ReactiveContainerLike__onSink from "../ReactiveContainerLike/ReactiveContainerLike.onSink";

const onSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    return ReactiveContainerLike__onSink(
      onSink =>
        ObservableLike__isEnumerable(obs)
          ? createEnumerableObservable(onSink)
          : ObservableLike__isRunnable(obs)
          ? createRunnableObservable(onSink)
          : createObservable(onSink),
      obs,
      f,
    );
  };

export default onSubscribe;
