import { Reducer, Factory, Equality, Function1, SideEffect1, Function2 } from "./functions.mjs";
import { Option } from "./option.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { ObservableLike, StreamLike } from "./observable.mjs";
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
declare type StreamableOperator<TSrcReq, TSrc, TReq, T> = {
    (streamable: StreamableLike<TSrcReq, TSrc>): StreamableLike<TReq, T>;
};
declare const createStreamable: <TReq, TData>(op: Function1<ObservableLike<TReq>, ObservableLike<TData>>) => StreamableLike<TReq, TData>;
declare const lift: <TReq, TA, TB>(op: Function1<ObservableLike<TA>, ObservableLike<TB>>) => StreamableOperator<TReq, TA, TReq, TB>;
declare const mapReq: <TReqA, TReqB, T>(op: Function1<TReqB, TReqA>) => StreamableOperator<TReqA, T, TReqB, T>;
/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
declare const empty: <TReq, T>(options?: {
    readonly delay?: number | undefined;
} | undefined) => StreamableLike<TReq, T>;
declare const stream: <TReq, T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
} | undefined) => Function1<StreamableLike<TReq, T>, StreamLike<TReq, T>>;
declare const __stream: <TReq, T>(streamable: StreamableLike<TReq, T>, { replay, scheduler, }?: {
    readonly replay?: number | undefined;
    readonly scheduler?: Option<SchedulerLike>;
}) => StreamLike<TReq, T>;
declare const identity: <T>() => StreamableLike<T, T>;
declare const map: <TReq, TA, TB>(mapper: Function1<TA, TB>) => Function1<StreamableLike<TReq, TA>, StreamableLike<TReq, TB>>;
declare const mapTo: <TReq, TA, TB>(v: TB) => Function1<StreamableLike<TReq, TA>, StreamableLike<TReq, TB>>;
declare const onNotify: <TReq, T>(onNotify: SideEffect1<T>) => Function1<StreamableLike<TReq, T>, StreamableLike<TReq, T>>;
declare const scan: <TReq, T, TAcc>(scanner: Reducer<T, TAcc>, initalValue: Factory<TAcc>) => Function1<StreamableLike<TReq, T>, StreamableLike<TReq, TAcc>>;
declare const withLatestFrom: <TReq, TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => Function1<StreamableLike<TReq, TA>, StreamableLike<TReq, T>>;
declare const sink: <TReq, T>(src: StreamableLike<TReq, T>, dest: StreamableLike<T, TReq>) => ObservableLike<void>;
interface StreamableLike<TReq, T> {
    stream(scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): StreamLike<TReq, T>;
}
declare type StreamableOperator$1<TSrcReq, TSrc, TReq, T> = Function1<StreamableLike<TSrcReq, TSrc>, StreamableLike<TReq, T>>;
export { StreamableLike, StreamableOperator$1 as StreamableOperator, __stream, createActionReducer, createStreamable, empty, identity, lift, map, mapReq, mapTo, onNotify, scan, sink, stream, withLatestFrom };
