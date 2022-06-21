import {
  AbstractContainer,
  Container,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  FromArray,
  empty,
  fromValue,
} from "./container";
import {
  DisposableLike,
  addDisposable,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  addTeardown,
  bindDisposables,
  dispose,
} from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  pipe,
  strictEquality,
} from "./functions";
import { Option, none } from "./option";

export interface SinkLike<T> extends DisposableLike, ContainerLike {
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

export interface SourceLike extends ContainerLike {
  readonly sinkType: SinkLike<unknown>;

  sink(this: this["type"], sink: this["sinkType"]): void;
}

export abstract class AbstractSource<T, TSink extends SinkLike<T>>
  extends AbstractContainer
  implements SourceLike
{
  get sinkType(): TSink {
    return undefined as any;
  }

  abstract sink(this: this, sink: TSink): void;
}

export type SinkOf<C extends SourceLike, T> = C extends {
  readonly sinkType: unknown;
}
  ? (C & {
      readonly T: T;
    })["sinkType"]
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export interface Sink<C extends SourceLike> extends Container<C> {
  sink<T>(sink: SinkOf<C, T>): SideEffect1<ContainerOf<C, T>>;
}

export interface Lift<C extends SourceLike> extends Container<C> {
  lift<TA, TB>(
    operator: Function1<SinkOf<C, TB>, SinkOf<C, TA>>,
  ): Function1<ContainerOf<C, TA>, ContainerOf<C, TB>>;
}

export const createDecodeWithCharsetOperator = <C extends SourceLike>(
  m: FromArray<C> & Sink<C> & Lift<C>,
  DecodeWithCharsetSink: new (
    delegate: SinkOf<C, string>,
    textDecoder: TextDecoder,
  ) => SinkOf<C, ArrayBuffer> & {
    readonly delegate: SinkOf<C, string>;
    readonly textDecoder: TextDecoder;
  },
): ((charset?: string) => ContainerOperator<C, ArrayBuffer, string>) => {
  DecodeWithCharsetSink.prototype.notify = function notifyDecodeWithCharset(
    this: SinkOf<C, ArrayBuffer> & {
      readonly delegate: SinkOf<C, string>;
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
    const operator = (delegate: SinkOf<C, string>): SinkOf<C, ArrayBuffer> => {
      const textDecoder = new TextDecoder(charset, { fatal: true });
      const sink = new DecodeWithCharsetSink(delegate, textDecoder);

      addDisposable(delegate, sink);
      addOnDisposedWithError(sink, delegate);
      addOnDisposedWithoutErrorTeardown(sink, () => {
        const data = textDecoder.decode();

        if (data.length > 0) {
          pipe(data, fromValue(m), m.sink(delegate));
        } else {
          delegate.dispose();
        }
      });

      return sink;
    };
    return m.lift(operator);
  };
};

export const createDistinctUntilChangedOperator = <C extends SourceLike>(
  m: Lift<C>,
  DistinctUntilChangedSink: new <T>(
    delegate: SinkOf<C, T>,
    equality: Equality<T>,
  ) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, T>;
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
  },
): (<T>(options?: {
  readonly equality?: Equality<T>;
}) => ContainerOperator<C, T, T>) => {
  DistinctUntilChangedSink.prototype.notify =
    function notifyDistinctUntilChanged<T>(
      this: SinkOf<C, T> & {
        readonly delegate: SinkOf<C, T>;
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

  return <T>(options: { readonly equality?: Equality<T> } = {}) => {
    const { equality = strictEquality } = options;
    const operator = (delegate: SinkOf<C, T>): SinkOf<C, T> => {
      const sink = new DistinctUntilChangedSink(delegate, equality);
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };
};

export const createKeepOperator = <C extends SourceLike>(
  m: Lift<C>,
  KeepSink: new <T>(delegate: SinkOf<C, T>, predicate: Predicate<T>) => SinkOf<
    C,
    T
  > & {
    readonly delegate: SinkOf<C, T>;
    readonly predicate: Predicate<T>;
  },
): (<T>(predicate: Predicate<T>) => ContainerOperator<C, T, T>) => {
  KeepSink.prototype.notify = function notifyKeep<T>(
    this: SinkOf<C, T> & {
      readonly delegate: SinkOf<C, T>;
      readonly predicate: Predicate<T>;
    },
    next: T,
  ) {
    this.assertState();
    if (this.predicate(next)) {
      this.delegate.notify(next);
    }
  };

  return <T>(predicate: Predicate<T>) => {
    const operator = (delegate: SinkOf<C, T>): SinkOf<C, T> => {
      const sink = new KeepSink(delegate, predicate);
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };
};

export const createMapOperator = <C extends SourceLike>(
  m: Lift<C>,
  MapSink: new <TA, TB>(
    delegate: SinkOf<C, TB>,
    mapper: Function1<TA, TB>,
  ) => SinkOf<C, TA> & {
    readonly delegate: SinkOf<C, TB>;
    readonly mapper: Function1<TA, TB>;
  },
): (<TA, TB>(mapper: Function1<TA, TB>) => ContainerOperator<C, TA, TB>) => {
  MapSink.prototype.notify = function notifyMap<TA, TB>(
    this: SinkOf<C, TA> & {
      readonly delegate: SinkOf<C, TB>;
      readonly mapper: Function1<TA, TB>;
    },
    next: TA,
  ) {
    this.assertState();
    const mapped = this.mapper(next);
    this.delegate.notify(mapped);
  };

  return <TA, TB>(mapper: Function1<TA, TB>) => {
    const operator = (delegate: SinkOf<C, TB>): SinkOf<C, TA> => {
      const sink = new MapSink(delegate, mapper);
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };
};

export const createOnNotifyOperator = <C extends SourceLike>(
  m: Lift<C>,
  OnNotifySink: new <T>(
    delegate: SinkOf<C, T>,
    onNotify: SideEffect1<T>,
  ) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, T>;
    readonly onNotify: SideEffect1<T>;
  },
): (<T>(onNotify: SideEffect1<T>) => ContainerOperator<C, T, T>) => {
  OnNotifySink.prototype.notify = function notifyOnNotify<T>(
    this: SinkOf<C, T> & {
      readonly delegate: SinkOf<C, T>;
      readonly onNotify: SideEffect1<T>;
    },
    next: T,
  ) {
    this.assertState();

    this.onNotify(next);
    this.delegate.notify(next);
  };

  return <T>(onNotify: SideEffect1<T>) => {
    const operator = (delegate: SinkOf<C, T>): SinkOf<C, T> => {
      const sink = new OnNotifySink(delegate, onNotify);
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };
};

export const createPairwiseOperator = <C extends SourceLike>(
  m: Lift<C>,
  PairwiseSink: new <T>(delegate: SinkOf<C, [Option<T>, T]>) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, [Option<T>, T]>;
    prev: Option<T>;
    hasPrev: boolean;
  },
): (<T>() => ContainerOperator<C, T, [Option<T>, T]>) => {
  PairwiseSink.prototype.notify = function notifyPairwise<T>(
    this: SinkOf<C, T> & {
      readonly delegate: SinkOf<C, [Option<T>, T]>;
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

  return <T>() => {
    const operator = (delegate: SinkOf<C, [Option<T>, T]>): SinkOf<C, T> => {
      const sink = new PairwiseSink(delegate);
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };
};

export const createReduceOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C> & Sink<C>,
  ReduceSink: new <T, TAcc>(
    delegate: SinkOf<C, TAcc>,
    reducer: Reducer<T, TAcc>,
    acc: TAcc,
  ) => SinkOf<C, T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
  },
): (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ContainerOperator<C, T, TAcc>) => {
  ReduceSink.prototype.notify = function notifyReduce<T, TAcc>(
    this: SinkOf<C, T> & {
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
    const operator = (delegate: SinkOf<C, TAcc>): SinkOf<C, T> => {
      const sink = new ReduceSink(delegate, reducer, initialValue());
      addDisposable(delegate, sink);
      addOnDisposedWithError(sink, delegate);
      addOnDisposedWithoutErrorTeardown(sink, () => {
        pipe(sink.acc, fromValue(m), m.sink(delegate));
      });
      return sink;
    };
    return m.lift(operator);
  };
};

export const createScanOperator = <C extends SourceLike>(
  m: Lift<C>,
  ScanSink: new <T, TAcc>(
    delegate: SinkOf<C, TAcc>,
    reducer: Reducer<T, TAcc>,
    acc: TAcc,
  ) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, TAcc>;
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
  },
): (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ContainerOperator<C, T, TAcc>) => {
  ScanSink.prototype.notify = function notifyScan<T, TAcc>(
    this: SinkOf<C, T> & {
      readonly delegate: SinkOf<C, TAcc>;
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

  return <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc> => {
    const operator = (delegate: SinkOf<C, TAcc>): SinkOf<C, T> => {
      const sink = new ScanSink(delegate, reducer, initialValue());
      bindDisposables(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };
};

export const createSkipFirstOperator = <C extends SourceLike>(
  m: Lift<C>,
  SkipFirstSink: new <T>(delegate: SinkOf<C, T>, skipCount: number) => SinkOf<
    C,
    T
  > & {
    readonly delegate: SinkOf<C, T>;
    count: number;
    readonly skipCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  SkipFirstSink.prototype.notify = function notifySkipFirst<T>(
    this: SinkOf<C, T> & {
      readonly delegate: SinkOf<C, T>;
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

  return <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const operator = (delegate: SinkOf<C, T>): SinkOf<C, T> => {
      const sink = new SkipFirstSink(delegate, count);
      bindDisposables(sink, delegate);
      return sink;
    };
    return runnable =>
      count > 0 ? pipe(runnable, m.lift(operator)) : runnable;
  };
};

export const createTakeFirstOperator = <C extends SourceLike>(
  m: FromArray<C> & Lift<C>,
  TakeFirstSink: new <T>(delegate: SinkOf<C, T>, maxCount: number) => SinkOf<
    C,
    T
  > & {
    readonly delegate: SinkOf<C, T>;
    count: number;
    readonly maxCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  TakeFirstSink.prototype.notify = function notifyTakeFirst<T>(
    this: SinkOf<C, T> & {
      readonly delegate: SinkOf<C, T>;
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

  return <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;
    const operator = (delegate: SinkOf<C, T>): SinkOf<C, T> => {
      const sink = new TakeFirstSink(delegate, count);
      bindDisposables(sink, delegate);
      return sink;
    };
    return source => (count > 0 ? pipe(source, m.lift(operator)) : empty(m));
  };
};

export const createTakeLastOperator = <C extends SourceLike>(
  m: FromArray<C> & Sink<C> & Lift<C>,
  TakeLastSink: new <T>(delegate: SinkOf<C, T>, maxCount: number) => SinkOf<
    C,
    T
  > & {
    readonly last: T[];
    readonly maxCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  TakeLastSink.prototype.notify = function notifyTakeLast<T>(
    this: SinkOf<C, T> & {
      readonly last: T[];
      readonly maxCount: number;
    },
    next: T,
  ) {
    this.assertState();

    const last = this.last;

    last.push(next);

    if (last.length > this.maxCount) {
      last.shift();
    }
  };

  return <T>(
    options: { readonly count?: number } = {},
  ): ContainerOperator<C, T, T> => {
    const { count = 1 } = options;

    const operator = (delegate: SinkOf<C, T>): SinkOf<C, T> => {
      const sink = new TakeLastSink(delegate, count);
      addDisposable(delegate, sink);
      addOnDisposedWithError(sink, delegate);
      addTeardown(sink, () => {
        pipe(sink.last, m.fromArray(), m.sink(delegate));
      });

      return sink;
    };

    return source => (count > 0 ? pipe(source, m.lift(operator)) : empty(m));
  };
};

export const createTakeWhileOperator = <C extends SourceLike>(
  m: Lift<C>,
  TakeWhileSink: new <T>(
    delegate: SinkOf<C, T>,
    predicate: Predicate<T>,
    inclusive: boolean,
  ) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, T>;
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
  },
): (<T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => ContainerOperator<C, T, T>) => {
  TakeWhileSink.prototype.notify = function notifyTakeWhile<T>(
    this: SinkOf<C, T> & {
      readonly delegate: SinkOf<C, T>;
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

  return <T>(
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ): ContainerOperator<C, T, T> => {
    const { inclusive = false } = options;
    const operator = (delegate: SinkOf<C, T>): SinkOf<C, T> => {
      const sink = new TakeWhileSink(delegate, predicate, inclusive);
      addDisposable(sink, delegate);
      return sink;
    };
    return m.lift(operator);
  };
};
