import {
  connect,
  Observable,
  DelegatingSubscriber,
  ObservableLike,
  Operator,
  SubscriberLike,
  observe,
} from "@reactive-js/rx-core";
import { Disposable } from "@reactive-js/disposables";

class MergeSubscriber<T> extends DelegatingSubscriber<ObservableLike<T>, T> {
  private readonly maxBufferSize: number;
  private readonly maxConcurrency: number;
  private readonly queue: Array<ObservableLike<T>> = [];
  private activeCount: number = 0;
  private isCompleted = false;

  constructor(
    delegate: SubscriberLike<T>,
    maxBufferSize: number,
    maxConcurrency: number,
  ) {
    super(delegate);
    this.maxBufferSize = maxBufferSize;
    this.maxConcurrency = maxConcurrency;

    this.add(
      Disposable.create(() => {
        this.queue.length = 0;
      }),
    );
  }

  private connectNext() {
    if (this.activeCount < this.maxConcurrency) {
      const nextObs = this.queue.shift();

      if (nextObs !== undefined) {
        this.activeCount++;

        const nextObsSubscription = connect(
          Observable.lift(
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

  protected onNext(next: ObservableLike<T>) {
    if (
      this.queue.length + this.activeCount < this.maxBufferSize &&
      !this.isCompleted
    ) {
      this.queue.push(next);
      this.connectNext();
    }
  }

  protected onComplete(error?: Error) {
    this.isCompleted = true;

    if (error !== undefined || this.queue.length + this.activeCount === 0) {
      this.delegate.complete(error);
    }
  }
}

export const merge = <T>(
  options: {
    maxBufferSize?: number;
    maxConcurrency?: number;
  } = {},
): Operator<ObservableLike<T>, T> => {
  const {
    maxBufferSize = Number.MAX_SAFE_INTEGER,
    maxConcurrency = Number.MAX_SAFE_INTEGER,
  } = options;
  return subscriber =>
    new MergeSubscriber(subscriber, maxBufferSize, maxConcurrency);
};

export const concat = <T>(): Operator<ObservableLike<T>, T> =>
  merge({ maxConcurrency: 1 });

export const exhaust = <T>(): Operator<ObservableLike<T>, T> =>
  merge({ maxBufferSize: 1, maxConcurrency: 1 });
