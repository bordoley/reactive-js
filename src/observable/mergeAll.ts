import { ConcatAll } from "../container";
import {
  addTo,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../disposable";
import { MAX_SAFE_INTEGER } from "../env";
import { length, newInstance, pipe } from "../functions";
import { getDelegate } from "../liftable";
import { ObservableLike, ObservableOperator } from "../observable";
import {
  AbstractDelegatingObserver,
  Observer,
  getScheduler,
} from "../observer";
import { isSome } from "../option";
import { assertState, notifySink } from "../source";
import { lift } from "./lift";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

const subscribeNext = <T>(observer: MergeObserver<T>) => {
  if (observer.activeCount < observer.maxConcurrency) {
    const nextObs = observer.queue.shift();

    if (isSome(nextObs)) {
      observer.activeCount++;

      pipe(
        nextObs,
        onNotify(notifySink(getDelegate(observer))),
        subscribe(getScheduler(observer)),
        addTo(getDelegate(observer)),
        onComplete(observer.onDispose),
      );
    } else if (isDisposed(observer)) {
      pipe(observer, getDelegate, dispose());
    }
  }
};

class MergeObserver<T> extends AbstractDelegatingObserver<
  ObservableLike<T>,
  T
> {
  activeCount = 0;

  readonly onDispose = () => {
    this.activeCount--;
    subscribeNext(this);
  };

  readonly queue: ObservableLike<T>[] = [];

  constructor(
    delegate: Observer<T>,
    readonly maxBufferSize: number,
    readonly maxConcurrency: number,
  ) {
    super(delegate);
  }

  notify(next: ObservableLike<T>) {
    assertState(this);

    const { queue } = this;

    queue.push(next);

    // Drop old events if the maxBufferSize has been exceeded
    if (length(queue) + this.activeCount > this.maxBufferSize) {
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
    maxBufferSize = MAX_SAFE_INTEGER,
    maxConcurrency = MAX_SAFE_INTEGER,
  } = options;
  const operator = (delegate: Observer<T>) => {
    const observer = pipe(
      delegate,
      onDisposed(_ => {
        observer.queue.length = 0;
      }),
      delegate =>
        newInstance(MergeObserver, delegate, maxBufferSize, maxConcurrency),
      addTo(delegate),
      onComplete(() => {
        if (length(observer.queue) + observer.activeCount === 0) {
          pipe(observer, getDelegate, dispose());
        }
      }),
    );

    return observer;
  };
  return lift(operator);
};

export const mergeAllT: ConcatAll<
  ObservableLike<unknown>,
  {
    readonly maxBufferSize: number;
    readonly maxConcurrency: number;
  }
> = {
  concatAll: mergeAll,
};

/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
export const concatAll = <T>(
  options: { readonly maxBufferSize?: number } = {},
): ObservableOperator<ObservableLike<T>, T> => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const concatAllT: ConcatAll<
  ObservableLike<unknown>,
  { readonly maxBufferSize: number }
> = {
  concatAll,
};

const _exhaust = /*@__PURE__*/ mergeAll({
  maxBufferSize: 1,
  maxConcurrency: 1,
});

/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
export const exhaust = <T>(): ObservableOperator<ObservableLike<T>, T> =>
  _exhaust as ObservableOperator<ObservableLike<T>, T>;

export const exhaustT: ConcatAll<
  ObservableLike<unknown>,
  Record<string, never>
> = {
  concatAll: exhaust,
};
