import { Factory } from "../../../functions";
import { ObservableLike } from "../../../rx";
import ObservableLike__create from "../../../rx/__internal__/ObservableLike/ObservableLike.create";
import { DisposableOrTeardown } from "../../../util";
import EnumerableObservableLike__create from "../EnumerableObservableLike/EnumerableObservableLike.create";
import ObservableLike__isEnumerable from "../ObservableLike/ObservableLike.isEnumerable";
import ObservableLike__isRunnable from "../ObservableLike/ObservableLike.isRunnable";
import ReactiveContainerLike__onSink from "../ReactiveContainerLike/ReactiveContainerLike.onSink";
import RunnableObservableLike__create from "../RunnableObservableLike/RunnableObservableLike.create";

const ObservableLike__onSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    return ReactiveContainerLike__onSink(
      onSink =>
        ObservableLike__isEnumerable(obs)
          ? EnumerableObservableLike__create(onSink)
          : ObservableLike__isRunnable(obs)
          ? RunnableObservableLike__create(onSink)
          : ObservableLike__create(onSink),
      obs,
      f,
    );
  };

export default ObservableLike__onSubscribe;
