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
  addAndDisposeParentOnChildError,
  addTo,
  addToAndDisposeParentOnChildError,
  dispose,
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
  Lift as LiftableLift,
  LiftableLike,
  LiftedStateLike,
  LiftedStateOf,
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
import { forEach } from "./readonlyArray";

export interface SinkLike<T> extends LiftedStateLike {
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
  readonly liftedStateType: SinkLike<unknown>;

  sink(this: this["type"], sink: this["liftedStateType"]): void;
}

export interface Lift<C extends SourceLike>
  extends LiftableLift<C, "contravariant"> {}

export interface CreateSource<C extends SourceLike> extends Container<C> {
  create<T>(onSink: (sink: LiftedStateOf<C, T>) => void): ContainerOf<C, T>;
}

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

export const sinkInto =
  <C extends SourceLike, T, TSink extends LiftedStateOf<C, T>>(
    sink: TSink,
  ): Function1<C, C> =>
  source => {
    source.sink(sink);
    return source;
  };

export const sourceFrom =
  <C extends SourceLike, T, TSink extends LiftedStateOf<C, T>>(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source.sink(sink);
    return sink;
  };

export const createCatchErrorOperator =
  <C extends SourceLike>(
    m: Lift<C>,
    CatchErrorSink: new <T>(delegate: LiftedStateOf<C, T>) => LiftedStateOf<
      C,
      T
    > & {
      readonly delegate: LiftedStateOf<C, T>;
    },
  ) =>
  <T>(
    f: Function1<unknown, ContainerOf<C, T> | void>,
  ): ContainerOperator<C, T, T> => {
    CatchErrorSink.prototype.notify = function notifyDelegate(
      this: {
        readonly delegate: LiftedStateOf<C, T>;
      },
      next: T,
    ) {
      this.delegate.notify(next);
    };

    const operator = (delegate: LiftedStateOf<C, T>): LiftedStateOf<C, T> =>
      pipe(
        new CatchErrorSink(delegate),
        addTo(delegate),
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
      );

    return m.lift(operator);
  };

export const createDecodeWithCharsetOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C>,
  DecodeWithCharsetSink: new (
    delegate: LiftedStateOf<C, string>,
    textDecoder: TextDecoder,
  ) => LiftedStateOf<C, ArrayBuffer> & {
    readonly delegate: LiftedStateOf<C, string>;
    readonly textDecoder: TextDecoder;
  },
): ((charset?: string) => ContainerOperator<C, ArrayBuffer, string>) => {
  DecodeWithCharsetSink.prototype.notify = function notifyDecodeWithCharset(
    this: LiftedStateOf<C, ArrayBuffer> & {
      readonly delegate: LiftedStateOf<C, string>;
      readonly textDecoder: TextDecoder;
    },
    next: ArrayBuffer,
  ) {
    const data = this.textDecoder.decode(next, { stream: true });
    if (data.length > 0) {
      this.delegate.notify(data);
    }
  };

  return (charset = "utf-8") => {
    const operator = (
      delegate: LiftedStateOf<C, string>,
    ): LiftedStateOf<C, ArrayBuffer> => {
      const textDecoder = new TextDecoder(charset, { fatal: true });
      return pipe(
        new DecodeWithCharsetSink(delegate, textDecoder),
        addToAndDisposeParentOnChildError(delegate),
        onComplete(() => {
          const data = textDecoder.decode();

          if (data.length > 0) {
            pipe(data, fromValue(m), sinkInto(delegate));
          } else {
            delegate.dispose();
          }
        }),
      );
    };
    return m.lift(operator);
  };
};

export const createDistinctUntilChangedOperator = <C extends SourceLike>(
  m: Lift<C>,
  DistinctUntilChangedSink: new <T>(
    delegate: LiftedStateOf<C, T>,
    equality: Equality<T>,
  ) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
  },
): (<T>(options?: {
  readonly equality?: Equality<T>;
}) => ContainerOperator<C, T, T>) => {
  DistinctUntilChangedSink.prototype.notify =
    function notifyDistinctUntilChanged<T>(
      this: LiftedStateOf<C, T> & {
        readonly delegate: LiftedStateOf<C, T>;
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
        this.delegate.notify(next);
      }
    };

  return createDistinctUntilChangedLiftedOperator(m, DistinctUntilChangedSink);
};

const createSatisfyOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C>,
  SatisfySink: new <T>(
    delegate: LiftedStateOf<C, boolean>,
    predicate: Predicate<T>,
  ) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, boolean>;
    readonly predicate: Predicate<T>;
  },
  defaultResult: boolean,
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) => {
  SatisfySink.prototype.notify = function notifyEverySatisfy<T>(
    this: LiftedStateOf<C, T> & {
      readonly delegate: LiftedStateOf<C, boolean>;
      readonly predicate: Predicate<T>;
    },
    next: T,
  ) {
    this.assertState();

    if (this.predicate(next)) {
      const { delegate } = this;
      delegate.notify(!defaultResult);
      delegate.dispose();
    }
  };
  return <T>(predicate: Predicate<T>) => {
    const operator = (
      delegate: LiftedStateOf<C, boolean>,
    ): LiftedStateOf<C, T> =>
      pipe(
        new SatisfySink(delegate, predicate),
        addToAndDisposeParentOnChildError(delegate),
        onComplete(() => {
          if (!delegate.isDisposed) {
            pipe(defaultResult, fromValue(m), sinkInto(delegate));
          }
        }),
      );
    return m.lift(operator);
  };
};

export const createEverySatisfyOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C>,
  EverySatisfySink: new <T>(
    delegate: LiftedStateOf<C, boolean>,
    predicate: Predicate<T>,
  ) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, boolean>;
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
    delegate: LiftedStateOf<C, T>,
    predicate: Predicate<T>,
  ) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    readonly predicate: Predicate<T>;
  },
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, T>) => {
  KeepSink.prototype.notify = function notifyKeep<T>(
    this: LiftedStateOf<C, T> & {
      readonly delegate: LiftedStateOf<C, T>;
      readonly predicate: Predicate<T>;
    },
    next: T,
  ) {
    this.assertState();
    if (this.predicate(next)) {
      this.delegate.notify(next);
    }
  };

  return createKeepLiftedOperator(m, KeepSink);
};

export const createMapOperator = <C extends SourceLike>(
  m: Lift<C>,
  MapSink: new <TA, TB>(
    delegate: LiftedStateOf<C, TB>,
    mapper: Function1<TA, TB>,
  ) => LiftedStateOf<C, TA> & {
    readonly delegate: LiftedStateOf<C, TB>;
    readonly mapper: Function1<TA, TB>;
  },
): (<TA, TB>(mapper: Function1<TA, TB>) => ContainerOperator<C, TA, TB>) => {
  MapSink.prototype.notify = function notifyMap<TA, TB>(
    this: LiftedStateOf<C, TA> & {
      readonly delegate: LiftedStateOf<C, TB>;
      readonly mapper: Function1<TA, TB>;
    },
    next: TA,
  ) {
    this.assertState();
    const mapped = this.mapper(next);
    this.delegate.notify(mapped);
  };

  return createMapLiftedOperator(m, MapSink);
};

export const createOnNotifyOperator = <C extends SourceLike>(
  m: Lift<C>,
  OnNotifySink: new <T>(
    delegate: LiftedStateOf<C, T>,
    onNotify: SideEffect1<T>,
  ) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    readonly onNotify: SideEffect1<T>;
  },
): (<T>(onNotify: SideEffect1<T>) => ContainerOperator<C, T, T>) => {
  OnNotifySink.prototype.notify = function notifyOnNotify<T>(
    this: LiftedStateOf<C, T> & {
      readonly delegate: LiftedStateOf<C, T>;
      readonly onNotify: SideEffect1<T>;
    },
    next: T,
  ) {
    this.assertState();

    this.onNotify(next);
    this.delegate.notify(next);
  };

  return createOnNotifyLiftedOperator(m, OnNotifySink);
};

export const createPairwiseOperator = <C extends SourceLike>(
  m: Lift<C>,
  PairwiseSink: new <T>(
    delegate: LiftedStateOf<C, [Option<T>, T]>,
  ) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, [Option<T>, T]>;
    prev: Option<T>;
    hasPrev: boolean;
  },
): (<T>() => ContainerOperator<C, T, [Option<T>, T]>) => {
  PairwiseSink.prototype.notify = function notifyPairwise<T>(
    this: LiftedStateOf<C, T> & {
      readonly delegate: LiftedStateOf<C, [Option<T>, T]>;
      prev: Option<T>;
      hasPrev: boolean;
    },
    value: T,
  ): void {
    this.assertState();
    const prev = this.hasPrev ? this.prev : none;

    this.hasPrev = true;
    this.prev = value;

    this.delegate.notify([prev, value]);
  };

  return createPairwiseLiftedOperator(m, PairwiseSink);
};

export const createReduceOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C>,
  ReduceSink: new <T, TAcc>(
    delegate: LiftedStateOf<C, TAcc>,
    reducer: Reducer<T, TAcc>,
    acc: TAcc,
  ) => LiftedStateOf<C, T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
  },
): (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ContainerOperator<C, T, TAcc>) => {
  ReduceSink.prototype.notify = function notifyReduce<T, TAcc>(
    this: LiftedStateOf<C, T> & {
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
  ): ContainerOperator<C, T, TAcc> => {
    const operator = (
      delegate: LiftedStateOf<C, TAcc>,
    ): LiftedStateOf<C, T> => {
      const sink = pipe(
        new ReduceSink(delegate, reducer, initialValue()),
        addToAndDisposeParentOnChildError(delegate),
        onComplete(() => {
          pipe(sink.acc, fromValue(m), sinkInto(delegate));
        }),
      );
      return sink;
    };
    return m.lift(operator);
  };
};

export const createScanOperator = <C extends SourceLike>(
  m: Lift<C>,
  ScanSink: new <T, TAcc>(
    delegate: LiftedStateOf<C, TAcc>,
    reducer: Reducer<T, TAcc>,
    acc: TAcc,
  ) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, TAcc>;
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
  },
): (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ContainerOperator<C, T, TAcc>) => {
  ScanSink.prototype.notify = function notifyScan<T, TAcc>(
    this: LiftedStateOf<C, T> & {
      readonly delegate: LiftedStateOf<C, TAcc>;
      readonly reducer: Reducer<T, TAcc>;
      acc: TAcc;
    },
    next: T,
  ) {
    this.assertState();
    const nextAcc = this.reducer(this.acc, next);
    this.acc = nextAcc;

    this.delegate.notify(nextAcc);
  };

  return createScanLiftedOperator(m, ScanSink);
};

export const createSkipFirstOperator = <C extends SourceLike>(
  m: Lift<C>,
  SkipFirstSink: new <T>(
    delegate: LiftedStateOf<C, T>,
    skipCount: number,
  ) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    count: number;
    readonly skipCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  SkipFirstSink.prototype.notify = function notifySkipFirst<T>(
    this: LiftedStateOf<C, T> & {
      readonly delegate: LiftedStateOf<C, T>;
      count: number;
      readonly skipCount: number;
    },
    next: T,
  ) {
    this.count++;
    if (this.count > this.skipCount) {
      this.delegate.notify(next);
    }
  };

  return createSkipFirstLiftedOperator(m, SkipFirstSink);
};

export const createSomeSatisfyOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C>,
  SomeSatisfySink: new <T>(
    delegate: LiftedStateOf<C, boolean>,
    predicate: Predicate<T>,
  ) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, boolean>;
    readonly predicate: Predicate<T>;
  },
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>) =>
  createSatisfyOperator(m, SomeSatisfySink, false);

export const createTakeFirstOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C>,
  TakeFirstSink: new <T>(
    delegate: LiftedStateOf<C, T>,
    maxCount: number,
  ) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    count: number;
    readonly maxCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  TakeFirstSink.prototype.notify = function notifyTakeFirst<T>(
    this: LiftedStateOf<C, T> & {
      readonly delegate: LiftedStateOf<C, T>;
      count: number;
      readonly maxCount: number;
    },
    next: T,
  ) {
    this.assertState();

    this.count++;
    this.delegate.notify(next);
    if (this.count >= this.maxCount) {
      pipe(this, dispose());
    }
  };

  return createTakeFirstLiftedOperator(m, TakeFirstSink);
};

export const createTakeLastOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C>,
  TakeLastSink: new <T>(
    delegate: LiftedStateOf<C, T>,
    maxCount: number,
  ) => LiftedStateOf<C, T> & {
    readonly last: T[];
    readonly maxCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  TakeLastSink.prototype.notify = function notifyTakeLast<T>(
    this: LiftedStateOf<C, T> & {
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

    const operator = (delegate: LiftedStateOf<C, T>): LiftedStateOf<C, T> => {
      const sink = pipe(
        new TakeLastSink(delegate, count),
        addToAndDisposeParentOnChildError(delegate),
        onComplete(() => {
          pipe(sink.last, m.fromArray(), sinkInto(delegate));
        }),
      );
      return sink;
    };

    return source => (count > 0 ? pipe(source, m.lift(operator)) : empty(m));
  };
};

export const createTakeWhileOperator = <C extends SourceLike>(
  m: Lift<C>,
  TakeWhileSink: new <T>(
    delegate: LiftedStateOf<C, T>,
    predicate: Predicate<T>,
    inclusive: boolean,
  ) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
  },
): (<T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => ContainerOperator<C, T, T>) => {
  TakeWhileSink.prototype.notify = function notifyTakeWhile<T>(
    this: LiftedStateOf<C, T> & {
      readonly delegate: LiftedStateOf<C, T>;
      readonly predicate: Predicate<T>;
      readonly inclusive: boolean;
    },
    next: T,
  ) {
    this.assertState();

    const satisfiesPredicate = this.predicate(next);

    if (satisfiesPredicate || this.inclusive) {
      this.delegate.notify(next);
    }

    if (!satisfiesPredicate) {
      pipe(this, dispose());
    }
  };

  return createTakeWhileLiftedOperator(m, TakeWhileSink);
};

export const createThrowIfEmptyOperator = <C extends SourceLike>(
  m: Lift<C>,
  ThrowIfEmptySink: new <T>(delegate: LiftedStateOf<C, T>) => LiftedStateOf<
    C,
    T
  > & {
    readonly delegate: LiftedStateOf<C, T>;
    isEmpty: boolean;
  },
): (<T>(factory: Factory<unknown>) => ContainerOperator<C, T, T>) => {
  ThrowIfEmptySink.prototype.notify = function notify<T>(
    this: LiftedStateOf<C, T> & {
      readonly delegate: LiftedStateOf<C, T>;
      isEmpty: boolean;
    },
    next: T,
  ) {
    this.assertState();

    this.isEmpty = false;
    this.delegate.notify(next);
  };

  return createThrowIfEmptyLiftedOperator(m, ThrowIfEmptySink);
};

export const createFromDisposable =
  <C extends SourceLike>(m: CreateSource<C>) =>
  <T>(disposable: DisposableLike): ContainerOf<C, T> =>
    m.create(addToAndDisposeParentOnChildError(disposable));

export const createNever = <C extends SourceLike>(m: CreateSource<C>) => {
  const neverInstance: ContainerOf<C, any> = m.create(ignore);
  return <T>(): ContainerOf<C, T> => neverInstance;
};

export const createOnSink =
  <C extends SourceLike>(m: CreateSource<C>) =>
  <T>(f: Factory<DisposableOrTeardown | void>): ContainerOperator<C, T, T> =>
  src =>
    m.create(sink => {
      pipe(src, sinkInto(sink));
      const disposable = f() || none;
      pipe(
        sink,
        disposable instanceof Function
          ? onDisposed(disposable)
          : isSome(disposable)
          ? addAndDisposeParentOnChildError(disposable)
          : identity,
      );
    });

export const createUsing =
  <C extends SourceLike>(m: CreateSource<C>) =>
  <TResource extends DisposableLike, T>(
    resourceFactory: Factory<TResource | readonly TResource[]>,
    sourceFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>,
  ): ContainerOf<C, T> =>
    m.create<T>(sink =>
      pipe(
        resourceFactory(),
        resources => (Array.isArray(resources) ? resources : [resources]),
        forEach(addToAndDisposeParentOnChildError(sink)),
        (resources: readonly TResource[]) => sourceFactory(...resources),
        sinkInto(sink),
      ),
    );
