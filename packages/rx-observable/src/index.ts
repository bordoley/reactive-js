import {
  create as disposableCreate,
  DisposableLike,
  DisposableOrTeardown,
} from "@reactive-js/disposable";

import {
  create as subscriberCreate,
  SubscriberOperator,
  pipe as subscriberPipe,
  SubscriberLike,
  toSafeObserver,
} from "@reactive-js/rx-subscriber";

import { ObserverLike } from "@reactive-js/rx-observer";

import { getDefaultScheduler, SchedulerLike } from "@reactive-js/scheduler";

export interface ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>): void;
}

export const connect = <T>(
  observable: ObservableLike<T>,
  scheduler?: SchedulerLike,
): DisposableLike => {
  scheduler = scheduler || getDefaultScheduler();
  const subscription = disposableCreate();
  const subscriber = subscriberCreate(scheduler, subscription);
  observable.subscribe(subscriber);
  subscriber.isConnected = true;
  return subscription;
};

class LiftedObservable<TSrc, T> implements ObservableLike<T> {
  readonly operators: ReadonlyArray<SubscriberOperator<any, any>>;
  readonly source: ObservableLike<TSrc>;

  constructor(
    source: ObservableLike<TSrc>,
    operators: ReadonlyArray<SubscriberOperator<any, any>>,
  ) {
    this.source = source;
    this.operators = operators;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const liftedSubscrber = this.liftSubscriber(subscriber);
    this.source.subscribe(liftedSubscrber);
  }

  private liftSubscriber(subscriber: SubscriberLike<any>) {
    return subscriberPipe.apply(undefined, [subscriber, ...this.operators] as any);
    //return this.operators.reduceRight((acc, next) => next(acc), subscriber);
  }
}

export function lift<T, A>(
  src: ObservableLike<T>,
  op1: SubscriberOperator<T, A>,
): ObservableLike<A>;
export function lift<T, A, B>(
  src: ObservableLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
): ObservableLike<B>;
export function lift<T, A, B, C>(
  src: ObservableLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
): ObservableLike<C>;
export function lift<T, A, B, C, D>(
  src: ObservableLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
): ObservableLike<D>;
export function lift<T, A, B, C, D, E>(
  src: ObservableLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
): ObservableLike<E>;
export function lift<T, A, B, C, D, E, F>(
  src: ObservableLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
): ObservableLike<F>;
export function lift<T, A, B, C, D, E, F, G>(
  src: ObservableLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
): ObservableLike<G>;
export function lift<T, A, B, C, D, E, F, G, H>(
  src: ObservableLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
  op8: SubscriberOperator<G, H>,
): ObservableLike<H>;
export function lift<T, A, B, C, D, E, F, G, H, I>(
  src: ObservableLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
  op8: SubscriberOperator<G, H>,
  op9: SubscriberOperator<H, I>,
): ObservableLike<I>;
export function lift(
  source: ObservableLike<any>,
  operator: SubscriberOperator<any, any>,
  ...operators: Array<SubscriberOperator<any, any>>
): ObservableLike<any> {
  const sourceSource =
    source instanceof LiftedObservable ? source.source : source;

  const allOperators =
    source instanceof LiftedObservable
      ? [...source.operators, operator, ...operators]
      : [operator, ...operators];

  return new LiftedObservable(sourceSource, allOperators);
}

export const create = <T>(
  onSubscribe: (observer: ObserverLike<T>) => DisposableOrTeardown | void,
  priority?: number,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    // The idea here is that an onSubscribe function may
    // call onNext from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const observer = toSafeObserver(subscriber, priority);

    try {
      const onSubscribeSubscription = onSubscribe(observer);
      if (onSubscribeSubscription !== undefined) {
        subscriber.add(onSubscribeSubscription);
      }
    } catch (error) {
      observer.complete(error);
    }
  };

  return { subscribe };
};
