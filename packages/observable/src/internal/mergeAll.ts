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

class MergeSubscriber<T> extends AbstractDelegatingSubscriber<
  ObservableLike<T>,
  T
> {
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

  complete(error?: ErrorLike) {
    if (
      !this.isDisposed &&
      (error !== undefined || this.queue.length + this.activeCount === 0)
    ) {
      this.delegate.complete(error);
    } else {
      this.dispose();
    }
  }

  next(next: ObservableLike<T>) {
    if (
      !this.isDisposed &&
      this.queue.length + this.activeCount < this.maxBufferSize
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
              this.delegate.remove(nextObsSubscription);

              if (error !== undefined && !this.isDisposed) {
                debugger;
                this.complete(error);
              } else if (error !== undefined) {
                debugger;
                this.delegate.complete(error);
              } else {
                this.subscribeNext();
              }
            },
          }),
          subscribe(this.delegate),
        );

        this.delegate.add(nextObsSubscription);
      } else if (this.isDisposed) {
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
