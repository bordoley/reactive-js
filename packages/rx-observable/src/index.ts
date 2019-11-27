import {
  create as createDisposable,
  DisposableLike,
  DisposableOrTeardown,
} from "@reactive-js/disposable";

import {
  createAutoDisposing,
  observe as subscriberObserveOperator,
  pipe as subscriberPipe,
  SubscriberLike,
  SubscriberOperator,
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
  const subscription = createDisposable();
  const subscriber = createAutoDisposing(scheduler, subscription);
  observable.subscribe(subscriber);
  subscriber.connect();
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
    const liftedSubscrber = subscriberPipe.apply(undefined, [
      subscriber,
      ...this.operators,
    ] as any);

    this.source.subscribe(liftedSubscrber);
  }
}

export interface ObservableOperator<A, B> {
  (observable: ObservableLike<A>): ObservableLike<B>;
}

export const lift = <TA, TB>(
  operator: SubscriberOperator<TA, TB>,
): ObservableOperator<TA, TB> => source => {
  const sourceSource =
    source instanceof LiftedObservable ? source.source : source;

  const allOperators =
    source instanceof LiftedObservable
      ? [...source.operators, operator]
      : [operator];

  return new LiftedObservable(sourceSource, allOperators);
};

export function pipe<T, A>(
  src: ObservableLike<T>,
  op1: ObservableOperator<T, A>,
): ObservableLike<A>;
export function pipe<T, A, B>(
  src: ObservableLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
): ObservableLike<B>;
export function pipe<T, A, B, C>(
  src: ObservableLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
): ObservableLike<C>;
export function pipe<T, A, B, C, D>(
  src: ObservableLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
): ObservableLike<D>;
export function pipe<T, A, B, C, D, E>(
  src: ObservableLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
): ObservableLike<E>;
export function pipe<T, A, B, C, D, E, F>(
  src: ObservableLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
): ObservableLike<F>;
export function pipe<T, A, B, C, D, E, F, G>(
  src: ObservableLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
): ObservableLike<G>;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: ObservableLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
): ObservableLike<H>;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: ObservableLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
  op9: ObservableOperator<H, I>,
): ObservableLike<I>;
export function pipe(
  source: ObservableLike<any>,
  ...operators: Array<ObservableOperator<any, any>>
): ObservableLike<any> {
  return operators.reduce((acc, next) => next(acc), source);
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

export const observe = <T>(
  observer: ObserverLike<T>,
): ObservableOperator<T, T> => lift(subscriberObserveOperator(observer));
