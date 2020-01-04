import { pipe } from "@reactive-js/pipe";
import {
  ErrorLike,
  ObservableLike,
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftObservable } from "./lift";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { DelegatingSubscriber } from "./subscriber";

class MergeSubscriber<T> extends DelegatingSubscriber<ObservableLike<T>, T> {
  private activeCount = 0;
  private readonly queue: Array<ObservableLike<T>> = [];

  constructor(
    delegate: SubscriberLike<T>,
    private readonly maxBufferSize: number,
    private readonly maxConcurrency: number,
  ) {
    super(delegate);

    this.delegate.add(() => {
      this.queue.length = 0;
    });
  }

  dispose(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.disposable.dispose(error);
      if (error !== undefined || this.queue.length + this.activeCount === 0) {
        this.delegate.dispose(error);
      }
    }
  }

  next(next: ObservableLike<T>) {
    const queue = this.queue;
    if (
      !this.isDisposed &&
      queue.length + this.activeCount < this.maxBufferSize
    ) {
      queue.push(next);
      this.subscribeNext();
    }
  }

  onNext(data: T) {
    this.delegate.next(data);
  }

  onComplete(error?: ErrorLike) {
    this.activeCount--;

    if (error !== undefined) {
      this.delegate.dispose(error);
    } else {
      this.subscribeNext();
    }
  }

  private subscribeNext() {
    if (this.activeCount < this.maxConcurrency) {
      const nextObs = this.queue.shift();

      if (nextObs !== undefined) {
        this.activeCount++;

        const nextObsSubscription = pipe(
          nextObs,
          observe(this),
          subscribe(this.delegate),
        );

        this.delegate.add(nextObsSubscription);
      } else if (this.isDisposed) {
        this.delegate.dispose();
      }
    }
  }
}

const operator = <T>(
  options: {
    maxBufferSize?: number;
    maxConcurrency?: number;
  } = {},
): SubscriberOperatorLike<ObservableLike<T>, T> => {
  const {
    maxBufferSize = Number.MAX_SAFE_INTEGER,
    maxConcurrency = Number.MAX_SAFE_INTEGER,
  } = options;
  return subscriber =>
    new MergeSubscriber(subscriber, maxBufferSize, maxConcurrency);
};

export const mergeAll = <T>(options?: {
  maxBufferSize?: number;
  maxConcurrency?: number;
}): ObservableOperatorLike<ObservableLike<T>, T> =>
  liftObservable(operator(options));

export const concatAll = <T>(
  maxBufferSize = Number.MAX_SAFE_INTEGER,
): ObservableOperatorLike<ObservableLike<T>, T> =>
  mergeAll({ maxBufferSize, maxConcurrency: 1 });

export const exhaust = <T>(): ObservableOperatorLike<ObservableLike<T>, T> =>
  mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });
