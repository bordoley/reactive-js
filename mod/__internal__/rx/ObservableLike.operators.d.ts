import { Function1 } from "../../functions.mjs";
import { ReadonlyArrayLike, Concat } from "../../containers.mjs";
import { ObservableLike } from "../../rx.mjs";
declare const allAreEnumerable: Function1<ReadonlyArrayLike<ObservableLike<unknown>>, boolean>;
declare const allAreRunnable: Function1<ReadonlyArrayLike<ObservableLike<unknown>>, boolean>;
declare const mergeImpl: <T>(observables: readonly ObservableLike<T>[]) => ObservableLike<T>;
declare const merge: Concat<ObservableLike>["concat"];
declare const mergeT: Concat<ObservableLike>;
export { allAreEnumerable, allAreRunnable, merge, mergeImpl, mergeT };
