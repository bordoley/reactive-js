export type Comparator<T> = (a: T, b: T) => number;
export type Equality<T> = (a: T, b: T) => boolean;
export type Factory<T> = () => T;
export type Updater<T> = (prev: T) => T;
export type Predicate<T> = (a: T) => boolean;
export type TypePredicate<TA, TB extends TA> = (v: TA) => v is TB;
export type Reducer<T, TAcc> = (acc: TAcc, next: T) => TAcc;
export type Function1<TA, TB> = (a: TA) => TB;
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

export function callWith<T>(): Function1<Factory<T>, T>;
export function callWith<TA, T>(a: TA): Function1<Function1<TA, T>, T>;
export function callWith<TA, TB, T>(
  a: TA,
  b: TB,
): Function1<Function2<TA, TB, T>, T>;
export function callWith<TA, TB, TC, T>(
  a: TA,
  b: TB,
  c: TC,
): Function1<Function3<TA, TB, TC, T>, T>;
export function callWith<TA, TB, TC, TD, T>(
  a: TA,
  b: TB,
  c: TC,
  d: TD,
): Function1<Function4<TA, TB, TC, TD, T>, T>;
export function callWith<T>(
  ...args: readonly any[]
): Function1<(...args: readonly any[]) => T, T> {
  return f => f(...args);
}

export function bind<T>(factory: Factory<T>): Factory<T>;
export function bind<TA, T>(op: Function1<TA, T>, a: TA): Factory<T>;
export function bind<TA, TB, T>(
  func: Function2<TA, TB, T>,
  a: TA,
  b: TB,
): Factory<T>;
export function bind<TA, TB, TC, T>(
  func: Function3<TA, TB, TC, T>,
  a: TA,
  b: TB,
  c: TC,
): Factory<T>;
export function bind<TA, TB, TC, TD, T>(
  func: Function4<TA, TB, TC, TD, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
): Factory<T>;
export function bind<TA, TB, TC, TD, TE, T>(
  func: Function5<TA, TB, TC, TD, TE, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
): Factory<T>;
export function bind<TA, TB, TC, TD, TE, TF, T>(
  func: Function6<TA, TB, TC, TD, TE, TF, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
): Factory<T>;
export function bind<TA, TB, TC, TD, TE, TF, TG, T>(
  func: Function7<TA, TB, TC, TD, TE, TF, TG, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
  g: TG,
): Factory<T>;
export function bind<T>(
  func: (...args: any[]) => T,
  ...args: any[]
): Factory<T> {
  return () => func(...args);
}

export const identity = <T>(v: T): T => v;

export const returns = <T>(v: T): ((..._args: unknown[]) => T) => (
  ..._args: unknown[]
) => v;

const _alwaysFalse = returns(false);
export const alwaysFalse: (..._args: unknown[]) => boolean = _alwaysFalse;

const _alwaysTrue = returns(true);
export const alwaysTrue: (..._args: unknown[]) => boolean = _alwaysTrue;

const _ignore = returns<void>(undefined);
export const ignore: (..._args: unknown[]) => void = _ignore;

export const increment = (x: number) => x + 1;

export const incrementBy = (incr: number): Updater<number> => (x: number) =>
  x + incr;

export const decrement = (x: number) => x - 1;

export const decrementBy = (decr: number): Updater<number> => (x: number) =>
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

export const updaterReducer = <T>(acc: T, updater: Updater<T>) => updater(acc);

export function pipe<T, A>(src: T, op1: Function1<T, A>): A;
export function pipe<T, A, B>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
): B;
export function pipe<T, A, B, C>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
): C;
export function pipe<T, A, B, C, D>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
): D;
export function pipe<T, A, B, C, D, E>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
): E;
export function pipe<T, A, B, C, D, E, F>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
): F;
export function pipe<T, A, B, C, D, E, F, G>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
): G;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
): H;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
): I;
export function pipe<T, A, B, C, D, E, F, G, H, I, J>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
  op10: Function1<I, J>,
): J;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
  op10: Function1<I, J>,
  op11: Function1<J, K>,
): K;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K, L>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
  op10: Function1<I, J>,
  op11: Function1<J, K>,
  op12: Function1<K, L>,
): L;

export function pipe(
  source: unknown,
  ...operators: Function1<any, unknown>[]
): unknown;

/**
 * Pipes the source value through a series of unary functions.
 */
export function pipe(
  source: unknown,
  ...operators: Function1<unknown, unknown>[]
): unknown {
  return operators.reduce(updaterReducer, source);
}

export function compose<T, A, B>(
  op1: Function1<T, A>,
  op2: Function1<A, B>,
): Function1<T, B>;
export function compose<T, A, B, C>(
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
): Function1<T, C>;
export function compose<T, A, B, C, D>(
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
): Function1<T, D>;
export function compose<T, A, B, C, D, E>(
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
): Function1<T, E>;
export function compose<T, A, B, C, D, E, F>(
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
): Function1<T, F>;
export function compose<T, A, B, C, D, E, F, G>(
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
): Function1<T, G>;
export function compose<T, A, B, C, D, E, F, G, H>(
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
): Function1<T, H>;
export function compose<T, A, B, C, D, E, F, G, H, I>(
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
): Function1<T, I>;
export function compose<T, A, B, C, D, E, F, G, H, I, J>(
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
  op10: Function1<I, J>,
): Function1<T, J>;
export function compose<T, A, B, C, D, E, F, G, H, I, J, K>(
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
  op10: Function1<I, J>,
  op11: Function1<J, K>,
): Function1<T, K>;
export function compose<T, A, B, C, D, E, F, G, H, I, J, K, L>(
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
  op10: Function1<I, J>,
  op11: Function1<J, K>,
  op12: Function1<K, L>,
): Function1<T, L>;

/**
 * composes the source value through a series of unary functions.
 */
export function compose(
  ...operators: Function1<unknown, unknown>[]
): Function1<unknown, unknown> {
  return source => operators.reduce(updaterReducer, source);
}

export const composeWith = <T, A, B>(
  op2: Function1<A, B>,
): Function1<Function1<T, A>, Function1<T, B>> => op1 => compose(op1, op2);

export function defer<T, A>(src: T, op1: Function1<T, A>): Factory<A>;
export function defer<T, A, B>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
): Factory<B>;
export function defer<T, A, B, C>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
): Factory<C>;
export function defer<T, A, B, C, D>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
): Factory<D>;
export function defer<T, A, B, C, D, E>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
): Factory<E>;
export function defer<T, A, B, C, D, E, F>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
): Factory<F>;
export function defer<T, A, B, C, D, E, F, G>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
): Factory<G>;
export function defer<T, A, B, C, D, E, F, G, H>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
): Factory<H>;
export function defer<T, A, B, C, D, E, F, G, H, I>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
): Factory<I>;
export function defer<T, A, B, C, D, E, F, G, H, I, J>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
  op10: Function1<I, J>,
): Factory<J>;
export function defer<T, A, B, C, D, E, F, G, H, I, J, K>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
  op10: Function1<I, J>,
  op11: Function1<J, K>,
): Factory<K>;
export function defer<T, A, B, C, D, E, F, G, H, I, J, K, L>(
  src: T,
  op1: Function1<T, A>,
  op2: Function1<A, B>,
  op3: Function1<B, C>,
  op4: Function1<C, D>,
  op5: Function1<D, E>,
  op6: Function1<E, F>,
  op7: Function1<F, G>,
  op8: Function1<G, H>,
  op9: Function1<H, I>,
  op10: Function1<I, J>,
  op11: Function1<J, K>,
  op12: Function1<K, L>,
): Factory<L>;

export function defer(
  source: unknown,
  ...operators: Function1<any, unknown>[]
): Factory<unknown>;

/**
 * Pipes the source value through a series of unary functions.
 */
export function defer(
  source: unknown,
  ...operators: Function1<unknown, unknown>[]
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
