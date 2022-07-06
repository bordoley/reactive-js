import { AsyncEnumerator } from "./asyncEnumerator.mjs";
import { FromArray, Generate, Keep, Map, Scan, TakeWhile } from "./container.mjs";
import { EnumerableLike, FromEnumerable } from "./enumerable.mjs";
import { Function1, Updater, Factory, Predicate, Reducer } from "./functions.mjs";
import { InteractiveContainerLike } from "./interactiveContainer.mjs";
import { FromIterable } from "./liftableContainer.mjs";
import { AsyncReducer, ScanAsync, ObservableLike, ToObservable } from "./observable.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamableLike } from "./streamable.mjs";
interface AsyncEnumerableLike<T> extends StreamableLike<void, T, AsyncEnumerator<T>>, InteractiveContainerLike {
    readonly T: unknown;
    readonly TContainerOf: AsyncEnumerableLike<this["T"]>;
    readonly TLiftableContainerState: AsyncEnumerator<this["T"]>;
    readonly TCtx: SchedulerLike;
}
declare type AsyncEnumerableOperator<TA, TB> = Function1<AsyncEnumerableLike<TA>, AsyncEnumerableLike<TB>>;
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
declare const fromEnumerableT: FromEnumerable<AsyncEnumerableLike<unknown>>;
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
declare const fromIterable: <T>() => Function1<Iterable<T>, AsyncEnumerableLike<T>>;
declare const fromIterableT: FromIterable<AsyncEnumerableLike<unknown>>;
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
declare const generateT: Generate<AsyncEnumerableLike<unknown>>;
declare const keep: <T>(predicate: Predicate<T>) => AsyncEnumerableOperator<T, T>;
declare const keepT: Keep<AsyncEnumerableLike<unknown>>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => AsyncEnumerableOperator<TA, TB>;
declare const mapT: Map<AsyncEnumerableLike<unknown>>;
declare const scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => AsyncEnumerableOperator<T, TAcc>;
declare const scanT: Scan<AsyncEnumerableLike<unknown>>;
declare const scanAsync: <T, TAcc>(reducer: AsyncReducer<T, TAcc>, initialValue: Factory<TAcc>) => AsyncEnumerableOperator<T, TAcc>;
declare const scanAsyncT: ScanAsync<AsyncEnumerableLike<unknown>>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => AsyncEnumerableOperator<T, T>;
declare const takeWhileT: TakeWhile<AsyncEnumerableLike<unknown>>;
declare const toObservable: <T>() => Function1<AsyncEnumerableLike<T>, ObservableLike<T>>;
declare const toObservableT: ToObservable<AsyncEnumerableLike<unknown>>;
declare const TContainerOf: AsyncEnumerableLike<unknown>;
export { AsyncEnumerableLike, AsyncEnumerableOperator, TContainerOf, fromArray, fromArrayT, fromEnumerable, fromEnumerableT, fromIterable, fromIterableT, generate, generateT, keep, keepT, map, mapT, scan, scanAsync, scanAsyncT, scanT, takeWhile, takeWhileT, toObservable, toObservableT };
