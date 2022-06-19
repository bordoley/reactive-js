import { Reducer, Factory, Equality, Updater, Function1, Function2 } from "./functions.mjs";
import { ObservableOperator, StreamLike, ObservableLike, MulticastObservableLike } from "./observable.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { EnumerableLike } from "./enumerable.mjs";
/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
declare const createActionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => StreamableLike<TAction, T>;
/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
declare const createStateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => StreamableLike<Updater<T>, T>;
/**
 * Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
declare const toStateStore: <T>() => StreamableOperator<T, T, Updater<T>, T>;
declare const createStreamable: <TReq, TData>(op: ObservableOperator<TReq, TData>) => StreamableLike<TReq, TData>;
declare const lift: <TReq, TA, TB>(op: ObservableOperator<TA, TB>) => StreamableOperator<TReq, TA, TReq, TB>;
declare const mapReq: <TReqA, TReqB, T>(op: Function1<TReqB, TReqA>) => StreamableOperator<TReqA, T, TReqB, T>;
/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
declare const empty: <TReq, T>(options?: {
    readonly delay?: number;
}) => StreamableLike<TReq, T>;
declare const stream: <TReq, T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<StreamableLike<TReq, T>, StreamLike<TReq, T>>;
declare const __stream: <TReq, T>(streamable: StreamableLike<TReq, T>, { replay, scheduler, }?: {
    readonly replay?: number | undefined;
    readonly scheduler?: SchedulerLike | undefined;
}) => StreamLike<TReq, T>;
declare const identity: <T>() => StreamableLike<T, T>;
declare const flow: <T>({ scheduler, }?: {
    scheduler?: SchedulerLike | undefined;
}) => Function1<ObservableLike<T>, StreamableLike<FlowMode, T>>;
declare const sink: <TReq, T>(src: StreamableLike<TReq, T>, dest: StreamableLike<T, TReq>) => ObservableLike<void>;
/** @experimental */
declare const createIOSinkAccumulator: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: {
    readonly replay?: number;
}) => IOSinkAccumulatorLike<T, TAcc>;
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
declare const continue_: <T>(data: T) => Continue<T>;
declare const done: <T>(data: T) => Done<T>;
declare const consume: <T, TAcc>(consumer: Function2<TAcc, T, Continue<TAcc> | Done<TAcc>>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
declare const consumeAsync: <T, TAcc>(consumer: Function2<TAcc, T, ObservableLike<Continue<TAcc> | Done<TAcc>>>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
interface StreamableLike<TReq, T> {
    stream(this: StreamableLike<TReq, T>, scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): StreamLike<TReq, T>;
}
interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {
}
declare type StreamableOperator<TSrcReq, TSrc, TReq, T> = Function1<StreamableLike<TSrcReq, TSrc>, StreamableLike<TReq, T>>;
declare type FlowMode = "resume" | "pause";
declare type Continue<T> = {
    readonly type: "continue";
    readonly data: T;
};
declare type Done<T> = {
    readonly type: "done";
    readonly data: T;
};
/**
 * @experimental
 * @noInheritDoc
 * */
interface IOSinkAccumulatorLike<T, TAcc> extends StreamableLike<T, FlowMode>, MulticastObservableLike<TAcc> {
}
export { AsyncEnumerableLike, Continue, Done, FlowMode, IOSinkAccumulatorLike, StreamableLike, StreamableOperator, __stream, consume, consumeAsync, continue_, createActionReducer, createIOSinkAccumulator, createStateStore, createStreamable, done, empty, flow, fromArray, fromEnumerable, fromIterable, generate, identity, lift, mapReq, sink, stream, toStateStore };
