import { AsyncEnumerator } from "./asyncEnumerator.mjs";
import { FromArray, Keep, Map, Scan, TakeWhile } from "./container.mjs";
import { EnumerableLike } from "./enumerable.mjs";
import { Function1, Function2, Factory, Updater, Predicate, Reducer } from "./functions.mjs";
import { LiftableLike } from "./liftable.mjs";
import { ObservableLike, ToObservable } from "./observable.mjs";
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
declare const consumeContinue: <T>(data: T) => ConsumeContinue<T>;
declare const consumeDone: <T>(data: T) => ConsumeDone<T>;
declare const consumeAsync: <T, TAcc>(consumer: Function2<TAcc, T, ObservableLike<ConsumeContinue<TAcc> | ConsumeDone<TAcc>>>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
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
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => AsyncEnumerableOperator<T, T>;
declare const takeWhileT: TakeWhile<AsyncEnumerableLike<unknown>>;
declare const toObservable: <T>() => Function1<AsyncEnumerableLike<T>, ObservableLike<T>>;
declare const toObservableT: ToObservable<AsyncEnumerableLike<unknown>>;
declare const type: AsyncEnumerableLike<unknown>;
export { AsyncEnumerableLike, AsyncEnumerableOperator, ConsumeContinue, ConsumeDone, consumeAsync, consumeContinue, consumeDone, fromArray, fromArrayT, fromEnumerable, fromIterable, generate, keep, keepT, map, mapT, scan, scanT, takeWhile, takeWhileT, toObservable, toObservableT, type };
