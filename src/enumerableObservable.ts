import { ToEnumerable } from "./enumerable";
import {
  EnumerableObservableLike,
  toEnumerable as toEnumerableObs,
  toRunnable as toRunnableObs,
} from "./observable";
import { ToRunnable } from "./runnable";

export { EnumerableObservableLike } from "./observable";

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
