import { ContainerLike, Container, ContainerOf, ContainerOperator } from "./containers.mjs";
import { Updater, Function1, Reducer, Factory, Equality } from "./functions.mjs";
import { MulticastObservableLike, HotObservableLike } from "./rx.mjs";
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
    readonly TContainerOf?: FlowableLike<this["T"]>;
}
interface AsyncEnumeratorLike<T = unknown> extends SourceLike, StreamLike<void, T> {
}
declare type ToFlowable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toFlowable<T>(options?: TOptions): Function1<ContainerOf<C, T>, FlowableLike<T>>;
};
declare const createStream: <TReq, T>(op: ContainerOperator<HotObservableLike<unknown>, TReq, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => StreamLike<TReq, T>;
declare const createStreamble: <TReq, TData, TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>>(stream: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => TStream) => StreamableLike<TReq, TData, TStream>;
interface CreateLiftedFlowable {
    <A>(op1: ContainerOperator<HotObservableLike, FlowMode, A>): FlowableLike<A>;
    <A, B>(op1: ContainerOperator<HotObservableLike, FlowMode, A>, op2: ContainerOperator<HotObservableLike, A, B>): FlowableLike<B>;
    <A, B, C>(op1: ContainerOperator<HotObservableLike, FlowMode, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>): FlowableLike<C>;
    <A, B, C, D>(op1: ContainerOperator<HotObservableLike, FlowMode, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>): FlowableLike<D>;
    <A, B, C, D, E>(op1: ContainerOperator<HotObservableLike, FlowMode, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>): FlowableLike<E>;
    <A, B, C, D, E, F>(op1: ContainerOperator<HotObservableLike, FlowMode, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>): FlowableLike<F>;
    <A, B, C, D, E, F, G>(op1: ContainerOperator<HotObservableLike, FlowMode, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>): FlowableLike<G>;
    <A, B, C, D, E, F, G, H>(op1: ContainerOperator<HotObservableLike, FlowMode, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>, op8: ContainerOperator<HotObservableLike, G, H>): FlowableLike<H>;
    <A, B, C, D, E, F, G, H, I>(op1: ContainerOperator<HotObservableLike, FlowMode, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>, op8: ContainerOperator<HotObservableLike, G, H>, op9: ContainerOperator<HotObservableLike, H, I>): FlowableLike<I>;
    <A, B, C, D, E, F, G, H, I, J>(op1: ContainerOperator<HotObservableLike, FlowMode, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>, op8: ContainerOperator<HotObservableLike, G, H>, op9: ContainerOperator<HotObservableLike, H, I>, op10: ContainerOperator<HotObservableLike, I, J>): FlowableLike<J>;
    <A, B, C, D, E, F, G, H, I, J, K>(op1: ContainerOperator<HotObservableLike, FlowMode, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>, op8: ContainerOperator<HotObservableLike, G, H>, op9: ContainerOperator<HotObservableLike, H, I>, op10: ContainerOperator<HotObservableLike, I, J>, op11: ContainerOperator<HotObservableLike, J, K>): FlowableLike<K>;
    <A, B, C, D, E, F, G, H, I, J, K, L>(op1: ContainerOperator<HotObservableLike, FlowMode, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>, op8: ContainerOperator<HotObservableLike, G, H>, op9: ContainerOperator<HotObservableLike, H, I>, op10: ContainerOperator<HotObservableLike, I, J>, op11: ContainerOperator<HotObservableLike, J, K>, op12: ContainerOperator<HotObservableLike, K, L>): FlowableLike<L>;
}
declare const createLiftedFlowable: CreateLiftedFlowable;
interface CreateLiftedStreamable {
    <T, A>(op1: ContainerOperator<HotObservableLike, T, A>): StreamableLike<T, A>;
    <T, A, B>(op1: ContainerOperator<HotObservableLike, T, A>, op2: ContainerOperator<HotObservableLike, A, B>): StreamableLike<T, B>;
    <T, A, B, C>(op1: ContainerOperator<HotObservableLike, T, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>): StreamableLike<T, C>;
    <T, A, B, C, D>(op1: ContainerOperator<HotObservableLike, T, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>): StreamableLike<T, D>;
    <T, A, B, C, D, E>(op1: ContainerOperator<HotObservableLike, T, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>): StreamableLike<T, E>;
    <T, A, B, C, D, E, F>(op1: ContainerOperator<HotObservableLike, T, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>): StreamableLike<T, F>;
    <T, A, B, C, D, E, F, G>(op1: ContainerOperator<HotObservableLike, T, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>): StreamableLike<T, G>;
    <T, A, B, C, D, E, F, G, H>(op1: ContainerOperator<HotObservableLike, T, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>, op8: ContainerOperator<HotObservableLike, G, H>): StreamableLike<T, H>;
    <T, A, B, C, D, E, F, G, H, I>(op1: ContainerOperator<HotObservableLike, T, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>, op8: ContainerOperator<HotObservableLike, G, H>, op9: ContainerOperator<HotObservableLike, H, I>): StreamableLike<T, I>;
    <T, A, B, C, D, E, F, G, H, I, J>(op1: ContainerOperator<HotObservableLike, T, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>, op8: ContainerOperator<HotObservableLike, G, H>, op9: ContainerOperator<HotObservableLike, H, I>, op10: ContainerOperator<HotObservableLike, I, J>): StreamableLike<T, J>;
    <T, A, B, C, D, E, F, G, H, I, J, K>(op1: ContainerOperator<HotObservableLike, T, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>, op8: ContainerOperator<HotObservableLike, G, H>, op9: ContainerOperator<HotObservableLike, H, I>, op10: ContainerOperator<HotObservableLike, I, J>, op11: ContainerOperator<HotObservableLike, J, K>): StreamableLike<T, K>;
    <T, A, B, C, D, E, F, G, H, I, J, K, L>(op1: ContainerOperator<HotObservableLike, T, A>, op2: ContainerOperator<HotObservableLike, A, B>, op3: ContainerOperator<HotObservableLike, B, C>, op4: ContainerOperator<HotObservableLike, C, D>, op5: ContainerOperator<HotObservableLike, D, E>, op6: ContainerOperator<HotObservableLike, E, F>, op7: ContainerOperator<HotObservableLike, F, G>, op8: ContainerOperator<HotObservableLike, G, H>, op9: ContainerOperator<HotObservableLike, H, I>, op10: ContainerOperator<HotObservableLike, I, J>, op11: ContainerOperator<HotObservableLike, J, K>, op12: ContainerOperator<HotObservableLike, K, L>): StreamableLike<T, L>;
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
export { AsyncEnumeratorLike, FlowMode, FlowableLike, FlowableStreamLike, StreamLike, StreamableLike, StreamableLike_stream, StreamableStateLike, ToFlowable, createActionReducer, createLiftedFlowable, createLiftedStreamable, createStateStore, createStream, createStreamble };
