import { Reducer, Factory, Equality, Updater, Function1, SideEffect1, Function2 } from "./functions.mjs";
import { ObservableOperator, StreamLike, ObservableLike, MulticastObservableLike } from "./observable.mjs";
import { SchedulerLike } from "./scheduler.mjs";
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
declare const map: <TReq, TA, TB>(mapper: Function1<TA, TB>) => StreamableOperator<TReq, TA, TReq, TB>;
declare const mapTo: <TReq, TA, TB>(v: TB) => StreamableOperator<TReq, TA, TReq, TB>;
declare const onNotify: <TReq, T>(onNotify: SideEffect1<T>) => StreamableOperator<TReq, T, TReq, T>;
declare const scan: <TReq, T, TAcc>(scanner: Reducer<T, TAcc>, initalValue: Factory<TAcc>) => StreamableOperator<TReq, T, TReq, TAcc>;
declare const withLatestFrom: <TReq, TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => StreamableOperator<TReq, TA, TReq, T>;
declare const flow: <T>({ scheduler, }?: {
    scheduler?: SchedulerLike | undefined;
}) => Function1<ObservableLike<T>, StreamableLike<FlowMode, T>>;
declare const sink: <TReq, T>(src: StreamableLike<TReq, T>, dest: StreamableLike<T, TReq>) => ObservableLike<void>;
declare const notifyIOEvent: <T>(data: T) => IOEvent<T>;
declare const doneIOEvent: <T>() => IOEvent<T>;
declare const decodeWithCharset: (charset?: string, options?: TextDecoderOptions) => StreamableOperator<FlowMode, IOEvent<ArrayBuffer>, FlowMode, IOEvent<string>>;
declare const encodeUtf8: StreamableOperator<FlowMode, IOEvent<string>, FlowMode, IOEvent<Uint8Array>>;
declare const mapIOEventStream: <TA, TB>(mapper: Function1<TA, TB>) => Function1<StreamableLike<FlowMode, IOEvent<TA>>, StreamableLike<FlowMode, IOEvent<TB>>>;
declare const toIOEventStream: <T>() => Function1<ObservableLike<T>, StreamableLike<FlowMode, IOEvent<T>>>;
/** @experimental */
declare const createIOSinkAccumulator: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: {
    readonly replay?: number;
}) => IOSinkAccumulatorLike<T, TAcc>;
interface StreamableLike<TReq, T> {
    stream(this: StreamableLike<TReq, T>, scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): StreamLike<TReq, T>;
}
declare type StreamableOperator<TSrcReq, TSrc, TReq, T> = Function1<StreamableLike<TSrcReq, TSrc>, StreamableLike<TReq, T>>;
/**
 * @experimental
 * @noInheritDoc
 * */
interface IOSinkAccumulatorLike<T, TAcc> extends StreamableLike<IOEvent<T>, FlowMode>, MulticastObservableLike<TAcc> {
}
declare type FlowMode = "resume" | "pause";
declare type IOEvent<T> = {
    readonly type: "notify";
    readonly data: T;
} | {
    readonly type: "done";
};
export { FlowMode, IOEvent, IOSinkAccumulatorLike, StreamableLike, StreamableOperator, __stream, createActionReducer, createIOSinkAccumulator, createStateStore, createStreamable, decodeWithCharset, doneIOEvent, empty, encodeUtf8, flow, identity, lift, map, mapIOEventStream, mapReq, mapTo, notifyIOEvent, onNotify, scan, sink, stream, toIOEventStream, toStateStore, withLatestFrom };
