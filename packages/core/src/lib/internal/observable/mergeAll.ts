import {
  add,
  Exception,
  dispose,
  addDisposableOrTeardown,
} from "../../disposable";
import { compose, pipe, Function } from "../../functions";
import { isSome } from "../../option";
import { ObservableLike, ObservableFunction, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { map } from "./map";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";
import {
  AbstractDelegatingObserver,
  assertObserverNotifyInContinuation,
} from "./observer";

const subscribeNext = <T>(observer: MergeObserver<T>) => {
  if (observer.activeCount < observer.maxConcurrency) {
    const nextObs = observer.queue.shift();

    if (isSome(nextObs)) {
      observer.activeCount++;

      const nextObsSubscription = pipe(
        nextObs,
        onNotify(observer.onNotify),
        subscribe(observer.delegate),
        addDisposableOrTeardown(observer.onDispose),
      );

      add(observer.delegate, nextObsSubscription);
    } else if (observer.isDisposed) {
      dispose(observer.delegate);
    }
  }
};

class MergeObserver<T> extends AbstractDelegatingObserver<
  ObservableLike<T>,
  T
> {
  activeCount = 0;

  readonly onDispose = (error?: Exception) => {
    this.activeCount--;

    if (isSome(error)) {
      dispose(this.delegate, error);
    } else {
      subscribeNext(this);
    }
  };

  readonly onNotify = (next: T) => {
    this.delegate.notify(next);
  };

  readonly queue: Array<ObservableLike<T>> = [];

  constructor(
    delegate: ObserverLike<T>,
    readonly maxBufferSize: number,
    readonly maxConcurrency: number,
  ) {
    super(delegate);

    const queue = this.queue;

    add(this, error => {
      if (isSome(error) || queue.length + this.activeCount === 0) {
        dispose(delegate, error);
      }
    });

    add(delegate, () => {
      queue.length = 0;
    });
  }

  notify(next: ObservableLike<T>) {
    assertObserverNotifyInContinuation(this);

    const queue = this.queue;
    if (!this.isDisposed) {
      queue.push(next);

      // Drop old events if the maxBufferSize has been exceeded
      if (queue.length + this.activeCount > this.maxBufferSize) {
        queue.shift();
      }
      subscribeNext(this);
    }
  }
}

/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * which concurrently delivers values emitted by the inner sources.
 *
 * @param options Optional configuration object. The `maxBufferSize` property specifies
 * how many source observables may be queued before dropping previous observables. The `maxConcurrency`
 * property specifies the maximum number of inner observables that may be subscribed to concurrently.
 */
export const mergeAll = <T>(
  options: {
    maxBufferSize?: number;
    maxConcurrency?: number;
  } = {},
): ObservableFunction<ObservableLike<T>, T> => {
  const {
    maxBufferSize = Number.MAX_SAFE_INTEGER,
    maxConcurrency = Number.MAX_SAFE_INTEGER,
  } = options;
  const operator = (observer: ObserverLike<T>) =>
    new MergeObserver(observer, maxBufferSize, maxConcurrency);
  operator.isSynchronous = false;
  return lift(operator);
};

export const mergeMap = <TA, TB>(
  mapper: Function<TA, ObservableLike<TB>>,
  options: {
    maxBufferSize?: number;
    maxConcurrency?: number;
  } = {},
) => compose(map(mapper), mergeAll(options));

/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
export const concatAll = <T>(
  maxBufferSize = Number.MAX_SAFE_INTEGER,
): ObservableFunction<ObservableLike<T>, T> =>
  mergeAll({ maxBufferSize, maxConcurrency: 1 });

export const concatMap = <TA, TB>(
  mapper: Function<TA, ObservableLike<TB>>,
  maxBufferSize?: number,
) => compose(map(mapper), concatAll(maxBufferSize));

const exhaustInstance = mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });

/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
export const exhaust = <T>() =>
  exhaustInstance as ObservableFunction<ObservableLike<T>, T>;

export const exhaustMap = <TA, TB>(mapper: Function<TA, ObservableLike<TB>>) =>
  compose(map(mapper), exhaust());
