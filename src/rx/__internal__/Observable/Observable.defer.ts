import { Factory } from "../../../functions";
import { ObservableLike, ReactiveContainerLike_sinkInto } from "../../../rx";
import Observable$create from "./Observable.create";

const Observable$defer = <T>(
  factory: Factory<ObservableLike<T>>,
  isEnumerable = false,
  isRunnable = false,
): ObservableLike<T> =>
  Observable$create(
    observer => {
      factory()[ReactiveContainerLike_sinkInto](observer);
    },
    isEnumerable,
    isRunnable,
  );

export default Observable$defer;
