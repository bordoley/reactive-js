import { ConcatAll } from "../container";
import {
  addToParentAndDisposeOnError,
  dispose,
  onComplete,
  onDisposed,
} from "../disposable";
import { pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { isSome } from "../option";
import { lift } from "./lift";
import { Observer } from "./observer";
import { subscribe } from "./subscribe";

const subscribeNext = <T>(observer: MergeObserver<T>) => {
  if (observer.activeCount < observer.maxConcurrency) {
    const nextObs = observer.queue.shift();

    if (isSome(nextObs)) {
      observer.activeCount++;

      pipe(
        nextObs,
        subscribe(observer.scheduler, observer.onNotify),
        addToParentAndDisposeOnError(observer.delegate),
        onComplete(observer.onDispose),
      );
    } else if (observer.isDisposed) {
      pipe(observer.delegate, dispose());
    }
  }
};

class MergeObserver<T> extends Observer<ObservableLike<T>> {
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
    readonly delegate: Observer<T>,
    readonly maxBufferSize: number,
    readonly maxConcurrency: number,
  ) {
    super(delegate.scheduler);
  }

  notify(next: ObservableLike<T>) {
    this.assertState();

    const { queue } = this;

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
  const operator = (delegate: Observer<T>) => {
    const observer = pipe(
      delegate,
      onDisposed(_ => {
        observer.queue.length = 0;
      }),
      delegate => new MergeObserver(delegate, maxBufferSize, maxConcurrency),
      addToParentAndDisposeOnError(delegate),
      onComplete(() => {
        if (observer.queue.length + observer.activeCount === 0) {
          pipe(observer.delegate, dispose());
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
  const { maxBufferSize = Number.MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const concatAllT: ConcatAll<
  ObservableLike<unknown>,
  { readonly maxBufferSize: number }
> = {
  concatAll,
};

const _exhaust = mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });

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
