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
export function pipe(
  source: unknown,
  ...operators: Array<OperatorLike<unknown, unknown>>
): unknown {
  return operators.reduce((acc, next) => next(acc), source);
}
