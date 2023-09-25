import { DisposableLike } from "./utils.js";

export const EnumeratorLike_current = Symbol("EnumeratorLike_current");
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");
export const EnumeratorLike_isCompleted = Symbol("EnumeratorLike_isCompleted");
export const EnumeratorLike_move = Symbol("EnumeratorLike_move");

/**
 * An interactive mutable enumerator that can be used to iterate
 * over an underlying source of data.
 *
 * @noInheritDoc
 */
export interface EnumeratorLike<T = unknown> extends DisposableLike {
  /**
   * Indicates if the `EnumeratorLike` is completed.
   */
  readonly [EnumeratorLike_isCompleted]: boolean;

  /**
   * Returns the element if present.
   */
  readonly [EnumeratorLike_current]: T;

  /**
   * Indicates if the `EnumeratorLike` has a current value.
   */
  readonly [EnumeratorLike_hasCurrent]: boolean;

  /**
   * Advances the enumerator to the next value, if present.
   *
   * @returns true if successful, otherwise false.
   */
  [EnumeratorLike_move](): boolean;
}

export const EnumerableLike_enumerate = Symbol("EnumerableLike_enumerate");

/**
 * @noInheritDoc
 */
export interface EnumerableLike<T = unknown> {
  [EnumerableLike_enumerate](): EnumeratorLike<T>;
}
