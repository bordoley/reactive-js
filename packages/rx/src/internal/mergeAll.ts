import { pipe } from "@reactive-js/pipe";
import {
  ObservableLike,
  ObservableOperatorLike,
  SubscriberLike,
} from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ErrorLike } from "@reactive-js/disposable";
import { SubscriberOperator } from "./subscriberOperator";

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
}

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

    this.add(error => {
      if (error !== undefined || this.queue.length + this.activeCount === 0) {
        this.delegate.dispose(error);
      }
    });

    this.delegate.add(() => {
      this.queue.length = 0;
    });
  }

  notify(next: ObservableLike<T>) {
    const queue = this.queue;
    if (
      !this.isDisposed &&
      queue.length + this.activeCount < this.maxBufferSize
    ) {
      queue.push(next);
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
  const call = (subscriber: SubscriberLike<T>) =>
    new MergeSubscriber(subscriber, maxBufferSize, maxConcurrency);

  return lift(new SubscriberOperator(false, call));
};
export const concatAll = <T>(
  maxBufferSize = Number.MAX_SAFE_INTEGER,
): ObservableOperatorLike<ObservableLike<T>, T> =>
  mergeAll({ maxBufferSize, maxConcurrency: 1 });

export const exhaust = <T>(): ObservableOperatorLike<ObservableLike<T>, T> =>
  mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });
