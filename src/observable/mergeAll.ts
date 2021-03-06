import {
  Error,
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  addTeardown,
  dispose,
} from "../disposable";
import { Function1, compose, pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { Option, isSome } from "../option";
import { lift } from "./lift";
import { map } from "./map";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";
import { subscribe } from "./subscribe";

const subscribeNext = <T>(observer: MergeObserver<T>) => {
  if (observer.activeCount < observer.maxConcurrency) {
    const nextObs = observer.queue.shift();

    if (isSome(nextObs)) {
      observer.activeCount++;

      const nextObsSubscription = pipe(
        nextObs,
        subscribe(observer.delegate, observer.onNotify),
      );
      addOnDisposedWithoutErrorTeardown(
        nextObsSubscription,
        observer.onDispose,
      );
      addDisposableDisposeParentOnChildError(
        observer.delegate,
        nextObsSubscription,
      );
    } else if (observer.isDisposed) {
      pipe(observer.delegate, dispose());
    }
  }
};

function onDispose(this: MergeObserver<unknown>, error: Option<Error>) {
  if (isSome(error) || this.queue.length + this.activeCount === 0) {
    pipe(this.delegate, dispose(error));
  }
}

class MergeObserver<T> extends AbstractDelegatingObserver<
  ObservableLike<T>,
  T
> {
  activeCount = 0;

  readonly onDispose = () => {
    this.activeCount--;
    subscribeNext(this);
  };

  readonly onNotify = (next: T) => {
    this.delegate.notify(next);
  };

  readonly queue: ObservableLike<T>[] = [];

  constructor(
    delegate: ObserverLike<T>,
    readonly maxBufferSize: number,
    readonly maxConcurrency: number,
  ) {
    super(delegate);
    addTeardown(this, onDispose);
    addTeardown(delegate, () => {
      this.queue.length = 0;
    });
  }

  notify(next: ObservableLike<T>) {
    assertObserverState(this);

    const queue = this.queue;

    queue.push(next);

    // Drop old events if the maxBufferSize has been exceeded
    if (queue.length + this.activeCount > this.maxBufferSize) {
      queue.shift();
    }
    subscribeNext(this);
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
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  } = {},
): ObservableOperator<ObservableLike<T>, T> => {
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
  mapper: Function1<TA, ObservableLike<TB>>,
  options: {
    maxBufferSize?: number;
    maxConcurrency?: number;
  } = {},
): ObservableOperator<TA, TB> => compose(map(mapper), mergeAll(options));

/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
export const concatAll = <T>(
  options: { readonly maxBufferSize?: number } = {},
): ObservableOperator<ObservableLike<T>, T> => {
  const { maxBufferSize = Number.MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const concatMap = <TA, TB>(
  mapper: Function1<TA, ObservableLike<TB>>,
  options?: { readonly maxBufferSize?: number },
): ObservableOperator<TA, TB> => compose(map(mapper), concatAll(options));

const _exhaust = mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });

/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
export const exhaust = <T>(): ObservableOperator<ObservableLike<T>, T> =>
  _exhaust as ObservableOperator<ObservableLike<T>, T>;

export const exhaustMap = <TA, TB>(
  mapper: Function1<TA, ObservableLike<TB>>,
): ObservableOperator<TA, TB> => compose(map(mapper), exhaust());
