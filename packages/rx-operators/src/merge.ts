import {
  connect,
  Observable,
  DelegatingSubscriber,
  ObservableLike,
  Operator,
  SubscriberLike,
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

    this.subscription.add(
      Disposable.create(() => {
        this.queue.length = 0;
      }),
    );
  }

  static InnerSubscriber = class<T> extends DelegatingSubscriber<T, T> {
    private readonly parent: MergeSubscriber<T>;

    constructor(delegate: SubscriberLike<T>, parent: MergeSubscriber<T>) {
      super(delegate);
      this.parent = parent;
    }

    protected onNext(data: T) {
      this.parent.delegate.next(data);
    }

    protected onComplete(error: Error | void) {
      this.parent.activeCount--;
      this.parent.subscription.remove(this.subscription);

      if (error !== undefined) {
        this.parent.complete(error);
      } else {
        this.parent.connectNext();
      }
    }
  };

  private static innerOperator = <T>(
    parent: MergeSubscriber<T>,
  ): Operator<T, T> => subscriber =>
    new MergeSubscriber.InnerSubscriber(subscriber, parent);

  private connectNext() {
    if (this.activeCount < this.maxConcurrency) {
      const nextObs = this.queue.shift();

      if (nextObs !== undefined) {
        this.activeCount++;
        this.subscription.add(
          connect(
            Observable.lift(nextObs, MergeSubscriber.innerOperator(this)),
            this.scheduler,
          ),
        );
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

  protected onComplete(error: Error | void) {
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
