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
  ThrowIfEmpty,
  Using,
} from "./container";
import { DisposableLike, addTo, dispose } from "./disposable";
import { concatAll } from "./enumerable/concatAll";
import { createEnumerable } from "./enumerable/enumerable";
import {
  AbstractDelegatingEnumerator,
  AbstractEnumerator,
  Enumerator,
  enumerate,
} from "./enumerable/enumerator";
import { fromArray, fromArrayT } from "./enumerable/fromArray";
import { liftT } from "./enumerable/lift";
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
import {
  LiftableLike,
  createDistinctUntilChangedLiftedOperator,
  createKeepLiftedOperator,
  createMapLiftedOperator,
  createOnNotifyLiftedOperator,
  createPairwiseLiftedOperator,
  createScanLiftedOperator,
  createSkipFirstLiftedOperator,
  createTakeFirstLiftedOperator,
  createTakeWhileLiftedOperator,
  createThrowIfEmptyLiftedOperator,
} from "./liftable";
import { Option, isSome, none } from "./option";
import { empty as emptyArray, forEach } from "./readonlyArray";

/**
 * Interface for iterating a Container of items.
 */
export interface EnumerableLike<T> extends LiftableLike {
  readonly T: unknown;
  readonly type: EnumerableLike<this["T"]>;
  readonly liftedStateType: Enumerator<this["T"]>;

  /**
   * Returns an `EnumeratorLike` to iterate through the Container.
   */
  enumerate(this: EnumerableLike<T>): Enumerator<T>;
}

/** A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB> */
export type EnumerableOperator<TA, TB> = Function1<
  EnumerableLike<TA>,
  EnumerableLike<TB>
>;

export interface ToEnumerable<C extends ContainerLike> extends Container<C> {
  toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}

export { AbstractEnumerable, createEnumerable } from "./enumerable/enumerable";
export {
  Enumerator,
  AbstractEnumerator,
  enumerate,
  hasCurrent,
  current,
  move,
} from "./enumerable/enumerator";
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
export { toIterable } from "./enumerable/toIterable";
export { zip, zipT, zipEnumerators } from "./enumerable/zip";

export const toEnumerable = <T>(): Function1<
  EnumerableLike<T>,
  EnumerableLike<T>
> => identity;

export const type: EnumerableLike<unknown> = undefined as any;

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

export const distinctUntilChanged: <T>(options?: {
  readonly equality?: Equality<T>;
}) => EnumerableOperator<T, T> = createDistinctUntilChangedLiftedOperator(
  liftT,
  class DistinctUntilChangedEnumerator<
    T,
  > extends AbstractDelegatingEnumerator<T> {
    constructor(
      delegate: Enumerator<T>,
      private readonly equality: Equality<T>,
    ) {
      super(delegate);
    }

    move(): boolean {
      const hadCurrent = this.hasCurrent;
      const prevCurrent = hadCurrent ? this.current : none;

      try {
        const { delegate } = this;
        while (delegate.move()) {
          if (
            !hadCurrent ||
            !this.equality(prevCurrent as any, delegate.current)
          ) {
            break;
          }
        }
      } catch (cause) {
        pipe(this, dispose({ cause }));
      }

      return this.hasCurrent;
    }
  },
);

export const distinctUntilChangedT: DistinctUntilChanged<
  EnumerableLike<unknown>
> = {
  distinctUntilChanged,
};

export const keep: <T>(predicate: Predicate<T>) => EnumerableOperator<T, T> =
  createKeepLiftedOperator(
    liftT,
    class KeepEnumerator<T> extends AbstractDelegatingEnumerator<T> {
      constructor(
        delegate: Enumerator<T>,
        private readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }

      move(): boolean {
        const { delegate, predicate } = this;

        try {
          while (delegate.move() && !predicate(delegate.current)) {}
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }

        return this.hasCurrent;
      }
    },
  );

export const keepT: Keep<EnumerableLike<unknown>> = {
  keep,
};

export const map: <TA, TB>(
  mapper: Function1<TA, TB>,
) => EnumerableOperator<TA, TB> = createMapLiftedOperator(
  liftT,
  class MapEnumerator<TA, TB> extends AbstractEnumerator<TB> {
    constructor(
      readonly delegate: Enumerator<TA>,
      readonly mapper: Function1<TA, TB>,
    ) {
      super();
    }

    move(): boolean {
      this.reset();

      const { delegate } = this;

      if (delegate.move()) {
        try {
          this.current = this.mapper(delegate.current);
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }

      return this.hasCurrent;
    }
  },
);

export const mapT: Map<EnumerableLike<unknown>> = {
  map,
};

export const onNotify: <T>(
  onNotify: SideEffect1<T>,
) => EnumerableOperator<T, T> = createOnNotifyLiftedOperator(
  liftT,
  class OnNotifyEnumerator<T> extends AbstractDelegatingEnumerator<T> {
    constructor(
      delegate: Enumerator<T>,
      private readonly onNotify: SideEffect1<T>,
    ) {
      super(delegate);
    }

    move(): boolean {
      const { delegate } = this;

      if (delegate.move()) {
        try {
          this.onNotify(this.current);
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }

      return this.hasCurrent;
    }
  },
);

export const pairwise: <T>() => EnumerableOperator<T, [Option<T>, T]> =
  createPairwiseLiftedOperator(
    liftT,
    class PairwiseEnumerator<T> extends AbstractEnumerator<[Option<T>, T]> {
      constructor(readonly delegate: Enumerator<T>) {
        super();
      }

      move(): boolean {
        const prev = (this.hasCurrent ? this.current : emptyArray)[1];

        this.reset();

        const { delegate } = this;
        if (delegate.move()) {
          const { current } = delegate;
          this.current = [prev, current];
        }

        return this.hasCurrent;
      }
    },
  );

export const pairwiseT: Pairwise<EnumerableLike<unknown>> = {
  pairwise,
};

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => EnumerableOperator<T, TAcc> = createScanLiftedOperator(
  liftT,
  class ScanEnumerator<T, TAcc> extends AbstractEnumerator<TAcc> {
    constructor(
      readonly delegate: Enumerator<T>,
      private readonly reducer: Reducer<T, TAcc>,
      current: TAcc,
    ) {
      super();
      this.current = current;
    }

    move(): boolean {
      const acc = this.hasCurrent ? this.current : none;

      this.reset();

      const { delegate, reducer } = this;
      if (isSome(acc) && delegate.move()) {
        try {
          this.current = reducer(acc, delegate.current);
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }

      return this.hasCurrent;
    }
  },
);

export const scanT: Scan<EnumerableLike<unknown>> = {
  scan,
};

export const skipFirst: <T>(options?: {
  readonly count?: number;
}) => EnumerableOperator<T, T> = createSkipFirstLiftedOperator(
  liftT,
  class SkipFirstEnumerator<T> extends AbstractDelegatingEnumerator<T> {
    private count = 0;

    constructor(delegate: Enumerator<T>, private readonly skipCount: number) {
      super(delegate);
    }

    move(): boolean {
      const { delegate, skipCount } = this;

      for (let { count } = this; count < skipCount; count++) {
        if (!delegate.move()) {
          break;
        }
      }

      this.count = skipCount;
      return delegate.move();
    }
  },
);

export const skipFirstT: SkipFirst<EnumerableLike<unknown>> = {
  skipFirst,
};

export const takeFirst: <T>(options?: {
  readonly count?: number;
}) => EnumerableOperator<T, T> = createTakeFirstLiftedOperator(
  { ...fromArrayT, ...liftT },
  class TakeFirstEnumerator<T> extends AbstractDelegatingEnumerator<T> {
    private count = 0;

    constructor(delegate: Enumerator<T>, private readonly maxCount: number) {
      super(delegate);
    }

    get current() {
      return this.delegate.current;
    }

    move(): boolean {
      if (this.count < this.maxCount) {
        this.count++;
        this.delegate.move();
      } else {
        this.dispose();
      }

      return this.hasCurrent;
    }
  },
);

export const takeFirstT: TakeFirst<EnumerableLike<unknown>> = {
  takeFirst,
};

export const takeWhile: <T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => EnumerableOperator<T, T> = createTakeWhileLiftedOperator(
  liftT,
  class TakeWhileEnumerator<T> extends AbstractDelegatingEnumerator<T> {
    private done = false;

    constructor(
      delegate: Enumerator<T>,
      private readonly predicate: Predicate<T>,
      private readonly inclusive: boolean,
    ) {
      super(delegate);
    }

    move(): boolean {
      const { delegate, inclusive, predicate } = this;

      if (this.done && !this.isDisposed) {
        pipe(this, dispose());
      } else if (delegate.move()) {
        const { current } = delegate;

        try {
          const satisfiesPredicate = predicate(current);

          if (!satisfiesPredicate && inclusive) {
            this.done = true;
          } else if (!satisfiesPredicate) {
            pipe(this, dispose());
          }
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }

      return this.hasCurrent;
    }
  },
);

export const takeWhileT: TakeWhile<EnumerableLike<unknown>> = {
  takeWhile,
};

export const throwIfEmpty: <T>(
  factory: Factory<unknown>,
) => EnumerableOperator<T, T> = createThrowIfEmptyLiftedOperator(
  liftT,
  class ThrowIfEmptyEnumerator<T> extends AbstractDelegatingEnumerator<T> {
    isEmpty = true;

    move() {
      if (this.move()) {
        this.isEmpty = false;
      }

      return this.hasCurrent;
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
    const source = enumerableFactory(...resourcesArray);
    const enumerator = enumerate(source);

    pipe(resources, forEach(addTo(enumerator)));

    return enumerator;
  });

export const using: Using<EnumerableLike<unknown>>["using"] = _using;

export const usingT: Using<EnumerableLike<unknown>> = {
  using,
};
