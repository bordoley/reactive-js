import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";

import { SubscriberLike, SubscriberOperator } from "@reactive-js/rx-subscriber";

import {
  lift as liftObservable,
  ObservableLike,
  ObservableOperator,
  pipe as pipeObservable,
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
  operator: SubscriberOperator<T, A>,
): ObservableResourceLike<A> {
  const observable = liftObservable(operator)(
    src instanceof LiftedObservableResource ? src.observable : src,
  );

  const disposable =
    src instanceof LiftedObservableResource ? src.disposable : src;

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
  const observable = pipeObservable.apply(undefined, [
    obsSource,
    ...operators,
  ] as any);

  const disposable =
    source instanceof LiftedObservableResource ? source.disposable : source;

  return new LiftedObservableResource(observable, disposable);
}
