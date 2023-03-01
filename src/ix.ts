import {
  Container,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  ContainerOf,
} from "./containers.js";
import { Function1 } from "./functions.js";
import { ObservableLike_isEnumerable, RunnableLike } from "./rx.js";
import { StreamLike } from "./streaming.js";
import { DisposableLike } from "./util.js";

/** @ignore */
export const SourceLike_move = Symbol("SourceLike_move");

/**
 * @noInheritDoc
 */
export interface SourceLike extends DisposableLike {
  [SourceLike_move](): void;
}

/** @ignore */
export const EnumeratorLike_current = Symbol("EnumeratorLike_current");

/** @ignore */
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");

/**
 * @noInheritDoc
 */
export interface EnumeratorLike<T = unknown> extends SourceLike {
  readonly [EnumeratorLike_current]: T;
  readonly [EnumeratorLike_hasCurrent]: boolean;
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
 * @noInheritDoc
 */
export interface AsyncEnumeratorLike<T = unknown>
  extends SourceLike,
    StreamLike<void, T> {}

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
