import { Updater, Function1, Reducer, Factory, Equality } from "./functions.mjs";
import { ObservableOperator, ObservableLike } from "./observable.mjs";
import { Option } from "./option.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamLike } from "./stream.mjs";
interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>> {
    stream(this: StreamableLike<TReq, T, TStream>, scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): TStream;
}
interface StreamableStateLike<T, TStream extends StateStreamLike<T> = StateStreamLike<T>> extends StreamableLike<Updater<T>, T, TStream> {
}
interface StateStreamLike<T> extends StreamLike<Updater<T>, T> {
}
declare type FlowMode = "resume" | "pause";
interface FlowableLike<T, TStream extends FlowableStreamLike<T> = FlowableStreamLike<T>> extends StreamableLike<FlowMode, T, TStream> {
}
interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {
}
interface FlowableSinkLike<T, TStream extends FlowableSinkStreamLike<T> = FlowableSinkStreamLike<T>> extends StreamableLike<T, FlowMode, TStream> {
}
interface FlowableSinkStreamLike<T> extends StreamLike<T, FlowMode> {
}
declare const stream: <TReq, T, TStream extends StreamLike<TReq, T>>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<StreamableLike<TReq, T, TStream>, TStream>;
declare const createStreamble: <TReq, TData, TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>>(stream: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => TStream) => StreamableLike<TReq, TData, TStream>;
declare function createLiftedStreamable<T, A>(op1: ObservableOperator<T, A>): StreamableLike<T, A>;
declare function createLiftedStreamable<T, A, B>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>): StreamableLike<T, B>;
declare function createLiftedStreamable<T, A, B, C>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>): StreamableLike<T, C>;
declare function createLiftedStreamable<T, A, B, C, D>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>): StreamableLike<T, D>;
declare function createLiftedStreamable<T, A, B, C, D, E>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>): StreamableLike<T, E>;
declare function createLiftedStreamable<T, A, B, C, D, E, F>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>): StreamableLike<T, F>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>): StreamableLike<T, G>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G, H>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>): StreamableLike<T, H, StreamLike<T, H>>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>): StreamableLike<T, I>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I, J>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>): StreamableLike<T, J>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I, J, K>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>, op11: ObservableOperator<J, K>): StreamableLike<T, K>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I, J, K, L>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>, op11: ObservableOperator<J, K>, op12: ObservableOperator<K, L>): StreamableLike<T, L>;
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
} | undefined) => StreamableStateLike<T, StateStreamLike<T>>;
/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
declare const empty: <TReq, T>() => StreamableLike<TReq, T, StreamLike<TReq, T>>;
declare const flow: <T>() => Function1<ObservableLike<T>, FlowableLike<T, FlowableStreamLike<T>>>;
declare const identity: <T>() => StreamableLike<T, T, StreamLike<T, T>>;
declare const __stream: <TReq, T, TStream extends StreamLike<TReq, T>>(streamable: StreamableLike<TReq, T, TStream>, { replay, scheduler, }?: {
    readonly replay?: number | undefined;
    readonly scheduler?: SchedulerLike | undefined;
}) => TStream;
declare const __state: <T>(initialState: () => T, options?: {
    readonly equality?: Option<Equality<T>>;
}) => StateStreamLike<T>;
declare const sinkInto: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(dest: TSinkStream) => (src: StreamableLike<TReq, T, StreamLike<TReq, T>>) => StreamableLike<TReq, T, StreamLike<TReq, T>>;
declare const sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(streamable: StreamableLike<TReq, T, StreamLike<TReq, T>>) => Function1<TSinkStream, TSinkStream>;
declare const flowToObservable: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<FlowableLike<T, FlowableStreamLike<T>>, ObservableLike<T>>;
export { FlowMode, FlowableLike, FlowableSinkLike, FlowableSinkStreamLike, FlowableStreamLike, StateStreamLike, StreamableLike, StreamableStateLike, __state, __stream, createActionReducer, createLiftedStreamable, createStateStore, createStreamble, empty, flow, flowToObservable, identity, sinkInto, sourceFrom, stream };
