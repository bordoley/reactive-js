import { ContainerLike, FromArray } from "./container.mjs";
import { EnumerableLike } from "./enumerable.mjs";
import { Function1, Function2, Factory, Updater } from "./functions.mjs";
import { StreamLike, ObservableLike } from "./observable.mjs";
import { StreamableLike } from "./streamable.mjs";
declare type ConsumeContinue<T> = {
    readonly type: "continue";
    readonly data: T;
};
declare type ConsumeDone<T> = {
    readonly type: "done";
    readonly data: T;
};
interface AsyncEnumerableLike<T> extends StreamableLike<void, T, AsyncEnumeratorLike<T>>, ContainerLike {
    readonly T: unknown;
    readonly type: AsyncEnumerableLike<this["T"]>;
}
interface AsyncEnumeratorLike<T> extends StreamLike<void, T> {
}
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
export { AsyncEnumerableLike, AsyncEnumeratorLike, ConsumeContinue, ConsumeDone, consume, consumeAsync, consumeContinue, consumeDone, fromArray, fromArrayT, fromEnumerable, fromIterable, generate };
