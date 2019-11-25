import {
  DelegatingSubscriber,
  observe,
  SubscriberLike,
  SubscriberOperator,
} from "@reactive-js/rx-subscriber";

import { connect, lift, ObservableLike } from "@reactive-js/rx-observable";

class MergeSubscriber<T> extends DelegatingSubscriber<ObservableLike<T>, T> {
  private activeCount: number = 0;
  private isCompleted = false;
  private readonly maxBufferSize: number;
  private readonly maxConcurrency: number;
  private readonly queue: Array<ObservableLike<T>> = [];

  constructor(
    delegate: SubscriberLike<T>,
    maxBufferSize: number,
    maxConcurrency: number,
  ) {
    super(delegate);
    this.maxBufferSize = maxBufferSize;
    this.maxConcurrency = maxConcurrency;

    this.add(() => {
      this.queue.length = 0;
    });
  }

  protected onComplete(error?: Error) {
    this.isCompleted = true;

    if (error !== undefined || this.queue.length + this.activeCount === 0) {
      this.delegate.complete(error);
    }
  }

  protected onNext(next: ObservableLike<T>) {
    if (
      this.queue.length + this.activeCount < this.maxBufferSize &&
      !this.isCompleted
    ) {
      this.queue.push(next);
      this.connectNext();
    }
  }

  private connectNext() {
    if (this.activeCount < this.maxConcurrency) {
      const nextObs = this.queue.shift();

      if (nextObs !== undefined) {
        this.activeCount++;

        const nextObsSubscription = connect(
          lift(
            nextObs,
            observe({
              next: (data: T) => {
                this.delegate.next(data);
              },
              complete: (error?: Error) => {
                this.activeCount--;

                if (error !== undefined) {
                  this.complete(error);
                } else {
                  this.connectNext();
                }
                this.remove(nextObsSubscription);
              },
            }),
          ),
          this,
        );

        this.add(nextObsSubscription);
      } else if (this.isCompleted) {
        this.delegate.complete();
      }
    }
  }
}

export const merge = <T>(
  options: {
    maxBufferSize?: number;
    maxConcurrency?: number;
  } = {},
): SubscriberOperator<ObservableLike<T>, T> => {
  const {
    maxBufferSize = Number.MAX_SAFE_INTEGER,
    maxConcurrency = Number.MAX_SAFE_INTEGER,
  } = options;
  return subscriber =>
    new MergeSubscriber(subscriber, maxBufferSize, maxConcurrency);
};

export const concat = <T>(
  maxBufferSize = Number.MAX_SAFE_INTEGER,
): SubscriberOperator<ObservableLike<T>, T> =>
  merge({ maxBufferSize, maxConcurrency: 1 });

export const exhaust = <T>(): SubscriberOperator<ObservableLike<T>, T> =>
  merge({ maxBufferSize: 1, maxConcurrency: 1 });
