import { getDelegate } from "./__internal__.delegating";
import { reset } from "./__internal__.enumerator";
import {
  createDistinctUntilChangedOperator,
  createKeepOperator,
  createMapOperator,
  createOnNotifyOperator,
  createPairwiseOperator,
  createScanOperator,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
} from "./__internal__.liftable";
import { empty as emptyArray, forEach } from "./__internal__.readonlyArray";
import {
  Concat,
  Container,
  ContainerLike,
  ContainerOf,
  DistinctUntilChanged,
  Keep,
  Map,
  Pairwise,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeWhile,
} from "./container";
import { DisposableLike, addTo, dispose, isDisposed } from "./disposable";
import { concatAll } from "./enumerable/concatAll";
import { createEnumerable, enumerate } from "./enumerable/enumerable";
import {
  AbstractDelegatingEnumerator,
  AbstractPassThroughEnumerator,
} from "./enumerable/enumerator";
import { fromArray, fromArrayT } from "./enumerable/fromArray";
import { liftT } from "./enumerable/lift";
import { EnumeratorLike, getCurrent, hasCurrent, move } from "./enumerator";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  identity,
  pipe,
} from "./functions";
import { InteractiveContainerLike } from "./interactiveContainer";
import { ThrowIfEmpty, Using } from "./liftableContainer";
import { Option, isSome, none } from "./option";
import { InteractiveSourceLike_move } from "../src/ix/InteractiveSourceLike";

/**
 * Interface for iterating a Container of items.
 */
export interface EnumerableLike<T> extends InteractiveContainerLike {
  readonly T: unknown;
  readonly TContainerOf: EnumerableLike<this["T"]>;
  readonly TLiftableContainerState: EnumeratorLike<this["T"]>;
  readonly TCtx: void;

  /**
   * Returns an `EnumeratorLike` to iterate through the Container.
   */
  enumerate(this: EnumerableLike<this["T"]>): EnumeratorLike<T>;
  interact(this: EnumerableLike<this["T"]>, _: void): EnumeratorLike<T>;
}

/** A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB> */
export type EnumerableOperator<TA, TB> = Function1<
  EnumerableLike<TA>,
  EnumerableLike<TB>
>;

export interface FromEnumerable<C extends ContainerLike> extends Container<C> {
  fromEnumerable<T>(): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
}

export interface ToEnumerable<C extends ContainerLike> extends Container<C> {
  toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}
export { buffer, bufferT } from "./enumerable/buffer";
export { createEnumerable, enumerate } from "./enumerable/enumerable";
export { concatAll, concatAllT } from "./enumerable/concatAll";
export { fromArray, fromArrayT } from "./enumerable/fromArray";
export {
  fromIterable,
  fromIterableT,
  fromIterator,
  fromIteratorT,
} from "./enumerable/fromIterator";
export { generate, generateT } from "./enumerable/generate";
export { repeat, repeatT } from "./enumerable/repeat";
export { takeLast, takeLastT } from "./enumerable/takeLast";
export { toRunnable, toRunnableT } from "./enumerable/toRunnable";
export { toIterable, toIterableT } from "./enumerable/toIterable";
export { zip, zipT } from "./enumerable/zip";

/**
 * Creates an EnumerableLike which yields all values from each source sequentially.
 */
export function concat<T>(
  fst: EnumerableLike<T>,
  snd: EnumerableLike<T>,
  ...tail: readonly EnumerableLike<T>[]
): EnumerableLike<T>;

export function concat<T>(
  ...enumerables: readonly EnumerableLike<T>[]
): EnumerableLike<T> {
  return pipe(enumerables, fromArray(), concatAll());
}

export const concatT: Concat<EnumerableLike<unknown>> = {
  concat,
};

export const throwIfEmpty: <T>(
  factory: Factory<unknown>,
) => EnumerableOperator<T, T> = /*@__PURE__*/ createThrowIfEmptyOperator(
  liftT,
  class ThrowIfEmptyEnumerator<T> extends AbstractPassThroughEnumerator<T> {
    isEmpty = true;

    move(): boolean {
      if (pipe(this, getDelegate, move)) {
        this.isEmpty = false;
      }

      return hasCurrent(this);
    }
  },
);

export const throwIfEmptyT: ThrowIfEmpty<EnumerableLike<unknown>> = {
  throwIfEmpty,
};

const _using = <TResource extends DisposableLike, T>(
  resourceFactory: Factory<TResource | readonly TResource[]>,
  enumerableFactory: (...resources: readonly TResource[]) => EnumerableLike<T>,
): EnumerableLike<T> =>
  createEnumerable<T>(() => {
    const resources = resourceFactory();
    const resourcesArray = Array.isArray(resources) ? resources : [resources];
    const enumerator = pipe(enumerableFactory(...resourcesArray), enumerate);

    pipe(resources, forEach(addTo(enumerator)));

    return enumerator;
  });

export const using: Using<EnumerableLike<unknown>>["using"] = _using;

export const usingT: Using<EnumerableLike<unknown>> = {
  using,
};
