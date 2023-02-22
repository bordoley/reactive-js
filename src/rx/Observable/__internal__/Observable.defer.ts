import { Factory } from "../../../functions.js";
import { ObservableLike, ReactiveContainerLike_sinkInto } from "../../../rx.js";
import Observable_create from "./Observable.create.js";

const Observable_defer = <T>(
  factory: Factory<ObservableLike<T>>,
  isEnumerable = false,
  isRunnable = false,
): ObservableLike<T> =>
  Observable_create(
    observer => {
      factory()[ReactiveContainerLike_sinkInto](observer);
    },
    isEnumerable,
    isRunnable,
  );

export default Observable_defer;
