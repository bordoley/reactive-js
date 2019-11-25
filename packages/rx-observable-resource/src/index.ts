import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";

import { Operator, SubscriberLike } from "@reactive-js/rx-subscriber";

import {
  lift as liftObservable,
  ObservableLike,
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
  op1: Operator<T, A>,
): ObservableResourceLike<A>;
export function lift<T, A, B>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
): ObservableResourceLike<B>;
export function lift<T, A, B, C>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
): ObservableResourceLike<C>;
export function lift<T, A, B, C, D>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
): ObservableResourceLike<D>;
export function lift<T, A, B, C, D, E>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
): ObservableResourceLike<E>;
export function lift<T, A, B, C, D, E, F>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
): ObservableResourceLike<F>;
export function lift<T, A, B, C, D, E, F, G>(
  src: ObservableResourceLike<T>,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
): ObservableResourceLike<G>;
export function lift<T, A, B, C, D, E, F, G, H>(
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
export function lift<T, A, B, C, D, E, F, G, H, I>(
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
export function lift(
  source: ObservableResourceLike<any>,
  operator: Operator<any, any>,
  ...operators: Array<Operator<any, any>>
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
