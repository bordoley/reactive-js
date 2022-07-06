import { getDelegate } from "./__internal__.delegating";
import { MAX_SAFE_INTEGER, __DEV__ } from "./__internal__.env";
import {
  DelegatingLiftableContainerStateOf,
  LiftOperator,
  LiftOperatorIn,
  LiftOperatorOut,
  Lift as LiftableLift,
  TReactive,
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
  lift,
} from "./__internal__.liftable";
import { forEach } from "./__internal__.readonlyArray";
import {
  ContainerOf,
  ContainerOperator,
  FromArray,
  empty,
  fromValue,
} from "./container";
import {
  Disposable,
  DisposableOrTeardown,
  add,
  addTo,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
  onError,
} from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  compose,
  getLength,
  identity,
  ignore,
  isEmpty,
  max,
  negate,
  newInstance,
  newInstanceWith,
  pipe,
} from "./functions";
import { LiftableContainerStateOf } from "./liftableContainer";
import { Option, isSome, none } from "./option";
import {
  CreateReactiveContainer,
  ReactiveContainerLike,
  sinkInto,
} from "./reactiveContainer";
import { assertState, notify } from "./reactiveSink";

export interface Lift<C extends ReactiveContainerLike>
  extends LiftableLift<C, TReactive> {
  lift<TA, TB>(
    operator: LiftOperator<C, TA, TB, TReactive>,
  ): ContainerOperator<C, TA, TB>;
}

const create =
  <C extends ReactiveContainerLike, T>(m: CreateReactiveContainer<C>) =>
  (onSink: (sink: LiftableContainerStateOf<C, T>) => void): ContainerOf<C, T> =>
    m.create(onSink);

const decorateWithNotify = <
  C extends ReactiveContainerLike,
  T,
  TSTate extends LiftableContainerStateOf<C, T>,
>(
  SinkClass: new (...a: readonly any[]) => TSTate,
  notify: (this: TSTate, next: T) => void,
): void => {
  SinkClass.prototype.notify = notify;
};

export const createBufferOperator = <C extends ReactiveContainerLike>(
  m: Lift<C> & FromArray<C>,
  BufferSink: new <T>(
    delegate: LiftableContainerStateOf<C, readonly T[]>,
    maxBufferSize: number,
  ) => DelegatingLiftableContainerStateOf<C, T, readonly T[]> & {
    buffer: T[];
    readonly maxBufferSize: number;
  },
) => {
  decorateWithNotify(
    BufferSink,
    function notifyBuffer<T>(
      this: DelegatingLiftableContainerStateOf<C, T, readonly T[]> & {
        buffer: T[];
        readonly maxBufferSize: number;
      },
      next: T,
    ) {
      assertState(this);

      const { buffer, maxBufferSize } = this;

      buffer.push(next);

      if (getLength(buffer) === maxBufferSize) {
        const buffer = this.buffer;
        this.buffer = [];

        getDelegate(this).notify(buffer);
      }
    },
  );

  return <T>(
    options: {
      readonly maxBufferSize?: number;
    } = {},
  ): ContainerOperator<C, T, readonly T[]> => {
    const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

    return pipe(
      (delegate: LiftableContainerStateOf<C, readonly T[]>) =>
        pipe(
          BufferSink,
          newInstanceWith<
            DelegatingLiftableContainerStateOf<C, T, readonly T[]> & {
              buffer: T[];
              readonly maxBufferSize: number;
            },
            LiftableContainerStateOf<C, readonly T[]>,
            number
          >(delegate, maxBufferSize),
          addTo(delegate),
          onComplete(function onDispose(
            this: DelegatingLiftableContainerStateOf<C, T, readonly T[]> & {
              buffer: T[];
            },
          ) {
            const { buffer } = this;
            this.buffer = [];

            if (isEmpty(buffer)) {
              pipe(this, getDelegate, dispose());
            } else {
              pipe(buffer, fromValue(m), sinkInto(getDelegate(this)));
            }
          }),
        ),
      lift(m),
    );
  };
};

export const createCatchErrorOperator =
  <C extends ReactiveContainerLike>(
    m: Lift<C>,
    CatchErrorSink: new <T>(
      delegate: LiftableContainerStateOf<C, T>,
    ) => DelegatingLiftableContainerStateOf<C, T, T>,
  ) =>
  <T>(
    f: Function1<unknown, ContainerOf<C, T> | void>,
  ): ContainerOperator<C, T, T> => {
    decorateWithNotify(
      CatchErrorSink,
      function notifyDelegate(
        this: DelegatingLiftableContainerStateOf<C, T, T>,
        next: T,
      ) {
        getDelegate(this).notify(next);
      },
    );

    return pipe(
      (
        delegate: LiftableContainerStateOf<C, T>,
      ): LiftableContainerStateOf<C, T> =>
        pipe(
          CatchErrorSink,
          newInstanceWith<
            DelegatingLiftableContainerStateOf<C, T, T>,
            LiftableContainerStateOf<C, T>
          >(delegate),
          addTo(delegate, true),
          onComplete(() => pipe(delegate, dispose())),
          onError(e => {
            try {
              const result = f(e.cause) || none;
              if (isSome(result)) {
                pipe(result, sinkInto(delegate));
              } else {
                pipe(delegate, dispose());
              }
            } catch (cause) {
              pipe(delegate, dispose({ cause: { parent: e.cause, cause } }));
            }
          }),
        ),
      lift(m),
    );
  };

export const createDecodeWithCharsetOperator = <
  C extends ReactiveContainerLike,
>(
  m: FromArray<C> & Lift<C>,
  DecodeWithCharsetSink: new (
    delegate: LiftableContainerStateOf<C, string>,
    textDecoder: TextDecoder,
  ) => DelegatingLiftableContainerStateOf<C, ArrayBuffer, string> & {
    readonly textDecoder: TextDecoder;
  },
): ((charset?: string) => ContainerOperator<C, ArrayBuffer, string>) => {
  decorateWithNotify(
    DecodeWithCharsetSink,
    function notifyDecodeWithCharset(
      this: DelegatingLiftableContainerStateOf<C, ArrayBuffer, string> & {
        readonly textDecoder: TextDecoder;
      },
      next: ArrayBuffer,
    ) {
      const data = this.textDecoder.decode(next, { stream: true });
      if (!isEmpty(data)) {
        getDelegate(this).notify(data);
      }
    },
  );

  return (charset = "utf-8") =>
    pipe(
      (
        delegate: LiftableContainerStateOf<C, string>,
      ): LiftableContainerStateOf<C, ArrayBuffer> => {
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        return pipe(
          DecodeWithCharsetSink,
          newInstanceWith(delegate, textDecoder),
          addTo(delegate),
          onComplete(() => {
            const data = textDecoder.decode();

            if (!isEmpty(data)) {
              pipe(data, fromValue(m), sinkInto(delegate));
            } else {
              pipe(delegate, dispose());
            }
          }),
        );
      },
      lift(m),
    );
};

export const createDistinctUntilChangedOperator = <
  C extends ReactiveContainerLike,
>(
  m: Lift<C>,
  DistinctUntilChangedSink: new <T>(
    delegate: LiftableContainerStateOf<C, T>,
    equality: Equality<T>,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
  },
): (<T>(options?: {
  readonly equality?: Equality<T>;
}) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    DistinctUntilChangedSink,
    function notifyDistinctUntilChanged<T>(
      this: DelegatingLiftableContainerStateOf<C, T, T> & {
        readonly equality: Equality<T>;
        prev: Option<T>;
        hasValue: boolean;
      },
      next: T,
    ) {
      assertState(this);

      const shouldEmit = !this.hasValue || !this.equality(this.prev as T, next);

      if (shouldEmit) {
        this.prev = next;
        this.hasValue = true;
        getDelegate(this).notify(next);
      }
    },
  );

  return createDistinctUntilChangedLiftOperator(m, DistinctUntilChangedSink);
};

const createSatisfyOperator = <C extends ReactiveContainerLike>(
  m: FromArray<C> & Lift<C>,
  SatisfySink: new <T>(
    delegate: LiftableContainerStateOf<C, boolean>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableContainerStateOf<C, T, boolean> & {
    readonly predicate: Predicate<T>;
  },
  defaultResult: boolean,
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) => {
  decorateWithNotify(
    SatisfySink,
    function notifyEverySatisfy<T>(
      this: DelegatingLiftableContainerStateOf<C, T, boolean> & {
        readonly predicate: Predicate<T>;
      },
      next: T,
    ) {
      assertState(this);

      if (this.predicate(next)) {
        const { delegate } = this;
        pipe(delegate, notify(!defaultResult), dispose());
      }
    },
  );

  return <T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean> =>
    pipe(
      (
        delegate: LiftableContainerStateOf<C, boolean>,
      ): LiftableContainerStateOf<C, T> =>
        pipe(
          SatisfySink,
          newInstanceWith<
            DelegatingLiftableContainerStateOf<C, T, boolean> & {
              readonly predicate: Predicate<T>;
            },
            LiftableContainerStateOf<C, boolean>,
            Predicate<T>
          >(delegate, predicate),
          addTo(delegate),
          onComplete(() => {
            if (!isDisposed(delegate)) {
              pipe(defaultResult, fromValue(m), sinkInto(delegate));
            }
          }),
        ),
      lift(m),
    );
};

export const createEverySatisfyOperator = <C extends ReactiveContainerLike>(
  m: FromArray<C> & Lift<C>,
  EverySatisfySink: new <T>(
    delegate: LiftableContainerStateOf<C, boolean>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableContainerStateOf<C, T, boolean> & {
    readonly predicate: Predicate<T>;
  },
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) =>
  compose(
    predicate => compose(predicate, negate),
    createSatisfyOperator(m, EverySatisfySink, true),
  );

export const createKeepOperator = <C extends ReactiveContainerLike>(
  m: Lift<C>,
  KeepSink: new <T>(
    delegate: LiftableContainerStateOf<C, T>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    readonly predicate: Predicate<T>;
  },
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    KeepSink,
    function notifyKeep<T>(
      this: DelegatingLiftableContainerStateOf<C, T, T> & {
        readonly predicate: Predicate<T>;
      },
      next: T,
    ) {
      assertState(this);
      if (this.predicate(next)) {
        getDelegate(this).notify(next);
      }
    },
  );

  return createKeepLiftOperator(m, KeepSink);
};

export const createMapOperator = <C extends ReactiveContainerLike>(
  m: Lift<C>,
  MapSink: new <TA, TB>(
    delegate: LiftOperatorIn<C, TA, TB, TReactive>,
    mapper: Function1<TA, TB>,
  ) => LiftOperatorOut<C, TA, TB, TReactive> &
    DelegatingLiftableContainerStateOf<C, TA, TB> & {
      readonly mapper: Function1<TA, TB>;
    },
): (<TA, TB>(mapper: Function1<TA, TB>) => ContainerOperator<C, TA, TB>) => {
  decorateWithNotify(
    MapSink,
    function notifyMap<TA, TB>(
      this: DelegatingLiftableContainerStateOf<C, TA, TB> & {
        readonly mapper: Function1<TA, TB>;
      },
      next: TA,
    ) {
      assertState(this);
      const mapped = this.mapper(next);
      getDelegate(this).notify(mapped);
    },
  );

  return createMapLiftOperator<C, TReactive>(m, MapSink);
};

export const createOnNotifyOperator = <C extends ReactiveContainerLike>(
  m: Lift<C>,
  OnNotifySink: new <T>(
    delegate: LiftableContainerStateOf<C, T>,
    onNotify: SideEffect1<T>,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    readonly onNotify: SideEffect1<T>;
  },
): (<T>(onNotify: SideEffect1<T>) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    OnNotifySink,
    function notifyOnNotify<T>(
      this: DelegatingLiftableContainerStateOf<C, T, T> & {
        readonly onNotify: SideEffect1<T>;
      },
      next: T,
    ) {
      assertState(this);

      this.onNotify(next);
      getDelegate(this).notify(next);
    },
  );

  return createOnNotifyLiftOperator(m, OnNotifySink);
};

export const createPairwiseOperator = <C extends ReactiveContainerLike>(
  m: Lift<C>,
  PairwiseSink: new <T>(
    delegate: LiftOperatorIn<C, T, [Option<T>, T], TReactive>,
  ) => LiftOperatorOut<C, T, [Option<T>, T], TReactive> &
    DelegatingLiftableContainerStateOf<C, T, [Option<T>, T]> & {
      prev: Option<T>;
      hasPrev: boolean;
    },
): (<T>() => ContainerOperator<C, T, [Option<T>, T]>) => {
  decorateWithNotify(
    PairwiseSink,
    function notifyPairwise<T>(
      this: DelegatingLiftableContainerStateOf<C, T, [Option<T>, T]> & {
        prev: Option<T>;
        hasPrev: boolean;
      },
      value: T,
    ): void {
      assertState(this);
      const prev = this.hasPrev ? this.prev : none;

      this.hasPrev = true;
      this.prev = value;

      getDelegate(this).notify([prev, value]);
    },
  );

  return createPairwiseLiftOperator<C, TReactive>(m, PairwiseSink);
};

export const createReduceOperator = <C extends ReactiveContainerLike>(
  m: FromArray<C> & Lift<C>,
  ReduceSink: new <T, TAcc>(
    delegate: LiftableContainerStateOf<C, TAcc>,
    reducer: Reducer<T, TAcc>,
    acc: TAcc,
  ) => LiftableContainerStateOf<C, T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
  },
): (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ContainerOperator<C, T, TAcc>) => {
  decorateWithNotify(
    ReduceSink,
    function notifyReduce<T, TAcc>(
      this: LiftableContainerStateOf<C, T> & {
        readonly reducer: Reducer<T, TAcc>;
        acc: TAcc;
      },
      next: T,
    ) {
      assertState(this);

      this.acc = this.reducer(this.acc, next);
    },
  );

  return <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> =>
    pipe(
      (
        delegate: LiftableContainerStateOf<C, TAcc>,
      ): LiftableContainerStateOf<C, T> => {
        const sink = pipe(
          ReduceSink,
          newInstanceWith<
            LiftableContainerStateOf<C, T> & {
              readonly reducer: Reducer<T, TAcc>;
              acc: TAcc;
            },
            LiftableContainerStateOf<C, TAcc>,
            Reducer<T, TAcc>,
            TAcc
          >(delegate, reducer, initialValue()),
          addTo(delegate),
          onComplete(() => {
            pipe(sink.acc, fromValue(m), sinkInto(delegate));
          }),
        );
        return sink;
      },
      lift(m),
    );
};

export const createScanOperator = <C extends ReactiveContainerLike>(
  m: Lift<C>,
  ScanSink: new <T, TAcc>(
    delegate: LiftOperatorIn<C, T, TAcc, TReactive>,
    reducer: Reducer<T, TAcc>,
    acc: TAcc,
  ) => LiftOperatorOut<C, T, TAcc, TReactive> &
    DelegatingLiftableContainerStateOf<C, T, TAcc> & {
      readonly reducer: Reducer<T, TAcc>;
      acc: TAcc;
    },
): (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ContainerOperator<C, T, TAcc>) => {
  decorateWithNotify(
    ScanSink,
    function notifyScan<T, TAcc>(
      this: DelegatingLiftableContainerStateOf<C, T, TAcc> & {
        readonly reducer: Reducer<T, TAcc>;
        acc: TAcc;
      },
      next: T,
    ) {
      assertState(this);
      const nextAcc = this.reducer(this.acc, next);
      this.acc = nextAcc;

      getDelegate(this).notify(nextAcc);
    },
  );

  return createScanLiftOperator<C, TReactive>(m, ScanSink);
};

export const createSkipFirstOperator = <C extends ReactiveContainerLike>(
  m: Lift<C>,
  SkipFirstSink: new <T>(
    delegate: LiftOperatorIn<C, T, T, TReactive>,
    skipCount: number,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    count: number;
    readonly skipCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    SkipFirstSink,
    function notifySkipFirst<T>(
      this: DelegatingLiftableContainerStateOf<C, T, T> & {
        count: number;
        readonly skipCount: number;
      },
      next: T,
    ) {
      this.count++;
      if (this.count > this.skipCount) {
        getDelegate(this).notify(next);
      }
    },
  );

  return createSkipFirstLiftOperator(m, SkipFirstSink);
};

export const createSomeSatisfyOperator = <C extends ReactiveContainerLike>(
  m: FromArray<C> & Lift<C>,
  SomeSatisfySink: new <T>(
    delegate: LiftableContainerStateOf<C, boolean>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableContainerStateOf<C, T, boolean> & {
    readonly predicate: Predicate<T>;
  },
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) =>
  createSatisfyOperator(m, SomeSatisfySink, false);

export const createTakeFirstOperator = <C extends ReactiveContainerLike>(
  m: FromArray<C> & Lift<C>,
  TakeFirstSink: new <T>(
    delegate: LiftOperatorIn<C, T, T, TReactive>,
    maxCount: number,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    count: number;
    readonly maxCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    TakeFirstSink,
    function notifyTakeFirst<T>(
      this: DelegatingLiftableContainerStateOf<C, T, T> & {
        count: number;
        readonly maxCount: number;
      },
      next: T,
    ) {
      assertState(this);

      this.count++;
      getDelegate(this).notify(next);
      if (this.count >= this.maxCount) {
        pipe(this, dispose());
      }
    },
  );

  return createTakeFirstLiftOperator(m, TakeFirstSink);
};

export const createTakeLastOperator = <C extends ReactiveContainerLike>(
  m: FromArray<C> & Lift<C>,
  TakeLastSink: new <T>(
    delegate: LiftOperatorIn<C, T, T, TReactive>,
    maxCount: number,
  ) => LiftOperatorOut<C, T, T, TReactive> & {
    readonly last: T[];
    readonly maxCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    TakeLastSink,
    function notifyTakeLast<T>(
      this: LiftableContainerStateOf<C, T> & {
        readonly last: T[];
        readonly maxCount: number;
      },
      next: T,
    ) {
      assertState(this);

      const { last } = this;

      last.push(next);

      if (getLength(last) > this.maxCount) {
        last.shift();
      }
    },
  );

  return <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;

    const operator = (
      delegate: LiftableContainerStateOf<C, T>,
    ): LiftableContainerStateOf<C, T> => {
      const sink = pipe(
        TakeLastSink,
        newInstanceWith<
          LiftableContainerStateOf<C, T> & {
            readonly last: T[];
            readonly maxCount: number;
          },
          LiftableContainerStateOf<C, T>,
          number
        >(delegate, count),
        addTo(delegate),
        onComplete(() => {
          pipe(sink.last, m.fromArray(), sinkInto(delegate));
        }),
      );
      return sink;
    };

    return source =>
      count > 0
        ? pipe(source, lift<C, T, T, TReactive>(m)(operator))
        : empty(m);
  };
};

export const createTakeWhileOperator = <C extends ReactiveContainerLike>(
  m: Lift<C>,
  TakeWhileSink: new <T>(
    delegate: LiftableContainerStateOf<C, T>,
    predicate: Predicate<T>,
    inclusive: boolean,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
  },
): (<T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    TakeWhileSink,
    function notifyTakeWhile<T>(
      this: DelegatingLiftableContainerStateOf<C, T, T> & {
        readonly predicate: Predicate<T>;
        readonly inclusive: boolean;
      },
      next: T,
    ) {
      assertState(this);

      const satisfiesPredicate = this.predicate(next);

      if (satisfiesPredicate || this.inclusive) {
        getDelegate(this).notify(next);
      }

      if (!satisfiesPredicate) {
        pipe(this, dispose());
      }
    },
  );

  return createTakeWhileLiftOperator(m, TakeWhileSink);
};

export const createThrowIfEmptyOperator = <C extends ReactiveContainerLike>(
  m: Lift<C>,
  ThrowIfEmptySink: new <T>(
    delegate: LiftOperatorIn<C, T, T, TReactive>,
  ) => DelegatingLiftableContainerStateOf<C, T, T> & {
    isEmpty: boolean;
  },
): (<T>(factory: Factory<unknown>) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    ThrowIfEmptySink,
    function notify<T>(
      this: DelegatingLiftableContainerStateOf<C, T, T> & {
        isEmpty: boolean;
      },
      next: T,
    ) {
      assertState(this);

      this.isEmpty = false;
      getDelegate(this).notify(next);
    },
  );

  return createThrowIfEmptyLiftOperator<C, TReactive>(m, ThrowIfEmptySink);
};

export const createFromDisposable =
  <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) =>
  <T>(disposable: Disposable): ContainerOf<C, T> =>
    pipe(disposable, addTo, create(m));

export const createNever = <C extends ReactiveContainerLike>(
  m: CreateReactiveContainer<C>,
) => {
  const neverInstance: ContainerOf<C, any> = pipe(ignore, create(m));
  return <T>(): ContainerOf<C, T> => neverInstance;
};

export const createOnSink =
  <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) =>
  <T>(f: Factory<DisposableOrTeardown | void>): ContainerOperator<C, T, T> =>
  src =>
    pipe((sink: LiftableContainerStateOf<C, T>) => {
      pipe(src, sinkInto(sink));
      const disposable = f() || none;
      pipe(
        sink,
        disposable instanceof Function
          ? onDisposed(disposable)
          : isSome(disposable)
          ? add(disposable)
          : identity,
      );
    }, create(m));

export const createUsing =
  <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) =>
  <TResource extends Disposable, T>(
    resourceFactory: Factory<TResource | readonly TResource[]>,
    sourceFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>,
  ): ContainerOf<C, T> =>
    pipe(
      (sink: LiftableContainerStateOf<C, T>) =>
        pipe(
          resourceFactory(),
          resources => (Array.isArray(resources) ? resources : [resources]),
          forEach(addTo(sink)),
          (resources: readonly TResource[]) => sourceFactory(...resources),
          sinkInto(sink),
        ),
      create(m),
    );
