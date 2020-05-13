export type Comparator<T> = (a: T, b: T) => number;
export type Equality<T> = (a: T, b: T) => boolean;
export type Factory<T> = () => T;
export type Generator<T> = (prev: T) => T;
export type Predicate<T> = (a: T) => boolean;
export type TypePredicate<TA, TB extends TA> = (v: TA) => v is TB;
export type Reducer<T, TAcc> = (acc: TAcc, next: T) => TAcc;
export type Function<TA, TB> = (a: TA) => TB;
export type Function2<TA, TB, T> = (a: TA, b: TB) => T;
export type Function3<TA, TB, TC, T> = (a: TA, b: TB, c: TC) => T;
export type Function4<TA, TB, TC, TD, T> = (a: TA, b: TB, c: TC, d: TD) => T;
export type Function5<TA, TB, TC, TD, TE, T> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
) => T;
export type Function6<TA, TB, TC, TD, TE, TF, T> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
) => T;
export type Function7<TA, TB, TC, TD, TE, TF, TG, T> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
  g: TG,
) => T;
export type Function8<TA, TB, TC, TD, TE, TF, TG, TH, T> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
  g: TG,
  h: TH,
) => T;
export type Function9<TA, TB, TC, TD, TE, TF, TG, TH, TI, T> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
  g: TG,
  h: TH,
  i: TI,
) => T;

export type SideEffect = () => void;
export type SideEffect1<TA> = (a: TA) => void;
export type SideEffect2<TA, TB> = (a: TA, b: TB) => void;

export function callWith<T>(): Function<Factory<T>, T>;
export function callWith<TA, T>(a: TA): Function<Function<TA, T>, T>;
export function callWith<TA, TB, T>(
  a: TA,
  b: TB,
): Function<Function2<TA, TB, T>, T>;
export function callWith<TA, TB, TC, T>(
  a: TA,
  b: TB,
  c: TC,
): Function<Function3<TA, TB, TC, T>, T>;
export function callWith<TA, TB, TC, TD, T>(
  a: TA,
  b: TB,
  c: TC,
  d: TD,
): Function<Function4<TA, TB, TC, TD, T>, T>;
export function callWith<T>(
  ...args: any[]
): Function<(...args: any[]) => T, T> {
  return f => f(...args);
}

export function bind<T>(factory: Factory<T>): Factory<T>;
export function bind<TA, T>(op: Function<TA, T>, a: TA): Factory<T>;
export function bind<TA, TB, T>(
  selector: Function2<TA, TB, T>,
  a: TA,
  b: TB,
): Factory<T>;
export function bind<TA, TB, TC, T>(
  selector: Function3<TA, TB, TC, T>,
  a: TA,
  b: TB,
  c: TC,
): Factory<T>;
export function bind<TA, TB, TC, TD, T>(
  selector: Function4<TA, TB, TC, TD, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
): Factory<T>;
export function bind<TA, TB, TC, TD, TE, T>(
  selector: Function5<TA, TB, TC, TD, TE, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
): Factory<T>;
export function bind<TA, TB, TC, TD, TE, TF, T>(
  selector: Function6<TA, TB, TC, TD, TE, TF, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
): Factory<T>;
export function bind<TA, TB, TC, TD, TE, TF, TG, T>(
  selector: Function7<TA, TB, TC, TD, TE, TF, TG, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
  g: TG,
): Factory<T>;
export function bind<T>(
  selector: (...args: any[]) => T,
  ...args: any[]
): Factory<T> {
  return () => selector(...args);
}

export const identity = <T>(v: T): T => v;

export const returns = <T>(v: T) => (..._args: unknown[]) => v;

export const alwaysFalse = returns(false);

export const alwaysTrue = returns(true);

export const ignore = returns<void>(undefined);

export const increment = (x: number) => x + 1;

export const incrementBy = (incr: number): Generator<number> => (x: number) =>
  x + incr;

export const decrement = (x: number) => x - 1;

export const decrementBy = (decr: number): Generator<number> => (x: number) =>
  x - decr;

export const strictEquality = <T>(a: T, b: T) => a === b;

const isStrictlyEqualTo = <T>(b: T): Predicate<T> => a => a === b;

export const isEqualTo = <T>(
  b: T,
  equality: Equality<T> = strictEquality,
): Predicate<T> =>
  equality === strictEquality ? isStrictlyEqualTo(b) : (a: T) => equality(a, b);

export const isEven = (x: number): boolean => x % 2 === 0;
export const isOdd = (x: number): boolean => x % 2 !== 0;

export const negate = (v: boolean): boolean => !v;

export const sum = (...args: number[]) => {
  let acc = 0;
  for (let i = 0; i < args.length; i++) {
    acc += args[i];
  }
  return acc;
};

export const arrayEquality = <T>(
  valuesEquality: Equality<T> = strictEquality,
): Equality<readonly T[]> => (a: readonly T[], b: readonly T[]) =>
  a.length === b.length && a.every((v, i) => valuesEquality(b[i], v));

export function pipe<T, A>(src: T, op1: Function<T, A>): A;
export function pipe<T, A, B>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
): B;
export function pipe<T, A, B, C>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
): C;
export function pipe<T, A, B, C, D>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
): D;
export function pipe<T, A, B, C, D, E>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
): E;
export function pipe<T, A, B, C, D, E, F>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
): F;
export function pipe<T, A, B, C, D, E, F, G>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
): G;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
): H;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
): I;
export function pipe<T, A, B, C, D, E, F, G, H, I, J>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
  op10: Function<I, J>,
): J;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
  op10: Function<I, J>,
  op11: Function<J, K>,
): K;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K, L>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
  op10: Function<I, J>,
  op11: Function<J, K>,
  op12: Function<K, L>,
): L;

export function pipe(
  source: unknown,
  ...operators: Function<any, unknown>[]
): unknown;

/**
 * Pipes the source value through a series of unary functions.
 */
export function pipe(
  source: unknown,
  ...operators: Function<unknown, unknown>[]
): unknown {
  return operators.reduce((acc, next) => next(acc), source);
}

export function compose<T, A, B>(
  op1: Function<T, A>,
  op2: Function<A, B>,
): Function<T, B>;
export function compose<T, A, B, C>(
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
): Function<T, C>;
export function compose<T, A, B, C, D>(
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
): Function<T, D>;
export function compose<T, A, B, C, D, E>(
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
): Function<T, E>;
export function compose<T, A, B, C, D, E, F>(
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
): Function<T, F>;
export function compose<T, A, B, C, D, E, F, G>(
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
): Function<T, G>;
export function compose<T, A, B, C, D, E, F, G, H>(
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
): Function<T, H>;
export function compose<T, A, B, C, D, E, F, G, H, I>(
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
): Function<T, I>;
export function compose<T, A, B, C, D, E, F, G, H, I, J>(
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
  op10: Function<I, J>,
): Function<T, J>;
export function compose<T, A, B, C, D, E, F, G, H, I, J, K>(
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
  op10: Function<I, J>,
  op11: Function<J, K>,
): Function<T, K>;
export function compose<T, A, B, C, D, E, F, G, H, I, J, K, L>(
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
  op10: Function<I, J>,
  op11: Function<J, K>,
  op12: Function<K, L>,
): Function<T, L>;

/**
 * composes the source value through a series of unary functions.
 */
export function compose(
  ...operators: Array<Function<unknown, unknown>>
): Function<unknown, unknown> {
  return source => operators.reduce((acc, next) => next(acc), source);
}

export function defer<T, A>(src: T, op1: Function<T, A>): Factory<A>;
export function defer<T, A, B>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
): Factory<B>;
export function defer<T, A, B, C>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
): Factory<C>;
export function defer<T, A, B, C, D>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
): Factory<D>;
export function defer<T, A, B, C, D, E>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
): Factory<E>;
export function defer<T, A, B, C, D, E, F>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
): Factory<F>;
export function defer<T, A, B, C, D, E, F, G>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
): Factory<G>;
export function defer<T, A, B, C, D, E, F, G, H>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
): Factory<H>;
export function defer<T, A, B, C, D, E, F, G, H, I>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
): Factory<I>;
export function defer<T, A, B, C, D, E, F, G, H, I, J>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
  op10: Function<I, J>,
): Factory<J>;
export function defer<T, A, B, C, D, E, F, G, H, I, J, K>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
  op10: Function<I, J>,
  op11: Function<J, K>,
): Factory<K>;
export function defer<T, A, B, C, D, E, F, G, H, I, J, K, L>(
  src: T,
  op1: Function<T, A>,
  op2: Function<A, B>,
  op3: Function<B, C>,
  op4: Function<C, D>,
  op5: Function<D, E>,
  op6: Function<E, F>,
  op7: Function<F, G>,
  op8: Function<G, H>,
  op9: Function<H, I>,
  op10: Function<I, J>,
  op11: Function<J, K>,
  op12: Function<K, L>,
): Factory<L>;

export function defer(
  source: unknown,
  ...operators: Function<any, unknown>[]
): Factory<unknown>;

/**
 * Pipes the source value through a series of unary functions.
 */
export function defer(
  source: unknown,
  ...operators: Function<unknown, unknown>[]
): Factory<unknown> {
  return () => operators.reduce((acc, next) => next(acc), source);
}

export function flip<TA, TB, T>(f: Function2<TA, TB, T>): Function2<TB, TA, T>;
export function flip<TA, TB, TC, T>(
  f: Function3<TA, TB, TC, T>,
): Function3<TC, TB, TA, T>;
export function flip<T>(f: (...args: any[]) => T): (...args: any[]) => T {
  return (...args) => {
    args.reverse();
    return f(...args);
  };
}
