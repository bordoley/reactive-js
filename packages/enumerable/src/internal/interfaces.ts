import { DisposableLike } from "@reactive-js/disposable";

/**
 *
 * @noInheritDoc
 */
export interface EnumeratorLike<TReq, T> extends DisposableLike {
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
  move(req: TReq): boolean;
}

export interface EnumerableLike<TReq, T> {
  /**
   * Returns an `EnumeratorLike` to iterate through the source.
   */
  enumerate(): EnumeratorLike<TReq, T>;
}