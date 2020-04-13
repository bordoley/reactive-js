/** A Unary function that transforms a value of type A into a value of type B */
export type Operator<A, B> = {
  (src: A): B;
};

export function pipe<T, A>(src: T, op1: Operator<T, A>): A;
export function pipe<T, A, B>(
  src: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
): B;
export function pipe<T, A, B, C>(
  src: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
): C;
export function pipe<T, A, B, C, D>(
  src: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
): D;
export function pipe<T, A, B, C, D, E>(
  src: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
): E;
export function pipe<T, A, B, C, D, E, F>(
  src: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
): F;
export function pipe<T, A, B, C, D, E, F, G>(
  src: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
): G;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
): H;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
  op9: Operator<H, I>,
): I;
export function pipe<T, A, B, C, D, E, F, G, H, I, J>(
  src: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
  op9: Operator<H, I>,
  op10: Operator<I, J>,
): J;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K>(
  src: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
  op9: Operator<H, I>,
  op10: Operator<I, J>,
  op11: Operator<J, K>,
): K;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K, L>(
  src: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
  op9: Operator<H, I>,
  op10: Operator<I, J>,
  op11: Operator<J, K>,
  op12: Operator<K, L>,
): L;

/**
 * Pipes the source value through a series of unary functions.
 */
export function pipe(
  source: unknown,
  ...operators: Array<Operator<unknown, unknown>>
): unknown {
  return operators.reduce((acc, next) => next(acc), source);
}

export function compose<T, A, B>(
  op1: Operator<T, A>,
  op2: Operator<A, B>,
): Operator<T, B>;
export function compose<T, A, B, C>(
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
): Operator<T, C>;
export function compose<T, A, B, C, D>(
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
): Operator<T, D>;
export function compose<T, A, B, C, D, E>(
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
): Operator<T, E>;
export function compose<T, A, B, C, D, E, F>(
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
): Operator<T, F>;
export function compose<T, A, B, C, D, E, F, G>(
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
): Operator<T, G>;
export function compose<T, A, B, C, D, E, F, G, H>(
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
): Operator<T, H>;
export function compose<T, A, B, C, D, E, F, G, H, I>(
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
  op9: Operator<H, I>,
): Operator<T, I>;
export function compose<T, A, B, C, D, E, F, G, H, I, J>(
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
  op9: Operator<H, I>,
  op10: Operator<I, J>,
): Operator<T, J>;
export function compose<T, A, B, C, D, E, F, G, H, I, J, K>(
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
  op9: Operator<H, I>,
  op10: Operator<I, J>,
  op11: Operator<J, K>,
): Operator<T, K>;
export function compose<T, A, B, C, D, E, F, G, H, I, J, K, L>(
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>,
  op4: Operator<C, D>,
  op5: Operator<D, E>,
  op6: Operator<E, F>,
  op7: Operator<F, G>,
  op8: Operator<G, H>,
  op9: Operator<H, I>,
  op10: Operator<I, J>,
  op11: Operator<J, K>,
  op12: Operator<K, L>,
): Operator<T, L>;

/**
 * composes the source value through a series of unary functions.
 */
export function compose(
  ...operators: Array<Operator<unknown, unknown>>
): Operator<unknown, unknown> {
  return source => operators.reduce((acc, next) => next(acc), source);
}
