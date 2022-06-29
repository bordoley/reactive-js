import {
  Container,
  ContainerOf,
  ContainerOperator,
  FromArray,
  empty,
  fromValue,
} from "./container";
import {
  DisposableLike,
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
  identity,
  ignore,
  negate,
  pipe,
} from "./functions";
import {
  AbstractDisposableLiftable,
  AbstractLiftable,
  ContraVariant,
  DelegatingLiftableStateOf,
  Lift as LiftableLift,
  LiftableLike,
  LiftableStateLike,
  LiftableStateOf,
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
  delegate as delegateLiftable,
  lift,
} from "./liftable";
import { Option, isSome, none } from "./option";
import { forEach } from "./readonlyArray";

export interface SinkLike<T> extends LiftableStateLike {
  assertState(this: SinkLike<T>): void;

  /**
   * Notifies the the sink of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the sink's `schedule` method.
   *
   * @param next The next notification value.
   */
  notify(this: SinkLike<T>, next: T): void;
}

export interface SourceLike extends LiftableLike {
  readonly liftableStateType: SinkLike<unknown>;

  sink(this: this["type"], sink: this["liftableStateType"]): void;
}

export interface Lift<C extends SourceLike>
  extends LiftableLift<C, ContraVariant> {}

export interface CreateSource<C extends SourceLike> extends Container<C> {
  create<T>(onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T>;
}

const create =
  <C extends SourceLike, T>(m: CreateSource<C>) =>
  (onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T> =>
    m.create(onSink);

export abstract class AbstractSource<T, TSink extends SinkLike<T>>
  extends AbstractLiftable<TSink>
  implements SourceLike
{
  abstract sink(this: this, sink: TSink): void;
}

export abstract class AbstractDisposableSource<T, TSink extends SinkLike<T>>
  extends AbstractDisposableLiftable<TSink>
  implements SourceLike
{
  abstract sink(this: this, sink: TSink): void;
}

export const notify =
  <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(
    v: T,
  ): Function1<TSink, TSink> =>
  (sink: TSink) => {
    sink.notify(v);
    return sink;
  };

export const notifySink =
  <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(
    sink: TSink,
  ): SideEffect1<T> =>
  (next: T) =>
    sink.notify(next);

export const sinkInto =
  <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(
    sink: TSink,
  ): Function1<C, C> =>
  source => {
    source.sink(sink);
    return source;
  };

export const sourceFrom =
  <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source.sink(sink);
    return sink;
  };

export const createBufferOperator = <C extends SourceLike>(
  m: Lift<C> & FromArray<C>,
  BufferSink: new <T>(
    delegate: LiftableStateOf<C, readonly T[]>,
    maxBufferSize: number,
  ) => DelegatingLiftableStateOf<C, T, readonly T[]> & {
    buffer: T[];
    readonly maxBufferSize: number;
  },
) => {
  BufferSink.prototype.notify = function notifyBuffer<T>(
    this: DelegatingLiftableStateOf<C, T, readonly T[]> & {
      buffer: T[];
      readonly maxBufferSize: number;
    },
    next: T,
  ) {
    this.assertState();

    const { buffer, maxBufferSize } = this;

    buffer.push(next);

    if (buffer.length === maxBufferSize) {
      const buffer = this.buffer;
      this.buffer = [];

      delegateLiftable(this).notify(buffer);
    }
  };

  return <T>(
    options: {
      readonly maxBufferSize?: number;
    } = {},
  ): ContainerOperator<C, T, readonly T[]> => {
    const maxBufferSize = Math.max(
      options.maxBufferSize ?? Number.MAX_SAFE_INTEGER,
      1,
    );

    return pipe(
      (delegate: LiftableStateOf<C, readonly T[]>) =>
        pipe(
          new BufferSink(delegate, maxBufferSize),
          addTo(delegate),
          onComplete(function onDispose(
            this: DelegatingLiftableStateOf<C, T, readonly T[]> & {
              buffer: T[];
            },
          ) {
            const { buffer } = this;
            this.buffer = [];

            if (buffer.length === 0) {
              pipe(this, delegateLiftable, dispose());
            } else {
              pipe(buffer, fromValue(m), sinkInto(delegateLiftable(this)));
            }
          }),
        ),
      lift(m),
    );
  };
};

export const createCatchErrorOperator =
  <C extends SourceLike>(
    m: Lift<C>,
    CatchErrorSink: new <T>(
      delegate: LiftableStateOf<C, T>,
    ) => DelegatingLiftableStateOf<C, T, T>,
  ) =>
  <T>(
    f: Function1<unknown, ContainerOf<C, T> | void>,
  ): ContainerOperator<C, T, T> => {
    CatchErrorSink.prototype.notify = function notifyDelegate(
      this: DelegatingLiftableStateOf<C, T, T>,
      next: T,
    ) {
      delegateLiftable(this).notify(next);
    };

    return pipe(
      (delegate: LiftableStateOf<C, T>): LiftableStateOf<C, T> =>
        pipe(
          new CatchErrorSink(delegate),
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

export const createDecodeWithCharsetOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C>,
  DecodeWithCharsetSink: new (
    delegate: LiftableStateOf<C, string>,
    textDecoder: TextDecoder,
  ) => DelegatingLiftableStateOf<C, ArrayBuffer, string> & {
    readonly textDecoder: TextDecoder;
  },
): ((charset?: string) => ContainerOperator<C, ArrayBuffer, string>) => {
  DecodeWithCharsetSink.prototype.notify = function notifyDecodeWithCharset(
    this: DelegatingLiftableStateOf<C, ArrayBuffer, string> & {
      readonly textDecoder: TextDecoder;
    },
    next: ArrayBuffer,
  ) {
    const data = this.textDecoder.decode(next, { stream: true });
    if (data.length > 0) {
      delegateLiftable(this).notify(data);
    }
  };

  return (charset = "utf-8") =>
    pipe(
      (
        delegate: LiftableStateOf<C, string>,
      ): LiftableStateOf<C, ArrayBuffer> => {
        const textDecoder = new TextDecoder(charset, { fatal: true });
        return pipe(
          new DecodeWithCharsetSink(delegate, textDecoder),
          addTo(delegate),
          onComplete(() => {
            const data = textDecoder.decode();

            if (data.length > 0) {
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

export const createDistinctUntilChangedOperator = <C extends SourceLike>(
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
  DistinctUntilChangedSink.prototype.notify =
    function notifyDistinctUntilChanged<T>(
      this: DelegatingLiftableStateOf<C, T, T> & {
        readonly equality: Equality<T>;
        prev: Option<T>;
        hasValue: boolean;
      },
      next: T,
    ) {
      this.assertState();

      const shouldEmit = !this.hasValue || !this.equality(this.prev as T, next);

      if (shouldEmit) {
        this.prev = next;
        this.hasValue = true;
        delegateLiftable(this).notify(next);
      }
    };

  return createDistinctUntilChangedLiftOperator(m, DistinctUntilChangedSink);
};

const createSatisfyOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C>,
  SatisfySink: new <T>(
    delegate: LiftableStateOf<C, boolean>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableStateOf<C, T, boolean> & {
    readonly predicate: Predicate<T>;
  },
  defaultResult: boolean,
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) => {
  SatisfySink.prototype.notify = function notifyEverySatisfy<T>(
    this: DelegatingLiftableStateOf<C, T, boolean> & {
      readonly predicate: Predicate<T>;
    },
    next: T,
  ) {
    this.assertState();

    if (this.predicate(next)) {
      const { delegate } = this;
      pipe(delegate, notify(!defaultResult), dispose());
    }
  };
  return <T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean> =>
    pipe(
      (delegate: LiftableStateOf<C, boolean>): LiftableStateOf<C, T> =>
        pipe(
          new SatisfySink(delegate, predicate),
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

export const createEverySatisfyOperator = <C extends SourceLike>(
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

export const createKeepOperator = <C extends SourceLike>(
  m: Lift<C>,
  KeepSink: new <T>(
    delegate: LiftableStateOf<C, T>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableStateOf<C, T, T> & {
    readonly predicate: Predicate<T>;
  },
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, T>) => {
  KeepSink.prototype.notify = function notifyKeep<T>(
    this: DelegatingLiftableStateOf<C, T, T> & {
      readonly predicate: Predicate<T>;
    },
    next: T,
  ) {
    this.assertState();
    if (this.predicate(next)) {
      delegateLiftable(this).notify(next);
    }
  };

  return createKeepLiftOperator(m, KeepSink);
};

export const createMapOperator = <C extends SourceLike>(
  m: Lift<C>,
  MapSink: new <TA, TB>(
    delegate: LiftableStateOf<C, TB>,
    mapper: Function1<TA, TB>,
  ) => DelegatingLiftableStateOf<C, TA, TB> & {
    readonly mapper: Function1<TA, TB>;
  },
): (<TA, TB>(mapper: Function1<TA, TB>) => ContainerOperator<C, TA, TB>) => {
  MapSink.prototype.notify = function notifyMap<TA, TB>(
    this: DelegatingLiftableStateOf<C, TA, TB> & {
      readonly mapper: Function1<TA, TB>;
    },
    next: TA,
  ) {
    this.assertState();
    const mapped = this.mapper(next);
    delegateLiftable(this).notify(mapped);
  };

  return createMapLiftOperator(m, MapSink);
};

export const createOnNotifyOperator = <C extends SourceLike>(
  m: Lift<C>,
  OnNotifySink: new <T>(
    delegate: LiftableStateOf<C, T>,
    onNotify: SideEffect1<T>,
  ) => DelegatingLiftableStateOf<C, T, T> & {
    readonly onNotify: SideEffect1<T>;
  },
): (<T>(onNotify: SideEffect1<T>) => ContainerOperator<C, T, T>) => {
  OnNotifySink.prototype.notify = function notifyOnNotify<T>(
    this: DelegatingLiftableStateOf<C, T, T> & {
      readonly onNotify: SideEffect1<T>;
    },
    next: T,
  ) {
    this.assertState();

    this.onNotify(next);
    delegateLiftable(this).notify(next);
  };

  return createOnNotifyLiftOperator(m, OnNotifySink);
};

export const createPairwiseOperator = <C extends SourceLike>(
  m: Lift<C>,
  PairwiseSink: new <T>(
    delegate: LiftableStateOf<C, [Option<T>, T]>,
  ) => DelegatingLiftableStateOf<C, T, [Option<T>, T]> & {
    prev: Option<T>;
    hasPrev: boolean;
  },
): (<T>() => ContainerOperator<C, T, [Option<T>, T]>) => {
  PairwiseSink.prototype.notify = function notifyPairwise<T>(
    this: DelegatingLiftableStateOf<C, T, [Option<T>, T]> & {
      prev: Option<T>;
      hasPrev: boolean;
    },
    value: T,
  ): void {
    this.assertState();
    const prev = this.hasPrev ? this.prev : none;

    this.hasPrev = true;
    this.prev = value;

    delegateLiftable(this).notify([prev, value]);
  };

  return createPairwiseLiftOperator(m, PairwiseSink);
};

export const createReduceOperator = <C extends SourceLike>(
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
  ReduceSink.prototype.notify = function notifyReduce<T, TAcc>(
    this: LiftableStateOf<C, T> & {
      readonly reducer: Reducer<T, TAcc>;
      acc: TAcc;
    },
    next: T,
  ) {
    this.assertState();

    this.acc = this.reducer(this.acc, next);
  };

  return <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> =>
    pipe((delegate: LiftableStateOf<C, TAcc>): LiftableStateOf<C, T> => {
      const sink = pipe(
        new ReduceSink(delegate, reducer, initialValue()),
        addTo(delegate),
        onComplete(() => {
          pipe(sink.acc, fromValue(m), sinkInto(delegate));
        }),
      );
      return sink;
    }, lift(m));
};

export const createScanOperator = <C extends SourceLike>(
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
  ScanSink.prototype.notify = function notifyScan<T, TAcc>(
    this: DelegatingLiftableStateOf<C, T, TAcc> & {
      readonly reducer: Reducer<T, TAcc>;
      acc: TAcc;
    },
    next: T,
  ) {
    this.assertState();
    const nextAcc = this.reducer(this.acc, next);
    this.acc = nextAcc;

    delegateLiftable(this).notify(nextAcc);
  };

  return createScanLiftOperator(m, ScanSink);
};

export const createSkipFirstOperator = <C extends SourceLike>(
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
  SkipFirstSink.prototype.notify = function notifySkipFirst<T>(
    this: DelegatingLiftableStateOf<C, T, T> & {
      count: number;
      readonly skipCount: number;
    },
    next: T,
  ) {
    this.count++;
    if (this.count > this.skipCount) {
      delegateLiftable(this).notify(next);
    }
  };

  return createSkipFirstLiftOperator(m, SkipFirstSink);
};

export const createSomeSatisfyOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C>,
  SomeSatisfySink: new <T>(
    delegate: LiftableStateOf<C, boolean>,
    predicate: Predicate<T>,
  ) => DelegatingLiftableStateOf<C, T, boolean> & {
    readonly predicate: Predicate<T>;
  },
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) =>
  createSatisfyOperator(m, SomeSatisfySink, false);

export const createTakeFirstOperator = <C extends SourceLike>(
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
  TakeFirstSink.prototype.notify = function notifyTakeFirst<T>(
    this: DelegatingLiftableStateOf<C, T, T> & {
      count: number;
      readonly maxCount: number;
    },
    next: T,
  ) {
    this.assertState();

    this.count++;
    delegateLiftable(this).notify(next);
    if (this.count >= this.maxCount) {
      pipe(this, dispose());
    }
  };

  return createTakeFirstLiftOperator(m, TakeFirstSink);
};

export const createTakeLastOperator = <C extends SourceLike>(
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
  TakeLastSink.prototype.notify = function notifyTakeLast<T>(
    this: LiftableStateOf<C, T> & {
      readonly last: T[];
      readonly maxCount: number;
    },
    next: T,
  ) {
    this.assertState();

    const { last } = this;

    last.push(next);

    if (last.length > this.maxCount) {
      last.shift();
    }
  };

  return <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;

    const operator = (
      delegate: LiftableStateOf<C, T>,
    ): LiftableStateOf<C, T> => {
      const sink = pipe(
        new TakeLastSink(delegate, count),
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

export const createTakeWhileOperator = <C extends SourceLike>(
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
  TakeWhileSink.prototype.notify = function notifyTakeWhile<T>(
    this: DelegatingLiftableStateOf<C, T, T> & {
      readonly predicate: Predicate<T>;
      readonly inclusive: boolean;
    },
    next: T,
  ) {
    this.assertState();

    const satisfiesPredicate = this.predicate(next);

    if (satisfiesPredicate || this.inclusive) {
      delegateLiftable(this).notify(next);
    }

    if (!satisfiesPredicate) {
      pipe(this, dispose());
    }
  };

  return createTakeWhileLiftOperator(m, TakeWhileSink);
};

export const createThrowIfEmptyOperator = <C extends SourceLike>(
  m: Lift<C>,
  ThrowIfEmptySink: new <T>(
    delegate: LiftableStateOf<C, T>,
  ) => DelegatingLiftableStateOf<C, T, T> & {
    isEmpty: boolean;
  },
): (<T>(factory: Factory<unknown>) => ContainerOperator<C, T, T>) => {
  ThrowIfEmptySink.prototype.notify = function notify<T>(
    this: DelegatingLiftableStateOf<C, T, T> & {
      isEmpty: boolean;
    },
    next: T,
  ) {
    this.assertState();

    this.isEmpty = false;
    delegateLiftable(this).notify(next);
  };

  return createThrowIfEmptyLiftOperator(m, ThrowIfEmptySink);
};

export const createFromDisposable =
  <C extends SourceLike>(m: CreateSource<C>) =>
  <T>(disposable: DisposableLike): ContainerOf<C, T> =>
    pipe(disposable, addTo, create(m));

export const createNever = <C extends SourceLike>(m: CreateSource<C>) => {
  const neverInstance: ContainerOf<C, any> = pipe(ignore, create(m));
  return <T>(): ContainerOf<C, T> => neverInstance;
};

export const createOnSink =
  <C extends SourceLike>(m: CreateSource<C>) =>
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
  <C extends SourceLike>(m: CreateSource<C>) =>
  <TResource extends DisposableLike, T>(
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
