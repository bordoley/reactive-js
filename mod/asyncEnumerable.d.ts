import { Function2, Factory, Function1, Updater } from "./functions.mjs";
import { ObservableLike } from "./observable.mjs";
import { EnumerableLike } from "./enumerable.mjs";
import { StreamableLike } from "./streamable.mjs";
declare const enum ConsumeRequestType {
    Notify = 1,
    Done = 2
}
declare type ConsumeRequest<TAcc> = {
    readonly type: ConsumeRequestType.Notify;
    readonly acc: TAcc;
} | {
    readonly type: ConsumeRequestType.Done;
    readonly acc: TAcc;
};
declare type Consumer<T, TAcc> = Function2<TAcc, T, ConsumeRequest<TAcc>>;
declare type AsyncConsumer<T, TAcc> = Function2<TAcc, T, ObservableLike<ConsumeRequest<TAcc>>>;
declare const notify: <TAcc>(acc: TAcc) => ConsumeRequest<TAcc>;
declare const done: <TAcc>(acc: TAcc) => ConsumeRequest<TAcc>;
declare const consume: <T, TAcc>(consumer: Function2<TAcc, T, ConsumeRequest<TAcc>>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
declare const consumeAsync: <T, TAcc>(consumer: Function2<TAcc, T, ObservableLike<ConsumeRequest<TAcc>>>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
declare const fromArray: <T>(options?: {
    readonly delay?: number;
    readonly startIndex?: number;
    readonly endIndex?: number;
}) => Function1<readonly T[], AsyncEnumerableLike<T>>;
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
/** @noInheritDoc */
interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {
}
export { AsyncConsumer, AsyncEnumerableLike, ConsumeRequest, ConsumeRequestType, Consumer, consume, consumeAsync, done, fromArray, fromEnumerable, fromIterable, generate, notify };
