import { createRepeatOperator } from "../__internal__/containers/ContainerLikeInternal";
import {
  Lift,
  TInteractive,
  createBufferOperator,
  createDistinctUntilChangedOperator,
  createForEachOperator,
  createKeepOperator,
  createMapOperator,
  createScanOperator,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeLastOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
  interactive,
} from "../__internal__/containers/StatefulContainerLikeInternal";
import { getDelay, hasDelay } from "../__internal__/optionalArgs";
import {
  delegatingDisposableMixin,
  disposableMixin,
  disposableRefMixin,
} from "../__internal__/util/DisposableLikeMixins";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/EnumeratorLikeMixin";
import {
  MutableRefLike,
  getCurrentRef,
  setCurrentRef,
} from "../__internal__/util/MutableRefLike";
import {
  Class1,
  PropertyTypeOf,
  UnknownObject,
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "../__internal__/util/Object";
import {
  Buffer,
  Concat,
  ConcatAll,
  DistinctUntilChanged,
  ForEach,
  Keep,
  Map,
  Pairwise,
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
  forEach as forEachArray,
  getLength,
  identity,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
  raise,
  returns,
} from "../functions";
import {
  EnumerableLike,
  InteractiveContainerLike_interact,
  ToEnumerable,
  createEnumerable,
} from "../ix";
import {
  EnumerableObservableLike,
  RunnableLike,
  RunnableObservableLike,
  ToRunnable,
  createEnumerableObservable,
  createRunnable,
  createRunnableObservable,
} from "../rx";
import { ObserverLike } from "../scheduling";
import { getScheduler } from "../scheduling/ObserverLike";
import { __yield, schedule } from "../scheduling/SchedulerLike";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  Exception,
  SinkLike,
  SourceLike_move,
  disposed,
} from "../util";
import {
  add,
  addIgnoringChildErrors,
  addTo,
  bindTo,
  dispose,
  getException,
  isDisposed,
  onComplete,
} from "../util/DisposableLike";
import {
  forEach as forEachEnumerator,
  getCurrent,
  hasCurrent,
  move,
} from "../util/EnumeratorLike";
import { notifySink } from "../util/SinkLike";

const DelegatingEnumerator_move_delegate = Symbol(
  "DelegatingEnumerator_move_delegate",
);

interface DelegatingEnumeratorLike<T> extends EnumeratorLike<T> {
  [DelegatingEnumerator_move_delegate](): boolean;
}

type TDelegatingEnumeratorMixinReturn<T> = Omit<
  EnumeratorLike<T>,
  keyof DisposableLike
>;

const delegatingEnumeratorMixin: <T>() => Class1<
  EnumeratorLike<T>,
  TDelegatingEnumeratorMixinReturn<T>,
  UnknownObject,
  {
    [DelegatingEnumerator_move_delegate](): boolean;
    readonly [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
  }
> = /*@__PURE__*/ (<T>() => {
  const DelegatingEnumerator_private_delegate = Symbol(
    "DelegatingEnumerator_private_delegate",
  );

  type TProperties = {
    [DelegatingEnumerator_private_delegate]: EnumeratorLike<T>;
  };

  return pipe(
    clazz(
      function DelegatingEnumerator(
        this: TProperties & TDelegatingEnumeratorMixinReturn<T>,
        delegate: EnumeratorLike<T>,
      ) {
        this[DelegatingEnumerator_private_delegate] = delegate;

        return this;
      },
      {
        [DelegatingEnumerator_private_delegate]: none,
      },
      {
        get [EnumeratorLike_current](): T {
          const self = this as unknown as TProperties;
          return (
            self[DelegatingEnumerator_private_delegate]?.[
              EnumeratorLike_current
            ] ?? raise()
          );
        },
        get [EnumeratorLike_hasCurrent](): boolean {
          const self = this as unknown as TProperties;
          return self[DelegatingEnumerator_private_delegate][
            EnumeratorLike_hasCurrent
          ];
        },
        [DelegatingEnumerator_move_delegate](this: TProperties): boolean {
          const delegate = this[DelegatingEnumerator_private_delegate];
          return move(delegate);
        },
      },
    ),
    returns,
  );
})();

const delegatingEnumeratorMove = (enumerator: {
  [DelegatingEnumerator_move_delegate](): boolean;
}): boolean => enumerator[DelegatingEnumerator_move_delegate]();

export const enumerate =
  <T>() =>
  (enumerable: EnumerableLike<T>): EnumeratorLike<T> =>
    enumerable[InteractiveContainerLike_interact](none);

const lift: Lift<EnumerableLike, TInteractive>["lift"] = /*@__PURE__*/ (() => {
  class LiftedEnumerable<TA, TB> implements EnumerableLike<TB> {
    constructor(
      readonly src: EnumerableLike<TA>,
      readonly operators: readonly Function1<
        EnumeratorLike<any>,
        EnumeratorLike<any>
      >[],
    ) {}

    [InteractiveContainerLike_interact](): EnumeratorLike<TB> {
      return pipeUnsafe(
        this.src,
        enumerate(),
        ...this.operators,
      ) as EnumeratorLike<TB>;
    }
  }

  return <TA, TB>(
      operator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    ) =>
    (enumerable: EnumerableLike<TA>): EnumerableLike<TB> => {
      const src =
        enumerable instanceof LiftedEnumerable
          ? (enumerable.src as EnumerableLike<TA>)
          : enumerable;

      const allFunctions =
        enumerable instanceof LiftedEnumerable
          ? [...enumerable.operators, operator]
          : [operator];

      return newInstance<
        EnumerableLike<TB>,
        EnumerableLike<TA>,
        readonly Function1<EnumeratorLike<any>, EnumeratorLike<any>>[]
      >(LiftedEnumerable, src, allFunctions);
    };
})();
const liftT: Lift<EnumerableLike, TInteractive> = {
  lift,
  variance: interactive,
};

export const buffer: Buffer<EnumerableLike>["buffer"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedEnumerator = enumeratorMixin<readonly T[]>();

  type TProperties = PropertyTypeOf<
    [typeof disposableMixin, typeof typedEnumerator]
  > & {
    delegate: EnumeratorLike<T>;
    maxBufferSize: number;
  };

  return pipe(
    createInstanceFactory(
      clazz(
        __extends(disposableMixin, typedEnumerator),
        function BufferEnumerator(
          this: TProperties & EnumeratorLike<readonly T[]>,
          delegate: EnumeratorLike<T>,
          maxBufferSize: number,
        ) {
          init(disposableMixin, this);
          init(typedEnumerator, this);
          this.delegate = delegate;
          this.maxBufferSize = maxBufferSize;

          pipe(this, add(delegate));
          return this;
        },
        {
          delegate: none,
          maxBufferSize: 0,
        },
        {
          [SourceLike_move](
            this: TProperties & MutableEnumeratorLike<readonly T[]>,
          ) {
            const buffer: T[] = [];

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
      ),
    ),
    createBufferOperator<EnumerableLike, T, TInteractive>(liftT),
  );
})();
export const bufferT: Buffer<EnumerableLike> = {
  buffer,
};

export const concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  /*@__PURE__*/ (<T>() => {
    const typedEnumerator = enumeratorMixin<T>();
    const typedDisposableRefMixin = disposableRefMixin<EnumeratorLike<T>>();

    type TProperties = PropertyTypeOf<
      [
        typeof disposableMixin,
        typeof typedDisposableRefMixin,
        typeof typedEnumerator,
      ]
    > & {
      delegate: EnumeratorLike<EnumerableLike<T>>;
    };

    return pipe(
      createInstanceFactory(
        clazz(
          __extends(disposableMixin, typedDisposableRefMixin, typedEnumerator),
          function ConcatAllEnumerator(
            this: TProperties & EnumeratorLike<T>,
            delegate: EnumeratorLike<EnumerableLike<T>>,
          ) {
            init(disposableMixin, this);
            init(typedDisposableRefMixin, this, disposed);
            init(typedEnumerator, this);
            this.delegate = delegate;

            pipe(this, add(delegate));

            return this;
          },
          {
            delegate: none,
          },
          {
            [SourceLike_move](
              this: TProperties &
                MutableEnumeratorLike<T> &
                MutableRefLike<EnumeratorLike<T>>,
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
        ),
      ),
      lift,
      returns,
    );
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
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin<T>();

    type TProperties = PropertyTypeOf<
      [typeof delegatingDisposableMixin, typeof typedDelegatingEnumeratorMixin]
    > & {
      equality: Equality<T>;
    };

    return pipe(
      createInstanceFactory(
        clazz(
          __extends(delegatingDisposableMixin, typedDelegatingEnumeratorMixin),
          function DistinctUntilChanged(
            this: TProperties & EnumeratorLike<T>,
            delegate: EnumeratorLike<T>,
            equality: Equality<T>,
          ) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.equality = equality;

            return this;
          },
          { equality: none },
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              const hadCurrent = hasCurrent(this);
              const prevCurrent = hadCurrent ? getCurrent(this) : none;

              try {
                while (delegatingEnumeratorMove(this)) {
                  if (
                    !hadCurrent ||
                    !this.equality(prevCurrent as T, getCurrent(this))
                  ) {
                    break;
                  }
                }
              } catch (cause) {
                pipe(this, dispose({ cause }));
              }
            },
          },
        ),
      ),
      createDistinctUntilChangedOperator<EnumerableLike, T, TInteractive>(
        liftT,
      ),
    );
  })();
export const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike> = {
  distinctUntilChanged,
};

export const forEach: ForEach<EnumerableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof delegatingDisposableMixin, typeof typedDelegatingEnumeratorMixin]
  > & {
    effect: SideEffect1<T>;
  };

  return pipe(
    createInstanceFactory(
      clazz(
        __extends(delegatingDisposableMixin, typedDelegatingEnumeratorMixin),
        function forEachEnumerator(
          this: TProperties & EnumeratorLike<T>,
          delegate: EnumeratorLike<T>,
          effect: SideEffect1<T>,
        ) {
          init(delegatingDisposableMixin, this, delegate);
          init(typedDelegatingEnumeratorMixin, this, delegate);
          this.effect = effect;

          return this;
        },
        { effect: none },
        {
          [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
            if (delegatingEnumeratorMove(this)) {
              try {
                this.effect(getCurrent(this));
              } catch (cause) {
                pipe(this, dispose({ cause }));
              }
            }
          },
        },
      ),
    ),
    createForEachOperator<EnumerableLike, T, TInteractive>(liftT),
  );
})();
export const forEachT: ForEach<EnumerableLike> = { forEach };

export const keep: Keep<EnumerableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof delegatingDisposableMixin, typeof typedDelegatingEnumeratorMixin]
  > & {
    predicate: Predicate<T>;
  };

  return pipe(
    createInstanceFactory(
      clazz(
        __extends(delegatingDisposableMixin, typedDelegatingEnumeratorMixin),
        function KeepEnumerator(
          this: TProperties & EnumeratorLike<T>,
          delegate: EnumeratorLike<T>,
          predicate: Predicate<T>,
        ) {
          init(delegatingDisposableMixin, this, delegate);
          init(typedDelegatingEnumeratorMixin, this, delegate);
          this.predicate = predicate;

          return this;
        },
        { predicate: none },
        {
          [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
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
      ),
    ),
    createKeepOperator<EnumerableLike, T, TInteractive>(liftT),
  );
})();
export const keepT: Keep<EnumerableLike> = {
  keep,
};

export const map: Map<EnumerableLike>["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const typedEnumerator = enumeratorMixin<TB>();

  type TProperties = PropertyTypeOf<
    [typeof delegatingDisposableMixin, typeof typedEnumerator]
  > & {
    mapper: Function1<TA, TB>;
    delegate: EnumeratorLike<TA>;
  };

  return pipe(
    createInstanceFactory(
      clazz(
        __extends(delegatingDisposableMixin, typedEnumerator),
        function MapEnumerator(
          this: TProperties & EnumeratorLike<TB>,
          delegate: EnumeratorLike<TA>,
          mapper: Function1<TA, TB>,
        ) {
          init(delegatingDisposableMixin, this, delegate);
          init(typedEnumerator, this);
          this.delegate = delegate;
          this.mapper = mapper;

          return this;
        },
        {
          mapper: none,
          delegate: none,
        },
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<TB>) {
            const { delegate } = this;

            if (move(delegate)) {
              try {
                this[EnumeratorLike_current] = this.mapper(
                  getCurrent(delegate),
                );
              } catch (cause) {
                pipe(this, dispose({ cause }));
              }
            }
          },
        },
      ),
    ),
    createMapOperator<EnumerableLike, TA, TB, TInteractive>(liftT),
  );
})();
export const mapT: Map<EnumerableLike> = { map };

export const pairwise: Pairwise<EnumerableLike>["pairwise"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedEnumerator = enumeratorMixin<[T, T]>();

  type TProperties = PropertyTypeOf<
    [typeof delegatingDisposableMixin, typeof typedEnumerator]
  > & {
    delegate: EnumeratorLike<T>;
  };

  return pipe(
    createInstanceFactory(
      clazz(
        __extends(delegatingDisposableMixin, typedEnumerator),
        function PairwiseEnumerator(
          this: TProperties & EnumeratorLike<[T, T]>,
          delegate: EnumeratorLike<T>,
        ) {
          init(delegatingDisposableMixin, this, delegate);
          init(typedEnumerator, this);
          this.delegate = delegate;

          return this;
        },
        {},
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<[T, T]>) {
            const { delegate } = this;

            const prev = hasCurrent(this)
              ? getCurrent(this)[1]
              : move(delegate)
              ? getCurrent(delegate)
              : none;

            if (isSome(prev) && move(delegate)) {
              const current = getCurrent(delegate);
              this[EnumeratorLike_current] = [prev, current];
            } else {
              pipe(this, dispose());
            }
          },
        },
      ),
    ),
    lift,
    returns,
  );
})();
export const pairwiseT: Pairwise<EnumerableLike> = {
  pairwise,
};

export const repeat: Repeat<EnumerableLike>["repeat"] = /*@__PURE__*/ (<
  T,
>() => {
  type TProperties = PropertyTypeOf<[typeof disposableMixin]> & {
    count: number;
    enumerator: Option<EnumeratorLike<T>>;
    shouldRepeat: Predicate<number>;
    src: EnumerableLike<T>;
  };

  const createRepeatEnumerator = createInstanceFactory(
    clazz(
      __extends(disposableMixin),
      function RepeatEnumerator(
        this: TProperties & EnumeratorLike<T>,
        src: EnumerableLike<T>,
        shouldRepeat: Predicate<number>,
      ) {
        init(disposableMixin, this);
        this.src = src;
        this.shouldRepeat = shouldRepeat;

        return this;
      },
      {
        count: 0,
        enumerator: none,
        shouldRepeat: none,
        src: none,
      },
      {
        [SourceLike_move](this: TProperties & EnumeratorLike<T>) {
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
        get [EnumeratorLike_current](): T {
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
    ),
  );

  return createRepeatOperator<EnumerableLike, T>((delegate, predicate) =>
    createEnumerable(() => createRepeatEnumerator(delegate, predicate)),
  );
})();
export const repeatT: Repeat<EnumerableLike> = {
  repeat,
};

export const scan: Scan<EnumerableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedEnumerator = enumeratorMixin<TAcc>();

  type TProperties = PropertyTypeOf<
    [typeof delegatingDisposableMixin, typeof typedEnumerator]
  > & {
    reducer: Reducer<T, TAcc>;
    delegate: EnumeratorLike<T>;
  };

  return pipe(
    createInstanceFactory(
      clazz(
        __extends(delegatingDisposableMixin, typedEnumerator),
        function ScanEnumerator(
          this: TProperties & MutableEnumeratorLike<TAcc>,
          delegate: EnumeratorLike<T>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ) {
          init(delegatingDisposableMixin, this, delegate);
          init(typedEnumerator, this);
          this.delegate = delegate;
          this.reducer = reducer;

          try {
            const acc = initialValue();
            this[EnumeratorLike_current] = acc;
          } catch (cause) {
            pipe(this, dispose({ cause }));
          }

          return this;
        },
        { reducer: none, delegate: none },
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<TAcc>) {
            const acc = hasCurrent(this) ? getCurrent(this) : none;

            const { delegate, reducer } = this;
            if (isSome(acc) && move(delegate)) {
              try {
                this[EnumeratorLike_current] = reducer(
                  acc,
                  getCurrent(delegate),
                );
              } catch (cause) {
                pipe(this, dispose({ cause }));
              }
            }
          },
        },
      ),
    ),
    createScanOperator<EnumerableLike, T, TAcc, TInteractive>(liftT),
  );
})();
export const scanT: Scan<EnumerableLike> = {
  scan,
};

export const skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin<T>();

    type TProperties = PropertyTypeOf<
      [typeof delegatingDisposableMixin, typeof typedDelegatingEnumeratorMixin]
    > & {
      skipCount: number;
      count: number;
    };

    return pipe(
      createInstanceFactory(
        clazz(
          __extends(delegatingDisposableMixin, typedDelegatingEnumeratorMixin),
          function SkipFirstEnumerator(
            this: TProperties & EnumeratorLike<T>,
            delegate: EnumeratorLike<T>,
            skipCount: number,
          ) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedDelegatingEnumeratorMixin, this, delegate);

            this.skipCount = skipCount;
            this.count = 0;

            return this;
          },
          {
            skipCount: 0,
            count: 0,
          },
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
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
        ),
      ),
      createSkipFirstOperator<EnumerableLike, T, TInteractive>(liftT),
    );
  })();
export const skipFirstT: SkipFirst<EnumerableLike> = {
  skipFirst,
};

export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin<T>();

    type TProperties = PropertyTypeOf<
      [typeof delegatingDisposableMixin, typeof typedDelegatingEnumeratorMixin]
    > & {
      maxCount: number;
      count: number;
    };

    return pipe(
      createInstanceFactory(
        clazz(
          __extends(delegatingDisposableMixin, typedDelegatingEnumeratorMixin),
          function TakeFirstEnumerator(
            this: TProperties & EnumeratorLike<T>,
            delegate: EnumeratorLike<T>,
            maxCount: number,
          ) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.maxCount = maxCount;

            return this;
          },
          {
            maxCount: 0,
            count: 0,
          },
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (this.count < this.maxCount) {
                this.count++;
                delegatingEnumeratorMove(this);
              } else {
                pipe(this, dispose());
              }
            },
          },
        ),
      ),
      createTakeFirstOperator<EnumerableLike, T, TInteractive>({
        ...liftT,
      }),
    );
  })();
export const takeFirstT: TakeFirst<EnumerableLike> = {
  takeFirst,
};

export const takeLast: TakeLast<EnumerableLike>["takeLast"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof disposableMixin, typeof typedDelegatingEnumeratorMixin]
  > & {
    maxCount: number;
    isStarted: boolean;
  };

  return pipe(
    createInstanceFactory(
      clazz(
        __extends(disposableMixin, typedDelegatingEnumeratorMixin),
        function TakeLastEnumerator(
          this: TProperties & EnumeratorLike<T>,
          delegate: EnumeratorLike<T>,
          maxCount: number,
        ) {
          init(disposableMixin, this);
          init(typedDelegatingEnumeratorMixin, this, delegate);
          this.maxCount = maxCount;
          this.isStarted = false;

          pipe(this, add(delegate));

          return this;
        },
        {
          maxCount: 0,
          isStarted: false,
        },
        {
          [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
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
              init(typedDelegatingEnumeratorMixin, this, enumerator);
            }

            delegatingEnumeratorMove(this);
          },
        },
      ),
    ),
    createTakeLastOperator<EnumerableLike, T, TInteractive>({
      ...liftT,
    }),
  );
})();
export const takeLastT: TakeLast<EnumerableLike> = { takeLast };

export const takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin<T>();

    type TProperties = PropertyTypeOf<
      [typeof delegatingDisposableMixin, typeof typedDelegatingEnumeratorMixin]
    > & {
      predicate: Predicate<T>;
      inclusive: boolean;
      done: boolean;
    };

    return pipe(
      createInstanceFactory(
        clazz(
          __extends(delegatingDisposableMixin, typedDelegatingEnumeratorMixin),
          function TakeWhileEnumerator(
            this: TProperties & EnumeratorLike<T>,
            delegate: EnumeratorLike<T>,
            predicate: Predicate<T>,
            inclusive: boolean,
          ) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.predicate = predicate;
            this.inclusive = inclusive;

            return this;
          },
          {
            predicate: none,
            inclusive: false,
            done: false,
          },
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
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
        ),
      ),
      createTakeWhileOperator<EnumerableLike, T, TInteractive>(liftT),
    );
  })();
export const takeWhileT: TakeWhile<EnumerableLike> = { takeWhile };

export const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin<T>();

    type TProperties = PropertyTypeOf<
      [typeof disposableMixin, typeof typedDelegatingEnumeratorMixin]
    > & {
      isEmpty: boolean;
    };

    return pipe(
      createInstanceFactory(
        clazz(
          __extends(disposableMixin, typedDelegatingEnumeratorMixin),
          function TakeWhileEnumerator(
            this: TProperties & EnumeratorLike<T>,
            delegate: EnumeratorLike,
            factory: Factory<unknown>,
          ) {
            init(disposableMixin, this);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.isEmpty = true;

            pipe(this, addIgnoringChildErrors(delegate));
            pipe(
              delegate,
              onComplete(() => {
                let error: Option<Exception> = none;

                if (this.isEmpty) {
                  let cause: unknown = none;
                  try {
                    cause = factory();
                  } catch (e) {
                    cause = e;
                  }

                  error = { cause };
                }

                pipe(this, dispose(error));
              }),
            );

            return this;
          },
          {
            isEmpty: true,
          },
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (delegatingEnumeratorMove(this)) {
                this.isEmpty = false;
              }
            },
          },
        ),
      ),
      createThrowIfEmptyOperator<EnumerableLike, T, TInteractive>(liftT),
    );
  })();
export const throwIfEmptyT: ThrowIfEmpty<EnumerableLike> = {
  throwIfEmpty,
};

export const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"] = () =>
  identity;
export const toEnumerableT: ToEnumerable<EnumerableLike> = {
  toEnumerable,
};

interface toObservable {
  <T>(): Function1<EnumerableLike<T>, EnumerableObservableLike<T>>;
  <T>(options?: { delay: number; delayStart?: boolean }): Function1<
    EnumerableLike<T>,
    RunnableObservableLike<T>
  >;
}
export const toObservable: toObservable = (<T>(options?: {
    delay?: number;
    delayStart?: boolean;
  }) =>
  (enumerable: EnumerableLike<T>) => {
    const delay = getDelay(options);
    const { delayStart = false } = options ?? {};

    const onSink = (observer: ObserverLike<T>) => {
      const enumerator = pipe(enumerable, enumerate(), bindTo(observer));

      pipe(
        observer,
        getScheduler,
        schedule(
          () => {
            while (!isDisposed(observer) && move(enumerator)) {
              pipe(enumerator, getCurrent, notifySink(observer));
              __yield(options);
            }
          },
          delayStart && hasDelay(options) ? { delay } : none,
        ),
      );
    };
    return delay > 0
      ? createRunnableObservable(onSink)
      : createEnumerableObservable(onSink);
  }) as toObservable;

export const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (enumerable: EnumerableLike<T>) => {
      const enumerator = pipe(enumerable, enumerate());
      const result: T[] = [];

      while (move(enumerator)) {
        result.push(getCurrent(enumerator));
      }

      const error = getException(enumerator);

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

    return () => enumerable => newInstance(EnumerableIterable, enumerable);
  })();
export const toIterableT: ToIterable<EnumerableLike> = { toIterable };

export const toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  /*@__PURE__*/ (() => {
    const enumeratorToRunnable = <T>(
      f: Factory<EnumeratorLike<T>>,
    ): RunnableLike<T> => {
      const run = (sink: SinkLike<T>) => {
        pipe(f(), add(sink), forEachEnumerator(notifySink(sink)), dispose());
      };
      return createRunnable(run);
    };

    return <T>() =>
      (enumerable: EnumerableLike<T>): RunnableLike<T> =>
        enumeratorToRunnable(() =>
          enumerable[InteractiveContainerLike_interact](),
        );
  })();
export const toRunnableT: ToRunnable<EnumerableLike> = {
  toRunnable,
};

export const zip: Zip<EnumerableLike>["zip"] = /*@__PURE__*/ (() => {
  const moveAll = (enumerators: readonly EnumeratorLike[]) => {
    for (const enumerator of enumerators) {
      move(enumerator);
    }
  };

  const allHaveCurrent = (enumerators: readonly EnumeratorLike[]) =>
    pipe(enumerators, every(hasCurrent));

  const typedEnumerator = enumeratorMixin<readonly unknown[]>();

  type TProperties = PropertyTypeOf<
    [typeof disposableMixin, typeof typedEnumerator]
  > & {
    enumerators: readonly EnumeratorLike[];
  };

  const createZipEnumerator = createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedEnumerator),
      function ZipEnumerator(
        this: TProperties & EnumeratorLike<readonly unknown[]>,
        enumerators: readonly EnumeratorLike[],
      ) {
        init(disposableMixin, this);
        init(typedEnumerator, this);
        this.enumerators = enumerators;

        return this;
      },
      {
        enumerators: none,
      },
      {
        [SourceLike_move](
          this: TProperties & MutableEnumeratorLike<readonly unknown[]>,
        ) {
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
    ),
  );

  const zipEnumerators = (
    enumerators: readonly EnumeratorLike[],
  ): EnumeratorLike<readonly unknown[]> => {
    const instance = createZipEnumerator(enumerators);
    pipe(enumerators, forEachArray(addTo(instance)));
    return instance;
  };

  return (...enumerables: readonly EnumerableLike[]): EnumerableLike<any> =>
    createEnumerable(() =>
      pipe(enumerables, mapReadonlyArray(enumerate()), zipEnumerators),
    );
})();
export const zipT: Zip<EnumerableLike> = { zip };
