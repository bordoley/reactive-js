export type Constructor<T> = new () => T;
export type Constructor1<TA, T> = new (a: TA) => T;
export type Constructor2<TA, TB, T> = new (a: TA, b: TB) => T;
export type Constructor3<TA, TB, TC, T> = new (a: TA, b: TB, c: TC) => T;
export type Constructor4<TA, TB, TC, TD, T> = new (a: TA, b: TB, c: TC, d: TD) => T;
export type Factory<T> = () => T;
export type Function1<TA, T> = (a: TA) => T;
export type Function2<TA, TB, T> = (a: TA, b: TB) => T;
export type Function3<TA, TB, TC, T> = (a: TA, b: TB, c: TC) => T;
export type Function4<TA, TB, TC, TD, T> = (a: TA, b: TB, c: TC, d: TD) => T;
export type Function5<TA, TB, TC, TD, TE, T> = (a: TA, b: TB, c: TC, d: TD, e: TE) => T;
export type Function6<TA, TB, TC, TD, TE, TF, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF) => T;
export type Function7<TA, TB, TC, TD, TE, TF, TG, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG) => T;
export type Function8<TA, TB, TC, TD, TE, TF, TG, TH, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG, h: TH) => T;
export type Function9<TA, TB, TC, TD, TE, TF, TG, TH, TI, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG, h: TH, i: TI) => T;
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
export type SideEffect5<TA, TB, TC, TD, TE> = (a: TA, b: TB, c: TC, d: TD, e: TE) => void;
export type SideEffect6<TA, TB, TC, TD, TE, TF> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF) => void;
export type SideEffect7<TA, TB, TC, TD, TE, TF, TG> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG) => void;
export type Tuple1<TA> = readonly [TA];
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
    TG
];
export type Tuple8<TA, TB, TC, TD, TE, TF, TG, TH> = readonly [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG,
    TH
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
    TI
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
    bind<F extends Function>(f: F, thiz: unknown): F;
    bindMethod<T extends Record<TKey, (...args: any[]) => any>, TKey extends number | string | symbol>(thiz: T, key: TKey): T[TKey];
    call<TInstance, T>(f: () => T, self: TInstance): T;
    call<TInstance, T, TA>(f: (a: TA) => T, self: TInstance, a: TA): T;
    call<TInstance, T, TA, TB>(f: (a: TA, b: TB) => T, self: TInstance, a: TA, b: TB): T;
    /**
     * Composes a series of unary functions.
     */
    compose<T, A, B>(op1: Function1<T, A>, op2: Function1<A, B>): Function1<T, B>;
    compose<T, A, B>(op1: Function1<T, A>, op2: Function1<A, B>): Function1<T, B>;
    compose<T, A, B, C>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>): Function1<T, C>;
    compose<T, A, B, C, D>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>): Function1<T, D>;
    compose<T, A, B, C, D, E>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>): Function1<T, E>;
    compose<T, A, B, C, D, E, F>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>): Function1<T, F>;
    compose<T, A, B, C, D, E, F, G>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>): Function1<T, G>;
    compose<T, A, B, C, D, E, F, G, H>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>): Function1<T, H>;
    compose<T, A, B, C, D, E, F, G, H, I>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>): Function1<T, I>;
    compose<T, A, B, C, D, E, F, G, H, I, J>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>): Function1<T, J>;
    compose<T, A, B, C, D, E, F, G, H, I, J, K>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>): Function1<T, K>;
    compose<T, A, B, C, D, E, F, G, H, I, J, K, L>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>, op12: Function1<K, L>): Function1<T, L>;
    composeLazy<T, A>(op1: Function1<T, A>): Function1<T, Factory<A>>;
    composeLazy<T, A, B>(op1: Function1<T, A>, op2: Function1<A, B>): Function1<T, Factory<B>>;
    composeLazy<T, A, B, C>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>): Function1<T, Factory<C>>;
    composeLazy<T, A, B, C, D>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>): Function1<T, Factory<D>>;
    composeLazy<T, A, B, C, D, E>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>): Function1<T, Factory<E>>;
    composeLazy<T, A, B, C, D, E, F>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>): Function1<T, Factory<F>>;
    composeLazy<T, A, B, C, D, E, F, G>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>): Function1<T, Factory<G>>;
    composeLazy<T, A, B, C, D, E, F, G, H>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>): Function1<T, Factory<H>>;
    composeLazy<T, A, B, C, D, E, F, G, H, I>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>): Function1<T, Factory<I>>;
    composeLazy<T, A, B, C, D, E, F, G, H, I, J>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>): Function1<T, Factory<J>>;
    composeLazy<T, A, B, C, D, E, F, G, H, I, J, K>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>): Function1<T, Factory<K>>;
    composeLazy<T, A, B, C, D, E, F, G, H, I, J, K, L>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>, op12: Function1<K, L>): Function1<T, Factory<L>>;
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
    invoke<T extends Record<TKey, (...args: any[]) => any>, TKey extends number | string | symbol>(method: TKey, ...args: Parameters<T[TKey]>): Function1<T, ReturnType<T[TKey]>>;
    /**
     * Returns a function that increments a number `x` by the value `incr`.
     */
    incrementBy(incr: number): Updater<number>;
    /**
     * Returns a predicate function comparing its argument to `b` using the
     * provided `equality` function.
     */
    isEqualTo<T>(b: T, options?: {
        readonly equality?: Equality<T>;
    }): Predicate<T>;
    /**
     * Returns `true` if `x` is an even number, otherwise `false`.
     */
    readonly isEven: Predicate<number>;
    isFalse(v: boolean): v is false;
    isFunction(f: unknown): f is Function;
    /**
     * Returns true if `option` is `none`.
     */
    isNone<T>(option: Optional<T>): option is undefined;
    isNotEqualTo<T>(b: T, options?: {
        readonly equality?: Equality<T> | undefined;
    }): Predicate<T>;
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
    newInstance<T, TA, TB, TC>(Constructor: Constructor3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    newInstance<T, TA, TB, TC, TD>(Constructor: Constructor4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
    partial<TA, TB, TOut>(b: TB): Function1<Function2<TA, TB, TOut>, Function1<TA, TOut>>;
    partial<TA, TB, TC, TOut>(b: TB, c: TC): Function1<Function3<TA, TB, TC, TOut>, Function1<TA, TOut>>;
    partial<TA, TB, TC, TD, TOut>(b: TB, c: TC, d: TD): Function1<Function4<TA, TB, TC, TD, TOut>, Function1<TA, TOut>>;
    pick<T, TKey extends keyof T>(key: TKey): Function1<T, T[TKey]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(keyA: TKeyA, keyB: TKeyB): Function1<T, T[TKeyA][TKeyB]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA], TKeyC extends keyof T[TKeyA][TKeyB]>(keyA: TKeyA, keyB: TKeyB, keyC: TKeyC): Function1<T, T[TKeyA][TKeyB][TKeyC]>;
    pickUnsafe<T = unknown>(...keys: (string | symbol | number)[]): Function1<{}, T>;
    /**
     * Pipes `source` through a series of unary functions.
     */
    pipe<T, A>(src: T, op1: Function1<T, A>): A;
    pipe<T, A, B>(src: T, op1: Function1<T, A>, op2: Function1<A, B>): B;
    pipe<T, A, B, C>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>): C;
    pipe<T, A, B, C, D>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>): D;
    pipe<T, A, B, C, D, E>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>): E;
    pipe<T, A, B, C, D, E, F>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>): F;
    pipe<T, A, B, C, D, E, F, G>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>): G;
    pipe<T, A, B, C, D, E, F, G, H>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>): H;
    pipe<T, A, B, C, D, E, F, G, H, I>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>): I;
    pipe<T, A, B, C, D, E, F, G, H, I, J>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>): J;
    pipe<T, A, B, C, D, E, F, G, H, I, J, K>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>): K;
    pipe<T, A, B, C, D, E, F, G, H, I, J, K, L>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>, op12: Function1<K, L>): L;
    pipeAsync<T, A>(src: T, op1: Function1<T, A | Promise<A>>): Promise<A>;
    pipeAsync<T, A, B>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>): Promise<B>;
    pipeAsync<T, A, B, C>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>): Promise<C>;
    pipeAsync<T, A, B, C, D>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>): Promise<D>;
    pipeAsync<T, A, B, C, D, E>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>): Promise<E>;
    pipeAsync<T, A, B, C, D, E, F>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>): Promise<F>;
    pipeAsync<T, A, B, C, D, E, F, G>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>): Promise<G>;
    pipeAsync<T, A, B, C, D, E, F, G, H>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>, op8: Function1<G, H | Promise<H>>): Promise<H>;
    pipeAsync<T, A, B, C, D, E, F, G, H, I>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>, op8: Function1<G, H | Promise<H>>, op9: Function1<H, I | Promise<I>>): Promise<I>;
    pipeAsync<T, A, B, C, D, E, F, G, H, I, J>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>, op8: Function1<G, H | Promise<H>>, op9: Function1<H, I | Promise<I>>, op10: Function1<I, J | Promise<J>>): Promise<J>;
    pipeAsync<T, A, B, C, D, E, F, G, H, I, J, K>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>, op8: Function1<G, H | Promise<H>>, op9: Function1<H, I | Promise<I>>, op10: Function1<I, J | Promise<J>>, op11: Function1<J, K | Promise<K>>): Promise<K>;
    pipeAsync<T, A, B, C, D, E, F, G, H, I, J, K, L>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>, op8: Function1<G, H | Promise<H>>, op9: Function1<H, I | Promise<I>>, op10: Function1<I, J | Promise<J>>, op11: Function1<J, K | Promise<K>>, op12: Function1<K, L | Promise<L>>): Promise<L>;
    pipeLazy<T, A>(src: T, op1: Function1<T, A>): Factory<A>;
    pipeLazy<T, A, B>(src: T, op1: Function1<T, A>, op2: Function1<A, B>): Factory<B>;
    pipeLazy<T, A, B, C>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>): Factory<C>;
    pipeLazy<T, A, B, C, D>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>): Factory<D>;
    pipeLazy<T, A, B, C, D, E>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>): Factory<E>;
    pipeLazy<T, A, B, C, D, E, F>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>): Factory<F>;
    pipeLazy<T, A, B, C, D, E, F, G>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>): Factory<G>;
    pipeLazy<T, A, B, C, D, E, F, G, H>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>): Factory<H>;
    pipeLazy<T, A, B, C, D, E, F, G, H, I>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>): Factory<I>;
    pipeLazy<T, A, B, C, D, E, F, G, H, I, J>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>): Factory<J>;
    pipeLazy<T, A, B, C, D, E, F, G, H, I, J, K>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>): Factory<K>;
    pipeLazy<T, A, B, C, D, E, F, G, H, I, J, K, L>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>, op12: Function1<K, L>): Factory<L>;
    pipeLazyAsync<T, A>(src: T, op1: Function1<T, A | Promise<A>>): Factory<Promise<A>>;
    pipeLazyAsync<T, A, B>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>): Factory<Promise<B>>;
    pipeLazyAsync<T, A, B, C>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>): Factory<Promise<C>>;
    pipeLazyAsync<T, A, B, C, D>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>): Factory<Promise<D>>;
    pipeLazyAsync<T, A, B, C, D, E>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>): Factory<Promise<E>>;
    pipeLazyAsync<T, A, B, C, D, E, F>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>): Factory<Promise<F>>;
    pipeLazyAsync<T, A, B, C, D, E, F, G>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>): Factory<Promise<G>>;
    pipeLazyAsync<T, A, B, C, D, E, F, G, H>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>, op8: Function1<G, H | Promise<H>>): Factory<Promise<H>>;
    pipeLazyAsync<T, A, B, C, D, E, F, G, H, I>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>, op8: Function1<G, H | Promise<H>>, op9: Function1<H, I | Promise<I>>): Factory<Promise<I>>;
    pipeLazyAsync<T, A, B, C, D, E, F, G, H, I, J>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>, op8: Function1<G, H | Promise<H>>, op9: Function1<H, I | Promise<I>>, op10: Function1<I, J | Promise<J>>): Factory<Promise<J>>;
    pipeLazyAsync<T, A, B, C, D, E, F, G, H, I, J, K>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>, op8: Function1<G, H | Promise<H>>, op9: Function1<H, I | Promise<I>>, op10: Function1<I, J | Promise<J>>, op11: Function1<J, K | Promise<K>>): Factory<Promise<K>>;
    pipeLazyAsync<T, A, B, C, D, E, F, G, H, I, J, K, L>(src: T, op1: Function1<T, A | Promise<A>>, op2: Function1<A, B | Promise<B>>, op3: Function1<B, C | Promise<C>>, op4: Function1<C, D | Promise<D>>, op5: Function1<D, E | Promise<E>>, op6: Function1<E, F | Promise<F>>, op7: Function1<F, G | Promise<G>>, op8: Function1<G, H | Promise<H>>, op9: Function1<H, I | Promise<I>>, op10: Function1<I, J | Promise<J>>, op11: Function1<J, K | Promise<K>>, op12: Function1<K, L | Promise<L>>): Factory<Promise<L>>;
    pipeSome<T, A>(src: Optional<T>, op1: Function1<T, A>): Optional<A>;
    pipeSome<T, A, B>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>): Optional<B>;
    pipeSome<T, A, B, C>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>): Optional<C>;
    pipeSome<T, A, B, C, D>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>): Optional<D>;
    pipeSome<T, A, B, C, D, E>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>): Optional<E>;
    pipeSome<T, A, B, C, D, E, F>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>): Optional<F>;
    pipeSome<T, A, B, C, D, E, F, G>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>): Optional<G>;
    pipeSome<T, A, B, C, D, E, F, G, H>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>): Optional<H>;
    pipeSome<T, A, B, C, D, E, F, G, H, I>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>): Optional<I>;
    pipeSome<T, A, B, C, D, E, F, G, H, I, J>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>): Optional<J>;
    pipeSome<T, A, B, C, D, E, F, G, H, I, J, K>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>): Optional<K>;
    pipeSome<T, A, B, C, D, E, F, G, H, I, J, K, L>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>, op12: Function1<K, L>): Optional<L>;
    pipeSomeLazy<T, A>(src: Optional<T>, op1: Function1<T, A>): Factory<A>;
    pipeSomeLazy<T, A, B>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>): Factory<B>;
    pipeSomeLazy<T, A, B, C>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>): Factory<C>;
    pipeSomeLazy<T, A, B, C, D>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>): Factory<D>;
    pipeSomeLazy<T, A, B, C, D, E>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>): Factory<E>;
    pipeSomeLazy<T, A, B, C, D, E, F>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>): Factory<F>;
    pipeSomeLazy<T, A, B, C, D, E, F, G>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>): Factory<G>;
    pipeSomeLazy<T, A, B, C, D, E, F, G, H>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>): Factory<H>;
    pipeSomeLazy<T, A, B, C, D, E, F, G, H, I>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>): Factory<I>;
    pipeSomeLazy<T, A, B, C, D, E, F, G, H, I, J>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>): Factory<J>;
    pipeSomeLazy<T, A, B, C, D, E, F, G, H, I, J, K>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>): Factory<K>;
    pipeSomeLazy<T, A, B, C, D, E, F, G, H, I, J, K, L>(src: Optional<T>, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>, op12: Function1<K, L>): Factory<L>;
    /**
     * Pipes `source` through a series of unary functions.
     */
    pipeUnsafe<T = unknown>(source: unknown, ...operators: Function1<any, any>[]): T;
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
    tuple<TA>(a: TA): Tuple1<TA>;
    tuple<TA, TB>(a: TA, b: TB): Tuple2<TA, TB>;
    tuple<TA, TB, TC>(a: TA, b: TB, c: TC): Tuple3<TA, TB, TC>;
    tuple<TA, TB, TC, TD>(a: TA, b: TB, c: TC): Tuple4<TA, TB, TC, TD>;
}
type Signature = FunctionsModule;
export declare const alwaysFalse: Signature["alwaysFalse"];
export declare const alwaysTrue: Signature["alwaysTrue"];
export declare const arrayEquality: Signature["arrayEquality"];
export declare const bind: Signature["bind"];
export declare const bindMethod: Signature["bindMethod"];
export declare const call: Signature["call"];
export declare const compose: Signature["compose"];
export declare const composeLazy: Signature["composeLazy"];
export declare const decrement: Signature["decrement"];
export declare const decrementBy: Signature["decrementBy"];
export declare const identity: Signature["identity"];
export declare const identityLazy: Signature["identityLazy"];
export declare const ignore: Signature["ignore"];
export declare const increment: Signature["increment"];
export declare const incrementBy: Signature["incrementBy"];
export declare const invoke: Signature["invoke"];
export declare const isReadonlyArray: Signature["isReadonlyArray"];
export declare const isEqualTo: Signature["isEqualTo"];
export declare const isNotEqualTo: Signature["isNotEqualTo"];
export declare const isEven: Signature["isEven"];
export declare const isFalse: Signature["isFalse"];
export declare const isFunction: Signature["isFunction"];
export declare const isNumber: Signature["isNumber"];
export declare const isObject: Signature["isObject"];
export declare const isString: Signature["isString"];
export declare const isOdd: Signature["isOdd"];
export declare const isNone: Signature["isNone"];
export declare const isSome: Signature["isSome"];
export declare const isTrue: Signature["isTrue"];
export declare const greaterThan: Signature["greaterThan"];
export declare const lessThan: Signature["lessThan"];
export declare const negate: Signature["negate"];
export declare const newInstance: Signature["newInstance"];
export declare const none: Signature["none"];
export declare const partial: Signature["partial"];
export declare const pickUnsafe: Signature["pickUnsafe"];
export declare const pick: Signature["pick"];
export declare const pipeUnsafe: Signature["pipeUnsafe"];
export declare const pipe: Signature["pipe"];
export declare const pipeAsync: Signature["pipeAsync"];
/**
 * Returns a `Factory` function that pipes the `source` through the provided operators.
 */
export declare const pipeLazy: Signature["pipeLazy"];
export declare const pipeLazyAsync: Signature["pipeLazyAsync"];
/**
 * Pipes `source` through a series of unary functions if it is not undefined.
 */
export declare const pipeSome: Signature["pipeSome"];
/**
 * Returns a `Factory` function that pipes the `source` through the provided operators if not undefined.
 */
export declare const pipeSomeLazy: Signature["pipeSomeLazy"];
export declare const error: Signature["error"];
export declare const errorWithDebugMessage: Signature["errorWithDebugMessage"];
export declare const raiseError: Signature["raiseError"];
export declare const raiseWithDebugMessage: Signature["raiseWithDebugMessage"];
export declare const raise: Signature["raise"];
export declare const returns: Signature["returns"];
export declare const strictEquality: Signature["strictEquality"];
export declare const tuple: Signature["tuple"];
export {};
