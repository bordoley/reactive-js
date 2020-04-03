/** A Unary function that transforms a value of type A into a value of type B */
export interface OperatorLike<A, B> {
  (src: A): B;
}

export function pipe<T, A>(src: T, op1: OperatorLike<T, A>): A;
export function pipe<T, A, B>(
  src: T,
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
): B;
export function pipe<T, A, B, C>(
  src: T,
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
): C;
export function pipe<T, A, B, C, D>(
  src: T,
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
): D;
export function pipe<T, A, B, C, D, E>(
  src: T,
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
): E;
export function pipe<T, A, B, C, D, E, F>(
  src: T,
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
): F;
export function pipe<T, A, B, C, D, E, F, G>(
  src: T,
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
): G;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: T,
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
  op8: OperatorLike<G, H>,
): H;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: T,
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
  op8: OperatorLike<G, H>,
  op9: OperatorLike<H, I>,
): I;
export function pipe<T, A, B, C, D, E, F, G, H, I, J>(
  src: T,
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
  op8: OperatorLike<G, H>,
  op9: OperatorLike<H, I>,
  op10: OperatorLike<I, J>,
): J;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K>(
  src: T,
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
  op8: OperatorLike<G, H>,
  op9: OperatorLike<H, I>,
  op10: OperatorLike<I, J>,
  op11: OperatorLike<J, K>,
): K;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K, L>(
  src: T,
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
  op8: OperatorLike<G, H>,
  op9: OperatorLike<H, I>,
  op10: OperatorLike<I, J>,
  op11: OperatorLike<J, K>,
  op12: OperatorLike<K, L>,
): L;


/**
 * Pipes the source value through a series of unary functions.
 */
export function pipe(
  source: unknown,
  ...operators: Array<OperatorLike<unknown, unknown>>
): unknown {
  return operators.reduce((acc, next) => next(acc), source);
}

export function compose<T, A, B>(
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
): OperatorLike<T, B>;
export function compose<T, A, B, C>(
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
): OperatorLike<T, C>;
export function compose<T, A, B, C, D>(
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
): OperatorLike<T, D>;
export function compose<T, A, B, C, D, E>(
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
): OperatorLike<T, E>;
export function compose<T, A, B, C, D, E, F>(
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
): OperatorLike<T, F>;
export function compose<T, A, B, C, D, E, F, G>(
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
): OperatorLike<T, G>;
export function compose<T, A, B, C, D, E, F, G, H>(
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
  op8: OperatorLike<G, H>,
): OperatorLike<T, H>;
export function compose<T, A, B, C, D, E, F, G, H, I>(
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
  op8: OperatorLike<G, H>,
  op9: OperatorLike<H, I>,
): OperatorLike<T, I>;
export function compose<T, A, B, C, D, E, F, G, H, I, J>(
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
  op8: OperatorLike<G, H>,
  op9: OperatorLike<H, I>,
  op10: OperatorLike<I, J>,
): OperatorLike<T, J>;
export function compose<T, A, B, C, D, E, F, G, H, I, J, K>(
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
  op8: OperatorLike<G, H>,
  op9: OperatorLike<H, I>,
  op10: OperatorLike<I, J>,
  op11: OperatorLike<J, K>,
): OperatorLike<T, K>;
export function compose<T, A, B, C, D, E, F, G, H, I, J, K, L>(
  op1: OperatorLike<T, A>,
  op2: OperatorLike<A, B>,
  op3: OperatorLike<B, C>,
  op4: OperatorLike<C, D>,
  op5: OperatorLike<D, E>,
  op6: OperatorLike<E, F>,
  op7: OperatorLike<F, G>,
  op8: OperatorLike<G, H>,
  op9: OperatorLike<H, I>,
  op10: OperatorLike<I, J>,
  op11: OperatorLike<J, K>,
  op12: OperatorLike<K, L>,
): OperatorLike<T, L>;

/**
 * composes the source value through a series of unary functions.
 */
export function compose(
  ...operators: Array<OperatorLike<unknown, unknown>>
): OperatorLike<unknown, unknown> {
  return source => operators.reduce((acc, next) => next(acc), source);
}
