import {
  ErrorLike,
  ObservableLike,
  SubscriberLike,
} from "@reactive-js/rx-core";
import { connect } from "./connect";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift, SubscriberOperator } from "./lift";
import { observe } from "./observe";
import { ObservableOperator, pipe } from "./pipe";

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

  protected onComplete(error?: ErrorLike) {
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
          pipe(
            nextObs,
            observe({
              next: (data: T) => {
                this.delegate.next(data);
              },
              complete: (error?: ErrorLike) => {
                this.activeCount--;
                this.remove(nextObsSubscription);

                if (error !== undefined) {
                  this.isCompleted = true;
                  this.delegate.complete(error);
                } else {
                  this.connectNext();
                }
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

const operator = <T>(
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

export const mergeAll = <T>(options?: {
  maxBufferSize?: number;
  maxConcurrency?: number;
}): ObservableOperator<ObservableLike<T>, T> => lift(operator(options));

export const concatAll = <T>(
  maxBufferSize = Number.MAX_SAFE_INTEGER,
): ObservableOperator<ObservableLike<T>, T> =>
  mergeAll({ maxBufferSize, maxConcurrency: 1 });

export const exhaust = <T>(): ObservableOperator<ObservableLike<T>, T> =>
  mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });
