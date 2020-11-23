import { Function1 } from "./functions";

/**
 * Inteface that enables iteration over a collection.
 */
export interface EnumeratorLike<T> {
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
  move(): boolean;
}

/**
 * Interface for iterating a collection of items.
 */
export interface EnumerableLike<T> {
  /**
   * Returns an `EnumeratorLike` to iterate through the collection.
   */
  enumerate(): EnumeratorLike<T>;
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

export { compute } from "./internal/enumerable/compute";
export { concat, concatWith } from "./internal/enumerable/concat";
export { distinctUntilChanged } from "./internal/enumerable/distinctUntilChanged";
export {
  enumerate,
  hasCurrent,
  current,
  move,
} from "./internal/enumerable/enumerator";
export { endWith } from "./internal/enumerable/endWith";
export { concatAll, concatMap } from "./internal/enumerable/concatAll";
export { empty, fromArray } from "./internal/enumerable/fromArray";
export { fromIterable, fromIterator } from "./internal/enumerable/fromIterator";
export { generate } from "./internal/enumerable/generate";
export { lift } from "./internal/enumerable/lift";
export { keep, keepType } from "./internal/enumerable/keep";
export { map, mapTo } from "./internal/enumerable/map";
export { fromValue } from "./internal/enumerable/fromValue";
export { repeat } from "./internal/enumerable/repeat";
export { scan } from "./internal/enumerable/scan";
export { skipFirst } from "./internal/enumerable/skipFirst";
export { startWith } from "./internal/enumerable/startWith";
export { takeFirst } from "./internal/enumerable/takeFirst";
export { takeLast } from "./internal/enumerable/takeLast";
export { takeWhile } from "./internal/enumerable/takeWhile";
export { toRunnable } from "./internal/enumerable/toRunnable";
export { toIterable } from "./internal/enumerable/toIterable";
export { zip, zipEnumerators, zipWith } from "./internal/enumerable/zip";