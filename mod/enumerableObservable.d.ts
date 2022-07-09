import { ToEnumerable } from "./enumerable.mjs";
import { EnumerableObservableLike } from "./observable.mjs";
export { EnumerableObservableLike } from './observable.js';
import { ToRunnable } from "./runnable.mjs";
declare const toEnumerable: ToEnumerable<EnumerableObservableLike<unknown>>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<EnumerableObservableLike<unknown>>;
declare const toRunnable: ToRunnable<EnumerableObservableLike<unknown>>["toRunnable"];
declare const toRunnableT: ToRunnable<EnumerableObservableLike<unknown>>;
export { toEnumerable, toEnumerableT, toRunnable, toRunnableT };
