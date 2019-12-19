import {
  subscribe,
  ErrorLike,
  ObservableLike,
  SubscriberLike,
  AbstractDelegatingSubscriber,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { createDisposable } from "@reactive-js/disposable";

class MergeSubscriber<T> extends AbstractDelegatingSubscriber<
  ObservableLike<T>,
  T
> {
  private activeCount = 0;
  private readonly maxBufferSize: number;
  private readonly maxConcurrency: number;
  private readonly queue: Array<ObservableLike<T>> = [];

  private readonly subscriptions = createDisposable().add(() => {
    this.queue.length = 0;
  });

  constructor(
    delegate: SubscriberLike<T>,
    maxBufferSize: number,
    maxConcurrency: number,
  ) {
    super(delegate);
    this.maxBufferSize = maxBufferSize;
    this.maxConcurrency = maxConcurrency;

    this.add(this.subscriptions);
  }

  completeUnsafe(error?: ErrorLike) {
    if (error !== undefined || this.queue.length + this.activeCount === 0) {
      this.subscriptions.dispose();
      this.delegate.complete(error);
    }
  }

  nextUnsafe(next: ObservableLike<T>) {
    if (
      this.queue.length + this.activeCount < this.maxBufferSize &&
      !this.isCompleted
    ) {
      this.queue.push(next);
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
          observe({
            onNext: (data: T) => {
              this.delegate.next(data);
            },
            onComplete: (error?: ErrorLike) => {
              this.activeCount--;
              this.subscriptions.remove(nextObsSubscription);

              if (error !== undefined) {
                if (!this.isCompleted) {
                  this.complete(error);
                } else {
                  this.completeUnsafe(error);
                }
              } else {
                this.subscribeNext();
              }
            },
          }),
          subscribe(this),
        );

        this.subscriptions.add(nextObsSubscription);
      } else if (this.isCompleted) {
        this.delegate.complete();
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
}): ObservableOperatorLike<ObservableLike<T>, T> => lift(operator(options));

export const concatAll = <T>(
  maxBufferSize = Number.MAX_SAFE_INTEGER,
): ObservableOperatorLike<ObservableLike<T>, T> =>
  mergeAll({ maxBufferSize, maxConcurrency: 1 });

export const exhaust = <T>(): ObservableOperatorLike<ObservableLike<T>, T> =>
  mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });
