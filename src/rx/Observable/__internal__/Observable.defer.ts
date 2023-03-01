import { Factory } from "../../../functions.js";
import { ObservableLike, ObservableLike_observe } from "../../../rx.js";
import Observable_create from "./Observable.create.js";

const Observable_defer = <T>(
  factory: Factory<ObservableLike<T>>,
  isEnumerable = false,
  isRunnable = false,
): ObservableLike<T> =>
  Observable_create(
    observer => {
      factory()[ObservableLike_observe](observer);
    },
    isEnumerable,
    isRunnable,
  );

export default Observable_defer;
