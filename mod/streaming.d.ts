import { ContainerLike, ContainerOperator } from "./containers.mjs";
import { Updater } from "./functions.mjs";
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
interface StreamableStateLike<T> extends StreamableLike<Updater<T>, T> {
}
declare type FlowMode = "resume" | "pause";
interface FlowableStreamLike<T> extends StreamLike<FlowMode, T>, PauseableLike {
}
interface FlowableLike<T, TStream extends FlowableStreamLike<T> = FlowableStreamLike<T>> extends StreamableLike<FlowMode, T, TStream>, ContainerLike {
    readonly TContainerOf?: FlowableStreamLike<this["T"]>;
}
interface AsyncEnumeratorLike<T = unknown> extends SourceLike, StreamLike<void, T> {
}
declare const createStreamble: <TReq, TData, TStream extends StreamLike<TReq, TData> = StreamLike<TReq, TData>>(stream: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => TStream) => StreamableLike<TReq, TData, TStream>;
interface CreateLiftedFlowable {
    <T, A>(op1: ContainerOperator<ObservableLike, T, A>): FlowableLike<A>;
    <T, A, B>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>): FlowableLike<B>;
    <T, A, B, C>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>): FlowableLike<C>;
    <T, A, B, C, D>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>): FlowableLike<D>;
    <T, A, B, C, D, E>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>): FlowableLike<E>;
    <T, A, B, C, D, E, F>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>): FlowableLike<F>;
    <T, A, B, C, D, E, F, G>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>): FlowableLike<G>;
    <T, A, B, C, D, E, F, G, H>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>): FlowableLike<H>;
    <T, A, B, C, D, E, F, G, H, I>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>): FlowableLike<I>;
    <T, A, B, C, D, E, F, G, H, I, J>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>, op10: ContainerOperator<ObservableLike, I, J>): FlowableLike<J>;
    <T, A, B, C, D, E, F, G, H, I, J, K>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>, op10: ContainerOperator<ObservableLike, I, J>, op11: ContainerOperator<ObservableLike, J, K>): FlowableLike<K>;
    <T, A, B, C, D, E, F, G, H, I, J, K, L>(op1: ContainerOperator<ObservableLike, T, A>, op2: ContainerOperator<ObservableLike, A, B>, op3: ContainerOperator<ObservableLike, B, C>, op4: ContainerOperator<ObservableLike, C, D>, op5: ContainerOperator<ObservableLike, D, E>, op6: ContainerOperator<ObservableLike, E, F>, op7: ContainerOperator<ObservableLike, F, G>, op8: ContainerOperator<ObservableLike, G, H>, op9: ContainerOperator<ObservableLike, H, I>, op10: ContainerOperator<ObservableLike, I, J>, op11: ContainerOperator<ObservableLike, J, K>, op12: ContainerOperator<ObservableLike, K, L>): FlowableLike<L>;
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
export { AsyncEnumeratorLike, FlowMode, FlowableLike, FlowableStreamLike, StreamLike, StreamableLike, StreamableLike_stream, StreamableStateLike, createLiftedFlowable, createLiftedStreamable, createStreamble };
