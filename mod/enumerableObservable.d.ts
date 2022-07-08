import { ToEnumerable } from "./enumerable.mjs";
import { ObservableLike, EnumerableObservable } from "./observable.mjs";
import { ToRunnable } from "./runnable.mjs";
interface EnumerableObservableLike<T> extends ObservableLike<T> {
    readonly TContainerOf: EnumerableObservableLike<this["T"]>;
    readonly observableType: EnumerableObservable;
}
declare const toEnumerable: ToEnumerable<EnumerableObservableLike<unknown>>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<EnumerableObservableLike<unknown>>;
declare const toRunnable: ToRunnable<EnumerableObservableLike<unknown>>["toRunnable"];
declare const toRunnableT: ToRunnable<EnumerableObservableLike<unknown>>;
export { EnumerableObservableLike, toEnumerable, toEnumerableT, toRunnable, toRunnableT };
