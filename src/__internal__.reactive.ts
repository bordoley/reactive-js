import { MAX_SAFE_INTEGER, __DEV__ } from "./__internal__.env";
import {
  AbstractLiftable,
  ContraVariant,
  DelegatingLiftableStateOf,
  Lift as LiftableLift,
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
  getDelegate,
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
import { LiftableStateOf } from "./liftable";
import { Option, isSome, none } from "./option";
import { CreateReactiveSource, ReactiveSourceLike, sinkInto } from "./reactive";
import { SinkLike, assertState, notify } from "./sink";

export abstract class AbstractReactiveSource<T, TSink extends SinkLike<T>>
  extends AbstractLiftable<TSink>
  implements ReactiveSourceLike
{
  abstract sink(this: this, sink: TSink): void;
}

export interface Lift<C extends ReactiveSourceLike>
  extends LiftableLift<C, ContraVariant> {}

const create =
  <C extends ReactiveSourceLike, T>(m: CreateReactiveSource<C>) =>
  (onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T> =>
    m.create(onSink);

const decorateWithNotify = <
  C extends ReactiveSourceLike,
  T,
  TSTate extends LiftableStateOf<C, T>,
>(
  SinkClass: new (...a: readonly any[]) => TSTate,
  notify: (this: TSTate, next: T) => void,
): void => {
  SinkClass.prototype.notify = notify;
};

export const createBufferOperator = <C extends ReactiveSourceLike>(
  m: Lift<C> & FromArray<C>,
  BufferSink: new <T>(
    delegate: LiftableStateOf<C, readonly T[]>,
    maxBufferSize: number,
  ) => DelegatingLiftableStateOf<C, T, readonly T[]> & {
    buffer: T[];
    readonly maxBufferSize: number;
  },
) => {
  decorateWithNotify(
    BufferSink,
    function notifyBuffer<T>(
      this: DelegatingLiftableStateOf<C, T, readonly T[]> & {
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
      (delegate: LiftableStateOf<C, readonly T[]>) =>
        pipe(
          BufferSink,
          newInstanceWith<
            DelegatingLiftableStateOf<C, T, readonly T[]> & {
              buffer: T[];
              readonly maxBufferSize: number;
            },
            LiftableStateOf<C, readonly T[]>,
            number
          >(delegate, maxBufferSize),
          addTo(delegate),
          onComplete(function onDispose(
            this: DelegatingLiftableStateOf<C, T, readonly T[]> & {
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
  <C extends ReactiveSourceLike>(
    m: Lift<C>,
    CatchErrorSink: new <T>(
      delegate: LiftableStateOf<C, T>,
    ) => DelegatingLiftableStateOf<C, T, T>,
  ) =>
  <T>(
    f: Function1<unknown, ContainerOf<C, T> | void>,
  ): ContainerOperator<C, T, T> => {
    decorateWithNotify(
      CatchErrorSink,
      function notifyDelegate(
        this: DelegatingLiftableStateOf<C, T, T>,
        next: T,
      ) {
        getDelegate(this).notify(next);
      },
    );

    return pipe(
      (delegate: LiftableStateOf<C, T>): LiftableStateOf<C, T> =>
        pipe(
          CatchErrorSink,
          newInstanceWith<
            DelegatingLiftableStateOf<C, T, T>,
            LiftableStateOf<C, T>
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

export const createDecodeWithCharsetOperator = <C extends ReactiveSourceLike>(
  m: FromArray<C> & Lift<C>,
  DecodeWithCharsetSink: new (
    delegate: LiftableStateOf<C, string>,
    textDecoder: TextDecoder,
  ) => DelegatingLiftableStateOf<C, ArrayBuffer, string> & {
    readonly textDecoder: TextDecoder;
  },
): ((charset?: string) => ContainerOperator<C, ArrayBuffer, string>) => {
  decorateWithNotify(
    DecodeWithCharsetSink,
    function notifyDecodeWithCharset(
      this: DelegatingLiftableStateOf<C, ArrayBuffer, string> & {
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
        delegate: LiftableStateOf<C, string>,
      ): LiftableStateOf<C, ArrayBuffer> => {
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
  C extends ReactiveSourceLike,
>(
  m: Lift<C>,
  DistinctUntilChangedSink: new <T>(
    delegate: LiftableStateOf<C, T>,
    equality: Equality<T>,
  ) => DelegatingLiftableStateOf<C, T, T> & {
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
      this: DelegatingLiftableStateOf<C, T, T> & {
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

const createSatisfyOperator = <C extends ReactiveSourceLike>(
  m: FromArray<C> & Lift<C>,
  SatisfySink: new <T>(
    delegate: LiftableStateOf<C, boolean>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableStateOf<C, T, boolean> & {
    readonly predicate: Predicate<T>;
  },
  defaultResult: boolean,
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) => {
  decorateWithNotify(
    SatisfySink,
    function notifyEverySatisfy<T>(
      this: DelegatingLiftableStateOf<C, T, boolean> & {
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
      (delegate: LiftableStateOf<C, boolean>): LiftableStateOf<C, T> =>
        pipe(
          SatisfySink,
          newInstanceWith<
            DelegatingLiftableStateOf<C, T, boolean> & {
              readonly predicate: Predicate<T>;
            },
            LiftableStateOf<C, boolean>,
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

export const createEverySatisfyOperator = <C extends ReactiveSourceLike>(
  m: FromArray<C> & Lift<C>,
  EverySatisfySink: new <T>(
    delegate: LiftableStateOf<C, boolean>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableStateOf<C, T, boolean> & {
    readonly predicate: Predicate<T>;
  },
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) =>
  compose(
    predicate => compose(predicate, negate),
    createSatisfyOperator(m, EverySatisfySink, true),
  );

export const createKeepOperator = <C extends ReactiveSourceLike>(
  m: Lift<C>,
  KeepSink: new <T>(
    delegate: LiftableStateOf<C, T>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableStateOf<C, T, T> & {
    readonly predicate: Predicate<T>;
  },
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    KeepSink,
    function notifyKeep<T>(
      this: DelegatingLiftableStateOf<C, T, T> & {
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

export const createMapOperator = <C extends ReactiveSourceLike>(
  m: Lift<C>,
  MapSink: new <TA, TB>(
    delegate: LiftableStateOf<C, TB>,
    mapper: Function1<TA, TB>,
  ) => DelegatingLiftableStateOf<C, TA, TB> & {
    readonly mapper: Function1<TA, TB>;
  },
): (<TA, TB>(mapper: Function1<TA, TB>) => ContainerOperator<C, TA, TB>) => {
  decorateWithNotify(
    MapSink,
    function notifyMap<TA, TB>(
      this: DelegatingLiftableStateOf<C, TA, TB> & {
        readonly mapper: Function1<TA, TB>;
      },
      next: TA,
    ) {
      assertState(this);
      const mapped = this.mapper(next);
      getDelegate(this).notify(mapped);
    },
  );

  return createMapLiftOperator(m, MapSink);
};

export const createOnNotifyOperator = <C extends ReactiveSourceLike>(
  m: Lift<C>,
  OnNotifySink: new <T>(
    delegate: LiftableStateOf<C, T>,
    onNotify: SideEffect1<T>,
  ) => DelegatingLiftableStateOf<C, T, T> & {
    readonly onNotify: SideEffect1<T>;
  },
): (<T>(onNotify: SideEffect1<T>) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    OnNotifySink,
    function notifyOnNotify<T>(
      this: DelegatingLiftableStateOf<C, T, T> & {
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

export const createPairwiseOperator = <C extends ReactiveSourceLike>(
  m: Lift<C>,
  PairwiseSink: new <T>(
    delegate: LiftableStateOf<C, [Option<T>, T]>,
  ) => DelegatingLiftableStateOf<C, T, [Option<T>, T]> & {
    prev: Option<T>;
    hasPrev: boolean;
  },
): (<T>() => ContainerOperator<C, T, [Option<T>, T]>) => {
  decorateWithNotify(
    PairwiseSink,
    function notifyPairwise<T>(
      this: DelegatingLiftableStateOf<C, T, [Option<T>, T]> & {
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

  return createPairwiseLiftOperator(m, PairwiseSink);
};

export const createReduceOperator = <C extends ReactiveSourceLike>(
  m: FromArray<C> & Lift<C>,
  ReduceSink: new <T, TAcc>(
    delegate: LiftableStateOf<C, TAcc>,
    reducer: Reducer<T, TAcc>,
    acc: TAcc,
  ) => LiftableStateOf<C, T> & {
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
      this: LiftableStateOf<C, T> & {
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
    pipe((delegate: LiftableStateOf<C, TAcc>): LiftableStateOf<C, T> => {
      const sink = pipe(
        ReduceSink,
        newInstanceWith<
          LiftableStateOf<C, T> & {
            readonly reducer: Reducer<T, TAcc>;
            acc: TAcc;
          },
          LiftableStateOf<C, TAcc>,
          Reducer<T, TAcc>,
          TAcc
        >(delegate, reducer, initialValue()),
        addTo(delegate),
        onComplete(() => {
          pipe(sink.acc, fromValue(m), sinkInto(delegate));
        }),
      );
      return sink;
    }, lift(m));
};

export const createScanOperator = <C extends ReactiveSourceLike>(
  m: Lift<C>,
  ScanSink: new <T, TAcc>(
    delegate: LiftableStateOf<C, TAcc>,
    reducer: Reducer<T, TAcc>,
    acc: TAcc,
  ) => DelegatingLiftableStateOf<C, T, TAcc> & {
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
      this: DelegatingLiftableStateOf<C, T, TAcc> & {
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

  return createScanLiftOperator(m, ScanSink);
};

export const createSkipFirstOperator = <C extends ReactiveSourceLike>(
  m: Lift<C>,
  SkipFirstSink: new <T>(
    delegate: LiftableStateOf<C, T>,
    skipCount: number,
  ) => DelegatingLiftableStateOf<C, T, T> & {
    count: number;
    readonly skipCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    SkipFirstSink,
    function notifySkipFirst<T>(
      this: DelegatingLiftableStateOf<C, T, T> & {
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

export const createSomeSatisfyOperator = <C extends ReactiveSourceLike>(
  m: FromArray<C> & Lift<C>,
  SomeSatisfySink: new <T>(
    delegate: LiftableStateOf<C, boolean>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableStateOf<C, T, boolean> & {
    readonly predicate: Predicate<T>;
  },
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) =>
  createSatisfyOperator(m, SomeSatisfySink, false);

export const createTakeFirstOperator = <C extends ReactiveSourceLike>(
  m: FromArray<C> & Lift<C>,
  TakeFirstSink: new <T>(
    delegate: LiftableStateOf<C, T>,
    maxCount: number,
  ) => DelegatingLiftableStateOf<C, T, T> & {
    count: number;
    readonly maxCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    TakeFirstSink,
    function notifyTakeFirst<T>(
      this: DelegatingLiftableStateOf<C, T, T> & {
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

export const createTakeLastOperator = <C extends ReactiveSourceLike>(
  m: FromArray<C> & Lift<C>,
  TakeLastSink: new <T>(
    delegate: LiftableStateOf<C, T>,
    maxCount: number,
  ) => LiftableStateOf<C, T> & {
    readonly last: T[];
    readonly maxCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    TakeLastSink,
    function notifyTakeLast<T>(
      this: LiftableStateOf<C, T> & {
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
      delegate: LiftableStateOf<C, T>,
    ): LiftableStateOf<C, T> => {
      const sink = pipe(
        TakeLastSink,
        newInstanceWith<
          LiftableStateOf<C, T> & {
            readonly last: T[];
            readonly maxCount: number;
          },
          LiftableStateOf<C, T>,
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
        ? pipe(source, lift<C, T, T, typeof m.variance>(m)(operator))
        : empty(m);
  };
};

export const createTakeWhileOperator = <C extends ReactiveSourceLike>(
  m: Lift<C>,
  TakeWhileSink: new <T>(
    delegate: LiftableStateOf<C, T>,
    predicate: Predicate<T>,
    inclusive: boolean,
  ) => DelegatingLiftableStateOf<C, T, T> & {
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
      this: DelegatingLiftableStateOf<C, T, T> & {
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

export const createThrowIfEmptyOperator = <C extends ReactiveSourceLike>(
  m: Lift<C>,
  ThrowIfEmptySink: new <T>(
    delegate: LiftableStateOf<C, T>,
  ) => DelegatingLiftableStateOf<C, T, T> & {
    isEmpty: boolean;
  },
): (<T>(factory: Factory<unknown>) => ContainerOperator<C, T, T>) => {
  decorateWithNotify(
    ThrowIfEmptySink,
    function notify<T>(
      this: DelegatingLiftableStateOf<C, T, T> & {
        isEmpty: boolean;
      },
      next: T,
    ) {
      assertState(this);

      this.isEmpty = false;
      getDelegate(this).notify(next);
    },
  );

  return createThrowIfEmptyLiftOperator(m, ThrowIfEmptySink);
};

export const createFromDisposable =
  <C extends ReactiveSourceLike>(m: CreateReactiveSource<C>) =>
  <T>(disposable: Disposable): ContainerOf<C, T> =>
    pipe(disposable, addTo, create(m));

export const createNever = <C extends ReactiveSourceLike>(
  m: CreateReactiveSource<C>,
) => {
  const neverInstance: ContainerOf<C, any> = pipe(ignore, create(m));
  return <T>(): ContainerOf<C, T> => neverInstance;
};

export const createOnSink =
  <C extends ReactiveSourceLike>(m: CreateReactiveSource<C>) =>
  <T>(f: Factory<DisposableOrTeardown | void>): ContainerOperator<C, T, T> =>
  src =>
    pipe((sink: LiftableStateOf<C, T>) => {
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
  <C extends ReactiveSourceLike>(m: CreateReactiveSource<C>) =>
  <TResource extends Disposable, T>(
    resourceFactory: Factory<TResource | readonly TResource[]>,
    sourceFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>,
  ): ContainerOf<C, T> =>
    pipe(
      (sink: LiftableStateOf<C, T>) =>
        pipe(
          resourceFactory(),
          resources => (Array.isArray(resources) ? resources : [resources]),
          forEach(addTo(sink)),
          (resources: readonly TResource[]) => sourceFactory(...resources),
          sinkInto(sink),
        ),
      create(m),
    );
