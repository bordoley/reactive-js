import { DisposableLike } from "./disposable";
import { Function1 } from "./functions";

/**
 * Inteface that enables iteration over a collection.
 */
export interface EnumeratorLike<T> extends DisposableLike {
  /**
   * The current item, if present, at the current position of the enumerator.
   */
  readonly current: T;

  /**
   * `true` if the current the enumerator has a current value, otherwise `false`.
   */
  readonly hasCurrent: boolean;

  /**
   * Advances the enumerator to the next item.
   *
   * @returns `true` if the enumerator was successfully advanced to the next item, otherwise `false`.
   */
  move(this: EnumeratorLike<T>): boolean;
}

/**
 * Interface for iterating a collection of items.
 */
export interface EnumerableLike<T> {
  /**
   * Returns an `EnumeratorLike` to iterate through the collection.
   */
  enumerate(this: EnumerableLike<T>): EnumeratorLike<T>;
}

/** A unary function that transforms an EnumeratorLike<TA> into a EnumeratorLike<TB> */
export type EnumeratorOperator<TA, TB> = Function1<
  EnumeratorLike<TA>,
  EnumeratorLike<TB>
>;

/** A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB> */
export type EnumerableOperator<TA, TB> = Function1<
  EnumerableLike<TA>,
  EnumerableLike<TB>
>;

export { compute } from "./enumerable/compute";
export { concat, concatWith } from "./enumerable/concat";
export { distinctUntilChanged } from "./enumerable/distinctUntilChanged";
export { enumerate, hasCurrent, current, move } from "./enumerable/enumerator";
export { endWith } from "./enumerable/endWith";
export { concatAll, concatMap } from "./enumerable/concatAll";
export { empty, fromArray } from "./enumerable/fromArray";
export { fromIterable, fromIterator } from "./enumerable/fromIterator";
export { generate } from "./enumerable/generate";
export { lift } from "./enumerable/lift";
export { keep, keepType } from "./enumerable/keep";
export { map, mapTo } from "./enumerable/map";
export { fromValue } from "./enumerable/fromValue";
export { repeat } from "./enumerable/repeat";
export { scan } from "./enumerable/scan";
export { skipFirst } from "./enumerable/skipFirst";
export { startWith } from "./enumerable/startWith";
export { takeFirst } from "./enumerable/takeFirst";
export { takeLast } from "./enumerable/takeLast";
export { takeWhile } from "./enumerable/takeWhile";
export { toRunnable } from "./enumerable/toRunnable";
export { toIterable } from "./enumerable/toIterable";
export { zip, zipEnumerators, zipWith } from "./enumerable/zip";
