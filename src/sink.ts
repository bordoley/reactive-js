import { ContainerLike, ContainerOf, empty, FromArray } from "./container";
import {
  addDisposable,
  addOnDisposedWithError,
  addTeardown,
  DisposableLike,
  dispose,
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
  readonly sinkType: DisposableLike & ContainerLike;
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

export interface SourceContainer<C extends SourceLike> {
  readonly type?: C;
}

export interface Sink<C extends SourceLike> extends SourceContainer<C> {
  sink<T>(sink: C["sinkType"]): SideEffect1<ContainerOf<C, T>>;
}

export interface Lift<C extends SourceLike> extends SourceContainer<C> {
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

export function notifySkipFirst<T>(
  this: SinkLike<T> & {
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
}

export function notifyTakeFirst<T>(
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
}

export const createTakeLastOperator = <C extends SourceLike>(
  m: FromArray<C> & Sink<C> & Lift<C>,
  constructor: new <T>(delegate: SinkOf<C, T>, count: number) => SinkOf<
    C,
    T
  > & {
    readonly last: T[];
  },
) => {
  constructor.prototype.notify = function notifyTakeLast<T>(
    this: SinkLike<T> & {
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
  ): Function1<ContainerOf<C, T>, ContainerOf<C, T>> => {
    const { count = 1 } = options;
    const operator = (delegate: SinkOf<C, T>) => {
      const sink = new constructor(delegate, count);
      addDisposable(delegate, sink);
      addOnDisposedWithError(sink, delegate);
      addTeardown(sink, () => {
        pipe(sink.last, m.fromArray(), m.sink(delegate));
      });

      return sink;
    };

    return runnable =>
      count > 0 ? pipe(runnable, m.lift(operator)) : empty(m);
  };
};

export function notifyTakeWhile<T>(
  this: SinkLike<T> & {
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
}
