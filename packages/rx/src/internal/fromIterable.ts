import { empty } from "./empty";
import {
  ObservableLike,
  SubscriberLike,
  MulticastObservableResourceLike,
} from "./interfaces";
import { pipe } from "@reactive-js/pipe";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import {
  EnumerableLike,
  EnumeratorLike,
  AbstractEnumerator,
} from "./enumerable";
import { publish } from "./publish";
import { using } from "./using";
import {
  createDisposable,
  DisposableOrTeardown,
  DisposableLike,
} from "@reactive-js/disposable";
import { producerMixin } from "./producer";

class FromIteratorWithDelayObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private subscriber: SubscriberLike<T> | undefined;
  private count = 0;

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };

  constructor(
    private readonly iterator: Iterator<T>,
    private readonly delay: number,
    private readonly maxCount: number,
    private readonly doneError?: unknown,
  ) {}

  private emitDelayedValue() {
    const subscriber = this.subscriber as SubscriberLike<T>;
    const doneError = this.doneError;

    if (this.count >= this.maxCount || subscriber.isDisposed) {
      return;
    }

    const next = this.iterator.next();
    const done = next.done;
    if (done && doneError !== undefined) {
      throw doneError;
    } else if (done) {
      return;
    }

    subscriber.next(next.value);
    this.count++;
    return this.continuationResult;
  }

  run(_?: () => boolean) {
    let error = undefined;
    try {
      const result = this.emitDelayedValue();

      if (result !== undefined) {
        return result;
      }
    } catch (cause) {
      error = { cause };
    }

    (this.subscriber as SubscriberLike<T>).complete(error);
    return;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this, this.delay);
  }
}

class FromIteratorObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private subscriber: SubscriberLike<T> | undefined;
  private count = 0;

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
  };

  constructor(
    private readonly iterator: Iterator<T>,
    private readonly maxCount: number,
    private readonly doneError?: unknown,
  ) {}

  loop(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const iterator = this.iterator;
    const subscriber = this.subscriber as SubscriberLike<T>;
    const maxCount = this.maxCount;
    const doneError = this.doneError;

    let count = this.count;

    if (shouldYield !== undefined) {
      while (count < maxCount && !subscriber.isDisposed) {
        const next = iterator.next();
        if (!next.done) {
          subscriber.next(next.value);
          count++;
        } else if (doneError !== undefined) {
          throw doneError;
        } else {
          break;
        }

        if (shouldYield()) {
          this.count = count;
          return this.continuationResult;
        }
      }
    } else {
      while (count < maxCount && !subscriber.isDisposed) {
        const next = iterator.next();
        if (!next.done) {
          subscriber.next(next.value);
          count++;
        } else if (doneError !== undefined) {
          throw doneError;
        } else {
          break;
        }
      }
    }

    return;
  }

  run = producerMixin.run;

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this);
  }
}

export const fromIterator = <T>(
  iterator: Iterator<T>,
  scheduler: SchedulerLike,
  config: {
    delay?: number;
    count?: number;
    doneError?: unknown;
  } = {},
): MulticastObservableResourceLike<T> => {
  const delay = Math.max(config.delay ?? 0, 0);
  const maxCount = Math.min(
    Math.max(config.count ?? Number.MAX_SAFE_INTEGER, 0),
    Number.MAX_SAFE_INTEGER,
  );

  return pipe(
    maxCount === 0
      ? empty()
      : delay > 0
      ? new FromIteratorWithDelayObservable(
          iterator,
          delay,
          maxCount,
          config.doneError,
        )
      : new FromIteratorObservable(iterator, maxCount, config.doneError),
    publish(scheduler),
  );
};

class FromIterableEnumerator<T> extends AbstractEnumerator<T> {
  hasCurrent = false;
  current: any;

  constructor(private readonly iterator: Iterator<T>) {
    super();
  }

  moveNext(): boolean {
    const next = this.iterator.next();
    if (next.done) {
      this.hasCurrent = false;
      this.current = undefined;
      this.dispose();
      return false;
    } else {
      this.current = next.value;
      this.hasCurrent = true;
      return true;
    }
  }
}

class FromIterableObservable<T>
  implements ObservableLike<T>, EnumerableLike<T> {
  constructor(private readonly iterable: Iterable<T>) {}

  getEnumerator(): EnumeratorLike<T> {
    return new FromIterableEnumerator(this.iterable[Symbol.iterator]());
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const iterator = this.iterable[Symbol.iterator]();
    subscriber.add(() => {
      if (iterator.return !== undefined) {
        iterator.return();
      }
    });

    const observable = new FromIteratorObservable(
      iterator,
      Number.MAX_SAFE_INTEGER,
    );
    observable.subscribe(subscriber);
  }
}

/** @ignore */
export class IteratorDisposable<T> implements DisposableLike {
  private readonly disposable = createDisposable();

  constructor(readonly iterator: Iterator<T>) {
    this.add(() => {
      const iterator = this.iterator;
      if (iterator.return !== undefined) {
        iterator.return();
      }
    });
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
    return this;
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
    return this;
  }
}

export const fromIterable = <T>(
  iterable: Iterable<T>,
  delay = 0,
): ObservableLike<T> =>
  delay > 0
    ? using(
        () => new IteratorDisposable(iterable[Symbol.iterator]()),
        enumerator =>
          new FromIteratorWithDelayObservable(
            enumerator.iterator,
            delay,
            Number.MAX_SAFE_INTEGER,
          ),
      )
    : new FromIterableObservable(iterable);
