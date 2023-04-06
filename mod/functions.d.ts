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
export type Method<This, T> = (this: This) => T;
export type Method1<This, TA, T> = (this: This, a: TA) => T;
export type Method2<This, TA, TB, T> = (this: This, a: TA, b: TB) => T;
export type Method3<This, TA, TB, TC, T> = (this: This, a: TA, b: TB, c: TC) => T;
export type Method4<This, TA, TB, TC, TD, T> = (this: This, a: TA, b: TB, c: TC, d: TD) => T;
export type Method5<This, TA, TB, TC, TD, TE, T> = (this: This, a: TA, b: TB, c: TC, d: TD, e: TE) => T;
export type Method6<This, TA, TB, TC, TD, TE, TF, T> = (this: This, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF) => T;
export type Method7<This, TA, TB, TC, TD, TE, TF, TG, T> = (this: This, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG) => T;
export type Method8<This, TA, TB, TC, TD, TE, TF, TG, TH, T> = (this: This, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG, h: TH) => T;
export type Method9<This, TA, TB, TC, TD, TE, TF, TG, TH, TI, T> = (this: This, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG, h: TH, i: TI) => T;
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
/**
 * A function that always returns `false`.
 */
export declare const alwaysFalse: (..._args: unknown[]) => boolean;
/**
 * A function that always returns `true`.
 */
export declare const alwaysTrue: (..._args: unknown[]) => boolean;
/**
 * Returns an equality function that compares two readonly arrays for equality,
 * comparing their values using `valuesEquality`.
 */
export declare const arrayEquality: <T>(valuesEquality?: Equality<T>) => Equality<readonly T[]>;
export declare const bind: <F extends Function>(f: F, thiz: unknown) => F;
export declare const bindMethod: <T extends Record<TKey, (...args: any[]) => any>, TKey extends string | number | symbol>(thiz: T, key: TKey) => T[TKey];
interface Call {
    call<TInstance, T>(f: () => T, self: TInstance): T;
    call<TInstance, T, TA>(f: (a: TA) => T, self: TInstance, a: TA): T;
    call<TInstance, T, TA, TB>(f: (a: TA, b: TB) => T, self: TInstance, a: TA, b: TB): T;
}
export declare const call: Call["call"];
export declare const composeUnsafe: (...operators: Function1<any, unknown>[]) => Function1<any, unknown>;
interface Compose {
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
}
/**
 * Composes a series of unary functions.
 */
export declare const compose: Compose["compose"];
/**
 * An updater function that returns the result of decrementing `x`.
 */
export declare const decrement: (x: number) => number;
/**
 * Returns a function that decrements a number `x` by the value `decr`.
 */
export declare const decrementBy: (decr: number) => Updater<number>;
/**
 * The identity function.
 *
 * @returns `v`
 */
export declare const identity: <T>(v: T) => T;
/**
 * A function that always returns `undefined`.
 */
export declare const ignore: (..._args: unknown[]) => void;
/**
 * An updater function that returns the result of incrementing `x`.
 */
export declare const increment: (x: number) => number;
/**
 * Returns a function that increments a number `x` by the value `incr`.
 */
export declare const incrementBy: (incr: number) => Updater<number>;
/**
 * Enables invoking a method on an object as a unary function within
 * a pipeline operation.
 *
 * @param method
 * @param args
 * @returns
 */
export declare const invoke: <T extends Record<TKey, (...args: any[]) => any>, TKey extends string | number | symbol>(method: TKey, ...args: Parameters<T[TKey]>) => Function1<T, ReturnType<T[TKey]>>;
/**
 * Returns a predicate function comparing its argument to `b` using the
 * provided `equality` function.
 */
export declare const isEqualTo: <T>(b: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => Predicate<T>;
export declare const isNotEqualTo: <T>(b: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => Predicate<T>;
/**
 * Returns `true` if `x` is an even number, otherwise `false`.
 */
export declare const isEven: (x: number) => boolean;
export declare const isFalse: (v: boolean) => v is false;
export declare const isFunction: (f: unknown) => f is Function;
export declare const isNumber: (n: unknown) => n is number;
export declare const isObject: (o: unknown) => o is object;
export declare const isString: (s: unknown) => s is string;
/**
 * Returns `true` if `x` is an odd number, otherwise `false`.
 */
export declare const isOdd: (x: number) => boolean;
/**
 * Returns true if `option` is `none`.
 */
export declare const isNone: <T>(option: Optional<T>) => option is undefined;
/**
 * Returns true if `option` is not `none`.
 */
export declare const isSome: <T>(option: Optional<T>) => option is T;
export declare const isTrue: (v: boolean) => v is true;
export declare const greaterThan: (v: number) => (x: number) => boolean;
export declare const lessThan: (v: number) => (x: number) => boolean;
/**
 * Applies logical negation to the value `v`.
 */
export declare const negate: (v: boolean) => boolean;
interface NewInstance {
    newInstance<T>(Constructor: Constructor<T>): T;
    newInstance<T, TA>(Constructor: Constructor1<TA, T>, a: TA): T;
    newInstance<T, TA, TB>(Constructor: Constructor2<TA, TB, T>, a: TA, b: TB): T;
    newInstance<T, TA, TB, TC>(Constructor: Constructor3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    newInstance<T, TA, TB, TC, TD>(Constructor: Constructor4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
}
export declare const newInstance: NewInstance["newInstance"];
/**
 * An alias for undefined.
 */
export declare const none: undefined;
interface Partial {
    partial<TA, TB, TOut>(b: TB): Function1<Function2<TA, TB, TOut>, Function1<TA, TOut>>;
    partial<TA, TB, TC, TOut>(b: TB, c: TC): Function1<Function3<TA, TB, TC, TOut>, Function1<TA, TOut>>;
    partial<TA, TB, TC, TD, TOut>(b: TB, c: TC, d: TD): Function1<Function4<TA, TB, TC, TD, TOut>, Function1<TA, TOut>>;
}
export declare const partial: Partial["partial"];
/**
 * Pipes `source` through a series of unary functions.
 */
export declare const pipeUnsafe: (source: unknown, ...operators: Function1<any, any>[]) => unknown;
interface Pipe {
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
}
/**
 * Pipes `source` through a series of unary functions.
 */
export declare const pipe: Pipe["pipe"];
interface PipeLazy {
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
}
/**
 * Returns a `Factory` function that pipes the `source` through the provided operators.
 */
export declare const pipeLazy: PipeLazy["pipeLazy"];
export declare const error: (message?: unknown) => Error;
export declare const errorWithDebugMessage: (message: string) => Error;
export declare const raiseError: <T>(e: Error) => T;
/**
 * Throws a javascript error using the provided message.
 */
export declare const raiseWithDebugMessage: <T>(message: string) => T;
export declare const raise: <T>(e?: unknown) => T;
/**
 * Returns a function that takes an arbitrary number of arguments and always returns `v`.
 */
export declare const returns: <T>(v: T) => (..._args: unknown[]) => T;
/**
 * The javascript strict equality function.
 */
export declare const strictEquality: <T>(a: T, b: T) => boolean;
export declare function unsafeCast<T>(_v: unknown): asserts _v is T;
export {};
