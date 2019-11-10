import {
  CompositeDisposable,
  DisposableLike,
} from "@rx-min/rx-disposables";

import { MonoTypeDelegatingSubscriber, SubscriberLike } from './subscriber';
import { Notification, Notifications, ObserverLike } from './observer';

export interface ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>): void;
}

class AutoDisposingSubscriber<T> implements SubscriberLike<T>  {
  public isConnected = false;
  private readonly disposable = CompositeDisposable.create();

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

const connect = <T>(observable: ObservableLike<T>): DisposableLike => {
  const subscriber = new AutoDisposingSubscriber();
  observable.subscribe(subscriber);
  subscriber.isConnected = true;
  return subscriber;
};

export interface OperatorLike<A, B> {
  (subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

class LiftedObservable<TSrc, T> implements ObservableLike<T> {
  source: ObservableLike<TSrc>;
  operator: OperatorLike<TSrc, T>;

  constructor(source: ObservableLike<TSrc>, operator: OperatorLike<TSrc, T>) {
    this.source = source;
    this.operator = operator;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const liftedSubscrber = this.operator(subscriber);
    this.source.subscribe(liftedSubscrber);
  }
}

function lift<T, A>(src: ObservableLike<T>, op1: OperatorLike<T, A>): ObservableLike<A>;
function lift<T, A, B>(src: ObservableLike<T>, op1: OperatorLike<T, A>, op2: OperatorLike<A, B>): ObservableLike<B>;
function lift<T, A, B, C>(src: ObservableLike<T>, op1: OperatorLike<T, A>, op2: OperatorLike<A, B>, op3: OperatorLike<B, C>): ObservableLike<C>;
function lift<T, A, B, C, D>(src: ObservableLike<T>, op1: OperatorLike<T, A>, op2: OperatorLike<A, B>, op3: OperatorLike<B, C>, op4: OperatorLike<C, D>): ObservableLike<D>;
function lift<T, A, B, C, D, E>(src: ObservableLike<T>, op1: OperatorLike<T, A>, op2: OperatorLike<A, B>, op3: OperatorLike<B, C>, op4: OperatorLike<C, D>, op5: OperatorLike<D, E>): ObservableLike<E>;
function lift<T, A, B, C, D, E, F>(src: ObservableLike<T>, op1: OperatorLike<T, A>, op2: OperatorLike<A, B>, op3: OperatorLike<B, C>, op4: OperatorLike<C, D>, op5: OperatorLike<D, E>, op6: OperatorLike<E, F>): ObservableLike<F>;
function lift<T, A, B, C, D, E, F, G>(src: ObservableLike<T>, op1: OperatorLike<T, A>, op2: OperatorLike<A, B>, op3: OperatorLike<B, C>, op4: OperatorLike<C, D>, op5: OperatorLike<D, E>, op6: OperatorLike<E, F>, op7: OperatorLike<F, G>): ObservableLike<G>;
function lift<T, A, B, C, D, E, F, G, H>(src: ObservableLike<T>, op1: OperatorLike<T, A>, op2: OperatorLike<A, B>, op3: OperatorLike<B, C>, op4: OperatorLike<C, D>, op5: OperatorLike<D, E>, op6: OperatorLike<E, F>, op7: OperatorLike<F, G>, op8: OperatorLike<G, H>): ObservableLike<H>;
function lift<T, A, B, C, D, E, F, G, H, I>(src: ObservableLike<T>, op1: OperatorLike<T, A>, op2: OperatorLike<A, B>, op3: OperatorLike<B, C>, op4: OperatorLike<C, D>, op5: OperatorLike<D, E>, op6: OperatorLike<E, F>, op7: OperatorLike<F, G>, op8: OperatorLike<G, H>, op9: OperatorLike<H, I>): ObservableLike<I>;
function lift(source: ObservableLike<any>, operator: OperatorLike<any, any>, ...operators: Array<OperatorLike<any, any>>): ObservableLike<any> {
  const [sourceSource, sourceOperator] = (source instanceof LiftedObservable)
    ? [source.source, (subscriber: SubscriberLike<any>) => source.operator(operator(subscriber))]
    : [source, operator];

  let liftedOperator = operator;
  for (let i = 0; i < operators.length; i++) {
    liftedOperator = subscriber => liftedOperator(operators[i](subscriber));
  }

  return new LiftedObservable(sourceSource, liftedOperator);
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
    this.delegate.notify(Notifications.complete, error)
  }
}

export const observe = <T>(observer: ObserverLike<T>): OperatorLike<T, T> =>
  (subscriber: SubscriberLike<T>) => new ObserveSubscriber(subscriber, observer);

export const Observable = {
  connect,
  lift,
};