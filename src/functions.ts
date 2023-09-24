import { __DEV__ } from "./__internal__/constants.js";

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
 * Represents an unboxed value of type T or undefined.
 */
export type Optional<T = unknown> = T | undefined;

/**
 * A one argument predicate function.
 */
export type Predicate<T> = Function1<T, boolean>;

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

export type Tuple2<TA, TB> = readonly [TA, TB];
export type Tuple3<TA, TB, TC> = readonly [TA, TB, TC];
export type Tuple4<TA, TB, TC, TD> = readonly [TA, TB, TC, TD];
export type Tuple5<TA, TB, TC, TD, TE> = readonly [TA, TB, TC, TD, TE];
export type Tuple6<TA, TB, TC, TD, TE, TF> = readonly [TA, TB, TC, TD, TE, TF];
export type Tuple7<TA, TB, TC, TD, TE, TF, TG> = readonly [
  TA,
  TB,
  TC,
  TD,
  TE,
  TF,
  TG,
];
export type Tuple8<TA, TB, TC, TD, TE, TF, TG, TH> = readonly [
  TA,
  TB,
  TC,
  TD,
  TE,
  TF,
  TG,
  TH,
];
export type Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI> = readonly [
  TA,
  TB,
  TC,
  TD,
  TE,
  TF,
  TG,
  TH,
  TI,
];

/**
 * A type guard function that performs a runtime check
 * guaranteeing `v` is of type `TB`.
 *
 * @returns `true` if v is an instance of type `TB`, otherwise false.
 */
export type TypePredicate<TA, TB extends TA> = (v: TA) => v is TB;

/**
 * Computes a new value of type `T` from the previous value of type `T`.
 */
export type Updater<T> = Function1<T, T>;

interface FunctionsModule {
  /**
   * An alias for undefined.
   */
  readonly none: undefined;

  /**
   * A function that always returns `false`.
   */
  alwaysFalse(..._args: unknown[]): boolean;

  /**
   * A function that always returns `true`.
   */
  alwaysTrue(..._args: unknown[]): true;

  /**
   * Returns an equality function that compares two readonly arrays for equality,
   * comparing their values using `valuesEquality`.
   */
  arrayEquality<T>(valuesEquality?: Equality<T>): Equality<readonly T[]>;

  // eslint-disable-next-line @typescript-eslint/ban-types
  bind<F extends Function>(f: F, thiz: unknown): F;

  bindMethod<
    // eslint-disable-next-line @typescript-eslint/ban-types
    T extends Record<TKey, (...args: any[]) => any>,
    TKey extends number | string | symbol,
  >(
    thiz: T,
    key: TKey,
  ): T[TKey];

  call<TInstance, T>(f: () => T, self: TInstance): T;
  call<TInstance, T, TA>(f: (a: TA) => T, self: TInstance, a: TA): T;
  call<TInstance, T, TA, TB>(
    f: (a: TA, b: TB) => T,
    self: TInstance,
    a: TA,
    b: TB,
  ): T;

  /**
   * Composes a series of unary functions.
   */
  compose<T, A, B>(op1: Function1<T, A>, op2: Function1<A, B>): Function1<T, B>;
  compose<T, A, B>(op1: Function1<T, A>, op2: Function1<A, B>): Function1<T, B>;
  compose<T, A, B, C>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
  ): Function1<T, C>;
  compose<T, A, B, C, D>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
  ): Function1<T, D>;
  compose<T, A, B, C, D, E>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
  ): Function1<T, E>;
  compose<T, A, B, C, D, E, F>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
  ): Function1<T, F>;
  compose<T, A, B, C, D, E, F, G>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
  ): Function1<T, G>;
  compose<T, A, B, C, D, E, F, G, H>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
    op8: Function1<G, H>,
  ): Function1<T, H>;
  compose<T, A, B, C, D, E, F, G, H, I>(
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
  compose<T, A, B, C, D, E, F, G, H, I, J>(
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
  compose<T, A, B, C, D, E, F, G, H, I, J, K>(
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
  compose<T, A, B, C, D, E, F, G, H, I, J, K, L>(
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

  composeLazy<T, A>(op1: Function1<T, A>): Function1<T, Factory<A>>;
  composeLazy<T, A, B>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
  ): Function1<T, Factory<B>>;
  composeLazy<T, A, B, C>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
  ): Function1<T, Factory<C>>;
  composeLazy<T, A, B, C, D>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
  ): Function1<T, Factory<D>>;
  composeLazy<T, A, B, C, D, E>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
  ): Function1<T, Factory<E>>;
  composeLazy<T, A, B, C, D, E, F>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
  ): Function1<T, Factory<F>>;
  composeLazy<T, A, B, C, D, E, F, G>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
  ): Function1<T, Factory<G>>;
  composeLazy<T, A, B, C, D, E, F, G, H>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
    op8: Function1<G, H>,
  ): Function1<T, Factory<H>>;
  composeLazy<T, A, B, C, D, E, F, G, H, I>(
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
    op8: Function1<G, H>,
    op9: Function1<H, I>,
  ): Function1<T, Factory<I>>;
  composeLazy<T, A, B, C, D, E, F, G, H, I, J>(
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
  ): Function1<T, Factory<J>>;
  composeLazy<T, A, B, C, D, E, F, G, H, I, J, K>(
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
  ): Function1<T, Factory<K>>;
  composeLazy<T, A, B, C, D, E, F, G, H, I, J, K, L>(
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
  ): Function1<T, Factory<L>>;

  /**
   * An updater function that returns the result of decrementing `x`.
   */
  decrement(x: number): number;

  /**
   * Returns a function that decrements a number `x` by the value `decr`.
   */
  decrementBy(decr: number): Updater<number>;

  error(message?: unknown): Error;
  errorWithDebugMessage(message: string): Error;

  greaterThan(v: number): Predicate<number>;

  /**
   * The identity function.
   *
   * @returns `v`
   */
  identity<T>(v: T): T;

  identityLazy<T>(): Updater<T>;

  /**
   * A function that always returns `undefined`.
   */
  ignore(..._args: unknown[]): void;

  /**
   * An updater function that returns the result of incrementing `x`.
   */
  increment(x: number): number;

  /**
   * Enables invoking a method on an object as a unary function within
   * a pipeline operation.
   *
   * @param method
   * @param args
   * @returns
   */
  invoke<
    T extends Record<TKey, (...args: any[]) => any>,
    TKey extends number | string | symbol,
  >(
    method: TKey,
    ...args: Parameters<T[TKey]>
  ): Function1<T, ReturnType<T[TKey]>>;

  /**
   * Returns a function that increments a number `x` by the value `incr`.
   */
  incrementBy(incr: number): Updater<number>;

  /**
   * Returns a predicate function comparing its argument to `b` using the
   * provided `equality` function.
   */
  isEqualTo<T>(
    b: T,
    options?: {
      readonly equality?: Equality<T>;
    },
  ): Predicate<T>;

  /**
   * Returns `true` if `x` is an even number, otherwise `false`.
   */
  readonly isEven: Predicate<number>;

  isFalse(v: boolean): v is false;

  // eslint-disable-next-line @typescript-eslint/ban-types
  isFunction(f: unknown): f is Function;

  /**
   * Returns true if `option` is `none`.
   */
  isNone<T>(option: Optional<T>): option is undefined;

  isNotEqualTo<T>(
    b: T,
    options?: {
      readonly equality?: Equality<T> | undefined;
    },
  ): Predicate<T>;

  isNumber(n: unknown): n is number;

  /**
   * Predicate that returns `true` if `x` is an odd number, otherwise `false`.
   */
  readonly isOdd: Predicate<number>;

  isObject(o: unknown): o is object;

  isPromise(v: unknown): v is Promise<unknown>;

  isReadonlyArray<T = unknown>(o: unknown): o is readonly T[];

  isString(o: unknown): o is string;

  /**
   * Returns true if `option` is not `none`.
   */
  isSome<T>(v: Optional<T>): v is T;

  isTrue(v: boolean): v is true;

  lessThan(v: number): Predicate<number>;

  /**
   * Applies logical negation to the value `v`.
   */
  negate(v: boolean): boolean;

  newInstance<T>(Constructor: Constructor<T>): T;
  newInstance<T, TA>(Constructor: Constructor1<TA, T>, a: TA): T;
  newInstance<T, TA, TB>(Constructor: Constructor2<TA, TB, T>, a: TA, b: TB): T;
  newInstance<T, TA, TB, TC>(
    Constructor: Constructor3<TA, TB, TC, T>,
    a: TA,
    b: TB,
    c: TC,
  ): T;
  newInstance<T, TA, TB, TC, TD>(
    Constructor: Constructor4<TA, TB, TC, TD, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): T;

  partial<TA, TB, TOut>(
    b: TB,
  ): Function1<Function2<TA, TB, TOut>, Function1<TA, TOut>>;
  partial<TA, TB, TC, TOut>(
    b: TB,
    c: TC,
  ): Function1<Function3<TA, TB, TC, TOut>, Function1<TA, TOut>>;
  partial<TA, TB, TC, TD, TOut>(
    b: TB,
    c: TC,
    d: TD,
  ): Function1<Function4<TA, TB, TC, TD, TOut>, Function1<TA, TOut>>;

  pick<T, TKey extends keyof T>(key: TKey): Function1<T, T[TKey]>;
  pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(
    keyA: TKeyA,
    keyB: TKeyB,
  ): Function1<T, T[TKeyA][TKeyB]>;
  pick<
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
    TKeyC extends keyof T[TKeyA][TKeyB],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
    keyC: TKeyC,
  ): Function1<T, T[TKeyA][TKeyB][TKeyC]>;

  pickUnsafe<T = unknown>(
    ...keys: (string | symbol | number)[]
  ): // eslint-disable-next-line @typescript-eslint/ban-types
  Function1<{}, T>;

  /**
   * Pipes `source` through a series of unary functions.
   */
  pipe<T, A>(src: T, op1: Function1<T, A>): A;
  pipe<T, A, B>(src: T, op1: Function1<T, A>, op2: Function1<A, B>): B;
  pipe<T, A, B, C>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
  ): C;
  pipe<T, A, B, C, D>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
  ): D;
  pipe<T, A, B, C, D, E>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
  ): E;
  pipe<T, A, B, C, D, E, F>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
  ): F;
  pipe<T, A, B, C, D, E, F, G>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
  ): G;
  pipe<T, A, B, C, D, E, F, G, H>(
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
  pipe<T, A, B, C, D, E, F, G, H, I>(
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
  pipe<T, A, B, C, D, E, F, G, H, I, J>(
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
  pipe<T, A, B, C, D, E, F, G, H, I, J, K>(
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
  pipe<T, A, B, C, D, E, F, G, H, I, J, K, L>(
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

  pipeAsync<T, A>(src: T, op1: Function1<T, A | Promise<A>>): Promise<A>;
  pipeAsync<T, A, B>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
  ): Promise<B>;
  pipeAsync<T, A, B, C>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
  ): Promise<C>;
  pipeAsync<T, A, B, C, D>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
  ): Promise<D>;
  pipeAsync<T, A, B, C, D, E>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
  ): Promise<E>;
  pipeAsync<T, A, B, C, D, E, F>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
  ): Promise<F>;
  pipeAsync<T, A, B, C, D, E, F, G>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
  ): Promise<G>;
  pipeAsync<T, A, B, C, D, E, F, G, H>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
    op8: Function1<G, H | Promise<H>>,
  ): Promise<H>;
  pipeAsync<T, A, B, C, D, E, F, G, H, I>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
    op8: Function1<G, H | Promise<H>>,
    op9: Function1<H, I | Promise<I>>,
  ): Promise<I>;
  pipeAsync<T, A, B, C, D, E, F, G, H, I, J>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
    op8: Function1<G, H | Promise<H>>,
    op9: Function1<H, I | Promise<I>>,
    op10: Function1<I, J | Promise<J>>,
  ): Promise<J>;
  pipeAsync<T, A, B, C, D, E, F, G, H, I, J, K>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
    op8: Function1<G, H | Promise<H>>,
    op9: Function1<H, I | Promise<I>>,
    op10: Function1<I, J | Promise<J>>,
    op11: Function1<J, K | Promise<K>>,
  ): Promise<K>;
  pipeAsync<T, A, B, C, D, E, F, G, H, I, J, K, L>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
    op8: Function1<G, H | Promise<H>>,
    op9: Function1<H, I | Promise<I>>,
    op10: Function1<I, J | Promise<J>>,
    op11: Function1<J, K | Promise<K>>,
    op12: Function1<K, L | Promise<L>>,
  ): Promise<L>;

  pipeLazy<T, A>(src: T, op1: Function1<T, A>): Factory<A>;
  pipeLazy<T, A, B>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
  ): Factory<B>;
  pipeLazy<T, A, B, C>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
  ): Factory<C>;
  pipeLazy<T, A, B, C, D>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
  ): Factory<D>;
  pipeLazy<T, A, B, C, D, E>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
  ): Factory<E>;
  pipeLazy<T, A, B, C, D, E, F>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
  ): Factory<F>;
  pipeLazy<T, A, B, C, D, E, F, G>(
    src: T,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
  ): Factory<G>;
  pipeLazy<T, A, B, C, D, E, F, G, H>(
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
  pipeLazy<T, A, B, C, D, E, F, G, H, I>(
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
  pipeLazy<T, A, B, C, D, E, F, G, H, I, J>(
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
  pipeLazy<T, A, B, C, D, E, F, G, H, I, J, K>(
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
  pipeLazy<T, A, B, C, D, E, F, G, H, I, J, K, L>(
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

  pipeLazyAsync<T, A>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
  ): Factory<Promise<A>>;
  pipeLazyAsync<T, A, B>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
  ): Factory<Promise<B>>;
  pipeLazyAsync<T, A, B, C>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
  ): Factory<Promise<C>>;
  pipeLazyAsync<T, A, B, C, D>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
  ): Factory<Promise<D>>;
  pipeLazyAsync<T, A, B, C, D, E>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
  ): Factory<Promise<E>>;
  pipeLazyAsync<T, A, B, C, D, E, F>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
  ): Factory<Promise<F>>;
  pipeLazyAsync<T, A, B, C, D, E, F, G>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
  ): Factory<Promise<G>>;
  pipeLazyAsync<T, A, B, C, D, E, F, G, H>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
    op8: Function1<G, H | Promise<H>>,
  ): Factory<Promise<H>>;
  pipeLazyAsync<T, A, B, C, D, E, F, G, H, I>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
    op8: Function1<G, H | Promise<H>>,
    op9: Function1<H, I | Promise<I>>,
  ): Factory<Promise<I>>;
  pipeLazyAsync<T, A, B, C, D, E, F, G, H, I, J>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
    op8: Function1<G, H | Promise<H>>,
    op9: Function1<H, I | Promise<I>>,
    op10: Function1<I, J | Promise<J>>,
  ): Factory<Promise<J>>;
  pipeLazyAsync<T, A, B, C, D, E, F, G, H, I, J, K>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
    op8: Function1<G, H | Promise<H>>,
    op9: Function1<H, I | Promise<I>>,
    op10: Function1<I, J | Promise<J>>,
    op11: Function1<J, K | Promise<K>>,
  ): Factory<Promise<K>>;
  pipeLazyAsync<T, A, B, C, D, E, F, G, H, I, J, K, L>(
    src: T,
    op1: Function1<T, A | Promise<A>>,
    op2: Function1<A, B | Promise<B>>,
    op3: Function1<B, C | Promise<C>>,
    op4: Function1<C, D | Promise<D>>,
    op5: Function1<D, E | Promise<E>>,
    op6: Function1<E, F | Promise<F>>,
    op7: Function1<F, G | Promise<G>>,
    op8: Function1<G, H | Promise<H>>,
    op9: Function1<H, I | Promise<I>>,
    op10: Function1<I, J | Promise<J>>,
    op11: Function1<J, K | Promise<K>>,
    op12: Function1<K, L | Promise<L>>,
  ): Factory<Promise<L>>;

  pipeSome<T, A>(src: Optional<T>, op1: Function1<T, A>): Optional<A>;
  pipeSome<T, A, B>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
  ): Optional<B>;
  pipeSome<T, A, B, C>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
  ): Optional<C>;
  pipeSome<T, A, B, C, D>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
  ): Optional<D>;
  pipeSome<T, A, B, C, D, E>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
  ): Optional<E>;
  pipeSome<T, A, B, C, D, E, F>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
  ): Optional<F>;
  pipeSome<T, A, B, C, D, E, F, G>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
  ): Optional<G>;
  pipeSome<T, A, B, C, D, E, F, G, H>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
    op8: Function1<G, H>,
  ): Optional<H>;
  pipeSome<T, A, B, C, D, E, F, G, H, I>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
    op8: Function1<G, H>,
    op9: Function1<H, I>,
  ): Optional<I>;
  pipeSome<T, A, B, C, D, E, F, G, H, I, J>(
    src: Optional<T>,
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
  ): Optional<J>;
  pipeSome<T, A, B, C, D, E, F, G, H, I, J, K>(
    src: Optional<T>,
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
  ): Optional<K>;
  pipeSome<T, A, B, C, D, E, F, G, H, I, J, K, L>(
    src: Optional<T>,
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
  ): Optional<L>;

  pipeSomeLazy<T, A>(src: Optional<T>, op1: Function1<T, A>): Factory<A>;
  pipeSomeLazy<T, A, B>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
  ): Factory<B>;
  pipeSomeLazy<T, A, B, C>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
  ): Factory<C>;
  pipeSomeLazy<T, A, B, C, D>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
  ): Factory<D>;
  pipeSomeLazy<T, A, B, C, D, E>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
  ): Factory<E>;
  pipeSomeLazy<T, A, B, C, D, E, F>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
  ): Factory<F>;
  pipeSomeLazy<T, A, B, C, D, E, F, G>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
  ): Factory<G>;
  pipeSomeLazy<T, A, B, C, D, E, F, G, H>(
    src: Optional<T>,
    op1: Function1<T, A>,
    op2: Function1<A, B>,
    op3: Function1<B, C>,
    op4: Function1<C, D>,
    op5: Function1<D, E>,
    op6: Function1<E, F>,
    op7: Function1<F, G>,
    op8: Function1<G, H>,
  ): Factory<H>;
  pipeSomeLazy<T, A, B, C, D, E, F, G, H, I>(
    src: Optional<T>,
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
  pipeSomeLazy<T, A, B, C, D, E, F, G, H, I, J>(
    src: Optional<T>,
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
  pipeSomeLazy<T, A, B, C, D, E, F, G, H, I, J, K>(
    src: Optional<T>,
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
  pipeSomeLazy<T, A, B, C, D, E, F, G, H, I, J, K, L>(
    src: Optional<T>,
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

  /**
   * Pipes `source` through a series of unary functions.
   */
  pipeUnsafe<T = unknown>(
    source: unknown,
    ...operators: Function1<any, any>[]
  ): T;

  raise<T>(e?: unknown): T;

  raiseError<T>(e: Error): T;

  /**
   * Throws a javascript error using the provided message.
   */
  raiseWithDebugMessage<T>(message: string): T;

  /**
   * Returns a function that takes an arbitrary number of arguments and always returns `v`.
   */
  returns<T>(v: T): (..._args: unknown[]) => T;

  /**
   * The javascript strict equality function.
   */
  strictEquality<T>(a: T, b: T): boolean;

  tuple<TA, TB>(a: TA, b: TB): Tuple2<TA, TB>;
  tuple<TA, TB, TC>(a: TA, b: TB, c: TC): Tuple3<TA, TB, TC>;
  tuple<TA, TB, TC, TD>(a: TA, b: TB, c: TC): Tuple4<TA, TB, TC, TD>;
}

type Signature = FunctionsModule;

export const alwaysFalse: Signature["alwaysFalse"] = () => false;

export const alwaysTrue: Signature["alwaysTrue"] = () => true;

const arrayStrictEquality = <T>(a: readonly T[], b: readonly T[]) => {
  const { length } = a;

  if (a === b) {
    return true;
  }

  if (length !== b.length) {
    return false;
  }

  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

export const arrayEquality: Signature["arrayEquality"] = <T>(
  valuesEquality: Equality<T> = strictEquality,
): Equality<readonly T[]> =>
  valuesEquality === strictEquality
    ? arrayStrictEquality
    : (a: readonly T[], b: readonly T[]) =>
        a === b ||
        (a.length === b.length && a.every((v, i) => valuesEquality(b[i], v)));

// eslint-disable-next-line @typescript-eslint/ban-types
export const bind: Signature["bind"] = (f: Function, thiz: unknown) =>
  f.bind(thiz);

export const bindMethod: Signature["bindMethod"] = <
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends Record<TKey, (...args: any[]) => any>,
  TKey extends number | string | symbol,
>(
  thiz: T,
  key: TKey,
) => bind<T[TKey]>(thiz[key], thiz);

export const call: Signature["call"] = <T>(
  f: (...args: readonly unknown[]) => T,
  self: unknown,
  ...args: readonly any[]
) => f.call(self, ...args);

export const compose: Signature["compose"] = ((
    op1: Function1<any, any>,
    op2: Optional<Function1<any, any>>,
    op3: Optional<Function1<any, any>>,
    op4: Optional<Function1<any, any>>,
    op5: Optional<Function1<any, any>>,
    op6: Optional<Function1<any, any>>,
    op7: Optional<Function1<any, any>>,
    ...operators: Function1<any, unknown>[]
  ): Function1<any, unknown> =>
  source =>
    pipeUnsafe(
      source,
      op1,
      op2 as any,
      op3 as any,
      op4 as any,
      op5 as any,
      op6 as any,
      op7 as any,
      ...operators,
    )) as Signature["compose"];

export const composeLazy: Signature["composeLazy"] = ((
    op1: Function1<any, any>,
    op2: Optional<Function1<any, any>>,
    op3: Optional<Function1<any, any>>,
    op4: Optional<Function1<any, any>>,
    op5: Optional<Function1<any, any>>,
    op6: Optional<Function1<any, any>>,
    op7: Optional<Function1<any, any>>,
    ...operators: Function1<any, unknown>[]
  ) =>
  (source: unknown) =>
  () =>
    pipeUnsafe(
      source,
      op1,
      op2 as any,
      op3 as any,
      op4 as any,
      op5 as any,
      op6 as any,
      op7 as any,
      ...operators,
    )) as Signature["composeLazy"];

export const decrement: Signature["decrement"] = (x: number) => x - 1;

export const decrementBy: Signature["decrementBy"] =
  (decr: number) => (x: number) =>
    x - decr;

export const identity: Signature["identity"] = <T>(v: T) => v;

export const identityLazy: Signature["identityLazy"] = () => identity;

export const ignore: Signature["ignore"] = (..._args: unknown[]): void => {};

export const increment: Signature["increment"] = (x: number) => x + 1;

export const incrementBy: Signature["incrementBy"] =
  (incr: number) => (x: number) =>
    x + incr;

export const invoke: Signature["invoke"] =
  <
    T extends Record<TKey, (...args: any[]) => any>,
    TKey extends number | string | symbol,
  >(
    method: TKey,
    ...args: Parameters<T[TKey]>
  ) =>
  (obj: T) =>
    obj[method](...args);

export const isReadonlyArray: Signature["isReadonlyArray"] = Array.isArray;

export const isEqualTo: Signature["isEqualTo"] = /*@__PURE__*/ (() => {
  const isStrictlyEqualTo =
    <T>(b: T): Predicate<T> =>
    a =>
      a === b;

  return <T>(
    b: T,
    options: { readonly equality?: Equality<T> } = {
      equality: strictEquality,
    },
  ): Predicate<T> => {
    const equality = options.equality ?? strictEquality;
    return equality === strictEquality
      ? isStrictlyEqualTo(b)
      : (a: T) => equality(a, b);
  };
})();

export const isNotEqualTo: Signature["isNotEqualTo"] = /*@__PURE__*/ (() => {
  const isStrictlyNotEqualTo =
    <T>(b: T): Predicate<T> =>
    a =>
      a !== b;

  return <T>(
    b: T,
    options: { readonly equality?: Equality<T> } = {
      equality: strictEquality,
    },
  ): Predicate<T> => {
    const equality = options.equality ?? strictEquality;
    return equality === strictEquality
      ? isStrictlyNotEqualTo(b)
      : (a: T) => !equality(a, b);
  };
})();

export const isEven: Signature["isEven"] = (x: number) => x % 2 === 0;

export const isFalse: Signature["isFalse"] = (v: boolean): v is false => !v;

export const isFunction: Signature["isFunction"] = (
  f: unknown,
): // eslint-disable-next-line @typescript-eslint/ban-types
f is Function => typeof f === "function" || f instanceof Function;

export const isNumber: Signature["isNumber"] = (n: unknown): n is number =>
  typeof n === "number";

export const isObject: Signature["isObject"] = (o: unknown): o is object =>
  typeof o === "object";

export const isString: Signature["isString"] = (s: unknown): s is string =>
  typeof s === "string" || s instanceof String;

export const isOdd: Signature["isOdd"] = (x: number) => x % 2 !== 0;

export const isNone: Signature["isNone"] = <T>(
  option: Optional<T>,
): option is undefined => option === none;

const isPromise: Signature["isPromise"] = (v: unknown): v is Promise<unknown> =>
  v instanceof Promise || Promise.resolve(v) === v;

export const isSome: Signature["isSome"] = <T>(
  option: Optional<T>,
): option is T => option !== none;

export const isTrue: Signature["isTrue"] = (v: boolean): v is true => v;

export const greaterThan: Signature["greaterThan"] =
  (v: number) => (x: number) =>
    x > v;

export const lessThan: Signature["lessThan"] = (v: number) => (x: number) =>
  x < v;

export const negate: Signature["negate"] = (v: boolean) => !v;

export const newInstance: Signature["newInstance"] = (
  Constructor: new (...args: readonly any[]) => unknown,
  ...args: readonly unknown[]
): unknown => new Constructor(...args);

export const none: Signature["none"] = undefined;

export const partial: Signature["partial"] =
  (...args: readonly unknown[]) =>
  (f: (...args: readonly any[]) => unknown) =>
  (arg0: unknown) =>
    f(arg0, ...args);

export const pickUnsafe: Signature["pickUnsafe"] =
  (
    k1: string | symbol | number,
    k2: Optional<string | symbol | number>,
    k3: Optional<string | symbol | number>,
    ...keys: (string | symbol | number)[]
  ) =>
  // eslint-disable-next-line @typescript-eslint/ban-types
  (value: {}) => {
    let result: any = value;

    result = result[k1];
    result = k2 !== none ? result[k2] : result;
    result = k3 !== none ? result[k3] : result;

    const length = keys.length;
    if (length > 0) {
      for (const key of keys) {
        result = result[key];
      }
    }
    return result;
  };

export const pick: Signature["pick"] = pickUnsafe;

export const pipeUnsafe: Signature["pipeUnsafe"] = ((
  source: unknown,
  op1: Optional<Function1<any, any>>,
  op2: Optional<Function1<any, any>>,
  op3: Optional<Function1<any, any>>,
  op4: Optional<Function1<any, any>>,
  op5: Optional<Function1<any, any>>,
  op6: Optional<Function1<any, any>>,
  op7: Optional<Function1<any, any>>,
  ...operators: Function1<any, any>[]
): unknown => {
  let acc = source;
  const { length } = operators;

  acc = op1 !== none ? op1(acc) : acc;
  acc = op2 !== none ? op2(acc) : acc;
  acc = op3 !== none ? op3(acc) : acc;
  acc = op4 !== none ? op4(acc) : acc;
  acc = op5 !== none ? op5(acc) : acc;
  acc = op6 !== none ? op6(acc) : acc;
  acc = op7 !== none ? op7(acc) : acc;

  if (length > 0) {
    for (let i = 0; i < length; i++) {
      acc = operators[i](acc);
    }
  }

  return acc;
}) as Signature["pipeUnsafe"];

export const pipe: Signature["pipe"] = pipeUnsafe;

export const pipeAsync: Signature["pipeAsync"] = async (
  source: unknown,
  ...operators: Function1<unknown, unknown | Promise<unknown>>[]
) => {
  let acc = source;
  const { length } = operators;
  for (let i = 0; i < length; i++) {
    const result = operators[i](acc);

    if (isPromise(result)) {
      acc = await result;
    } else {
      acc = result;
    }
  }

  return acc;
};

/**
 * Returns a `Factory` function that pipes the `source` through the provided operators.
 */
export const pipeLazy: Signature["pipeLazy"] =
  (
    source: unknown,
    ...operators: Function1<unknown, unknown>[]
  ): Factory<unknown> =>
  () =>
    pipeUnsafe(source, ...operators);

export const pipeLazyAsync: Signature["pipeLazyAsync"] =
  (
    source: unknown,
    ...operators: Function1<unknown, unknown | Promise<unknown>>[]
  ) =>
  async () => {
    let acc = source;
    const { length } = operators;
    for (let i = 0; i < length; i++) {
      const result = operators[i](acc);

      if (isPromise(result)) {
        acc = await result;
      } else {
        acc = result;
      }
    }

    return acc;
  };

/**
 * Pipes `source` through a series of unary functions if it is not undefined.
 */
export const pipeSome: Signature["pipeSome"] = (
  source: Optional<unknown>,
  ...operators: Function1<unknown, unknown>[]
): Optional<unknown> =>
  isSome(source) ? pipeUnsafe(source, ...operators) : none;

/**
 * Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.
 */
export const pipeSomeLazy: Signature["pipeSomeLazy"] =
  (
    source: Optional,
    ...operators: Function1<unknown, unknown>[]
  ): Factory<unknown> =>
  () => 
    isSome(source) ? pipeUnsafe(source, ...operators) : none;

export const error: Signature["error"] = (message?: unknown) => {
  const messageIsString = isString(message);
  const messageIsError = message instanceof Error;
  const errorMessage = messageIsString ? message : "";
  const errorCause =
    !messageIsString && !messageIsError && isSome(message)
      ? {
          cause: message,
        }
      : none;

  return messageIsError
    ? message
    : newInstance(Error, errorMessage, errorCause);
};

export const errorWithDebugMessage: Signature["errorWithDebugMessage"] = (
  message: string,
) => error(__DEV__ ? message : none);

export const raiseError: Signature["raiseError"] = (e: Error) => {
  throw e;
};

export const raiseWithDebugMessage: Signature["raiseWithDebugMessage"] = (
  message: string,
) => raiseError(error(__DEV__ ? message : none));

export const raise: Signature["raise"] = (e?: unknown) => raiseError(error(e));

export const returns: Signature["returns"] =
  <T>(v: T) =>
  () =>
    v;

export const strictEquality: Signature["strictEquality"] = <T>(a: T, b: T) =>
  a === b;

export const tuple: Signature["tuple"] = ((...v: readonly unknown[]) =>
  v) as Signature["tuple"];
