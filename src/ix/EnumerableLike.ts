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
import { MAX_SAFE_INTEGER } from "../__internal__/env";
import { getDelay } from "../__internal__/optionalArgs";
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
  Buffer,
  Concat,
  ConcatAll,
  ContainerOperator,
  DistinctUntilChanged,
  Keep,
  Map,
  Pairwise,
  ReadonlyArrayLike,
  Repeat,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToIterable,
  ToReadonlyArray,
  Zip,
  emptyReadonlyArray,
} from "../containers";
import {
  every,
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
  alwaysTrue,
  compose,
  forEach,
  getLength,
  identity,
  isNone,
  isSome,
  max,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
  raise,
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
  EnumerableObservable,
  EnumerableObservableLike,
  ObservableLike,
  ObservableLike_observableType,
  ReactiveContainerLike_sinkInto,
  RunnableObservable,
  RunnableObservableLike,
} from "../rx";
import { ObserverLike } from "../scheduling";
import { getScheduler } from "../scheduling/ObserverLike";
import { __yield, schedule } from "../scheduling/SchedulerLike";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
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
import { notifySink } from "../util/SinkLike";

export const enumerate =
  <T>() =>
  (enumerable: EnumerableLike<T>): EnumeratorLike<T> => {
    debugger;
    return enumerable[InteractiveContainerLike_interact](none);
  };

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

export const buffer: Buffer<EnumerableLike>["buffer"] = /*@__PURE__*/ (() => {
  const properties = {
    ...disposableProperties,
    ...enumeratorProperties,
    delegate: none as unknown as EnumeratorLike,
    maxBufferSize: 0,
  };

  const createInstance = createObjectFactory<
    EnumeratorLike<any>,
    typeof properties,
    EnumeratorLike,
    number
  >(
    properties,
    mix(disposablePrototype, enumeratorPrototype, {
      [Object_init](
        this: typeof properties & DisposableLike,
        delegate: EnumeratorLike,
        maxBufferSize: number,
      ) {
        init(disposablePrototype, this);
        init(enumeratorPrototype, this);
        this.delegate = delegate;
        this.maxBufferSize = maxBufferSize;
      },
      [SourceLike_move](this: typeof properties & MutableEnumeratorLike) {
        const buffer: unknown[] = [];

        const { delegate, maxBufferSize } = this;

        while (getLength(buffer) < maxBufferSize && move(delegate)) {
          buffer.push(getCurrent(delegate));
        }

        const bufferLength = getLength(buffer);
        if (bufferLength > 0) {
          this[EnumeratorLike_current] = buffer;
        } else if (bufferLength === 0) {
          pipe(this, dispose());
        }
      },
    }),
  );

  return <T>(
    options: {
      readonly maxBufferSize?: number;
    } = {},
  ) => {
    const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

    const operator = (delegate: EnumeratorLike<T>) =>
      pipe(createInstance(delegate, maxBufferSize), add(delegate));

    return lift(operator);
  };
})();

export const bufferT: Buffer<EnumerableLike<unknown>> = {
  buffer,
};

export const concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...disposableProperties,
      ...disposableRefProperties,
      ...enumeratorProperties,
      delegate: none as unknown as EnumeratorLike<EnumerableLike>,
    };

    const createInstance = createObjectFactory<
      EnumeratorLike<any>,
      typeof properties,
      EnumeratorLike<EnumerableLike>
    >(
      properties,
      mix(disposablePrototype, disposableRefPrototype, enumeratorPrototype, {
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
      }),
    );

    const operator = <T>(
      delegate: EnumeratorLike<EnumerableLike<T>>,
    ): EnumeratorLike<T> => pipe(createInstance(delegate), add(delegate));

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

    const createInstance = createObjectFactory<
      EnumeratorLike<any>,
      typeof properties,
      EnumeratorLike,
      Equality<unknown>
    >(
      properties,
      mix(delegatingDisposablePrototype, delegatingEnumeratorPrototype, {
        [SourceLike_move](this: typeof properties & EnumeratorLike<any>) {
          const hadCurrent = hasCurrent(this);
          const prevCurrent = hadCurrent ? getCurrent(this) : none;

          try {
            while (delegatingEnumeratorMove(this)) {
              if (
                !hadCurrent ||
                !this.equality(prevCurrent, getCurrent(this))
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
      }),
    );

    const distinctUntilChangedEnumerator =
      <T>(options?: { readonly equality?: Equality<T> }) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> => {
        const { equality = strictEquality } = options ?? {};

        return createInstance(delegate, equality as Equality<unknown>);
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

  const createInstance = createObjectFactory<
    EnumeratorLike<any>,
    typeof properties,
    EnumeratorLike,
    Predicate<unknown>
  >(
    properties,
    mix(delegatingDisposablePrototype, delegatingEnumeratorPrototype, {
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
    }),
  );

  const keepEnumerator =
    <T>(predicate: Predicate<T>) =>
    (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
      createInstance(delegate, predicate as Predicate<unknown>);

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

  const createInstance = createObjectFactory<
    EnumeratorLike<any>,
    typeof properties,
    EnumeratorLike,
    Function1<any, unknown>
  >(
    properties,
    mix(delegatingDisposableEnumeratorPrototype, {
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
    }),
  );

  const mapEnumerator =
    <TA, TB>(mapper: Function1<TA, TB>) =>
    (delegate: EnumeratorLike<TA>): EnumeratorLike<TB> =>
      createInstance(delegate, mapper);

  return compose(mapEnumerator, lift);
})();

export const mapT: Map<EnumerableLike> = { map };

export const onNotify = /*@__PURE__*/ (() => {
  const properties = {
    ...delegatingDisposableProperties,
    ...delegatingEnumeratorProperties,
    onNotify: none as unknown as SideEffect1<any>,
  };

  const createInstance = createObjectFactory<
    EnumeratorLike<any>,
    typeof properties,
    EnumeratorLike,
    SideEffect1<any>
  >(
    properties,
    mix(delegatingDisposablePrototype, delegatingEnumeratorPrototype, {
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
    }),
  );

  const onNotifyEnumerator =
    <T>(onNotify: SideEffect1<T>) =>
    (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
      createInstance(delegate, onNotify);

  return compose(onNotifyEnumerator, lift);
})();

export const pairwise: Pairwise<EnumerableLike>["pairwise"] =
  /*@__PURE__*/ (() => {
    const createInstance = createObjectFactory<
      EnumeratorLike<any>,
      typeof delegatingDisposableEnumeratorProperties,
      EnumeratorLike
    >(
      delegatingDisposableEnumeratorProperties,
      mix(delegatingDisposableEnumeratorPrototype, {
        [SourceLike_move](
          this: typeof delegatingDisposableEnumeratorProperties &
            MutableEnumeratorLike<readonly any[]>,
        ) {
          const prev = (
            hasCurrent(this) ? getCurrent(this) : emptyReadonlyArray()
          )[1];

          const { delegate } = this;
          if (move(delegate)) {
            const current = getCurrent(delegate);
            this[EnumeratorLike_current] = [prev, current];
          }
        },
      }),
    );

    const pairwiseEnumerator =
      <T>() =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<readonly [Option<T>, T]> =>
        createInstance(delegate);

    return <T>() => pipe(pairwiseEnumerator<T>(), lift);
  })();

export const pairwiseT: Pairwise<EnumerableLike> = {
  pairwise,
};

export const repeat: Repeat<EnumerableLike>["repeat"] = /*@__PURE__*/ (() => {
  const properties = {
    ...disposableProperties,
    count: 0,
    enumerator: none as Option<EnumeratorLike>,
    shouldRepeat: none as unknown as Predicate<number>,
    src: none as unknown as EnumerableLike,
  };

  const createInstance = createObjectFactory<
    EnumeratorLike,
    typeof properties,
    EnumerableLike<any>,
    Predicate<number>
  >(
    properties,
    mix(disposablePrototype, {
      [Object_init](
        this: typeof properties,
        src: EnumerableLike,
        shouldRepeat: Predicate<number>,
      ) {
        init(disposablePrototype, this);
        this.src = src;
        this.shouldRepeat = shouldRepeat;
      },
      [SourceLike_move](this: typeof properties & EnumeratorLike) {
        if (isNone(this.enumerator)) {
          this.enumerator = pipe(this.src, enumerate(), addTo(this));
        }

        let { enumerator } = this;
        while (!move(enumerator)) {
          this.count++;

          try {
            if (this.shouldRepeat(this.count)) {
              enumerator = pipe(this.src, enumerate(), addTo(this));
              this.enumerator = enumerator;
            } else {
              break;
            }
          } catch (cause) {
            pipe(this, dispose({ cause }));
            break;
          }
        }
      },
      get [EnumeratorLike_current](): unknown {
        const self = this as unknown as typeof properties;
        return hasCurrent(this)
          ? self.enumerator?.[EnumeratorLike_current] ?? raise()
          : raise();
      },
      get [EnumeratorLike_hasCurrent]() {
        const self = this as unknown as typeof properties;
        return self.enumerator?.[EnumeratorLike_hasCurrent] ?? false;
      },
    }),
  );

  return <T>(predicate?: Predicate<number> | number) => {
    const repeatPredicate: Predicate<number> = isNone(predicate)
      ? alwaysTrue
      : typeof predicate === "number"
      ? (count: number) => count < predicate
      : (count: number) => predicate(count);

    return (enumerable: EnumerableLike<T>) =>
      createEnumerable(() => createInstance(enumerable, repeatPredicate));
  };
})();

export const repeatT: Repeat<EnumerableLike<unknown>> = {
  repeat,
};

export const scan: Scan<EnumerableLike>["scan"] = /*@__PURE__*/ (() => {
  const properties = {
    ...delegatingDisposableEnumeratorProperties,
    reducer: none as unknown as Reducer<any, any>,
  };

  const createInstance = createObjectFactory<
    EnumeratorLike<any>,
    typeof properties,
    EnumeratorLike,
    Reducer<any, any>,
    unknown
  >(
    properties,
    mix(delegatingDisposableEnumeratorPrototype, {
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
    }),
  );

  const scanEnumerator =
    <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    (delegate: EnumeratorLike<T>): EnumeratorLike<TAcc> =>
      createInstance(delegate, reducer, initialValue);

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
      skipCount: 0,
      count: 0,
    };

    const createInstance = createObjectFactory<
      EnumeratorLike<any>,
      typeof properties,
      EnumeratorLike,
      number
    >(
      properties,
      mix(delegatingDisposablePrototype, delegatingEnumeratorPrototype, {
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
      }),
    );

    const skipFirstEnumerator =
      <T>(skipCount: number) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
        createInstance(delegate, skipCount);

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
      maxCount: 0,
      count: 0,
    };

    const createInstance = createObjectFactory<
      EnumeratorLike<any>,
      typeof properties,
      EnumeratorLike,
      number
    >(
      properties,
      mix(delegatingDisposablePrototype, delegatingEnumeratorPrototype, {
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
      }),
    );

    const takeFirstEnumerator =
      <T>(maxCount: number) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
        createInstance(delegate, maxCount);

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

    const createInstance = createObjectFactory<
      EnumeratorLike<any>,
      typeof properties,
      EnumeratorLike,
      number
    >(
      properties,
      mix(disposablePrototype, delegatingEnumeratorPrototype, {
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
        [SourceLike_move](this: typeof properties & EnumeratorLike) {
          if (!isDisposed(this) && !this.isStarted) {
            this.isStarted = true;

            const last: unknown[] = [];

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
      }),
    );

    return <T>(
      options: { readonly count?: number } = {},
    ): ContainerOperator<EnumerableLike, T, T> => {
      const { count = 1 } = options;

      const operator = (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
        pipe(createInstance(delegate, count), add(delegate));

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

    const createInstance = createObjectFactory<
      EnumeratorLike<any>,
      typeof properties,
      EnumeratorLike,
      Predicate<any>,
      boolean
    >(
      properties,
      mix(delegatingDisposablePrototype, delegatingEnumeratorPrototype, {
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
      }),
    );

    const takeWhileEnumerator =
      <T>(predicate: Predicate<T>, inclusive: boolean) =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
        createInstance(delegate, predicate, inclusive);

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

    const createInstance = createObjectFactory<
      EnumeratorLike<any> & { isEmpty: boolean },
      typeof properties,
      EnumeratorLike
    >(
      properties,
      mix(disposablePrototype, delegatingEnumeratorPrototype, {
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
      }),
    );

    const throwIfEmptyEnumerator =
      <T>() =>
      (delegate: EnumeratorLike<T>): EnumeratorLike<T> & { isEmpty: boolean } =>
        createInstance(delegate);

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

interface ToObservable {
  <T>(): Function1<EnumerableLike<T>, EnumerableObservableLike<T>>;
  <T>(options?: { delay?: number }): Function1<
    EnumerableLike<T>,
    RunnableObservableLike<T>
  >;
}

export const toObservable: ToObservable = /*@__PURE__*/ (() => {
  class ToEnumerableObservable<T> implements ObservableLike<T> {
    constructor(
      private readonly enumerable: EnumerableLike<T>,
      private readonly delay: number,
    ) {}

    get [ObservableLike_observableType]():
      | typeof EnumerableObservable
      | typeof RunnableObservable {
      return this.delay > 0 ? RunnableObservable : EnumerableObservable;
    }

    [ReactiveContainerLike_sinkInto](observer: ObserverLike<T>) {
      const enumerator = pipe(this.enumerable, enumerate(), bindTo(observer));

      const options = { delay: this.delay };

      pipe(
        observer,
        getScheduler,
        schedule(() => {
          while (!isDisposed(observer) && move(enumerator)) {
            pipe(enumerator, getCurrent, notifySink<T>(observer));
            __yield(options);
          }
        }, options),
      );
    }
  }

  return <T>(options?: { delay?: number }) =>
    (enumerable: EnumerableLike<T>): EnumerableObservableLike<T> => {
      const delay = getDelay(options);
      return newInstance(ToEnumerableObservable, enumerable, delay) as any;
    };
})();

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

  const createInstance = createObjectFactory<
    EnumeratorLike<any>,
    typeof properties,
    ReadonlyArrayLike<EnumeratorLike<any>>
  >(
    properties,
    mix(disposablePrototype, enumeratorPrototype, {
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
    }),
  );

  const zipEnumerators = (
    enumerators: ReadonlyArrayLike<EnumeratorLike<any>>,
  ): EnumeratorLike<readonly any[]> => {
    const instance = createInstance(enumerators);
    pipe(enumerators, forEach(addTo(instance)));
    return instance;
  };

  return (
    ...enumerables: readonly EnumerableLike<any>[]
  ): EnumerableLike<any> =>
    createEnumerable(() =>
      pipe(enumerables, mapReadonlyArray(enumerate()), zipEnumerators),
    );
})();

export const zipT: Zip<EnumerableLike> = { zip };
