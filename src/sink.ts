import {
  AbstractDisposable,
  DisposableLike,
  addDisposable,
  bindDisposables,
  dispose,
} from "./disposable";
import { __DEV__ } from "./env";
import {
  Equality,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  ignore,
  pipe,
  raise,
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

export interface DelegatingSinkLike<TA, TB> extends SinkLike<TA> {
  readonly delegate: SinkLike<TB>;
}

export type SinkOperator<TA, TB> = Function1<SinkLike<TB>, SinkLike<TA>>;

const assertStateProduction = ignore;
const assertStateDev = function <T>(this: SinkLike<T>) {
  if (this.isDisposed) {
    raise("Sink is disposed");
  }
};

const assertState = __DEV__ ? assertStateDev : assertStateProduction;

export abstract class AbstractSink<T>
  extends AbstractDisposable
  implements SinkLike<T>
{
  assertState(this: SinkLike<T>): void {}

  notify(_: T): void {}
}
AbstractSink.prototype.assertState = assertState;

export abstract class AbstractDelegatingSink<TA, TB> extends AbstractSink<TA> {
  constructor(readonly delegate: SinkLike<TB>) {
    super();
    addDisposable(delegate, this);
  }
}

export abstract class AbstractAutoDisposingDelegatingSink<
  TA,
  TB,
> extends AbstractSink<TA> {
  constructor(readonly delegate: SinkLike<TB>) {
    super();
    bindDisposables(this, delegate);
  }
}

class DelegatingSink<T> extends AbstractSink<T> {
  constructor(readonly delegate: SinkLike<T>) {
    super();
    addDisposable(delegate, this);
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

export const createDelegatingSink = <T>(delegate: SinkLike<T>): SinkLike<T> =>
  new DelegatingSink(delegate);

export function notifyDistinctUntilChanged<T>(
  this: DelegatingSinkLike<T, T> & {
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
  this: DelegatingSinkLike<T, T> & {
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
  this: DelegatingSinkLike<TA, TB> & {
    readonly mapper: Function1<TA, TB>;
  },
  next: TA,
) {
  this.assertState();
  const mapped = this.mapper(next);
  this.delegate.notify(mapped);
}

export function notifyOnNotify<T>(
  this: DelegatingSinkLike<T, T> & {
    readonly onNotify: SideEffect1<T>;
  },
  next: T,
) {
  this.assertState();

  this.onNotify(next);
  this.delegate.notify(next);
}

export function notifyPairwise<T>(
  this: DelegatingSinkLike<T, [Option<T>, T]> & {
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
  this: DelegatingSinkLike<T, TAcc> & {
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
  this: DelegatingSinkLike<T, T> & {
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
  this: DelegatingSinkLike<T, T> & {
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
  this: DelegatingSinkLike<T, T> & {
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
