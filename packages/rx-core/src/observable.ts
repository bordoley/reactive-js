import { CompositeDisposable, DisposableLike } from "@rx-min/rx-disposables";

import { MonoTypeDelegatingSubscriber, SubscriberLike } from "./subscriber";
import { Notification, Notifications, ObserverLike } from "./observer";
import { SchedulerLike } from "./scheduler";

export interface ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>): void;
}

class AutoDisposingSubscriber<T> implements SubscriberLike<T> {
  private readonly disposable = CompositeDisposable.create();
  public readonly scheduler: SchedulerLike;
  public isConnected = false;

  constructor(scheduler: SchedulerLike) {
    this.scheduler = scheduler;
  }

  add(disposable: DisposableLike) {
    this.disposable.add(disposable);
    return this;
  }

  remove(disposable: DisposableLike) {
    this.disposable.remove(disposable);
    return this;
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  dispose() {
    this.disposable.dispose();
  }

  notify(notification: Notification, data: T | Error | undefined) {
    if (!this.isConnected) {
      throw new Error("Attempted to notify subscriber before it is connected");
    } else if (!this.isDisposed) {
      switch (notification) {
        case Notifications.next:
          break;
        case Notifications.complete:
          this.dispose();
          break;
      }
    }
  }
}

const connect = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike
): DisposableLike => {
  const subscriber = new AutoDisposingSubscriber(scheduler);
  observable.subscribe(subscriber);
  subscriber.isConnected = true;
  return subscriber;
};

export interface Operator<A, B> {
  (subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

class LiftedObservable<TSrc, T> implements ObservableLike<T> {
  source: ObservableLike<TSrc>;
  operators: ReadonlyArray<Operator<any, any>>;

  constructor(
    source: ObservableLike<TSrc>,
    operators: ReadonlyArray<Operator<any, any>>
  ) {
    this.source = source;
    this.operators = operators;
  }

  private liftSubscriber(subscriber: SubscriberLike<any>) {
    return this.operators.reduce((acc, next) => next(acc), subscriber);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const liftedSubscrber = this.liftSubscriber(subscriber);
    this.source.subscribe(liftedSubscrber);
  }
}

function lift<T, A>(
  src: ObservableLike<T>,
  op1: Operator<T, A>
): ObservableLike<A>;
function lift<T, A, B>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>
): ObservableLike<B>;
function lift<T, A, B, C>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>
): ObservableLike<C>;
function lift<T, A, B, C, D>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>
): ObservableLike<D>;
function lift<T, A, B, C, D, E>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>
): ObservableLike<E>;
function lift<T, A, B, C, D, E, F>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>
): ObservableLike<F>;
function lift<T, A, B, C, D, E, F, G>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>
): ObservableLike<G>;
function lift<T, A, B, C, D, E, F, G, H>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>
): ObservableLike<H>;
function lift<T, A, B, C, D, E, F, G, H, I>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
  op9: Operator<H, I>
): ObservableLike<I>;
function lift(
  source: ObservableLike<any>,
  operator: Operator<any, any>,
  ...operators: Array<Operator<any, any>>
): ObservableLike<any> {
  const sourceSource =
    source instanceof LiftedObservable ? source.source : source;

  const allOperators =
    source instanceof LiftedObservable
      ? [...source.operators, operator, ...operators]
      : [operator, ...operators];

  return new LiftedObservable(sourceSource, allOperators);
}

class ObserveSubscriber<T> extends MonoTypeDelegatingSubscriber<T> {
  private observer: ObserverLike<T>;

  constructor(delegate: SubscriberLike<T>, observer: ObserverLike<T>) {
    super(delegate);
    this.observer = observer;
  }

  protected onNext(data: T) {
    this.observer.notify(Notifications.next, data);
    this.delegate.notify(Notifications.next, data);
  }

  protected onComplete(error: Error | undefined) {
    this.observer.notify(Notifications.complete, error);
    this.delegate.notify(Notifications.complete, error);
  }
}

export const observe = <T>(observer: ObserverLike<T>): Operator<T, T> => (
  subscriber: SubscriberLike<T>
) => new ObserveSubscriber(subscriber, observer);

export const Observable = {
  connect,
  lift
};

export interface ObservableResourceLike<T>
  extends ObservableLike<T>,
    DisposableLike {}
