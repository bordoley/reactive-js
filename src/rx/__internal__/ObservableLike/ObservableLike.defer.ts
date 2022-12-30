import { Factory } from "../../../functions";
import { ObservableLike, ReactiveContainerLike_sinkInto } from "../../../rx";
import ObservableLike__create from "./ObservableLike.create";

const defer = <T>(
  factory: Factory<ObservableLike<T>>,
  isEnumerable = false,
  isRunnable = false,
): ObservableLike<T> =>
  ObservableLike__create(
    observer => {
      factory()[ReactiveContainerLike_sinkInto](observer);
    },
    isEnumerable,
    isRunnable,
  );

export default defer;
