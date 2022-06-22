import {
  Concat,
  Container,
  ContainerLike,
  ContainerOf,
  DistinctUntilChanged,
  Keep,
  Map,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeWhile,
} from "./container";
import { addTeardown, dispose } from "./disposable";
import { concatAll } from "./enumerable/concatAll";
import {
  DelegatingEnumeratorBase,
  Enumerator,
  EnumeratorBase,
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
  createScanLiftedOperator,
  createSkipFirstLiftedOperator,
  createTakeFirstLiftdOperator,
  createTakeWhileLiftedOperator,
} from "./liftable";
import { none } from "./option";

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

export {
  Enumerator,
  EnumeratorBase,
  DelegatingEnumeratorBase,
  enumerate,
  hasCurrent,
  current,
  move,
} from "./enumerable/enumerator";
export { concatAll } from "./enumerable/concatAll";
export { fromArray, fromArrayT } from "./enumerable/fromArray";
export { fromIterable, fromIterator } from "./enumerable/fromIterator";
export { generate } from "./enumerable/generate";
export { repeat } from "./enumerable/repeat";
export { takeLast } from "./enumerable/takeLast";
export { toRunnable } from "./enumerable/toRunnable";
export { toIterable } from "./enumerable/toIterable";
export { zip, zipEnumerators } from "./enumerable/zip";

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
  class DistinctUntilChangedEnumerator<T> extends DelegatingEnumeratorBase<T> {
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
        while (this.delegate.move()) {
          if (
            !hadCurrent ||
            !this.equality(prevCurrent as any, this.delegate.current)
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
    class KeepEnumerator<T> extends DelegatingEnumeratorBase<T> {
      constructor(
        delegate: Enumerator<T>,
        private readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }

      move(): boolean {
        const delegate = this.delegate;
        const predicate = this.predicate;

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
  class MapEnumerator<TA, TB> extends EnumeratorBase<TB> {
    constructor(
      readonly delegate: Enumerator<TA>,
      readonly mapper: Function1<TA, TB>,
    ) {
      super();
    }

    move(): boolean {
      this.reset();

      if (this.delegate.move()) {
        try {
          this.current = this.mapper(this.delegate.current);
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
  class OnNotifyEnumerator<T> extends DelegatingEnumeratorBase<T> {
    constructor(
      delegate: Enumerator<T>,
      private readonly onNotify: SideEffect1<T>,
    ) {
      super(delegate);
    }

    move(): boolean {
      const delegate = this.delegate;

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

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => EnumerableOperator<T, TAcc> = createScanLiftedOperator(
  liftT,
  class ScanEnumerator<T, TAcc> extends Enumerator<TAcc> {
    hasCurrent = false;

    constructor(
      readonly delegate: Enumerator<T>,
      private readonly reducer: Reducer<T, TAcc>,
      public current: TAcc,
    ) {
      super();

      addTeardown(this, () => {
        this.hasCurrent = false;
      });
    }

    move(): boolean {
      const delegate = this.delegate;
      this.hasCurrent = false;

      if (delegate.move()) {
        try {
          this.current = this.reducer(this.current, this.delegate.current);
          this.hasCurrent = true;
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
  class SkipFirstEnumerator<T> extends DelegatingEnumeratorBase<T> {
    private count = 0;

    constructor(delegate: Enumerator<T>, private readonly skipCount: number) {
      super(delegate);
    }

    move(): boolean {
      const skipCount = this.skipCount;

      for (let count = this.count; count < skipCount; count++) {
        if (!this.delegate.move()) {
          break;
        }
      }

      this.count = skipCount;
      return this.delegate.move();
    }
  },
);

export const skipFirstT: SkipFirst<EnumerableLike<unknown>> = {
  skipFirst,
};

export const takeFirst: <T>(options?: {
  readonly count?: number;
}) => EnumerableOperator<T, T> = createTakeFirstLiftdOperator(
  { ...fromArrayT, ...liftT },
  class TakeFirstEnumerator<T> extends DelegatingEnumeratorBase<T> {
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
  class TakeWhileEnumerator<T> extends DelegatingEnumeratorBase<T> {
    private done = false;

    constructor(
      delegate: Enumerator<T>,
      private readonly predicate: Predicate<T>,
      private readonly inclusive: boolean,
    ) {
      super(delegate);
    }

    move(): boolean {
      const delegate = this.delegate;

      if (this.done && !this.isDisposed) {
        pipe(this, dispose());
      } else if (delegate.move()) {
        const { current } = delegate;

        try {
          const satisfiesPredicate = this.predicate(current);

          if (!satisfiesPredicate && this.inclusive) {
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
