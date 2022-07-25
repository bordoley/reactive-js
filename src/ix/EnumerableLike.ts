import {
  Lift,
  TInteractive,
  createScanOperator,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
  interactive,
} from "../__internal__/containers/StatefulContainerLikeInternal";
import {
  properties as delegatingDisposableProperties,
  prototype as delegatingDisposablePrototype,
} from "../__internal__/util/DelegatingDisposable";
import {
  move as delegatingEnumeratorMove,
  properties as delegatingEnumeratorProperties,
  prototype as delegatingEnumeratorPrototype,
} from "../__internal__/util/DelegatingEnumerator";
import {
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../__internal__/util/Disposable";
import {
  properties as disposableRefProperties,
  prototype as disposableRefPrototype,
} from "../__internal__/util/DisposableRefLike";
import {
  MutableEnumeratorLike,
  properties as enumeratorProperties,
  prototype as enumeratorPrototype,
  neverEnumerator,
} from "../__internal__/util/Enumerator";
import {
  MutableRefLike,
  getCurrentRef,
  setCurrentRef,
} from "../__internal__/util/MutableRefLike";
import {
  Object_init,
  createObjectFactory,
  init,
  mix,
} from "../__internal__/util/Object";
import {
  Concat,
  ConcatAll,
  ContainerOperator,
  DistinctUntilChanged,
  Keep,
  Map,
  Pairwise,
  ReadonlyArrayLike,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToIterable,
  ToReadonlyArray,
  Using,
  Zip,
  emptyReadonlyArray,
} from "../containers";
import {
  every,
  forEach as forEachReadonlyArray,
  map as mapReadonlyArray,
  toEnumerable as toEnumerableReadonlyArray,
} from "../containers/ReadonlyArrayLike";
import {
  Equality,
  Factory,
  Function1,
  Option,
  Predicate,
  Reducer,
  SideEffect1,
  compose,
  getLength,
  identity,
  isSome,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
  strictEquality,
} from "../functions";
import {
  EnumerableLike,
  InteractiveContainerLike_interact,
  ToEnumerable,
  createEnumerable,
  emptyEnumerable,
  emptyEnumerableT,
} from "../ix";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../util";
import {
  add,
  addTo,
  bindTo,
  dispose,
  getError,
  isDisposed,
} from "../util/DisposableLike";
import { getCurrent, hasCurrent, move } from "../util/EnumeratorLike";

export const enumerate =
  <T>() =>
  (enumerable: EnumerableLike<T>): EnumeratorLike<T> =>
    enumerable[InteractiveContainerLike_interact](none);

const lift = /*@__PURE__*/ (() => {
  class LiftedEnumerable<T> implements EnumerableLike<T> {
    constructor(
      readonly src: EnumerableLike<any>,
      readonly operators: readonly Function1<
        EnumeratorLike<any>,
        EnumeratorLike<any>
      >[],
    ) {}

    [InteractiveContainerLike_interact](): EnumeratorLike<T> {
      return pipeUnsafe(
        this.src,
        enumerate<unknown>(),
        ...this.operators,
      ) as EnumeratorLike<T>;
    }
  }

  return <TA, TB>(
      operator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    ): ContainerOperator<EnumerableLike, TA, TB> =>
    (enumerable: EnumerableLike<TA>): EnumerableLike<TB> => {
      const src =
        enumerable instanceof LiftedEnumerable ? enumerable.src : enumerable;

      const allFunctions =
        enumerable instanceof LiftedEnumerable
          ? [...enumerable.operators, operator]
          : [operator];

      return newInstance<
        LiftedEnumerable<TB>,
        EnumerableLike<any>,
        readonly Function1<EnumeratorLike<any>, EnumeratorLike<any>>[]
      >(LiftedEnumerable, src, allFunctions);
    };
})();

const liftT: Lift<EnumerableLike, TInteractive> = {
  lift,
  variance: interactive,
};

const delegatingDisposableEnumeratorProperties = {
  ...delegatingDisposableProperties,
  ...enumeratorProperties,
  delegate: none as unknown as EnumeratorLike,
};

const delegatingDisposableEnumeratorPrototype = mix(
  delegatingDisposablePrototype,
  enumeratorPrototype,
  {
    [Object_init](
      this: typeof delegatingDisposableEnumeratorProperties,
      delegate: EnumeratorLike<unknown>,
    ) {
      init(delegatingDisposablePrototype, this, delegate);
      init(enumeratorPrototype, this);
      this.delegate = delegate;
    },
  },
);

export const concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...disposableProperties,
      ...disposableRefProperties,
      ...enumeratorProperties,
      delegate: none as unknown as EnumeratorLike<EnumerableLike>,
    };

    const prototype = mix(
      disposablePrototype,
      disposableRefPrototype,
      enumeratorPrototype,
      {
        [Object_init](
          this: typeof properties & DisposableLike,
          delegate: EnumeratorLike<EnumerableLike>,
        ) {
          init(disposablePrototype, this);
          init<typeof disposableRefPrototype, typeof this, EnumeratorLike>(
            disposableRefPrototype,
            this,
            neverEnumerator(),
          );
          init(enumeratorPrototype, this);
          this.delegate = delegate;
        },
        [SourceLike_move](
          this: typeof properties &
            MutableEnumeratorLike<unknown> &
            MutableRefLike<EnumeratorLike>,
        ) {
          const { delegate } = this;
          const innerEnumerator = getCurrentRef(this);

          if (isDisposed(innerEnumerator) && move(delegate)) {
            const next = pipe(delegate, getCurrent, enumerate());
            pipe(this, setCurrentRef(next));
          }

          while (!pipe(this, getCurrentRef, isDisposed)) {
            const innerEnumerator = getCurrentRef(this);
            if (move(innerEnumerator)) {
              this[EnumeratorLike_current] = getCurrent(innerEnumerator);
              break;
            } else if (move(delegate)) {
              const next = pipe(delegate, getCurrent, enumerate());
              pipe(this, setCurrentRef(next));
            } else {
              pipe(this, dispose());
            }
          }
        },
      },
    );

    const createInstance = createObjectFactory<
      typeof prototype,
      typeof properties,
      EnumeratorLike<EnumerableLike>
    >(prototype, properties);

    const operator = <T>(
      delegate: EnumeratorLike<EnumerableLike<T>>,
    ): EnumeratorLike<T> =>
      pipe(createInstance(delegate), add(delegate)) as EnumeratorLike<T>;

    return () => lift(operator);
  })();
export const concatAllT: ConcatAll<EnumerableLike> = { concatAll };

export const concat: Concat<EnumerableLike>["concat"] = <T>(
  ...enumerables: readonly EnumerableLike<T>[]
): EnumerableLike<T> =>
  pipe(enumerables, toEnumerableReadonlyArray(), concatAll());

export const concatT: Concat<EnumerableLike> = {
  concat,
};

export const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...delegatingDisposableProperties,
      ...delegatingEnumeratorProperties,
      equality: none as unknown as Equality<unknown>,
    };

    const prototype = mix(
      delegatingDisposablePrototype,
      delegatingEnumeratorPrototype,
      {
        [SourceLike_move](this: typeof properties & EnumeratorLike) {
          const hadCurrent = hasCurrent(this);
          const prevCurrent = hadCurrent ? getCurrent(this) : none;

          try {
            while (delegatingEnumeratorMove(this)) {
              if (
                !hadCurrent ||
                !this.equality(prevCurrent as any, getCurrent(this))
              ) {
                break;
              }
            }
          } catch (cause) {
            pipe(this, dispose({ cause }));
          }
        },
        [Object_init](
          this: typeof properties,
          delegate: EnumeratorLike,
          equality: Equality<unknown>,
        ) {
          init(delegatingDisposablePrototype, this, delegate);
          init(delegatingEnumeratorPrototype, this, delegate);
          this.equality = equality;
        },
      },
    );

    const createInstance = createObjectFactory<
      typeof prototype,
      typeof properties,
      EnumeratorLike,
      Equality<unknown>
    >(prototype, properties);

    const distinctUntilChangedEnumerator =
      <T>(options?: { readonly equality?: Equality<T> }) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> => {
        const { equality = strictEquality } = options ?? {};

        return createInstance(
          delegate,
          equality as Equality<unknown>,
        ) as EnumeratorLike<T>;
      };

    return compose(distinctUntilChangedEnumerator, lift);
  })();

export const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike> = {
  distinctUntilChanged,
};

export const keep: Keep<EnumerableLike>["keep"] = /*@__PURE__*/ (() => {
  const properties = {
    ...delegatingDisposableProperties,
    ...delegatingEnumeratorProperties,
    predicate: none as unknown as Predicate<unknown>,
  };

  const prototype = mix(
    delegatingDisposablePrototype,
    delegatingEnumeratorPrototype,
    {
      [Object_init](
        this: typeof properties,
        delegate: EnumeratorLike,
        predicate: Predicate<unknown>,
      ) {
        init(delegatingDisposablePrototype, this, delegate);
        init(delegatingEnumeratorPrototype, this, delegate);
        this.predicate = predicate;
      },
      [SourceLike_move](this: typeof properties & EnumeratorLike) {
        const { predicate } = this;

        try {
          while (
            delegatingEnumeratorMove(this) &&
            !predicate(getCurrent(this))
          ) {}
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      },
    },
  );

  const createInstance = createObjectFactory<
    typeof prototype,
    typeof properties,
    EnumeratorLike,
    Predicate<unknown>
  >(prototype, properties);

  const keepEnumerator =
    <T>(predicate: Predicate<T>) =>
    (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
      createInstance(
        delegate,
        predicate as Predicate<unknown>,
      ) as EnumeratorLike<T>;

  return compose(keepEnumerator, lift);
})();

export const keepT: Keep<EnumerableLike> = {
  keep,
};

export const map: Map<EnumerableLike>["map"] = /*@__PURE__*/ (() => {
  const properties = {
    ...delegatingDisposableEnumeratorProperties,
    mapper: none as unknown as Function1<any, unknown>,
  };

  const prototype = mix(delegatingDisposableEnumeratorPrototype, {
    [Object_init](
      this: typeof properties,
      delegate: EnumeratorLike,
      mapper: Function1<any, unknown>,
    ) {
      init(delegatingDisposableEnumeratorPrototype, this, delegate);
      this.mapper = mapper;
    },
    [SourceLike_move](this: typeof properties & MutableEnumeratorLike) {
      const { delegate } = this;

      if (move(delegate)) {
        try {
          this[EnumeratorLike_current] = this.mapper(getCurrent(delegate));
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }
    },
  });

  const createInstance = createObjectFactory<
    typeof prototype,
    typeof properties,
    EnumeratorLike,
    Function1<any, unknown>
  >(prototype, properties);

  const mapEnumerator =
    <TA, TB>(mapper: Function1<TA, TB>) =>
    (delegate: EnumeratorLike<TA>): EnumeratorLike<TB> =>
      createInstance(delegate, mapper) as EnumeratorLike<TB>;

  return compose(mapEnumerator, lift);
})();

export const mapT: Map<EnumerableLike> = { map };

export const onNotify = /*@__PURE__*/ (() => {
  const properties = {
    ...delegatingDisposableProperties,
    ...delegatingEnumeratorProperties,
    onNotify: none as unknown as SideEffect1<any>,
  };

  const prototype = mix(
    delegatingDisposablePrototype,
    delegatingEnumeratorPrototype,
    {
      [Object_init](
        this: typeof properties,
        delegate: EnumeratorLike,
        onNotify: SideEffect1<any>,
      ) {
        init(delegatingDisposablePrototype, this, delegate);
        init(delegatingEnumeratorPrototype, this, delegate);
        this.onNotify = onNotify;
      },
      [SourceLike_move](this: typeof properties & EnumeratorLike) {
        if (delegatingEnumeratorMove(this)) {
          try {
            this.onNotify(getCurrent(this));
          } catch (cause) {
            pipe(this, dispose({ cause }));
          }
        }
      },
    },
  );

  const createInstance = createObjectFactory<
    typeof prototype,
    typeof properties,
    EnumeratorLike,
    SideEffect1<any>
  >(prototype, properties);

  const onNotifyEnumerator =
    <T>(onNotify: SideEffect1<T>) =>
    (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
      createInstance(delegate, onNotify) as EnumeratorLike<T>;

  return compose(onNotifyEnumerator, lift);
})();

export const pairwise: Pairwise<EnumerableLike>["pairwise"] =
  /*@__PURE__*/ (() => {
    const prototype = mix(delegatingDisposableEnumeratorPrototype, {
      [SourceLike_move](
        this: typeof delegatingDisposableEnumeratorProperties &
          MutableEnumeratorLike,
      ) {
        const prev = (
          hasCurrent(this)
            ? (getCurrent(this) as readonly [])
            : emptyReadonlyArray()
        )[1];

        const { delegate } = this;
        if (move(delegate)) {
          const current = getCurrent(delegate);
          this[EnumeratorLike_current] = [prev, current];
        }
      },
    });

    const createInstance = createObjectFactory<
      typeof prototype,
      typeof delegatingDisposableEnumeratorProperties,
      EnumeratorLike
    >(prototype, delegatingDisposableEnumeratorProperties);

    const pairwiseEnumerator =
      <T>() =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<readonly [Option<T>, T]> =>
        createInstance(delegate) as EnumeratorLike<readonly [Option<T>, T]>;

    return <T>() => pipe(pairwiseEnumerator<T>(), lift);
  })();

export const pairwiseT: Pairwise<EnumerableLike> = {
  pairwise,
};

export const scan: Scan<EnumerableLike>["scan"] = /*@__PURE__*/ (() => {
  const properties = {
    ...delegatingDisposableEnumeratorProperties,
    reducer: none as unknown as Reducer<any, any>,
  };

  const prototype = mix(delegatingDisposableEnumeratorPrototype, {
    [Object_init](
      this: typeof properties & MutableEnumeratorLike,
      delegate: EnumeratorLike,
      reducer: Reducer<any, any>,
      initialValue: Factory<unknown>,
    ) {
      init(delegatingDisposableEnumeratorPrototype, this, delegate);
      this.reducer = reducer;

      try {
        const acc = initialValue();
        this[EnumeratorLike_current] = acc;
      } catch (cause) {
        pipe(this, dispose({ cause }));
      }
    },
    [SourceLike_move](this: typeof properties & MutableEnumeratorLike) {
      const acc = hasCurrent(this) ? getCurrent(this) : none;

      const { delegate, reducer } = this;
      if (isSome(acc) && move(delegate)) {
        try {
          this[EnumeratorLike_current] = reducer(acc, getCurrent(delegate));
        } catch (cause) {
          pipe(this, dispose({ cause }));
        }
      }
    },
  });

  const createInstance = createObjectFactory<
    typeof prototype,
    typeof properties,
    EnumeratorLike,
    Reducer<any, any>,
    unknown
  >(prototype, properties);

  const scanEnumerator =
    <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    (delegate: EnumeratorLike<T>): EnumeratorLike<TAcc> =>
      createInstance(delegate, reducer, initialValue) as EnumeratorLike<TAcc>;

  return pipe(scanEnumerator, createScanOperator(liftT));
})();

export const scanT: Scan<EnumerableLike> = {
  scan,
};

export const skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...delegatingDisposableProperties,
      ...delegatingEnumeratorProperties,
      skipCount: 0 as number,
      count: 0 as number,
    };

    const prototype = mix(
      delegatingDisposablePrototype,
      delegatingEnumeratorPrototype,
      {
        [Object_init](
          this: typeof properties,
          delegate: EnumeratorLike,
          skipCount: number,
        ) {
          init(delegatingDisposablePrototype, this, delegate);
          init(delegatingEnumeratorPrototype, this, delegate);

          this.skipCount = skipCount;
          this.count = 0;
        },
        [SourceLike_move](this: typeof properties & EnumeratorLike) {
          const { skipCount } = this;

          for (let { count } = this; count < skipCount; count++) {
            if (!delegatingEnumeratorMove(this)) {
              break;
            }
          }

          this.count = skipCount;
          delegatingEnumeratorMove(this);
        },
      },
    );

    const createInstance = createObjectFactory<
      typeof prototype,
      typeof properties,
      EnumeratorLike,
      number
    >(prototype, properties);
    const skipFirstEnumerator =
      <T>(skipCount: number) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
        createInstance(delegate, skipCount) as EnumeratorLike<T>;

    return pipe(skipFirstEnumerator, createSkipFirstOperator(liftT));
  })();

export const skipFirstT: SkipFirst<EnumerableLike> = {
  skipFirst,
};

export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...delegatingDisposableProperties,
      ...delegatingEnumeratorProperties,
      maxCount: 0 as number,
      count: 0 as number,
    };

    const prototype = mix(
      delegatingDisposablePrototype,
      delegatingEnumeratorPrototype,
      {
        [Object_init](
          this: typeof properties,
          delegate: EnumeratorLike,
          maxCount: number,
        ) {
          init(delegatingDisposablePrototype, this, delegate);
          init(delegatingEnumeratorPrototype, this, delegate);
          this.maxCount = maxCount;
        },
        [SourceLike_move](this: typeof properties & DisposableLike) {
          if (this.count < this.maxCount) {
            this.count++;
            delegatingEnumeratorMove(this);
          } else {
            pipe(this, dispose());
          }
        },
      },
    );

    const createInstance = createObjectFactory<
      typeof prototype,
      typeof properties,
      EnumeratorLike,
      number
    >(prototype, properties);

    const takeFirstEnumerator =
      <T>(maxCount: number) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
        createInstance(delegate, maxCount) as EnumeratorLike<T>;

    return pipe(
      takeFirstEnumerator,
      createTakeFirstOperator({ ...liftT, ...emptyEnumerableT }),
    );
  })();

export const takeFirstT: TakeFirst<EnumerableLike> = {
  takeFirst,
};

export const takeLast: TakeLast<EnumerableLike>["takeLast"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...disposableProperties,
      ...delegatingEnumeratorProperties,
      maxCount: 0,
      isStarted: false,
    };

    const prototype = mix(disposablePrototype, delegatingEnumeratorPrototype, {
      [Object_init](
        this: typeof properties,
        delegate: EnumeratorLike,
        maxCount: number,
      ) {
        init(disposablePrototype, this);
        init(delegatingEnumeratorPrototype, this, delegate);
        this.maxCount = maxCount;
        this.isStarted = false;
      },
      [SourceLike_move]<T>(this: typeof properties & EnumeratorLike<T>) {
        if (!isDisposed(this) && !this.isStarted) {
          this.isStarted = true;

          const last: Array<T> = [];

          while (delegatingEnumeratorMove(this)) {
            last.push(getCurrent(this));

            if (getLength(last) > this.maxCount) {
              last.shift();
            }
          }

          const enumerator = pipe(
            last,
            toEnumerableReadonlyArray(),
            enumerate(),
            bindTo(this),
          );
          init(delegatingEnumeratorPrototype, this, enumerator);
        }

        delegatingEnumeratorMove(this);
      },
    });

    const createInstance = createObjectFactory<
      typeof prototype,
      typeof properties,
      EnumeratorLike,
      number
    >(prototype, properties);

    return <T>(
      options: { readonly count?: number } = {},
    ): ContainerOperator<EnumerableLike, T, T> => {
      const { count = 1 } = options;

      const operator = (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
        pipe(
          createInstance(delegate, count),
          add(delegate),
        ) as EnumeratorLike<T>;

      return enumerable =>
        count > 0
          ? pipe(enumerable, lift(operator))
          : // FIXME: why do we need the annotations?
            emptyEnumerable<T>();
    };
  })();

export const takeLastT: TakeLast<EnumerableLike> = { takeLast };

export const takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...delegatingDisposableProperties,
      ...delegatingEnumeratorProperties,
      predicate: none as unknown as Predicate<any>,
      inclusive: false,
      done: false,
    };

    const prototype = mix(
      delegatingDisposablePrototype,
      delegatingEnumeratorPrototype,
      {
        [Object_init](
          this: typeof properties,
          delegate: EnumeratorLike,
          predicate: Predicate<any>,
          inclusive: boolean,
        ) {
          init(delegatingDisposablePrototype, this, delegate);
          init(delegatingEnumeratorPrototype, this, delegate);
          this.predicate = predicate;
          this.inclusive = inclusive;
        },
        [SourceLike_move](this: typeof properties & EnumeratorLike) {
          const { inclusive, predicate } = this;

          if (this.done && !isDisposed(this)) {
            pipe(this, dispose());
          } else if (delegatingEnumeratorMove(this)) {
            const current = getCurrent(this);

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
        },
      },
    );

    const createInstance = createObjectFactory<
      typeof prototype,
      typeof properties,
      EnumeratorLike,
      Predicate<any>,
      boolean
    >(prototype, properties);

    const takeWhileEnumerator =
      <T>(predicate: Predicate<T>, inclusive: boolean) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
        createInstance(delegate, predicate, inclusive) as EnumeratorLike<T>;

    return pipe(takeWhileEnumerator, createTakeWhileOperator(liftT));
  })();

export const takeWhileT: TakeWhile<EnumerableLike> = { takeWhile };

export const TContainerOf: EnumerableLike = undefined as any;

export const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...disposableProperties,
      ...delegatingEnumeratorProperties,
      isEmpty: true,
    };

    const prototype = mix(disposablePrototype, delegatingEnumeratorPrototype, {
      [Object_init](this: typeof properties, delegate: EnumeratorLike) {
        init(disposablePrototype, this);
        init(delegatingEnumeratorPrototype, this, delegate);
        this.isEmpty = true;
      },
      [SourceLike_move](this: typeof properties) {
        if (delegatingEnumeratorMove(this)) {
          this.isEmpty = false;
        }
      },
    });

    const createInstance = createObjectFactory<
      typeof prototype,
      typeof properties,
      EnumeratorLike
    >(prototype, properties);

    const throwIfEmptyEnumerator =
      <T>() =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> & { isEmpty: boolean } =>
        createInstance(delegate) as EnumeratorLike<T> & { isEmpty: boolean };

    return pipe(throwIfEmptyEnumerator, createThrowIfEmptyOperator(liftT));
  })();

export const throwIfEmptyT: ThrowIfEmpty<EnumerableLike> = {
  throwIfEmpty,
};

export const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"] = () =>
  identity;

export const toEnumerableT: ToEnumerable<EnumerableLike> = {
  toEnumerable,
};

export const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (enumerable: EnumerableLike<T>) => {
      const enumerator = pipe(enumerable, enumerate());
      const result: T[] = [];

      while (move(enumerator)) {
        result.push(getCurrent(enumerator));
      }

      const error = getError(enumerator);

      if (isSome(error)) {
        throw error.cause;
      }

      return result;
    };

export const toReadonlyArrayT: ToReadonlyArray<EnumerableLike> = {
  toReadonlyArray,
};

/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
export const toIterable: ToIterable<EnumerableLike>["toIterable"] =
  /*@__PURE__*/ (() => {
    class EnumerableIterable<T = unknown> implements Iterable<T> {
      constructor(private readonly enumerable: EnumerableLike<T>) {}

      *[Symbol.iterator]() {
        const enumerator = pipe(this.enumerable, enumerate());
        while (move(enumerator)) {
          yield getCurrent(enumerator);
        }
      }
    }

    // FIXME: InstanceFactory?
    return () => enumerable => newInstance(EnumerableIterable, enumerable);
  })();

export const toIterableT: ToIterable<EnumerableLike> = { toIterable };

export const using: Using<EnumerableLike<unknown>>["using"] = <
  TResource extends DisposableLike,
  T,
>(
  resourceFactory: Factory<TResource | readonly TResource[]>,
  enumerableFactory: (...resources: readonly TResource[]) => EnumerableLike<T>,
): EnumerableLike<T> =>
  createEnumerable<T>(() => {
    const resources = resourceFactory();
    const resourcesArray = Array.isArray(resources) ? resources : [resources];
    const enumerator = pipe(enumerableFactory(...resourcesArray), enumerate());

    pipe(resourcesArray, forEachReadonlyArray(addTo(enumerator)));

    return enumerator;
  });

export const usingT: Using<EnumerableLike<unknown>> = {
  using,
};

const zip: Zip<EnumerableLike>["zip"] = /*@__PURE__*/ (() => {
  const moveAll = (enumerators: readonly EnumeratorLike<any>[]) => {
    for (const enumerator of enumerators) {
      move(enumerator);
    }
  };

  const allHaveCurrent = (enumerators: readonly EnumeratorLike<any>[]) =>
    pipe(enumerators, every(hasCurrent));

  const properties = {
    ...disposableProperties,
    ...enumeratorProperties,
    enumerators: none as unknown as readonly EnumeratorLike<unknown>[],
  };

  const prototype = mix(disposablePrototype, enumeratorPrototype, {
    [Object_init](
      this: typeof properties,
      enumerators: ReadonlyArrayLike<EnumeratorLike<any>>,
    ) {
      init(disposablePrototype, this);
      init(enumeratorPrototype, this);
      this.enumerators = enumerators;
    },
    [SourceLike_move](this: typeof properties & MutableEnumeratorLike) {
      if (!isDisposed(this)) {
        const { enumerators } = this;
        moveAll(enumerators);

        if (allHaveCurrent(enumerators)) {
          this[EnumeratorLike_current] = pipe(
            enumerators,
            mapReadonlyArray(getCurrent),
          );
        } else {
          pipe(this, dispose());
        }
      }
    },
  });

  const createInstance = createObjectFactory<
    typeof prototype,
    typeof properties,
    ReadonlyArrayLike<EnumeratorLike<any>>
  >(prototype, properties);

  const zipEnumerators = (
    enumerators: ReadonlyArrayLike<EnumeratorLike<any>>,
  ): EnumeratorLike<readonly any[]> => {
    const instance = createInstance(enumerators);
    pipe(enumerators, forEachReadonlyArray(addTo(instance)));
    return instance as EnumeratorLike<readonly any[]>;
  };

  return (
    ...enumerables: readonly EnumerableLike<any>[]
  ): EnumerableLike<any> =>
    createEnumerable(() =>
      pipe(enumerables, mapReadonlyArray(enumerate()), zipEnumerators),
    );
})();

export const zipT: Zip<EnumerableLike> = { zip };
