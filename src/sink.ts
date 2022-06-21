import {
  ContainerLike,
  ContainerOf,
  FromArray,
  empty,
  ContainerOperator,
  Container,
} from "./container";
import {
  DisposableLike,
  addDisposable,
  addOnDisposedWithError,
  addTeardown,
  dispose,
  bindDisposables,
} from "./disposable";
import {
  Equality,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  pipe,
} from "./functions";
import { Option, none } from "./option";

export interface SinkLike<T> extends DisposableLike, ContainerLike {
  assertState(this: SinkLike<T>): void;

  /**
   * Notifies the the observer of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the observer's `schedule` method.
   *
   * @param next The next notification value.
   */
  notify(this: SinkLike<T>, next: T): void;
}

export interface SourceLike extends ContainerLike {
  readonly sinkType: DisposableLike & ContainerLike & SinkLike<unknown>;
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

export function notifyDecodeWithCharset(
  this: SinkLike<ArrayBuffer> & {
    readonly delegate: SinkLike<string>;
    readonly textDecoder: TextDecoder;
  },
  next: ArrayBuffer,
) {
  const data = this.textDecoder.decode(next, { stream: true });
  if (data.length > 0) {
    this.delegate.notify(data);
  }
}

export function notifyDistinctUntilChanged<T>(
  this: SinkLike<T> & {
    readonly delegate: SinkLike<T>;
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
}

export function notifyKeep<T>(
  this: SinkLike<T> & {
    readonly delegate: SinkLike<T>;
    readonly predicate: Predicate<T>;
  },
  next: T,
) {
  this.assertState();
  if (this.predicate(next)) {
    this.delegate.notify(next);
  }
}

export function notifyMap<TA, TB>(
  this: SinkLike<TA> & {
    readonly delegate: SinkLike<TB>;
    readonly mapper: Function1<TA, TB>;
  },
  next: TA,
) {
  this.assertState();
  const mapped = this.mapper(next);
  this.delegate.notify(mapped);
}

export function notifyOnNotify<T>(
  this: SinkLike<T> & {
    readonly delegate: SinkLike<T>;
    readonly onNotify: SideEffect1<T>;
  },
  next: T,
) {
  this.assertState();

  this.onNotify(next);
  this.delegate.notify(next);
}

export function notifyPairwise<T>(
  this: SinkLike<T> & {
    readonly delegate: SinkLike<[Option<T>, T]>;
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
}

export function notifyReduce<T, TAcc>(
  this: SinkLike<T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
  },
  next: T,
) {
  this.assertState();

  this.acc = this.reducer(this.acc, next);
}

export function notifyScan<T, TAcc>(
  this: SinkLike<T> & {
    readonly delegate: SinkLike<TAcc>;
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
  },
  next: T,
) {
  this.assertState();
  const nextAcc = this.reducer(this.acc, next);
  this.acc = nextAcc;

  this.delegate.notify(nextAcc);
}

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
      readonly delegate: SinkLike<T>;
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
    readonly delegate: SinkLike<T>;
    count: number;
    readonly maxCount: number;
  },
): (<T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>) => {
  TakeFirstSink.prototype.notify = function notifyTakeFirst<T>(
    this: SinkLike<T> & {
      readonly delegate: SinkLike<T>;
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
    readonly delegate: SinkLike<T>;
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
  },
): (<T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => ContainerOperator<C, T, T>) => {
  TakeWhileSink.prototype.notify = function notifyTakeWhile<T>(
    this: SinkOf<C, T> & {
      readonly delegate: SinkLike<T>;
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
