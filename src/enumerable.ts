import { Container, ContainerLike, ContainerOf } from "./container";
import { DisposableLike } from "./disposable";
import { Function1, identity } from "./functions";

/**
 * Inteface that enables iteration over a Container.
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
 * Interface for iterating a Container of items.
 */
export interface EnumerableLike<T> extends ContainerLike {
  readonly T: unknown;
  readonly type: EnumerableLike<this["T"]>;

  /**
   * Returns an `EnumeratorLike` to iterate through the Container.
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

export interface ToEnumerable<C extends ContainerLike> extends Container<C> {
  toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}

export { concat } from "./enumerable/concat";
export { distinctUntilChanged } from "./enumerable/distinctUntilChanged";
export { enumerate, hasCurrent, current, move } from "./enumerable/enumerator";
export { concatAll } from "./enumerable/concatAll";
export { fromArray, fromArrayT } from "./enumerable/fromArray";
export { fromIterable, fromIterator } from "./enumerable/fromIterator";
export { generate } from "./enumerable/generate";
export { lift } from "./enumerable/lift";
export { keep, keepT } from "./enumerable/keep";
export { map } from "./enumerable/map";
export { repeat } from "./enumerable/repeat";
export { scan } from "./enumerable/scan";
export { skipFirst } from "./enumerable/skipFirst";
export { takeFirst } from "./enumerable/takeFirst";
export { takeLast } from "./enumerable/takeLast";
export { takeWhile } from "./enumerable/takeWhile";
export { toRunnable } from "./enumerable/toRunnable";
export { toIterable } from "./enumerable/toIterable";
export { zip, zipEnumerators } from "./enumerable/zip";

export const toEnumerable = <T>(): Function1<
  EnumerableLike<T>,
  EnumerableLike<T>
> => identity;

export const type: EnumerableLike<unknown> = undefined as any;
