import { ToEnumerable } from "./enumerable";
import {
  EnumerableObservable,
  ObservableLike,
  toEnumerable as toEnumerableObs,
  toRunnable as toRunnableObs,
} from "./observable";
import { ToRunnable } from "./runnable";

export interface EnumerableObservableLike<T> extends ObservableLike<T> {
  readonly TContainerOf: EnumerableObservableLike<this["T"]>;
  readonly observableType: EnumerableObservable;
}

export const toEnumerable: ToEnumerable<
  EnumerableObservableLike<unknown>
>["toEnumerable"] = toEnumerableObs;
export const toEnumerableT: ToEnumerable<EnumerableObservableLike<unknown>> = {
  toEnumerable,
};

export const toRunnable: ToRunnable<
  EnumerableObservableLike<unknown>
>["toRunnable"] = toRunnableObs;

export const toRunnableT: ToRunnable<EnumerableObservableLike<unknown>> = {
  toRunnable,
};
