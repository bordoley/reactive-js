declare type Constructor<T> = new () => T;
declare type Constructor1<TA, T> = new (a: TA) => T;
declare type Constructor2<TA, TB, T> = new (a: TA, b: TB) => T;
declare type Constructor3<TA, TB, TC, T> = new (a: TA, b: TB, c: TC) => T;
declare type Constructor4<TA, TB, TC, TD, T> = new (a: TA, b: TB, c: TC, d: TD) => T;
declare type Factory<T> = () => T;
declare type Function1<TA, T> = (a: TA) => T;
declare type Function2<TA, TB, T> = (a: TA, b: TB) => T;
declare type Function3<TA, TB, TC, T> = (a: TA, b: TB, c: TC) => T;
declare type Function4<TA, TB, TC, TD, T> = (a: TA, b: TB, c: TC, d: TD) => T;
declare type Function5<TA, TB, TC, TD, TE, T> = (a: TA, b: TB, c: TC, d: TD, e: TE) => T;
declare type Function6<TA, TB, TC, TD, TE, TF, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF) => T;
declare type Function7<TA, TB, TC, TD, TE, TF, TG, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG) => T;
declare type Function8<TA, TB, TC, TD, TE, TF, TG, TH, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG, h: TH) => T;
declare type Function9<TA, TB, TC, TD, TE, TF, TG, TH, TI, T> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG, h: TH, i: TI) => T;
declare type Identity<T> = Function1<T, T>;
/**
 * Compare two values to determine their relative ordering.
 *
 * @returns A signed number indicating the relative order of `a` and `b`:
 *   - If less than 0, `a` is less `b`.
 *   - If 0, `a` equals `b`.
 *   - If greater than 0, `a` is greater than `b`.
 */
declare type Comparator<T> = Function2<T, T, number>;
/**
 * Compare two values for equality.
 *
 * @returns true if `a` is equals to `b`, otherwise false
 */
declare type Equality<T> = Function2<T, T, boolean>;
/**
 * Computes a new value of type `T` from the previous value of type `T`.
 */
declare type Updater<T> = Function1<T, T>;
/**
 * A one argument predicate function.
 */
declare type Predicate<T> = Function1<T, boolean>;
/**
 * A type guard function that performs a runtime check
 * guaranteeing `v` is of type `TB`.
 *
 * @returns `true` if v is an instance of type `TB`, otherwise false.
 */
declare type TypePredicate<TA, TB extends TA> = (v: TA) => v is TB;
/**
 * A pure function that takes the current accumulator and next value,
 * returning the next accumulated value.
 */
declare type Reducer<T, TAcc> = Function2<TAcc, T, TAcc>;
declare type SideEffect = () => void;
declare type SideEffect1<TA> = (a: TA) => void;
declare type SideEffect2<TA, TB> = (a: TA, b: TB) => void;
declare type SideEffect3<TA, TB, TC> = (a: TA, b: TB, c: TC) => void;
declare type SideEffect4<TA, TB, TC, TD> = (a: TA, b: TB, c: TC, d: TD) => void;
declare type SideEffect5<TA, TB, TC, TD, TE> = (a: TA, b: TB, c: TC, d: TD, e: TE) => void;
declare type SideEffect6<TA, TB, TC, TD, TE, TF> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF) => void;
declare type SideEffect7<TA, TB, TC, TD, TE, TF, TG> = (a: TA, b: TB, c: TC, d: TD, e: TE, f: TF, g: TG) => void;
interface CallWith {
    <T>(): Function1<Factory<T>, T>;
    <TA, T>(a: TA): Function1<Function1<TA, T>, T>;
    <TA, TB, T>(a: TA, b: TB): Function1<Function2<TA, TB, T>, T>;
    <TA, TB, TC, T>(a: TA, b: TB, c: TC): Function1<Function3<TA, TB, TC, T>, T>;
    <TA, TB, TC, TD, T>(a: TA, b: TB, c: TC, d: TD): Function1<Function4<TA, TB, TC, TD, T>, T>;
}
/**
 * A function operator that invokes a function with a given list of arguments.
 *
 * @returns A function that takes a function `f` as an argument
 * and invokes it with the provided arguments, returning the result.
 */
declare const callWith: CallWith;
/**
 * The identity function.
 *
 * @returns `v`
 */
declare const identity: <T>(v: T) => T;
declare const isEmpty: (arr: readonly unknown[] | string) => boolean;
declare const getLength: (arr: readonly unknown[] | string) => number;
/**
 * Returns a function that takes an arbitrary number of arguments and always returns `v`.
 */
declare const returns: <T>(v: T) => (..._args: unknown[]) => T;
/**
 * A function that always returns `false`.
 */
declare const alwaysFalse: (..._args: unknown[]) => boolean;
/**
 * A function that always returns `true`.
 */
declare const alwaysTrue: (..._args: unknown[]) => boolean;
/**
 * A function that always returns `undefined`.
 */
declare const ignore: (..._args: unknown[]) => void;
/**
 * An updater function that returns the result of incrementing `x`.
 */
declare const increment: (x: number) => number;
/**
 * Returns a function that increments a number `x` by the value `incr`.
 */
declare const incrementBy: (incr: number) => Updater<number>;
/**
 * An updater function that returns the result of decrementing `x`.
 */
declare const decrement: (x: number) => number;
/**
 * Returns a function that decrements a number `x` by the value `decr`.
 */
declare const decrementBy: (decr: number) => Updater<number>;
/**
 * The javascript strict equality function.
 */
declare const strictEquality: <T>(a: T, b: T) => boolean;
/**
 * Returns a predicate function comparing its argument to `b` using the
 * provided `equality` function.
 */
declare const isEqualTo: <T>(b: T, options?: {
    equality?: Equality<T> | undefined;
}) => Predicate<T>;
/**
 * Returns `true` if `x` is an even number, otherwise `false`.
 */
declare const isEven: (x: number) => boolean;
/**
 * Returns `true` if `x` is an odd number, otherwise `false`.
 */
declare const isOdd: (x: number) => boolean;
/**
 * Applies logical negation to the value `v`.
 */
declare const negate: (v: boolean) => boolean;
/**
 * Throws a javascript error using the provided message.
 */
declare const raise: <T>(message?: unknown) => T;
/**
 * A function that returns the result of summing
 * it's arguments.
 */
declare const sum: (...args: number[]) => number;
/**
 * Returns an equality function that compares two readonly arrays for equality,
 * comparing their values using `valuesEquality`.
 */
declare const arrayEquality: <T>(valuesEquality?: Equality<T>) => Equality<readonly T[]>;
/**
 * A `Reducer` functions that applies `updater` to `acc` to compute the next
 * accumulator value.
 */
declare const updateReducer: <T>(acc: T, updater: Updater<T>) => T;
interface Pipe {
    <T, A>(src: T, op1: Function1<T, A>): A;
    <T, A, B>(src: T, op1: Function1<T, A>, op2: Function1<A, B>): B;
    <T, A, B, C>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>): C;
    <T, A, B, C, D>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>): D;
    <T, A, B, C, D, E>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>): E;
    <T, A, B, C, D, E, F>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>): F;
    <T, A, B, C, D, E, F, G>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>): G;
    <T, A, B, C, D, E, F, G, H>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>): H;
    <T, A, B, C, D, E, F, G, H, I>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>): I;
    <T, A, B, C, D, E, F, G, H, I, J>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>): J;
    <T, A, B, C, D, E, F, G, H, I, J, K>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>): K;
    <T, A, B, C, D, E, F, G, H, I, J, K, L>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>, op12: Function1<K, L>): L;
}
/**
 * Pipes `source` through a series of unary functions.
 */
declare const pipe: Pipe;
/**
 * Pipes `source` through a series of unary functions.
 */
declare const pipeUnsafe: (source: unknown, ...operators: Function1<any, any>[]) => unknown;
interface Compose {
    <T, A, B>(op1: Function1<T, A>, op2: Function1<A, B>): Function1<T, B>;
    <T, A, B, C>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>): Function1<T, C>;
    <T, A, B, C, D>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>): Function1<T, D>;
    <T, A, B, C, D, E>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>): Function1<T, E>;
    <T, A, B, C, D, E, F>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>): Function1<T, F>;
    <T, A, B, C, D, E, F, G>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>): Function1<T, G>;
    <T, A, B, C, D, E, F, G, H>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>): Function1<T, H>;
    <T, A, B, C, D, E, F, G, H, I>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>): Function1<T, I>;
    <T, A, B, C, D, E, F, G, H, I, J>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>): Function1<T, J>;
    <T, A, B, C, D, E, F, G, H, I, J, K>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>): Function1<T, K>;
    <T, A, B, C, D, E, F, G, H, I, J, K, L>(op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>, op12: Function1<K, L>): Function1<T, L>;
}
/**
 * Composes a series of unary functions.
 */
declare const compose: Compose;
interface PipeLazy {
    <T, A>(src: T, op1: Function1<T, A>): Factory<A>;
    <T, A, B>(src: T, op1: Function1<T, A>, op2: Function1<A, B>): Factory<B>;
    <T, A, B, C>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>): Factory<C>;
    <T, A, B, C, D>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>): Factory<D>;
    <T, A, B, C, D, E>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>): Factory<E>;
    <T, A, B, C, D, E, F>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>): Factory<F>;
    <T, A, B, C, D, E, F, G>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>): Factory<G>;
    <T, A, B, C, D, E, F, G, H>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>): Factory<H>;
    <T, A, B, C, D, E, F, G, H, I>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>): Factory<I>;
    <T, A, B, C, D, E, F, G, H, I, J>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>): Factory<J>;
    <T, A, B, C, D, E, F, G, H, I, J, K>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>): Factory<K>;
    <T, A, B, C, D, E, F, G, H, I, J, K, L>(src: T, op1: Function1<T, A>, op2: Function1<A, B>, op3: Function1<B, C>, op4: Function1<C, D>, op5: Function1<D, E>, op6: Function1<E, F>, op7: Function1<F, G>, op8: Function1<G, H>, op9: Function1<H, I>, op10: Function1<I, J>, op11: Function1<J, K>, op12: Function1<K, L>): Factory<L>;
}
/**
 * Returns a `Factory` function that pipes the `source` through the provided operators.
 */
declare const pipeLazy: PipeLazy;
interface Flip {
    <TA, TB, T>(f: Function2<TA, TB, T>): Function2<TB, TA, T>;
    <TA, TB, TC, T>(f: Function3<TA, TB, TC, T>): Function3<TC, TB, TA, T>;
}
/**
 * Returns a function that flips the order of arguments passed to `f`.
 */
declare const flip: Flip;
declare const max: (...values: number[]) => number;
declare const min: (...values: number[]) => number;
declare const floor: (x: number) => number;
interface NewInstance {
    <T>(Constructor: Constructor<T>): T;
    <T, TA>(Constructor: Constructor1<TA, T>, a: TA): T;
    <T, TA, TB>(Constructor: Constructor2<TA, TB, T>, a: TA, b: TB): T;
    <T, TA, TB, TC>(Constructor: Constructor3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    <T, TA, TB, TC, TD>(Constructor: Constructor4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
}
declare const newInstance: NewInstance;
/**
 * Represents an unboxed value of type T or undefined.
 */
declare type Option<T> = T | undefined;
/**
 * An alias for undefined.
 */
declare const none: undefined;
/**
 * Returns true if `option` is not `none`.
 */
declare const isSome: <T>(option: Option<T>) => option is T;
/**
 * Returns true if `option` is `none`.
 */
declare const isNone: <T>(option: Option<T>) => option is undefined;
declare const forEach: <T>(f: SideEffect1<T>) => Function1<readonly T[], readonly T[]>;
interface Partial {
    <TA, TB, TOut>(b: TB): Function1<Function2<TA, TB, TOut>, Function1<TA, TOut>>;
    <TA, TB, TC, TOut>(b: TB, c: TC): Function1<Function3<TA, TB, TC, TOut>, Function1<TA, TOut>>;
    <TA, TB, TC, TD, TOut>(b: TB, c: TC, d: TD): Function1<Function4<TA, TB, TC, TD, TOut>, Function1<TA, TOut>>;
}
declare const partial: Partial;
export { Comparator, Constructor, Constructor1, Constructor2, Constructor3, Constructor4, Equality, Factory, Function1, Function2, Function3, Function4, Function5, Function6, Function7, Function8, Function9, Identity, Option, Predicate, Reducer, SideEffect, SideEffect1, SideEffect2, SideEffect3, SideEffect4, SideEffect5, SideEffect6, SideEffect7, TypePredicate, Updater, alwaysFalse, alwaysTrue, arrayEquality, callWith, compose, decrement, decrementBy, flip, floor, forEach, getLength, identity, ignore, increment, incrementBy, isEmpty, isEqualTo, isEven, isNone, isOdd, isSome, max, min, negate, newInstance, none, partial, pipe, pipeLazy, pipeUnsafe, raise, returns, strictEquality, sum, updateReducer };
