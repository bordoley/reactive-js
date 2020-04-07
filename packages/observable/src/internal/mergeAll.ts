import { compose, pipe } from "@reactive-js/pipe";
import {
  ObservableLike,
  ObservableOperatorLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { map } from "./map";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ErrorLike } from "@reactive-js/disposable";

const subscribeNext = <T>(subscriber: MergeSubscriber<T>) => {
  if (subscriber.activeCount < subscriber.maxConcurrency) {
    const nextObs = subscriber.queue.shift();

    if (nextObs !== undefined) {
      subscriber.activeCount++;

      const nextObsSubscription = pipe(
        nextObs,
        observe(subscriber),
        subscribe(subscriber.delegate),
      );

      subscriber.delegate.add(nextObsSubscription);
    } else if (subscriber.isDisposed) {
      subscriber.delegate.dispose();
    }
  }
};

class MergeSubscriber<T> extends AbstractDelegatingSubscriber<
  ObservableLike<T>,
  T
> {
  activeCount = 0;
  readonly queue: Array<ObservableLike<T>> = [];

  constructor(
    delegate: SubscriberLike<T>,
    readonly maxBufferSize: number,
    readonly maxConcurrency: number,
  ) {
    super(delegate);

    const queue = this.queue;

    this.add(error => {
      if (error !== undefined || queue.length + this.activeCount === 0) {
        delegate.dispose(error);
      }
    });

    delegate.add(() => {
      queue.length = 0;
    });
  }

  notify(next: ObservableLike<T>) {
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

  onNotify(next: T) {
    this.delegate.notify(next);
  }

  onDispose(error?: ErrorLike) {
    this.activeCount--;

    if (error !== undefined) {
      this.delegate.dispose(error);
    } else {
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
): ObservableOperatorLike<ObservableLike<T>, T> => {
  const {
    maxBufferSize = Number.MAX_SAFE_INTEGER,
    maxConcurrency = Number.MAX_SAFE_INTEGER,
  } = options;
  const operator = (subscriber: SubscriberLike<T>) =>
    new MergeSubscriber(subscriber, maxBufferSize, maxConcurrency);

  return lift(operator, false);
};

export const mergeMap = <TA, TB>(
  mapper: (a: TA) => ObservableLike<TB>,
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
): ObservableOperatorLike<ObservableLike<T>, T> =>
  mergeAll({ maxBufferSize, maxConcurrency: 1 });

export const concatMap = <TA, TB>(
  mapper: (a: TA) => ObservableLike<TB>,
  maxBufferSize?: number,
) => compose(map(mapper), concatAll(maxBufferSize));

const exhaustInstance = mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });

/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
export const exhaust = <T>() =>
  exhaustInstance as ObservableOperatorLike<ObservableLike<T>, T>;

export const exhaustMap = <TA, TB>(mapper: (a: TA) => ObservableLike<TB>) =>
  compose(map(mapper), exhaust());
