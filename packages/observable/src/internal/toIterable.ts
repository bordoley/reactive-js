import { toIterable as enumerableToIterable } from "@reactive-js/enumerable";
import { ObservableLike } from "./interfaces";
import { toEnumerable } from "./toEnumerable";
import { pipe } from "@reactive-js/pipe";



/**
 * Converts an `ObservableLike` into an `Iterable`.
 */
export const toIterable = <T>(source: ObservableLike<T>): Iterable<T> =>
  pipe(source, toEnumerable, enumerableToIterable)
