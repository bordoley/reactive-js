import { Reducer, Factory, Equality, Function1, SideEffect1, Function2 } from "./functions.mjs";
import { ObservableOperator, StreamLike, ObservableLike } from "./observable.mjs";
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
}) => Function1<ObservableLike<T>, FlowableLike<T>>;
declare const sink: <TReq, T>(src: StreamableLike<TReq, T>, dest: StreamableLike<T, TReq>) => ObservableLike<void>;
interface StreamableLike<TReq, T> {
    stream(this: StreamableLike<TReq, T>, scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): StreamLike<TReq, T>;
}
declare type StreamableOperator<TSrcReq, TSrc, TReq, T> = Function1<StreamableLike<TSrcReq, TSrc>, StreamableLike<TReq, T>>;
declare type FlowMode = "resume" | "pause";
/** @noInheritDoc */
interface FlowableLike<T> extends StreamableLike<FlowMode, T> {
}
export { FlowMode, FlowableLike, StreamableLike, StreamableOperator, __stream, createActionReducer, createStreamable, empty, flow, identity, lift, map, mapReq, mapTo, onNotify, scan, sink, stream, withLatestFrom };
