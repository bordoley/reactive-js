import { Reducer, Factory, Equality, Function1, Updater, Function2 } from "./functions.mjs";
import { StreamLike, ObservableOperator, ObservableLike, MulticastObservableLike } from "./observable.mjs";
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
} | undefined) => StreamableLike<TAction, T, StreamLike<TAction, T>>;
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
} | undefined) => StreamableStateLike<T>;
declare const createStreamble: <TReq, TData, TStream extends StreamLike<TReq, TData>>(stream: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => TStream) => StreamableLike<TReq, TData, TStream>;
declare const createFromObservableOperator: <TReq, TData>(op: ObservableOperator<TReq, TData>) => StreamableLike<TReq, TData, StreamLike<TReq, TData>>;
declare const lift: <TReq, TA, TB>(op: ObservableOperator<TA, TB>) => StreamableOperator<TReq, TA, TReq, TB>;
declare const mapReq: <TReqA, TReqB, T>(op: Function1<TReqB, TReqA>) => StreamableOperator<TReqA, T, TReqB, T>;
/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
declare const empty: <TReq, T>(options?: {
    readonly delay?: number;
}) => StreamableLike<TReq, T, StreamLike<TReq, T>>;
declare const stream: <TReq, T, TStream extends StreamLike<TReq, T>>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<StreamableLike<TReq, T, TStream>, TStream>;
declare const __stream: <TReq, T, TStream extends StreamLike<TReq, T>>(streamable: StreamableLike<TReq, T, TStream>, { replay, scheduler, }?: {
    readonly replay?: number | undefined;
    readonly scheduler?: SchedulerLike | undefined;
}) => TStream;
declare const identity: <T>() => StreamableLike<T, T, StreamLike<T, T>>;
declare const flow: <T>({ scheduler, }?: {
    scheduler?: SchedulerLike | undefined;
}) => Function1<ObservableLike<T>, FlowableLike<T>>;
declare const sink: <TReq, T>(src: StreamableLike<TReq, T, StreamLike<TReq, T>>, dest: StreamableLike<T, TReq, StreamLike<T, TReq>>) => ObservableLike<void>;
/** @experimental */
declare const createFlowableSinkAccumulator: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: {
    readonly replay?: number;
}) => FlowableSinkLike<T> & MulticastObservableLike<TAcc>;
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
declare const consumeContinue: <T>(data: T) => ConsumeContinue<T>;
declare const consumeDone: <T>(data: T) => ConsumeDone<T>;
declare const consume: <T, TAcc>(consumer: Function2<TAcc, T, ConsumeContinue<TAcc> | ConsumeDone<TAcc>>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
declare const consumeAsync: <T, TAcc>(consumer: Function2<TAcc, T, ObservableLike<ConsumeContinue<TAcc> | ConsumeDone<TAcc>>>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T>> {
    stream(this: StreamableLike<TReq, T, TStream>, scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): TStream;
}
interface AsyncEnumerableLike<T> extends StreamableLike<void, T, AsyncEnumeratorLike<T>> {
}
interface AsyncEnumeratorLike<T> extends StreamLike<void, T> {
}
interface StreamableStateLike<T> extends StreamableLike<Updater<T>, T, StateStreamLike<T>> {
}
interface StateStreamLike<T> extends StreamLike<Updater<T>, T> {
}
declare type StreamableOperator<TSrcReq, TSrc, TReq, T> = Function1<StreamableLike<TSrcReq, TSrc, StreamLike<TSrcReq, TSrc>>, StreamableLike<TReq, T, StreamLike<TReq, T>>>;
declare type FlowMode = "resume" | "pause";
interface FlowableLike<T> extends StreamableLike<FlowMode, T, FlowableStreamLike<T>> {
}
interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {
}
interface FlowableSinkLike<T> extends StreamableLike<T, FlowMode, FlowableSinkStreamLike<T>> {
}
interface FlowableSinkStreamLike<T> extends StreamLike<T, FlowMode> {
}
declare type ConsumeContinue<T> = {
    readonly type: "continue";
    readonly data: T;
};
declare type ConsumeDone<T> = {
    readonly type: "done";
    readonly data: T;
};
export { AsyncEnumerableLike, AsyncEnumeratorLike, ConsumeContinue, ConsumeDone, FlowMode, FlowableLike, FlowableSinkLike, FlowableSinkStreamLike, FlowableStreamLike, StateStreamLike, StreamableLike, StreamableOperator, StreamableStateLike, __stream, consume, consumeAsync, consumeContinue, consumeDone, createActionReducer, createFlowableSinkAccumulator, createFromObservableOperator, createStateStore, createStreamble, empty, flow, fromArray, fromEnumerable, fromIterable, generate, identity, lift, mapReq, sink, stream };
