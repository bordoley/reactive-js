import { Function } from "../../functions";

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
export type EnumeratorFunction<TA, TB> = Function<
  EnumeratorLike<TA>,
  EnumeratorLike<TB>
>;

/** A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB> */
export type EnumerableFunction<TA, TB> = Function<
  EnumerableLike<TA>,
  EnumerableLike<TB>
>;
