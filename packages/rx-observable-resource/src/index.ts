import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";

import { SubscriberLike, SubscriberOperator } from "@reactive-js/rx-subscriber";

import {
  lift as liftObservable,
  ObservableLike,
  ObservableOperator,
} from "@reactive-js/rx-observable";

/** @noInheritDoc */
export interface ObservableResourceLike<T>
  extends ObservableLike<T>,
    DisposableLike {}

class LiftedObservableResource<T> implements ObservableResourceLike<T> {
  get isDisposed() {
    return this.disposable.isDisposed;
  }
  readonly disposable: DisposableLike;
  readonly observable: ObservableLike<T>;

  constructor(observable: ObservableLike<T>, disposable: DisposableLike) {
    this.observable = observable;
    this.disposable = disposable;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
  }

  subscribe(subscriber: SubscriberLike<T>): void {
    this.observable.subscribe(subscriber);
  }
}

export function lift<T, A>(
  src: ObservableResourceLike<T>,
  op1: SubscriberOperator<T, A>,
): ObservableResourceLike<A>;
export function lift<T, A, B>(
  src: ObservableResourceLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
): ObservableResourceLike<B>;
export function lift<T, A, B, C>(
  src: ObservableResourceLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
): ObservableResourceLike<C>;
export function lift<T, A, B, C, D>(
  src: ObservableResourceLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
): ObservableResourceLike<D>;
export function lift<T, A, B, C, D, E>(
  src: ObservableResourceLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
): ObservableResourceLike<E>;
export function lift<T, A, B, C, D, E, F>(
  src: ObservableResourceLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
): ObservableResourceLike<F>;
export function lift<T, A, B, C, D, E, F, G>(
  src: ObservableResourceLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
): ObservableResourceLike<G>;
export function lift<T, A, B, C, D, E, F, G, H>(
  src: ObservableResourceLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
  op8: SubscriberOperator<G, H>,
): ObservableResourceLike<H>;
export function lift<T, A, B, C, D, E, F, G, H, I>(
  src: ObservableResourceLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
  op8: SubscriberOperator<G, H>,
  op9: SubscriberOperator<H, I>,
): ObservableResourceLike<I>;
export function lift(
  source: ObservableResourceLike<any>,
  operator: SubscriberOperator<any, any>,
  ...operators: Array<SubscriberOperator<any, any>>
): ObservableResourceLike<any> {
  const observable = liftObservable.apply(undefined, [
    source instanceof LiftedObservableResource ? source.observable : source,
    operator,
    ...operators,
  ] as any);

  const disposable =
    source instanceof LiftedObservableResource ? source.disposable : source;

  return new LiftedObservableResource(observable, disposable);
}

export function pipe<T, A>(
  src: ObservableResourceLike<T>,
  op1: ObservableOperator<T, A>,
): ObservableResourceLike<A>;
export function pipe<T, A, B>(
  src: ObservableResourceLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
): ObservableResourceLike<B>;
export function pipe<T, A, B, C>(
  src: ObservableResourceLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
): ObservableResourceLike<C>;
export function pipe<T, A, B, C, D>(
  src: ObservableResourceLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
): ObservableResourceLike<D>;
export function pipe<T, A, B, C, D, E>(
  src: ObservableResourceLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
): ObservableResourceLike<E>;
export function pipe<T, A, B, C, D, E, F>(
  src: ObservableResourceLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
): ObservableResourceLike<F>;
export function pipe<T, A, B, C, D, E, F, G>(
  src: ObservableResourceLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
): ObservableResourceLike<G>;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: ObservableResourceLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
): ObservableResourceLike<H>;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: ObservableResourceLike<T>,
  op1: ObservableOperator<T, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
  op9: ObservableOperator<H, I>,
): ObservableResourceLike<I>;
export function pipe(
  source: ObservableResourceLike<any>,
  ...operators: Array<ObservableOperator<any, any>>
): ObservableResourceLike<any> {
  const obsSource =
    source instanceof LiftedObservableResource ? source.observable : source;
  const observable = operators.reduce((acc, next) => next(acc), obsSource);

  const disposable =
    source instanceof LiftedObservableResource ? source.disposable : source;

  return new LiftedObservableResource(observable, disposable);
}
