import { SubscriberLike, SubscriberOperator } from "./subscriber";

export function pipe<T, A>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
): SubscriberLike<A>;
export function pipe<T, A, B>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
): SubscriberLike<B>;
export function pipe<T, A, B, C>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
): SubscriberLike<C>;
export function pipe<T, A, B, C, D>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
): SubscriberLike<D>;
export function pipe<T, A, B, C, D, E>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
): SubscriberLike<E>;
export function pipe<T, A, B, C, D, E, F>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
): SubscriberLike<F>;
export function pipe<T, A, B, C, D, E, F, G>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
): SubscriberLike<G>;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
  op8: SubscriberOperator<G, H>,
): SubscriberLike<H>;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
  op8: SubscriberOperator<G, H>,
  op9: SubscriberOperator<H, I>,
): SubscriberLike<I>;
export function pipe(
  subscriber: SubscriberLike<any>,
  ...operators: SubscriberOperator<any, any>[]
): SubscriberLike<any> {
  return operators.reduceRight((acc, next) => next(acc), subscriber);
}
