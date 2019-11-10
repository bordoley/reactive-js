import {
  MonoTypeDelegatingSubscriber,
  DelegatingSubscriber,
  Notifications,
  ObservableLike,
  OperatorLike,
  SubscriberLike,
  Observable
} from "@rx-min/rx-core";
import { Disposable } from "@rx-min/rx-disposables";

class MergeSubscriber<T> extends DelegatingSubscriber<ObservableLike<T>, T>  {
  private readonly maxBufferSize: number;
  private readonly maxConcurrency: number;
  private readonly queue: Array<ObservableLike<T>> = [];
  private activeCount: number = 0;

  constructor(
    delegate: SubscriberLike<T>,
    maxBufferSize: number,
    maxConcurrency: number,
  ) {
    super(delegate);
    this.maxBufferSize = maxBufferSize;
    this.maxConcurrency = maxConcurrency;

    delegate.add(
      Disposable.create(
        () => {
          this.queue.length = 0;
        }
      )
    )
  }

  static InnerSubscriber = class <T> extends MonoTypeDelegatingSubscriber<T> {
    private readonly parent: MergeSubscriber<T>;
  
    constructor(
      delegate: SubscriberLike<T>,
      parent: MergeSubscriber<T>,
    ) {
      super(delegate);
      this.parent = parent;
    }
  
    protected onNext(data: T) {
      this.delegate.notify(Notifications.next, data);
    }
  
    protected onComplete(error: Error | void) {
      this.parent.activeCount--;
      this.parent.remove(this);
  
      const nextObs = this.parent.queue.shift();
  
      if (error !== undefined) {
        this.parent.notify(Notifications.complete, error);
      } else if (nextObs !== undefined) {
        this.parent.connectNext(nextObs);
      }
    }
  }

  private innerOperator: OperatorLike<T, T> = (subscriber) => 
    new MergeSubscriber.InnerSubscriber(subscriber, this);

  private connectNext(next: ObservableLike<T>) {
    this.activeCount++;
    this.add(
      Observable.connect(
        Observable.lift(next, this.innerOperator)
      )
    );
  }

  protected onNext(next: ObservableLike<T>) {
    if (this.activeCount < this.maxConcurrency) {
      this.connectNext(next)
    } else if (this.queue.length < this.maxBufferSize) {
      this.queue.push(next);
    };
  }

  protected onComplete(error: Error | undefined) {
    if (error !== undefined || this.activeCount === 0) {
      this.delegate.notify(Notifications.complete, error);
    }
  }
}

export const merge = <T>({
  maxBufferSize = Number.MAX_SAFE_INTEGER,
  maxConcurrency = Number.MAX_SAFE_INTEGER,
}): OperatorLike<ObservableLike<T>, T> =>
  subscriber => new MergeSubscriber(subscriber, maxBufferSize, maxConcurrency);

export const concat = <T>(): OperatorLike<ObservableLike<T>, T> => 
  merge({ maxConcurrency:1 });

export const exhaust = <T>(): OperatorLike<ObservableLike<T>, T> => 
  merge({ maxBufferSize: 0, maxConcurrency:1 });