import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import {
  ObservableLike,
  ObservableResourceLike,
  SubscriberLike,
} from "@reactive-js/rx-core";
import {
  ObservableOperator,
  pipe as pipeObservable,
} from "@reactive-js/rx-observable";

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

export interface ObservableResourceOperator<A, B> {
  (observable: ObservableResourceLike<A>): ObservableResourceLike<B>;
}

export const lift = <A, B>(
  operator: ObservableOperator<A, B>,
): ObservableResourceOperator<A, B> => observableResource => {
  const observable = pipeObservable(
    observableResource instanceof LiftedObservableResource
      ? observableResource.observable
      : observableResource,
    operator,
  );

  const disposable =
    observableResource instanceof LiftedObservableResource
      ? observableResource.disposable
      : observableResource;

  return new LiftedObservableResource(observable, disposable);
};

export function pipe<T, A>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
): ObservableResourceLike<A>;
export function pipe<T, A, B>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
): ObservableResourceLike<B>;
export function pipe<T, A, B, C>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
): ObservableResourceLike<C>;
export function pipe<T, A, B, C, D>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
): ObservableResourceLike<D>;
export function pipe<T, A, B, C, D, E>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
  op5: ObservableResourceOperator<D, E>,
): ObservableResourceLike<E>;
export function pipe<T, A, B, C, D, E, F>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
  op5: ObservableResourceOperator<D, E>,
  op6: ObservableResourceOperator<E, F>,
): ObservableResourceLike<F>;
export function pipe<T, A, B, C, D, E, F, G>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
  op5: ObservableResourceOperator<D, E>,
  op6: ObservableResourceOperator<E, F>,
  op7: ObservableResourceOperator<F, G>,
): ObservableResourceLike<G>;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
  op5: ObservableResourceOperator<D, E>,
  op6: ObservableResourceOperator<E, F>,
  op7: ObservableResourceOperator<F, G>,
  op8: ObservableResourceOperator<G, H>,
): ObservableResourceLike<H>;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
  op5: ObservableResourceOperator<D, E>,
  op6: ObservableResourceOperator<E, F>,
  op7: ObservableResourceOperator<F, G>,
  op8: ObservableResourceOperator<G, H>,
  op9: ObservableResourceOperator<H, I>,
): ObservableResourceLike<I>;
export function pipe(
  source: ObservableResourceLike<any>,
  ...operators: Array<ObservableResourceOperator<any, any>>
): ObservableResourceLike<any> {
  return operators.reduce((acc, next) => next(acc), source);
}
