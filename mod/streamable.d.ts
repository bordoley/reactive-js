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
declare const decodeWithCharset: (charset?: string, options?: TextDecoderOptions) => StreamableOperator<FlowMode, NotifyEvent<ArrayBuffer> | DoneEvent, FlowMode, NotifyEvent<string> | DoneEvent>;
declare const encodeUtf8: StreamableOperator<FlowMode, NotifyEvent<string> | DoneEvent, FlowMode, NotifyEvent<Uint8Array> | DoneEvent>;
declare const mapIOEventStream: <TReq, TA, TB>(mapper: Function1<TA, TB>) => Function1<StreamableLike<TReq, DoneEvent | NotifyEvent<TA>>, StreamableLike<TReq, DoneEvent | NotifyEvent<TB>>>;
declare const flowIOEvents: <T>() => Function1<ObservableLike<T>, StreamableLike<FlowMode, DoneEvent | NotifyEvent<T>>>;
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
declare const consume: <T, TAcc>(consumer: Function2<TAcc, T, NotifyEvent<TAcc> | DoneEventWithData<TAcc>>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
declare const consumeAsync: <T, TAcc>(consumer: Function2<TAcc, T, ObservableLike<NotifyEvent<TAcc> | DoneEventWithData<TAcc>>>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
declare const notify: <T>(data: T) => NotifyEvent<T>;
declare function done<T>(data: T): DoneEventWithData<T>;
declare function done(): DoneEvent;
interface StreamableLike<TReq, T> {
    stream(this: StreamableLike<TReq, T>, scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): StreamLike<TReq, T>;
}
interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {
}
declare type StreamableOperator<TSrcReq, TSrc, TReq, T> = Function1<StreamableLike<TSrcReq, TSrc>, StreamableLike<TReq, T>>;
declare type FlowMode = "resume" | "pause";
declare type NotifyEvent<T> = {
    readonly type: "notify";
    readonly data: T;
};
declare type DoneEvent = {
    readonly type: "done";
    hasData: false;
};
declare type DoneEventWithData<T> = {
    readonly type: "done";
    readonly data: T;
    hasData: true;
};
/**
 * @experimental
 * @noInheritDoc
 * */
interface IOSinkAccumulatorLike<T, TAcc> extends StreamableLike<NotifyEvent<T> | DoneEvent, FlowMode>, MulticastObservableLike<TAcc> {
}
export { AsyncEnumerableLike, DoneEvent, DoneEventWithData, FlowMode, IOSinkAccumulatorLike, NotifyEvent, StreamableLike, StreamableOperator, __stream, consume, consumeAsync, createActionReducer, createIOSinkAccumulator, createStateStore, createStreamable, decodeWithCharset, done, empty, encodeUtf8, flow, flowIOEvents, fromArray, fromEnumerable, fromIterable, generate, identity, lift, mapIOEventStream, mapReq, notify, sink, stream, toStateStore };
