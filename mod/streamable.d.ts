import { DispatcherLike } from "./dispatcher.mjs";
import { Updater, Function1, Reducer, Factory, Equality } from "./functions.mjs";
import { MulticastObservableLike, ObservableOperator, ObservableLike } from "./observable.mjs";
import { Option } from "./option.mjs";
import { SchedulerLike } from "./scheduler.mjs";
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
    readonly scheduler: SchedulerLike;
}
interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T>> {
    stream(this: StreamableLike<TReq, T, TStream>, scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): TStream;
}
interface StreamableStateLike<T> extends StreamableLike<Updater<T>, T, StateStreamLike<T>> {
}
interface StateStreamLike<T> extends StreamLike<Updater<T>, T> {
}
declare type FlowMode = "resume" | "pause";
interface FlowableLike<T> extends StreamableLike<FlowMode, T, FlowableStreamLike<T>> {
}
interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {
}
interface FlowableSinkLike<T> extends StreamableLike<T, FlowMode, FlowableSinkStreamLike<T>> {
}
interface FlowableSinkStreamLike<T> extends StreamLike<T, FlowMode> {
}
declare const stream: <TReq, T, TStream extends StreamLike<TReq, T>>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<StreamableLike<TReq, T, TStream>, TStream>;
declare const createStreamble: <TReq, TData, TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>>(stream: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => TStream) => StreamableLike<TReq, TData, TStream>;
declare function createLiftedStreamable<T, A>(op1: ObservableOperator<T, A>): StreamableLike<T, A, StreamLike<T, A>>;
declare function createLiftedStreamable<T, A, B>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>): StreamableLike<T, B, StreamLike<T, B>>;
declare function createLiftedStreamable<T, A, B, C>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>): StreamableLike<T, C, StreamLike<T, C>>;
declare function createLiftedStreamable<T, A, B, C, D>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>): StreamableLike<T, D, StreamLike<T, D>>;
declare function createLiftedStreamable<T, A, B, C, D, E>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>): StreamableLike<T, E, StreamLike<T, E>>;
declare function createLiftedStreamable<T, A, B, C, D, E, F>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>): StreamableLike<T, F, StreamLike<T, F>>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>): StreamableLike<T, G, StreamLike<T, G>>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G, H>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>): StreamableLike<T, H, StreamLike<T, H>>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>): StreamableLike<T, I, StreamLike<T, I>>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I, J>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>): StreamableLike<T, J, StreamLike<T, J>>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I, J, K>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>, op11: ObservableOperator<J, K>): StreamableLike<T, K, StreamLike<T, K>>;
declare function createLiftedStreamable<T, A, B, C, D, E, F, G, H, I, J, K, L>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>, op11: ObservableOperator<J, K>, op12: ObservableOperator<K, L>): StreamableLike<T, L, StreamLike<T, L>>;
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
/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
declare const empty: <TReq, T>() => StreamableLike<TReq, T, StreamLike<TReq, T>>;
declare const flow: <T>({ scheduler, }?: {
    scheduler?: SchedulerLike | undefined;
}) => Function1<ObservableLike<T>, FlowableLike<T>>;
declare const identity: <T>() => StreamableLike<T, T, StreamLike<T, T>>;
declare const sinkInto: <TReq, T, TOut>(dest: StreamableLike<T, TReq, StreamLike<T, TReq>>) => (src: StreamableLike<TReq, T, StreamLike<TReq, T>>) => ObservableLike<TOut>;
declare const __stream: <TReq, T, TStream extends StreamLike<TReq, T>>(streamable: StreamableLike<TReq, T, TStream>, { replay, scheduler, }?: {
    readonly replay?: number | undefined;
    readonly scheduler?: SchedulerLike | undefined;
}) => TStream;
declare const __state: <T>(initialState: () => T, options?: {
    readonly equality?: Option<Equality<T>>;
}) => StateStreamLike<T>;
/** @experimental */
declare const createFlowableSinkAccumulator: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: {
    readonly replay?: number;
}) => FlowableSinkLike<T> & MulticastObservableLike<TAcc>;
export { FlowMode, FlowableLike, FlowableSinkLike, FlowableSinkStreamLike, FlowableStreamLike, StateStreamLike, StreamLike, StreamableLike, StreamableStateLike, __state, __stream, createActionReducer, createFlowableSinkAccumulator, createLiftedStreamable, createStateStore, createStreamble, empty, flow, identity, sinkInto, stream };
