import { DisposableLike, dispose } from "./disposable";
import {
  Equality,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  pipe,
} from "./functions";
import { Option, none } from "./option";

export interface SinkLike<T> extends DisposableLike {
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

export function notifyTakeLast<T>(
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
}

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
