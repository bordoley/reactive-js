import { DisposableLike, CompositeDisposable } from "@rx-min/rx-disposables";
import { ObservableLike, SubscriberLike } from "@rx-min/rx-core";
import { EventSource, Subject } from "@rx-min/rx-imperative";

export interface DataSource<RequestData, T> {
  request(data: RequestData): ObservableLike<T>;
}

export interface AsyncIteratorLike<RequestData, T> extends ObservableLike<T>, DisposableLike {
  request(data: RequestData): void;
}

class AsyncIteratorImpl<RequestData, T> implements ObservableLike<T>, DisposableLike {
  //private readonly observable: ObservableLike<T>;
  private readonly disposable = CompositeDisposable.create();

  constructor() {
    const event = EventSource.create();
    const subject = Subject.create();
  }

  get isDisposed(): boolean { 
    return this.disposable.isDisposed 
  }

  dispose() {
    this.disposable.dispose();
  }

  subscribe(subscriber: SubscriberLike<T>) {
    //this.observable.subscribe(subscriber);
  }
}