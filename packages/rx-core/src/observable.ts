import { CompositeDisposable, DisposableLike } from "@reactive-js/disposables";

import {
  AutoDisposingSubscriber,
  DelegatingSubscriber,
  SubscriberLike,
} from "./subscriber";
import { Notification, Notifications, ObserverLike } from "./observer";
import { SchedulerLike } from "@reactive-js/scheduler";

export interface ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>): void;
}

export const connect = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike,
): DisposableLike => {
  const subscription = CompositeDisposable.create();
  const subscriber = new AutoDisposingSubscriber(scheduler, subscription);
  observable.subscribe(subscriber);
  subscriber.isConnected = true;
  return subscription;
};

export interface Operator<A, B> {
  (subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

class LiftedObservable<TSrc, T> implements ObservableLike<T> {
  readonly source: ObservableLike<TSrc>;
  readonly operators: ReadonlyArray<Operator<any, any>>;

  constructor(
    source: ObservableLike<TSrc>,
    operators: ReadonlyArray<Operator<any, any>>,
  ) {
    this.source = source;
    this.operators = operators;
  }

  private liftSubscriber(subscriber: SubscriberLike<any>) {
    return this.operators.reduceRight((acc, next) => next(acc), subscriber);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const liftedSubscrber = this.liftSubscriber(subscriber);
    this.source.subscribe(liftedSubscrber);
  }
}

function lift<T, A>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
): ObservableLike<A>;
function lift<T, A, B>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
): ObservableLike<B>;
function lift<T, A, B, C>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
): ObservableLike<C>;
function lift<T, A, B, C, D>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
): ObservableLike<D>;
function lift<T, A, B, C, D, E>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
): ObservableLike<E>;
function lift<T, A, B, C, D, E, F>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
): ObservableLike<F>;
function lift<T, A, B, C, D, E, F, G>(
  src: ObservableLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
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
  op8: Operator<G, H>,
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
  op9: Operator<H, I>,
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

class ObserveSubscriber<T> extends DelegatingSubscriber<T, T> {
  private observer: ObserverLike<T>;

  constructor(delegate: SubscriberLike<T>, observer: ObserverLike<T>) {
    super(delegate);
    this.observer = observer;
  }

  protected onNext(data: T) {
    this.observer.notify(Notifications.next, data);
    this.delegate.notify(Notifications.next, data);
  }

  protected onComplete(error: Error | void) {
    this.observer.notify(Notifications.complete, error);
    this.delegate.notify(Notifications.complete, error);
  }
}

export const observe = <T>(observer: ObserverLike<T>): Operator<T, T> => (
  subscriber: SubscriberLike<T>,
) => new ObserveSubscriber(subscriber, observer);

export interface ObservableResourceLike<T>
  extends ObservableLike<T>,
    DisposableLike {}

class LiftedObservableResource<T> implements ObservableResourceLike<T> {
  readonly observable: ObservableLike<T>;
  readonly disposable: DisposableLike;

  constructor(observable: ObservableLike<T>, disposable: DisposableLike) {
    this.observable = observable;
    this.disposable = disposable;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  dispose() {
    this.disposable.dispose();
  }

  subscribe(subscriber: SubscriberLike<T>): void {
    this.observable.subscribe(subscriber);
  }
}

function liftResource<T, A>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
): ObservableResourceLike<A>;
function liftResource<T, A, B>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
): ObservableResourceLike<B>;
function liftResource<T, A, B, C>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
): ObservableResourceLike<C>;
function liftResource<T, A, B, C, D>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
): ObservableResourceLike<D>;
function liftResource<T, A, B, C, D, E>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
): ObservableResourceLike<E>;
function liftResource<T, A, B, C, D, E, F>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
): ObservableResourceLike<F>;
function liftResource<T, A, B, C, D, E, F, G>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
): ObservableResourceLike<G>;
function liftResource<T, A, B, C, D, E, F, G, H>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
): ObservableResourceLike<H>;
function liftResource<T, A, B, C, D, E, F, G, H, I>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
  op9: Operator<H, I>,
): ObservableResourceLike<I>;
function liftResource(
  source: ObservableResourceLike<any>,
  operator: Operator<any, any>,
  ...operators: Array<Operator<any, any>>
): ObservableResourceLike<any> {
  const observable = lift.apply(undefined, [
    source instanceof LiftedObservableResource ? source.observable : source,
    operator,
    ...operators,
  ] as any);

  const disposable =
    source instanceof LiftedObservableResource ? source.disposable : source;

  return new LiftedObservableResource(observable, disposable);
}

export const ObservableResource = {
  lift: liftResource,
};

const create = <T>(
  subscribe: (subscriber: SubscriberLike<T>) => void,
): ObservableLike<T> => ({ subscribe });

export const Observable = {
  create,
  lift,
};
