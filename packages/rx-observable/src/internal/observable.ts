
import { SubscriberLike } from "@reactive-js/rx-subscriber";

/**
 * The source of notifications which may be observed by a SubscriberLike instance.
 */
export interface ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>): void;
}

/** A function which converts an ObservableLike<A> to an ObservableLike<B> */
export interface ObservableOperator<A, B> {
  (observable: ObservableLike<A>): ObservableLike<B>;
}

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
