import { ObservableLike } from "@reactive-js/rx";
import {  ObservableOperatorLike } from "./interfaces";

export function pipe<T, A>(
  src: ObservableLike<T>,
  op1: ObservableOperatorLike<T, A>,
): ObservableLike<A>;
export function pipe<T, A, B>(
  src: ObservableLike<T>,
  op1: ObservableOperatorLike<T, A>,
  op2: ObservableOperatorLike<A, B>,
): ObservableLike<B>;
export function pipe<T, A, B, C>(
  src: ObservableLike<T>,
  op1: ObservableOperatorLike<T, A>,
  op2: ObservableOperatorLike<A, B>,
  op3: ObservableOperatorLike<B, C>,
): ObservableLike<C>;
export function pipe<T, A, B, C, D>(
  src: ObservableLike<T>,
  op1: ObservableOperatorLike<T, A>,
  op2: ObservableOperatorLike<A, B>,
  op3: ObservableOperatorLike<B, C>,
  op4: ObservableOperatorLike<C, D>,
): ObservableLike<D>;
export function pipe<T, A, B, C, D, E>(
  src: ObservableLike<T>,
  op1: ObservableOperatorLike<T, A>,
  op2: ObservableOperatorLike<A, B>,
  op3: ObservableOperatorLike<B, C>,
  op4: ObservableOperatorLike<C, D>,
  op5: ObservableOperatorLike<D, E>,
): ObservableLike<E>;
export function pipe<T, A, B, C, D, E, F>(
  src: ObservableLike<T>,
  op1: ObservableOperatorLike<T, A>,
  op2: ObservableOperatorLike<A, B>,
  op3: ObservableOperatorLike<B, C>,
  op4: ObservableOperatorLike<C, D>,
  op5: ObservableOperatorLike<D, E>,
  op6: ObservableOperatorLike<E, F>,
): ObservableLike<F>;
export function pipe<T, A, B, C, D, E, F, G>(
  src: ObservableLike<T>,
  op1: ObservableOperatorLike<T, A>,
  op2: ObservableOperatorLike<A, B>,
  op3: ObservableOperatorLike<B, C>,
  op4: ObservableOperatorLike<C, D>,
  op5: ObservableOperatorLike<D, E>,
  op6: ObservableOperatorLike<E, F>,
  op7: ObservableOperatorLike<F, G>,
): ObservableLike<G>;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: ObservableLike<T>,
  op1: ObservableOperatorLike<T, A>,
  op2: ObservableOperatorLike<A, B>,
  op3: ObservableOperatorLike<B, C>,
  op4: ObservableOperatorLike<C, D>,
  op5: ObservableOperatorLike<D, E>,
  op6: ObservableOperatorLike<E, F>,
  op7: ObservableOperatorLike<F, G>,
  op8: ObservableOperatorLike<G, H>,
): ObservableLike<H>;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: ObservableLike<T>,
  op1: ObservableOperatorLike<T, A>,
  op2: ObservableOperatorLike<A, B>,
  op3: ObservableOperatorLike<B, C>,
  op4: ObservableOperatorLike<C, D>,
  op5: ObservableOperatorLike<D, E>,
  op6: ObservableOperatorLike<E, F>,
  op7: ObservableOperatorLike<F, G>,
  op8: ObservableOperatorLike<G, H>,
  op9: ObservableOperatorLike<H, I>,
): ObservableLike<I>;
export function pipe(
  source: ObservableLike<any>,
  ...operators: Array<ObservableOperatorLike<any, any>>
): ObservableLike<any> {
  return operators.reduce((acc, next) => next(acc), source);
}
