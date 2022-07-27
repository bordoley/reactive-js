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
import { prototype as delegatingDisposablePrototype } from "../__internal__/util/DelegatingDisposable";
import {
  move as delegatingEnumeratorMove,
  prototype as delegatingEnumeratorPrototype,
} from "../__internal__/util/DelegatingEnumerator";
import { prototype as disposablePrototype } from "../__internal__/util/Disposable";
import { prototype as disposableRefPrototype } from "../__internal__/util/DisposableRefLike";
import {
  MutableEnumeratorLike,
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
  Object_properties,
  PropertyTypeOf,
  anyProperty,
  createObjectFactory,
  init,
  mixWith,
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
  returns,
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

type TDelegatingDisposableEnumeratorProperties = PropertyTypeOf<
  [typeof delegatingDisposablePrototype, typeof enumeratorPrototype]
> & {
  delegate: EnumeratorLike;
};

const delegatingDisposableEnumeratorPrototype = pipe(
  {
    [Object_properties]: {
      delegate: anyProperty,
    },
    [Object_init](
      this: TDelegatingDisposableEnumeratorProperties,
      delegate: EnumeratorLike<unknown>,
    ) {
      init(delegatingDisposablePrototype, this, delegate);
      init(enumeratorPrototype, this);
      this.delegate = delegate;
    },
  },
  mixWith(delegatingDisposablePrototype, enumeratorPrototype),
);

export const buffer: Buffer<EnumerableLike>["buffer"] = /*@__PURE__*/ (() => {
  type TProperties = PropertyTypeOf<
    [typeof disposablePrototype, typeof enumeratorPrototype]
  > & {
    delegate: EnumeratorLike;
    maxBufferSize: number;
  };

  const createInstance = pipe(
    {
      [Object_properties]: {
        delegate: anyProperty,
        maxBufferSize: 0,
      },
      [Object_init](
        this: TProperties & DisposableLike,
        delegate: EnumeratorLike,
        maxBufferSize: number,
      ) {
        init(disposablePrototype, this);
        init(enumeratorPrototype, this);
        this.delegate = delegate;
        this.maxBufferSize = maxBufferSize;
      },
      [SourceLike_move](this: TProperties & MutableEnumeratorLike) {
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
    },
    mixWith(disposablePrototype, enumeratorPrototype),
    createObjectFactory<
      EnumeratorLike<any>,
      TProperties,
      EnumeratorLike,
      number
    >(),
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
    type TProperties = PropertyTypeOf<
      [
        typeof disposablePrototype,
        typeof disposableRefPrototype,
        typeof enumeratorPrototype,
      ]
    > & {
      delegate: EnumeratorLike<EnumerableLike>;
    };

    const createInstance = pipe(
      {
        [Object_properties]: {
          delegate: anyProperty,
        },
        [Object_init](
          this: TProperties & DisposableLike,
          delegate: EnumeratorLike<EnumerableLike>,
        ) {
          init(disposablePrototype, this);
          init(disposableRefPrototype, this, neverEnumerator());
          init(enumeratorPrototype, this);
          this.delegate = delegate;
        },
        [SourceLike_move](
          this: TProperties &
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
      mixWith(disposablePrototype, disposableRefPrototype, enumeratorPrototype),
      createObjectFactory<
        EnumeratorLike<any>,
        TProperties,
        EnumeratorLike<EnumerableLike>
      >(),
    );

    const operator = <T>(
      delegate: EnumeratorLike<EnumerableLike<T>>,
    ): EnumeratorLike<T> => pipe(createInstance(delegate), add(delegate));

    return returns(lift(operator));
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
    type TProperties = PropertyTypeOf<
      [
        typeof delegatingDisposablePrototype,
        typeof delegatingEnumeratorPrototype,
      ]
    > & {
      equality: Equality<unknown>;
    };

    const createInstance = pipe(
      {
        [Object_properties]: { equality: anyProperty },
        [Object_init](
          this: TProperties,
          delegate: EnumeratorLike,
          equality: Equality<unknown>,
        ) {
          init(delegatingDisposablePrototype, this, delegate);
          init(delegatingEnumeratorPrototype, this, delegate);
          this.equality = equality;
        },
        [SourceLike_move](this: TProperties & EnumeratorLike<any>) {
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
      },
      mixWith(delegatingDisposablePrototype, delegatingEnumeratorPrototype),
      createObjectFactory<
        EnumeratorLike<any>,
        TProperties,
        EnumeratorLike,
        Equality<unknown>
      >(),
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
  type TProperties = PropertyTypeOf<
    [typeof delegatingDisposablePrototype, typeof delegatingEnumeratorPrototype]
  > & {
    predicate: Predicate<unknown>;
  };

  const createInstance = pipe(
    {
      [Object_properties]: { predicate: anyProperty },
      [Object_init](
        this: TProperties,
        delegate: EnumeratorLike,
        predicate: Predicate<unknown>,
      ) {
        init(delegatingDisposablePrototype, this, delegate);
        init(delegatingEnumeratorPrototype, this, delegate);
        this.predicate = predicate;
      },
      [SourceLike_move](this: TProperties & EnumeratorLike) {
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
    mixWith(delegatingDisposablePrototype, delegatingEnumeratorPrototype),
    createObjectFactory<
      EnumeratorLike<any>,
      TProperties,
      EnumeratorLike,
      Predicate<unknown>
    >(),
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
  type TProperties = PropertyTypeOf<
    [typeof delegatingDisposableEnumeratorPrototype]
  > & {
    mapper: Function1<any, unknown>;
  };

  const createInstance = pipe(
    {
      [Object_properties]: {
        mapper: anyProperty,
      },
      [Object_init](
        this: TProperties,
        delegate: EnumeratorLike,
        mapper: Function1<any, unknown>,
      ) {
        init(delegatingDisposableEnumeratorPrototype, this, delegate);
        this.mapper = mapper;
      },
      [SourceLike_move](this: TProperties & MutableEnumeratorLike) {
        const { delegate } = this;

        if (move(delegate)) {
          try {
            this[EnumeratorLike_current] = this.mapper(getCurrent(delegate));
          } catch (cause) {
            pipe(this, dispose({ cause }));
          }
        }
      },
    },
    mixWith(delegatingDisposableEnumeratorPrototype),
    createObjectFactory<
      EnumeratorLike<any>,
      TProperties,
      EnumeratorLike,
      Function1<any, unknown>
    >(),
  );

  const mapEnumerator =
    <TA, TB>(mapper: Function1<TA, TB>) =>
    (delegate: EnumeratorLike<TA>): EnumeratorLike<TB> =>
      createInstance(delegate, mapper);

  return compose(mapEnumerator, lift);
})();

export const mapT: Map<EnumerableLike> = { map };

export const onNotify = /*@__PURE__*/ (() => {
  type TProperties = PropertyTypeOf<
    [typeof delegatingDisposablePrototype, typeof delegatingEnumeratorPrototype]
  > & {
    onNotify: SideEffect1<any>;
  };

  const createInstance = pipe(
    {
      [Object_properties]: { onNotify: anyProperty },
      [Object_init](
        this: TProperties,
        delegate: EnumeratorLike,
        onNotify: SideEffect1<any>,
      ) {
        init(delegatingDisposablePrototype, this, delegate);
        init(delegatingEnumeratorPrototype, this, delegate);
        this.onNotify = onNotify;
      },
      [SourceLike_move](this: TProperties & EnumeratorLike) {
        if (delegatingEnumeratorMove(this)) {
          try {
            this.onNotify(getCurrent(this));
          } catch (cause) {
            pipe(this, dispose({ cause }));
          }
        }
      },
    },
    mixWith(delegatingDisposablePrototype, delegatingEnumeratorPrototype),
    createObjectFactory<
      EnumeratorLike<any>,
      TProperties,
      EnumeratorLike,
      SideEffect1<any>
    >(),
  );

  const onNotifyEnumerator =
    <T>(onNotify: SideEffect1<T>) =>
    (delegate: EnumeratorLike<T>): EnumeratorLike<T> =>
      createInstance(delegate, onNotify);

  return compose(onNotifyEnumerator, lift);
})();

export const pairwise: Pairwise<EnumerableLike>["pairwise"] =
  /*@__PURE__*/ (() => {
    const createInstance = pipe(
      {
        [SourceLike_move](
          this: TDelegatingDisposableEnumeratorProperties &
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
      },
      mixWith(delegatingDisposableEnumeratorPrototype),
      createObjectFactory<
        EnumeratorLike<any>,
        TDelegatingDisposableEnumeratorProperties,
        EnumeratorLike
      >(),
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
  type TProperties = PropertyTypeOf<[typeof disposablePrototype]> & {
    count: number;
    enumerator: Option<EnumeratorLike>;
    shouldRepeat: Predicate<number>;
    src: EnumerableLike;
  };

  const createInstance = pipe(
    {
      [Object_properties]: {
        count: 0,
        enumerator: none as Option<EnumeratorLike>,
        shouldRepeat: none as unknown as Predicate<number>,
        src: none as unknown as EnumerableLike,
      },
      [Object_init](
        this: TProperties,
        src: EnumerableLike,
        shouldRepeat: Predicate<number>,
      ) {
        init(disposablePrototype, this);
        this.src = src;
        this.shouldRepeat = shouldRepeat;
      },
      [SourceLike_move](this: TProperties & EnumeratorLike) {
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
        const self = this as unknown as TProperties;
        return hasCurrent(this)
          ? self.enumerator?.[EnumeratorLike_current] ?? raise()
          : raise();
      },
      get [EnumeratorLike_hasCurrent]() {
        const self = this as unknown as TProperties;
        return self.enumerator?.[EnumeratorLike_hasCurrent] ?? false;
      },
    },
    mixWith(disposablePrototype),
    createObjectFactory<
      EnumeratorLike,
      TProperties,
      EnumerableLike<any>,
      Predicate<number>
    >(),
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
  type TProperties = PropertyTypeOf<
    [typeof delegatingDisposableEnumeratorPrototype]
  > & {
    reducer: Reducer<any, any>;
  };

  const createInstance = pipe(
    {
      [Object_properties]: { reducer: anyProperty },
      [Object_init](
        this: TProperties & MutableEnumeratorLike,
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
      [SourceLike_move](this: TProperties & MutableEnumeratorLike) {
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
    },
    mixWith(delegatingDisposableEnumeratorPrototype),
    createObjectFactory<
      EnumeratorLike<any>,
      TProperties,
      EnumeratorLike,
      Reducer<any, any>,
      unknown
    >(),
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
    type TProperties = PropertyTypeOf<
      [
        typeof delegatingDisposablePrototype,
        typeof delegatingEnumeratorPrototype,
      ]
    > & {
      skipCount: number;
      count: number;
    };

    const createInstance = pipe(
      {
        [Object_properties]: {
          skipCount: 0,
          count: 0,
        },
        [Object_init](
          this: TProperties,
          delegate: EnumeratorLike,
          skipCount: number,
        ) {
          init(delegatingDisposablePrototype, this, delegate);
          init(delegatingEnumeratorPrototype, this, delegate);

          this.skipCount = skipCount;
          this.count = 0;
        },
        [SourceLike_move](this: TProperties & EnumeratorLike) {
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
      mixWith(delegatingDisposablePrototype, delegatingEnumeratorPrototype),
      createObjectFactory<
        EnumeratorLike<any>,
        TProperties,
        EnumeratorLike,
        number
      >(),
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
    type TProperties = PropertyTypeOf<
      [
        typeof delegatingDisposablePrototype,
        typeof delegatingEnumeratorPrototype,
      ]
    > & {
      maxCount: number;
      count: number;
    };

    const createInstance = pipe(
      {
        [Object_properties]: {
          maxCount: 0,
          count: 0,
        },
        [Object_init](
          this: TProperties,
          delegate: EnumeratorLike,
          maxCount: number,
        ) {
          init(delegatingDisposablePrototype, this, delegate);
          init(delegatingEnumeratorPrototype, this, delegate);
          this.maxCount = maxCount;
        },
        [SourceLike_move](this: TProperties & DisposableLike) {
          if (this.count < this.maxCount) {
            this.count++;
            delegatingEnumeratorMove(this);
          } else {
            pipe(this, dispose());
          }
        },
      },
      mixWith(delegatingDisposablePrototype, delegatingEnumeratorPrototype),
      createObjectFactory<
        EnumeratorLike<any>,
        TProperties,
        EnumeratorLike,
        number
      >(),
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
    type TProperties = PropertyTypeOf<
      [typeof disposablePrototype, typeof delegatingEnumeratorPrototype]
    > & {
      maxCount: number;
      isStarted: boolean;
    };

    const createInstance = pipe(
      {
        [Object_properties]: {
          maxCount: 0,
          isStarted: false,
        },
        [Object_init](
          this: TProperties,
          delegate: EnumeratorLike,
          maxCount: number,
        ) {
          init(disposablePrototype, this);
          init(delegatingEnumeratorPrototype, this, delegate);
          this.maxCount = maxCount;
          this.isStarted = false;
        },
        [SourceLike_move](this: TProperties & EnumeratorLike) {
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
      },
      mixWith(disposablePrototype, delegatingEnumeratorPrototype),
      createObjectFactory<
        EnumeratorLike<any>,
        TProperties,
        EnumeratorLike,
        number
      >(),
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
    type TProperties = PropertyTypeOf<
      [
        typeof delegatingDisposablePrototype,
        typeof delegatingEnumeratorPrototype,
      ]
    > & {
      predicate: Predicate<any>;
      inclusive: boolean;
      done: boolean;
    };

    const createInstance = pipe(
      {
        [Object_properties]: {
          predicate: anyProperty,
          inclusive: false,
          done: false,
        },
        [Object_init](
          this: TProperties,
          delegate: EnumeratorLike,
          predicate: Predicate<any>,
          inclusive: boolean,
        ) {
          init(delegatingDisposablePrototype, this, delegate);
          init(delegatingEnumeratorPrototype, this, delegate);
          this.predicate = predicate;
          this.inclusive = inclusive;
        },
        [SourceLike_move](this: TProperties & EnumeratorLike) {
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
      mixWith(delegatingDisposablePrototype, delegatingEnumeratorPrototype),
      createObjectFactory<
        EnumeratorLike<any>,
        TProperties,
        EnumeratorLike,
        Predicate<any>,
        boolean
      >(),
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
    type TProperties = PropertyTypeOf<
      [typeof disposablePrototype, typeof delegatingEnumeratorPrototype]
    > & {
      isEmpty: boolean;
    };

    const createInstance = pipe(
      {
        [Object_properties]: {
          isEmpty: true,
        },
        [Object_init](this: TProperties, delegate: EnumeratorLike) {
          init(disposablePrototype, this);
          init(delegatingEnumeratorPrototype, this, delegate);
          this.isEmpty = true;
        },
        [SourceLike_move](this: TProperties) {
          if (delegatingEnumeratorMove(this)) {
            this.isEmpty = false;
          }
        },
      },
      mixWith(disposablePrototype, delegatingEnumeratorPrototype),
      createObjectFactory<
        EnumeratorLike<any> & { isEmpty: boolean },
        TProperties,
        EnumeratorLike
      >(),
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

  type TProperties = PropertyTypeOf<
    [typeof disposablePrototype, typeof enumeratorPrototype]
  > & {
    enumerators: readonly EnumeratorLike<unknown>[];
  };

  const createInstance = pipe(
    {
      [Object_properties]: {
        enumerators: anyProperty,
      },
      [Object_init](
        this: TProperties,
        enumerators: ReadonlyArrayLike<EnumeratorLike<any>>,
      ) {
        init(disposablePrototype, this);
        init(enumeratorPrototype, this);
        this.enumerators = enumerators;
      },
      [SourceLike_move](this: TProperties & MutableEnumeratorLike) {
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
    },
    mixWith(disposablePrototype, enumeratorPrototype),
    createObjectFactory<
      EnumeratorLike<any>,
      TProperties,
      ReadonlyArrayLike<EnumeratorLike<any>>
    >(),
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
