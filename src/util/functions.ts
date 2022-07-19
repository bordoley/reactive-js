export type ConstructorOf<T = unknown> = new (...args: readonly any[]) => T;

export type Constructor<T> = new () => T;
export type Constructor1<TA, T> = new (a: TA) => T;
export type Constructor2<TA, TB, T> = new (a: TA, b: TB) => T;
export type Constructor3<TA, TB, TC, T> = new (a: TA, b: TB, c: TC) => T;
export type Constructor4<TA, TB, TC, TD, T> = new (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
) => T;

export type Factory<T> = () => T;
export type Function1<TA, T> = (a: TA) => T;
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

export type Identity<T> = Function1<T, T>;

/**
 * Compare two values to determine their relative ordering.
 *
 * @returns A signed number indicating the relative order of `a` and `b`:
 *   - If less than 0, `a` is less `b`.
 *   - If 0, `a` equals `b`.
 *   - If greater than 0, `a` is greater than `b`.
 */
export type Comparator<T> = Function2<T, T, number>;

/**
 * Compare two values for equality.
 *
 * @returns true if `a` is equals to `b`, otherwise false
 */
export type Equality<T> = Function2<T, T, boolean>;

/**
 * Computes a new value of type `T` from the previous value of type `T`.
 */
export type Updater<T> = Function1<T, T>;

/**
 * A one argument predicate function.
 */
export type Predicate<T> = Function1<T, boolean>;

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
export type Reducer<T, TAcc> = Function2<TAcc, T, TAcc>;

export type SideEffect = () => void;
export type SideEffect1<TA> = (a: TA) => void;
export type SideEffect2<TA, TB> = (a: TA, b: TB) => void;
export type SideEffect3<TA, TB, TC> = (a: TA, b: TB, c: TC) => void;
export type SideEffect4<TA, TB, TC, TD> = (a: TA, b: TB, c: TC, d: TD) => void;
export type SideEffect5<TA, TB, TC, TD, TE> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
) => void;
export type SideEffect6<TA, TB, TC, TD, TE, TF> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
) => void;
export type SideEffect7<TA, TB, TC, TD, TE, TF, TG> = (
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
  g: TG,
) => void;

interface CallWith {
  <T>(): Function1<Factory<T>, T>;
  <TA, T>(a: TA): Function1<Function1<TA, T>, T>;
  <TA, TB, T>(a: TA, b: TB): Function1<Function2<TA, TB, T>, T>;
  <TA, TB, TC, T>(a: TA, b: TB, c: TC): Function1<Function3<TA, TB, TC, T>, T>;
  <TA, TB, TC, TD, T>(a: TA, b: TB, c: TC, d: TD): Function1<
    Function4<TA, TB, TC, TD, T>,
    T
  >;
}

/**
 * A function operator that invokes a function with a given list of arguments.
 *
 * @returns A function that takes a function `f` as an argument
 * and invokes it with the provided arguments, returning the result.
 */
export const callWith: CallWith =
  <T>(...args: readonly any[]) =>
  (f: (...args: readonly any[]) => T) =>
    f(...args);

/**
 * The identity function.
 *
 * @returns `v`
 */
export const identity = <T>(v: T): T => v;

export const isEmpty = (arr: readonly unknown[] | string): boolean =>
  getLength(arr) === 0;

export const getLength = (arr: readonly unknown[] | string): number =>
  arr.length;

/**
 * Returns a function that takes an arbitrary number of arguments and always returns `v`.
 */
export const returns =
  <T>(v: T): ((..._args: unknown[]) => T) =>
  (..._args: unknown[]) =>
    v;

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
export const ignore = (..._args: unknown[]): void => {
  return undefined;
};

/**
 * An updater function that returns the result of incrementing `x`.
 */
export const increment = (x: number) => x + 1;

/**
 * Returns a function that increments a number `x` by the value `incr`.
 */
export const incrementBy =
  (incr: number): Updater<number> =>
  (x: number) =>
    x + incr;

/**
 * An updater function that returns the result of decrementing `x`.
 */
export const decrement = (x: number) => x - 1;

/**
 * Returns a function that decrements a number `x` by the value `decr`.
 */
export const decrementBy =
  (decr: number): Updater<number> =>
  (x: number) =>
    x - decr;

/**
 * The javascript strict equality function.
 */
export const strictEquality = <T>(a: T, b: T) => a === b;

const isStrictlyEqualTo =
  <T>(b: T): Predicate<T> =>
  a =>
    a === b;

/**
 * Returns a predicate function comparing its argument to `b` using the
 * provided `equality` function.
 */
export const isEqualTo = <T>(
  b: T,
  options: { equality?: Equality<T> } = { equality: strictEquality },
): Predicate<T> => {
  const equality = options.equality ?? strictEquality;
  return equality === strictEquality
    ? isStrictlyEqualTo(b)
    : (a: T) => equality(a, b);
};

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
 * Throws a javascript error using the provided message.
 */
export const raise = <T>(message?: unknown): T => {
  if (message === undefined || typeof message === "string") {
    throw newInstance(Error, message);
  } else {
    throw message;
  }
};

/**
 * A function that returns the result of summing
 * it's arguments.
 */
export const sum = (...args: number[]) => {
  let acc = 0;
  for (let i = 0; i < getLength(args); i++) {
    acc += args[i];
  }
  return acc;
};

/**
 * Returns an equality function that compares two readonly arrays for equality,
 * comparing their values using `valuesEquality`.
 */
export const arrayEquality =
  <T>(valuesEquality: Equality<T> = strictEquality): Equality<readonly T[]> =>
  (a: readonly T[], b: readonly T[]) =>
    getLength(a) === getLength(b) && a.every((v, i) => valuesEquality(b[i], v));

/**
 * A `Reducer` functions that applies `updater` to `acc` to compute the next
 * accumulator value.
 */
export const updateReducer = <T>(acc: T, updater: Updater<T>) => updater(acc);

interface Pipe {
  <T, A>(src: T, op1: Function1<T, A>): A;
  <T, A, B>(src: T, op1: Function1<T, A>, op2: Function1<A, B>): B;
  <T, A, B, C>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
  ): C;
  <T, A, B, C, D>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
  ): D;
  <T, A, B, C, D, E>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
  ): E;
  <T, A, B, C, D, E, F>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
  ): F;
  <T, A, B, C, D, E, F, G>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
  ): G;
  <T, A, B, C, D, E, F, G, H>(
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
  <T, A, B, C, D, E, F, G, H, I>(
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
  <T, A, B, C, D, E, F, G, H, I, J>(
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
  <T, A, B, C, D, E, F, G, H, I, J, K>(
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
  <T, A, B, C, D, E, F, G, H, I, J, K, L>(
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
}

/**
 * Pipes `source` through a series of unary functions.
 */
export const pipe: Pipe = (
  source: unknown,
  ...operators: Function1<any, unknown>[]
): unknown => {
  return pipeUnsafe(source, ...operators);
};

/**
 * Pipes `source` through a series of unary functions.
 */
export const pipeUnsafe = (
  source: unknown,
  ...operators: Function1<unknown, unknown>[]
): unknown => operators.reduce(updateReducer, source);

interface Compose {
  <T, A, B>(op1: Function1<T, A>, op2: Function1<A, B>): Function1<T, B>;
  <T, A, B, C>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
  ): Function1<T, C>;
  <T, A, B, C, D>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
  ): Function1<T, D>;
  <T, A, B, C, D, E>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
  ): Function1<T, E>;
  <T, A, B, C, D, E, F>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
  ): Function1<T, F>;
  <T, A, B, C, D, E, F, G>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
  ): Function1<T, G>;
  <T, A, B, C, D, E, F, G, H>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
    op8: Function1<G, H>,
  ): Function1<T, H>;
  <T, A, B, C, D, E, F, G, H, I>(
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
  <T, A, B, C, D, E, F, G, H, I, J>(
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
  <T, A, B, C, D, E, F, G, H, I, J, K>(
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
  <T, A, B, C, D, E, F, G, H, I, J, K, L>(
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
}

/**
 * Composes a series of unary functions.
 */
export const compose: Compose =
  (...operators: Function1<unknown, unknown>[]): Function1<unknown, unknown> =>
  source =>
    pipeUnsafe(source, ...operators);

interface PipeLazy {
  <T, A>(src: T, op1: Function1<T, A>): Factory<A>;
  <T, A, B>(src: T, op1: Function1<T, A>, op2: Function1<A, B>): Factory<B>;
  <T, A, B, C>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
  ): Factory<C>;
  <T, A, B, C, D>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
  ): Factory<D>;
  <T, A, B, C, D, E>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
  ): Factory<E>;
  <T, A, B, C, D, E, F>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
  ): Factory<F>;
  <T, A, B, C, D, E, F, G>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
  ): Factory<G>;
  <T, A, B, C, D, E, F, G, H>(
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
  <T, A, B, C, D, E, F, G, H, I>(
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
  <T, A, B, C, D, E, F, G, H, I, J>(
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
  <T, A, B, C, D, E, F, G, H, I, J, K>(
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
  <T, A, B, C, D, E, F, G, H, I, J, K, L>(
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
}

/**
 * Returns a `Factory` function that pipes the `source` through the provided operators.
 */
export const pipeLazy: PipeLazy =
  (
    source: unknown,
    ...operators: Function1<unknown, unknown>[]
  ): Factory<unknown> =>
  () =>
    pipeUnsafe(source, ...operators);

interface Flip {
  <TA, TB, T>(f: Function2<TA, TB, T>): Function2<TB, TA, T>;
  <TA, TB, TC, T>(f: Function3<TA, TB, TC, T>): Function3<TC, TB, TA, T>;
}

/**
 * Returns a function that flips the order of arguments passed to `f`.
 */
export const flip: Flip =
  (f: (...args: unknown[]) => unknown) =>
  (...args: unknown[]) => {
    args.reverse();
    return f(...args);
  };

export const { max, min, floor } = Math;

const _newInstance = (
  Constructor: new (...args: readonly any[]) => any,
  ...args: readonly any[]
): any => new Constructor(...args);

interface NewInstance {
  <T>(Constructor: Constructor<T>): T;
  <T, TA>(Constructor: Constructor1<TA, T>, a: TA): T;
  <T, TA, TB>(Constructor: Constructor2<TA, TB, T>, a: TA, b: TB): T;
  <T, TA, TB, TC>(
    Constructor: Constructor3<TA, TB, TC, T>,
    a: TA,
    b: TB,
    c: TC,
  ): T;
  <T, TA, TB, TC, TD>(
    Constructor: Constructor4<TA, TB, TC, TD, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): T;
}
export const newInstance: NewInstance = (
  Constructor: new (...args: readonly any[]) => any,
  ...args: readonly any[]
): any => _newInstance(Constructor, ...args);

interface NewInstanceWith {
  <T>(): Function1<Constructor<T>, T>;
  <T, TA>(a: TA): Function1<Constructor1<TA, T>, T>;
  <T, TA, TB>(a: TA, b: TB): Function1<Constructor2<TA, TB, T>, T>;
  <T, TA, TB, TC>(a: TA, b: TB, c: TC): Function1<
    Constructor3<TA, TB, TC, T>,
    T
  >;
  <T, TA, TB, TC, TD>(a: TA, b: TB, c: TC, d: TD): Function1<
    Constructor4<TA, TB, TC, TD, T>,
    T
  >;
}

export const newInstanceWith: NewInstanceWith =
  (
    ...args: readonly any[]
  ): Function1<new (...args: readonly any[]) => any, any> =>
  Constructor =>
    _newInstance(Constructor, ...args);

interface InstanceFactory {
  <T>(): Function1<Constructor<T>, Factory<T>>;
  <T, TA>(): Function1<Constructor1<TA, T>, Function1<TA, T>>;
  <T, TA, TB>(): Function1<Constructor2<TA, TB, T>, Function2<TA, TB, T>>;
  <T, TA, TB, TC>(): Function1<
    Constructor3<TA, TB, TC, T>,
    Function3<TA, TB, TC, T>
  >;
}

export const instanceFactory: InstanceFactory =
  () =>
  (Constructor: new (...args: readonly any[]) => any) =>
  (...args: readonly any[]) =>
    _newInstance(Constructor, ...args);
