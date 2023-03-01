import {
  Container,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  ContainerOf,
} from "./containers.js";
import { Function1 } from "./functions.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  RunnableLike,
} from "./rx.js";
import { DisposableLike } from "./util.js";

/** @ignore */
export const EnumeratorLike_move = Symbol("EnumeratorLike_move");

/** @ignore */
export const EnumeratorLike_current = Symbol("EnumeratorLike_current");

/** @ignore */
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");

/**
 * @noInheritDoc
 */
export interface EnumeratorLike<T = unknown> extends DisposableLike {
  readonly [EnumeratorLike_current]: T;
  readonly [EnumeratorLike_hasCurrent]: boolean;

  [EnumeratorLike_move](): void;
}

/**
 * Interface for iterating a Container of items.
 *
 * @noInheritDoc
 * @category Container
 */
export interface EnumerableLike<T = unknown> extends RunnableLike<T> {
  readonly [ContainerLike_type]?: EnumerableLike<this[typeof ContainerLike_T]>;

  readonly [ObservableLike_isEnumerable]: true;
}

/**
 *
 * @noInheritDoc
 * @category Container
 */
export interface AsyncEnumerableLike<CInner extends ObservableLike, T = unknown>
  extends EnumerableLike<ContainerOf<CInner, T>> {}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromEnumerable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Constructor
   */
  fromEnumerable<T>(
    options?: O,
  ): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToEnumerable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Converter
   */
  toEnumerable<T>(options?: O): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}
