export type Comparator<T> = (a: T, b: T) => number;
export type Equality<T> = (a: T, b: T) => boolean;
export type Factory<T> = () => T;
export type Generator<T> = (prev: T) => T;
export type Operator<TA, T> = (a: TA) => T;
export type Predicate<T> = (a: T) => boolean;
export type TypePredicate<TA, TB extends TA> = (v: TA) => v is TB;
export type Reducer<T, TAcc> = (acc: TAcc, next: T) => TAcc;
export type Selector2<TA, TB, T> = (a: TA, b: TB) => T;
export type Selector3<TA, TB, TC, T> = (a: TA, b: TB, c: TC) => T;
export type Selector4<TA, TB, TC, TD, T> = (a: TA, b: TB, c: TC, d: TD) => T;
export type Selector5<TA, TB, TC, TD, TE, T> = (a: TA, b: TB, c: TC, d: TD, e: TE) => T;
export type Selector6<TA, TB, TC, TD, TE, TF, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF) => T;
export type Selector7<TA, TB, TC, TD, TE, TF, TG, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG) => T;
export type Selector8<TA, TB, TC, TD, TE, TF, TG, TH, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG, h: TH) => T;
export type Selector9<TA, TB, TC, TD, TE, TF, TG, TH, TI, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG, h: TH, i: TI) => T;

export type SideEffect = () => void;
export type SideEffect1<TA> = (a: TA) => void;
export type SideEffect2<TA, TB> = (a: TA, b: TB) => void;

export function call<T>(): Operator<Factory<T>, T>;
export function call<TA, T>(a: TA): Operator<Operator<TA, T>, T>;
export function call<TA, TB, T>(a: TA, b: TB): Operator<Selector2<TA, TB, T>, T>;
export function call<TA, TB, TC, T>(
  a: TA,
  b: TB,
  c: TC,
): Operator<Selector3<TA, TB, TC, T>, T>;
export function call<TA, TB, TC, TD, T>(
  a: TA,
  b: TB,
  c: TC,
  d: TD,
): Operator<Selector4<TA, TB, TC, TD, T>, T>;
export function call<T>(...args: any[]): Operator<(...args: any[]) => T, T> {
  return f => f(...args);
}

export function bind<T>(factory: Factory<T>): Factory<T>; 
export function bind<TA, T>(op: Operator<TA, T>, a: TA): Factory<T>; 
export function bind<TA, TB, T>(selector: Selector2<TA, TB, T>, a: TA, b: TB): Factory<T>; 
export function bind<TA, TB, TC, T>(selector: Selector3<TA, TB, TC, T>, a: TA, b: TB, c: TC): Factory<T>; 
export function bind<TA, TB, TC, TD, T>(selector: Selector4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): Factory<T>; 
export function bind<TA, TB, TC, TD, TE, T>(selector: Selector5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): Factory<T>; 
export function bind<TA, TB, TC, TD, TE, TF, T>(selector: Selector6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): Factory<T>; 
export function bind<TA, TB, TC, TD, TE, TF, TG, T>(selector: Selector7<TA, TB, TC, TD, TE, TF, TG, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG): Factory<T>; 
export function bind<T>(selector: (...args: any[]) => T, ...args: any[]): Factory<T> {
  return () => selector(...args);
}

export const identity = <T>(v: T): T => v;

export const returns = <T>(v: T) => (..._args: unknown[]) => v;

export const alwaysFalse = returns(false);

export const alwaysTrue = returns(true);

export const ignore = returns<void>(undefined);

export const increment = (x: number) => x + 1;

export const incrementBy = (incr: number) => (x: number) => x + incr;

export const decrement = (x: number) => x - 1;

export const decrementBy = (decr: number) => (x: number) => x - decr;

export const referenceEquals = <T>(a: T, b: T) => a === b;

export const isReferenceEqualTo = <T>(b: T): Operator<T, boolean> => a =>
  a === b;

export const sum = (...args: number[]) => {
  let acc = 0;
  for (let i = 0; i < args.length; i++) {
    acc += args[i];
  }
  return acc;
}

// FIXME: Would prefer not to have this here.
export const arrayEquals = <T>(valuesAreEqual: Equality<T>) => (
  a: readonly T[],
  b: readonly T[],
) => a.length === b.length && a.every((v, i) => valuesAreEqual(b[i], v));

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

export function pipe(
  source: unknown,
  ...operators: Operator<any, unknown>[]
): unknown;

/**
 * Pipes the source value through a series of unary functions.
 */
export function pipe(
  source: unknown,
  ...operators: Operator<unknown, unknown>[]
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
