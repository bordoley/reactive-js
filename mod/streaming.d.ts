import { ContainerLike, ContainerLike_type, ContainerLike_T, Container, ContainerOf, ContainerOperator } from "./containers.mjs";
import { Updater, Function1, Reducer, Factory, Equality } from "./functions.mjs";
import { MulticastObservableLike, ObservableLike } from "./rx.mjs";
import { DispatcherLike, SchedulerLike } from "./scheduling.mjs";
import { PauseableLike, SourceLike } from "./util.mjs";
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
}
/** @ignore */
declare const StreamableLike_stream: unique symbol;
interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>> {
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): TStream;
}
interface StreamableStateLike<T = unknown> extends StreamableLike<Updater<T>, T> {
}
declare type FlowMode = "resume" | "pause";
interface FlowableStreamLike<T = unknown> extends StreamLike<FlowMode, T>, PauseableLike {
}
interface FlowableLike<T = unknown> extends StreamableLike<FlowMode, T, FlowableStreamLike<T>>, ContainerLike {
    readonly [ContainerLike_type]?: FlowableLike<this[typeof ContainerLike_T]>;
}
declare type ToFlowable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toFlowable<T>(options?: TOptions): Function1<ContainerOf<C, T>, FlowableLike<T>>;
};
interface AsyncEnumeratorLike<T = unknown> extends SourceLike, StreamLike<void, T> {
}
declare const createStream: <TReq, T>(op: ContainerOperator<ObservableLike<unknown>, TReq, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => StreamLike<TReq, T>;
declare const createAsyncEnumerator: <T>(op: ContainerOperator<ObservableLike<unknown>, void, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => AsyncEnumeratorLike<T>;
declare const createStreamble: <TReq, TData, TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>>(stream: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => TStream) => StreamableLike<TReq, TData, TStream>;
interface CreateLiftedFlowable {
    <A>(op1: ContainerOperator<ObservableLike, FlowMode, A>): FlowableLike<A>;
    <A, B>(op1: ContainerOperator<ObservableLike, FlowMode, A>, op2: ContainerOperator<ObservableLike, A, B>): FlowableLike<B>;
    <A, B, C>(op1: ContainerOperator<ObservableLike, FlowMode, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>): FlowableLike<C>;
    <A, B, C, D>(op1: ContainerOperator<ObservableLike, FlowMode, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>): FlowableLike<D>;
    <A, B, C, D, E>(op1: ContainerOperator<ObservableLike, FlowMode, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>): FlowableLike<E>;
    <A, B, C, D, E, F>(op1: ContainerOperator<ObservableLike, FlowMode, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>): FlowableLike<F>;
    <A, B, C, D, E, F, G>(op1: ContainerOperator<ObservableLike, FlowMode, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>): FlowableLike<G>;
    <A, B, C, D, E, F, G, H>(op1: ContainerOperator<ObservableLike, FlowMode, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>): FlowableLike<H>;
    <A, B, C, D, E, F, G, H, I>(op1: ContainerOperator<ObservableLike, FlowMode, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>): FlowableLike<I>;
    <A, B, C, D, E, F, G, H, I, J>(op1: ContainerOperator<ObservableLike, FlowMode, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>, op10: ContainerOperator<ObservableLike, I, J>): FlowableLike<J>;
    <A, B, C, D, E, F, G, H, I, J, K>(op1: ContainerOperator<ObservableLike, FlowMode, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>, op10: ContainerOperator<ObservableLike, I, J>, op11: ContainerOperator<ObservableLike, J, K>): FlowableLike<K>;
    <A, B, C, D, E, F, G, H, I, J, K, L>(op1: ContainerOperator<ObservableLike, FlowMode, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>, op10: ContainerOperator<ObservableLike, I, J>, op11: ContainerOperator<ObservableLike, J, K>, op12: ContainerOperator<ObservableLike, K, L>): FlowableLike<L>;
}
declare const createLiftedFlowable: CreateLiftedFlowable;
interface CreateLiftedStreamable {
    <T, A>(op1: ContainerOperator<ObservableLike, T, A>): StreamableLike<T, A>;
    <T, A, B>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>): StreamableLike<T, B>;
    <T, A, B, C>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>): StreamableLike<T, C>;
    <T, A, B, C, D>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>): StreamableLike<T, D>;
    <T, A, B, C, D, E>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>): StreamableLike<T, E>;
    <T, A, B, C, D, E, F>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>): StreamableLike<T, F>;
    <T, A, B, C, D, E, F, G>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>): StreamableLike<T, G>;
    <T, A, B, C, D, E, F, G, H>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>): StreamableLike<T, H>;
    <T, A, B, C, D, E, F, G, H, I>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>): StreamableLike<T, I>;
    <T, A, B, C, D, E, F, G, H, I, J>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>, op10: ContainerOperator<ObservableLike, I, J>): StreamableLike<T, J>;
    <T, A, B, C, D, E, F, G, H, I, J, K>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>, op10: ContainerOperator<ObservableLike, I, J>, op11: ContainerOperator<ObservableLike, J, K>): StreamableLike<T, K>;
    <T, A, B, C, D, E, F, G, H, I, J, K, L>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>, op10: ContainerOperator<ObservableLike, I, J>, op11: ContainerOperator<ObservableLike, J, K>, op12: ContainerOperator<ObservableLike, K, L>): StreamableLike<T, L>;
}
declare const createLiftedStreamable: CreateLiftedStreamable;
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
export { AsyncEnumeratorLike, FlowMode, FlowableLike, FlowableStreamLike, StreamLike, StreamableLike, StreamableLike_stream, StreamableStateLike, ToFlowable, createActionReducer, createAsyncEnumerator, createLiftedFlowable, createLiftedStreamable, createStateStore, createStream, createStreamble };
