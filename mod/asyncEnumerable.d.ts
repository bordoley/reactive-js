import { AsyncEnumerator } from "./asyncEnumerator.mjs";
import { FromArray, Keep, Map, Scan } from "./container.mjs";
import { EnumerableLike } from "./enumerable.mjs";
import { Function1, Function2, Factory, Updater, Predicate, Reducer } from "./functions.mjs";
import { LiftableLike } from "./liftable.mjs";
import { ObservableOperator, ObservableLike, ToObservable } from "./observable.mjs";
import { Observer } from "./observer.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamableLike } from "./streamable.mjs";
declare type ConsumeContinue<T> = {
    readonly type: "continue";
    readonly data: T;
};
declare type ConsumeDone<T> = {
    readonly type: "done";
    readonly data: T;
};
interface AsyncEnumerableLike<T> extends StreamableLike<void, T, AsyncEnumerator<T>>, LiftableLike {
    readonly T: unknown;
    readonly type: AsyncEnumerableLike<this["T"]>;
    readonly liftableStateType: AsyncEnumerator<this["T"]>;
}
declare type AsyncEnumerableOperator<TA, TB> = Function1<AsyncEnumerableLike<TA>, AsyncEnumerableLike<TB>>;
declare const createAsyncEnumerable: <T>(stream: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => AsyncEnumerator<T>) => AsyncEnumerableLike<T>;
declare class LiftedAsyncEnumerator<T> extends AsyncEnumerator<T> {
    readonly op: ObservableOperator<void, T>;
    readonly scheduler: SchedulerLike;
    private readonly dispatcher;
    private readonly observable;
    constructor(op: ObservableOperator<void, T>, scheduler: SchedulerLike, replay: number);
    get observerCount(): number;
    get replay(): number;
    dispatch(req: void): void;
    sink(observer: Observer<T>): void;
}
declare function createLiftedAsyncEnumerable<A>(op1: ObservableOperator<void, A>): AsyncEnumerableLike<A>;
declare function createLiftedAsyncEnumerable<A, B>(op1: ObservableOperator<void, A>, op2: ObservableOperator<A, B>): AsyncEnumerableLike<B>;
declare function createLiftedAsyncEnumerable<A, B, C>(op1: ObservableOperator<void, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>): AsyncEnumerableLike<C>;
declare function createLiftedAsyncEnumerable<A, B, C, D>(op1: ObservableOperator<void, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>): AsyncEnumerableLike<D>;
declare function createLiftedAsyncEnumerable<A, B, C, D, E>(op1: ObservableOperator<void, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>): AsyncEnumerableLike<E>;
declare function createLiftedAsyncEnumerable<A, B, C, D, E, F>(op1: ObservableOperator<void, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>): AsyncEnumerableLike<F>;
declare function createLiftedAsyncEnumerable<A, B, C, D, E, F, G>(op1: ObservableOperator<void, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>): AsyncEnumerableLike<G>;
declare function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H>(op1: ObservableOperator<void, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>): AsyncEnumerableLike<H>;
declare function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I>(op1: ObservableOperator<void, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>): AsyncEnumerableLike<I>;
declare function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I, J>(op1: ObservableOperator<void, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>): AsyncEnumerableLike<J>;
declare function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I, J, K>(op1: ObservableOperator<void, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>, op11: ObservableOperator<J, K>): AsyncEnumerableLike<K>;
declare function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I, J, K, L>(op1: ObservableOperator<void, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>, op11: ObservableOperator<J, K>, op12: ObservableOperator<K, L>): AsyncEnumerableLike<L>;
/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
declare const fromArray: <T>(options?: Partial<{
    readonly delay: number;
    readonly startIndex: number;
    readonly endIndex: number;
}>) => Function1<readonly T[], AsyncEnumerableLike<T>>;
declare const fromArrayT: FromArray<AsyncEnumerableLike<unknown>>;
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
declare const fromEnumerable: <T>() => Function1<EnumerableLike<T>, AsyncEnumerableLike<T>>;
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
declare const fromIterable: <T>() => Function1<Iterable<T>, AsyncEnumerableLike<T>>;
declare const consumeContinue: <T>(data: T) => ConsumeContinue<T>;
declare const consumeDone: <T>(data: T) => ConsumeDone<T>;
declare const consume: <T, TAcc>(consumer: Function2<TAcc, T, ConsumeContinue<TAcc> | ConsumeDone<TAcc>>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
declare const consumeAsync: <T, TAcc>(consumer: Function2<TAcc, T, ObservableLike<ConsumeContinue<TAcc> | ConsumeDone<TAcc>>>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
    readonly delay?: number;
}) => AsyncEnumerableLike<T>;
declare const keep: <T>(predicate: Predicate<T>) => AsyncEnumerableOperator<T, T>;
declare const keepT: Keep<AsyncEnumerableLike<unknown>>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => AsyncEnumerableOperator<TA, TB>;
declare const mapT: Map<AsyncEnumerableLike<unknown>>;
declare const scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => AsyncEnumerableOperator<T, TAcc>;
declare const scanT: Scan<AsyncEnumerableLike<unknown>>;
declare const toObservable: <T>() => Function1<AsyncEnumerableLike<T>, ObservableLike<T>>;
declare const toObservableT: ToObservable<AsyncEnumerableLike<unknown>>;
declare const type: AsyncEnumerableLike<unknown>;
export { AsyncEnumerableLike, AsyncEnumerableOperator, ConsumeContinue, ConsumeDone, LiftedAsyncEnumerator, consume, consumeAsync, consumeContinue, consumeDone, createAsyncEnumerable, createLiftedAsyncEnumerable, fromArray, fromArrayT, fromEnumerable, fromIterable, generate, keep, keepT, map, mapT, scan, scanT, toObservable, toObservableT, type };
