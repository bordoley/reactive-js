/**
 * Compare two values to determine their relative ordering.
 * 
 * @returns A signed number indicating the relative order of `a` and `b`:
 *   - If less than 0, `a` is less `b`.
 *   - If 0, `a` equals `b`.
 *   - If greater than 0, `a` is greater than `b`.
 */
export type Comparator<T> = (a: T, b: T) => number;

/**
 * Compare two values for equality.
 * 
 * @returns true if `a` is equals to `b`, otherwise false
 */
export type Equality<T> = (a: T, b: T) => boolean;

/**
 * A function that returns instances of type `T`.
 */
export type Factory<T> = () => T;

/**
 * Computes a new value of type `T` from the previous value of type `T`.
 */
export type Updater<T> = (prev: T) => T;

/**
 * A one argument predicate function.
 */
export type Predicate<T> = (a: T) => boolean;

/**
 * A type guard function that performs a runtime check
 * guaranteeing `v` is of type `TB`.
 * 
 * @returns `true` if v is an instance of type `TB`, otherwise false. 
 */
export type TypePredicate<TA, TB extends TA> = (v: TA) => v is TB;

/**
 * A pure function that takes the current accumulator and next value, 
 * returning the next accumulated value.
 */
export type Reducer<T, TAcc> = (acc: TAcc, next: T) => TAcc;

/**
 * A one argument function that returns a value of type `T`.
 */
export type Function1<TA, T> = (a: TA) => T;

/**
 * A two argument function that returns a value of type `T`.
 */
export type Function2<TA, TB, T> = (a: TA, b: TB) => T;

/**
 * A three argument function that returns a value of type `T`.
 */
export type Function3<TA, TB, TC, T> = (a: TA, b: TB, c: TC) => T;

/**
 * A four argument function that returns a value of type `T`.
 */
export type Function4<TA, TB, TC, TD, T> = (a: TA, b: TB, c: TC, d: TD) => T;

/**
 * A five argument function that returns a value of type `T`.
 */
export type Function5<TA, TB, TC, TD, TE, T> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
) => T;

/**
 * A six argument function that returns a value of type `T`.
 */
export type Function6<TA, TB, TC, TD, TE, TF, T> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
) => T;

/**
 * A seven argument function that returns a value of type `T`.
 */
export type Function7<TA, TB, TC, TD, TE, TF, TG, T> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
  g: TG,
) => T;

/**
 * An eight argument function that returns a value of type `T`.
 */
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

/**
 * A nine argument function that returns a value of type `T`.
 */
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

/**
 * A function that takes no arguments and performs a side-effect.
 */
export type SideEffect = () => void;

/**
 * A function that takes one argument and performs a side-effect.
 */
export type SideEffect1<TA> = (a: TA) => void;

/**
 * A function that takes two arguments and performs a side-effect.
 */
export type SideEffect2<TA, TB> = (a: TA, b: TB) => void;

/**
 * A function that takes three arguments and performs a side-effect.
 */
export type SideEffect3<TA, TB, TC> = (a: TA, b: TB, c: TC) => void;

/**
 * A function that takes four arguments and performs a side-effect.
 */
export type SideEffect4<TA, TB, TC, TD> = (a: TA, b: TB, c: TC, d: TD) => void;

/**
 * A function that takes five arguments and performs a side-effect.
 */
export type SideEffect5<TA, TB, TC, TD, TE> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
) => void;

/**
 * A function that takes six arguments and performs a side-effect.
 */
export type SideEffect6<TA, TB, TC, TD, TE, TF> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
) => void;

/**
 * A function that takes seven arguments and performs a side-effect.
 */
export type SideEffect7<TA, TB, TC, TD, TE, TF, TG> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
  g: TG,
) => void;

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

/**
 * A function operator that invokes a function with a given list of arguments.
 * 
 * @returns A function that takes a function `f` as an argument 
 * and invokes it with the provided arguments, returning the result.
 */
export function callWith<T>(
  ...args: readonly any[]
): Function1<(...args: readonly any[]) => T, T> {
  return f => f(...args);
}

/**
 * The identity function.
 * 
 * @returns `v`
 */
export const identity = <T>(v: T): T => v;

/**
 * Returns a function that takes an arbitrary number of arguments and always returns `v`.
 */
export const returns = <T>(v: T): ((..._args: unknown[]) => T) => (
  ..._args: unknown[]
) => v;

/**
 * A function that always returns `false`.
 */
export const alwaysFalse = (..._args: unknown[]) => false;


/**
 * A function that always returns `true`.
 */
export const alwaysTrue = (..._args: unknown[]) => true;

/**
 * A function that always returns `undefined`.
 */
export const ignore = (..._args: unknown[]) =>  { return undefined };

/**
 * An updater function that returns the result of incrementing `x`.
 */
export const increment = (x: number) => x + 1;

/**
 * Returns a function that increments a number `x` by the value `incr`.
 */
export const incrementBy = (incr: number): Updater<number> => (x: number) =>
  x + incr;

/**
 * An updater function that returns the result of decrementing `x`.
 */
export const decrement = (x: number) => x - 1;

/**
 * Returns a function that decrements a number `x` by the value `decr`.
 */
export const decrementBy = (decr: number): Updater<number> => (x: number) =>
  x - decr;

/**
 * The javascript strict equality function.
 */
export const strictEquality = <T>(a: T, b: T) => a === b;

const isStrictlyEqualTo = <T>(b: T): Predicate<T> => a => a === b;

/**
 * Returns a predicate function comparing its argument to `b` using the
 * provided `equality` function.
 */
export const isEqualTo = <T>(
  b: T,
  equality: Equality<T> = strictEquality,
): Predicate<T> =>
  equality === strictEquality ? isStrictlyEqualTo(b) : (a: T) => equality(a, b);

/**
 * Returns `true` if `x` is an even number, otherwise `false`.
 */ 
export const isEven = (x: number): boolean => x % 2 === 0;

/**
 * Returns `true` if `x` is an odd number, otherwise `false`.
 */
export const isOdd = (x: number): boolean => x % 2 !== 0;

/**
 * Applies logical negation to the value `v`.
 */
export const negate = (v: boolean): boolean => !v;

/**
 * A function that returns the result of summing 
 * it's arguments.
 */
export const sum = (...args: number[]) => {
  let acc = 0;
  for (let i = 0; i < args.length; i++) {
    acc += args[i];
  }
  return acc;
};

/**
 * Returns an equality function that compares two readonly arrays for equality,
 * comparing their values using `valuesEquality`.
 */
export const arrayEquality = <T>(
  valuesEquality: Equality<T> = strictEquality,
): Equality<readonly T[]> => (a: readonly T[], b: readonly T[]) =>
  a.length === b.length && a.every((v, i) => valuesEquality(b[i], v));

/**
 * A `Reducer` functions that applies `updater` to `acc` to compute the next
 * accumulator value.
 */
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
 * Pipes `source` through a series of unary functions.
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
 * Composes a series of unary functions.
 */
export function compose(
  ...operators: Function1<unknown, unknown>[]
): Function1<unknown, unknown> {
  return source => pipe(source, ...operators);
}

/**
 * Returns a function that composes its operator with `op2`.
 */
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
 * Returns a `Factory` function that defers the evaluation of piping 
 * `source` through the provided operators.
 */
export function defer(
  source: unknown,
  ...operators: Function1<unknown, unknown>[]
): Factory<unknown> {
  return () => pipe(source, ...operators);
}

export function flip<TA, TB, T>(f: Function2<TA, TB, T>): Function2<TB, TA, T>;
export function flip<TA, TB, TC, T>(
  f: Function3<TA, TB, TC, T>,
): Function3<TC, TB, TA, T>;

/**
 * Returns a function that flips the order of arguments passed to `f`.
 */
export function flip<T>(f: (...args: any[]) => T): (...args: any[]) => T {
  return (...args) => {
    args.reverse();
    return f(...args);
  };
}
