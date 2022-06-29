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
import { DisposableLike, addTo, dispose, isDisposed } from "./disposable";
import { concatAll } from "./enumerable/concatAll";
import { createEnumerable, enumerate } from "./enumerable/enumerable";
import { fromArray, fromArrayT } from "./enumerable/fromArray";
import { liftT } from "./enumerable/lift";
import {
  AbstractDelegatingEnumerator,
  AbstractPassThroughEnumerator,
  Enumerator,
  current,
  hasCurrent,
  move,
  reset,
} from "./enumerator";
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
  createDistinctUntilChangedLiftOperator,
  createKeepLiftOperator,
  createMapLiftOperator,
  createOnNotifyLiftOperator,
  createPairwiseLiftOperator,
  createScanLiftOperator,
  createSkipFirstLiftOperator,
  createTakeFirstLiftOperator,
  createTakeWhileLiftOperator,
  createThrowIfEmptyLiftOperator,
  delegate,
} from "./liftable";
import { Option, isSome, none } from "./option";
import { empty as emptyArray, forEach } from "./readonlyArray";

/**
 * Interface for iterating a Container of items.
 */
export interface EnumerableLike<T> extends LiftableLike {
  readonly T: unknown;
  readonly type: EnumerableLike<this["T"]>;
  readonly liftableStateType: Enumerator<this["T"]>;

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
export { buffer, bufferT } from "./enumerable/buffer";
export {
  AbstractEnumerable,
  createEnumerable,
  enumerate,
} from "./enumerable/enumerable";
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
export { zip, zipT } from "./enumerable/zip";

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
}) => EnumerableOperator<T, T> = createDistinctUntilChangedLiftOperator(
  liftT,
  class DistinctUntilChangedEnumerator<
    T,
  > extends AbstractPassThroughEnumerator<T> {
    constructor(
      delegate: Enumerator<T>,
      private readonly equality: Equality<T>,
    ) {
      super(delegate);
    }

    move(): boolean {
      const hadCurrent = hasCurrent(this);
      const prevCurrent = hadCurrent ? current(this) : none;

      try {
        const { delegate } = this;
        while (move(delegate)) {
          if (
            !hadCurrent ||
            !this.equality(prevCurrent as any, current(delegate))
          ) {
            break;
          }
        }
      } catch (cause) {
        pipe(this, dispose({ cause }));
      }

      return hasCurrent(this);
    }
  },
);

export const distinctUntilChangedT: DistinctUntilChanged<
  EnumerableLike<unknown>
> = {
  distinctUntilChanged,
};

export const keep: <T>(predicate: Predicate<T>) => EnumerableOperator<T, T> =
  createKeepLiftOperator(
    liftT,
    class KeepEnumerator<T> extends AbstractPassThroughEnumerator<T> {
      constructor(
        delegate: Enumerator<T>,
        private readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }

      move(): boolean {
        const { delegate, predicate } = this;

        try {
          while (move(delegate) && !predicate(current(delegate))) {}
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }

        return hasCurrent(this);
      }
    },
  );

export const keepT: Keep<EnumerableLike<unknown>> = {
  keep,
};

export const map: <TA, TB>(
  mapper: Function1<TA, TB>,
) => EnumerableOperator<TA, TB> = createMapLiftOperator(
  liftT,
  class MapEnumerator<TA, TB> extends AbstractDelegatingEnumerator<TA, TB> {
    constructor(delegate: Enumerator<TA>, readonly mapper: Function1<TA, TB>) {
      super(delegate);
    }

    move(): boolean {
      reset(this);

      const { delegate } = this;

      if (move(delegate)) {
        try {
          this.current = this.mapper(current(delegate));
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }

      return hasCurrent(this);
    }
  },
);

export const mapT: Map<EnumerableLike<unknown>> = {
  map,
};

export const onNotify: <T>(
  onNotify: SideEffect1<T>,
) => EnumerableOperator<T, T> = createOnNotifyLiftOperator(
  liftT,
  class OnNotifyEnumerator<T> extends AbstractPassThroughEnumerator<T> {
    constructor(
      delegate: Enumerator<T>,
      private readonly onNotify: SideEffect1<T>,
    ) {
      super(delegate);
    }

    move(): boolean {
      const { delegate } = this;

      if (move(delegate)) {
        try {
          this.onNotify(current(this));
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }

      return hasCurrent(this);
    }
  },
);

export const pairwise: <T>() => EnumerableOperator<T, [Option<T>, T]> =
  createPairwiseLiftOperator(
    liftT,
    class PairwiseEnumerator<T> extends AbstractDelegatingEnumerator<
      T,
      [Option<T>, T]
    > {
      move(): boolean {
        const prev = (hasCurrent(this) ? current(this) : emptyArray)[1];

        reset(this);

        const { delegate } = this;
        if (move(delegate)) {
          const { current } = delegate;
          this.current = [prev, current];
        }

        return hasCurrent(this);
      }
    },
  );

export const pairwiseT: Pairwise<EnumerableLike<unknown>> = {
  pairwise,
};

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => EnumerableOperator<T, TAcc> = createScanLiftOperator(
  liftT,
  class ScanEnumerator<T, TAcc> extends AbstractDelegatingEnumerator<T, TAcc> {
    constructor(
      delegate: Enumerator<T>,
      private readonly reducer: Reducer<T, TAcc>,
      current: TAcc,
    ) {
      super(delegate);
      this.current = current;
    }

    move(): boolean {
      const acc = hasCurrent(this) ? current(this) : none;

      reset(this);

      const { delegate, reducer } = this;
      if (isSome(acc) && move(delegate)) {
        try {
          this.current = reducer(acc, current(delegate));
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }

      return hasCurrent(this);
    }
  },
);

export const scanT: Scan<EnumerableLike<unknown>> = {
  scan,
};

export const skipFirst: <T>(options?: {
  readonly count?: number;
}) => EnumerableOperator<T, T> = createSkipFirstLiftOperator(
  liftT,
  class SkipFirstEnumerator<T> extends AbstractPassThroughEnumerator<T> {
    private count = 0;

    constructor(delegate: Enumerator<T>, private readonly skipCount: number) {
      super(delegate);
    }

    move(): boolean {
      const { delegate, skipCount } = this;

      for (let { count } = this; count < skipCount; count++) {
        if (!move(delegate)) {
          break;
        }
      }

      this.count = skipCount;
      return move(delegate);
    }
  },
);

export const skipFirstT: SkipFirst<EnumerableLike<unknown>> = {
  skipFirst,
};

export const takeFirst: <T>(options?: {
  readonly count?: number;
}) => EnumerableOperator<T, T> = createTakeFirstLiftOperator(
  { ...fromArrayT, ...liftT },
  class TakeFirstEnumerator<T> extends AbstractPassThroughEnumerator<T> {
    private count = 0;

    constructor(delegate: Enumerator<T>, private readonly maxCount: number) {
      super(delegate);
    }

    get current() {
      return current(delegate(this));
    }

    move(): boolean {
      if (this.count < this.maxCount) {
        this.count++;
        move(delegate(this));
      } else {
        pipe(this, dispose());
      }

      return hasCurrent(this);
    }
  },
);

export const takeFirstT: TakeFirst<EnumerableLike<unknown>> = {
  takeFirst,
};

export const takeWhile: <T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => EnumerableOperator<T, T> = createTakeWhileLiftOperator(
  liftT,
  class TakeWhileEnumerator<T> extends AbstractPassThroughEnumerator<T> {
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

      if (this.done && !isDisposed(this)) {
        pipe(this, dispose());
      } else if (move(delegate)) {
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

      return hasCurrent(this);
    }
  },
);

export const takeWhileT: TakeWhile<EnumerableLike<unknown>> = {
  takeWhile,
};

export const throwIfEmpty: <T>(
  factory: Factory<unknown>,
) => EnumerableOperator<T, T> = createThrowIfEmptyLiftOperator(
  liftT,
  class ThrowIfEmptyEnumerator<T> extends AbstractPassThroughEnumerator<T> {
    isEmpty = true;

    move(): boolean {
      if (move(delegate(this))) {
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
    const source = enumerableFactory(...resourcesArray);
    const enumerator = enumerate(source);

    pipe(resources, forEach(addTo(enumerator)));

    return enumerator;
  });

export const using: Using<EnumerableLike<unknown>>["using"] = _using;

export const usingT: Using<EnumerableLike<unknown>> = {
  using,
};
