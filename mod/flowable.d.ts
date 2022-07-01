import { ContainerLike } from "./container.mjs";
import { Function1 } from "./functions.mjs";
import { ObservableOperator, ObservableLike, ToObservable } from "./observable.mjs";
import { StreamLike } from "./stream.mjs";
import { StreamableLike } from "./streamable.mjs";
declare type FlowMode = "resume" | "pause";
interface FlowableLike<T, TStream extends FlowableStreamLike<T> = FlowableStreamLike<T>> extends StreamableLike<FlowMode, T, TStream>, ContainerLike {
    readonly T: unknown;
    readonly type: FlowableLike<this["T"]>;
}
interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {
}
declare type FlowableOperator<TA, TB> = Function1<FlowableLike<TA>, FlowableLike<TB>>;
interface FlowableSinkLike<T, TStream extends FlowableSinkStreamLike<T> = FlowableSinkStreamLike<T>> extends StreamableLike<T, FlowMode, TStream> {
}
interface FlowableSinkStreamLike<T> extends StreamLike<T, FlowMode> {
}
declare function createLiftedFlowable<T, A>(op1: ObservableOperator<T, A>): FlowableLike<A>;
declare function createLiftedFlowable<T, A, B>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>): FlowableLike<B>;
declare function createLiftedFlowable<T, A, B, C>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>): FlowableLike<C>;
declare function createLiftedFlowable<T, A, B, C, D>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>): FlowableLike<D>;
declare function createLiftedFlowable<T, A, B, C, D, E>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>): FlowableLike<E>;
declare function createLiftedFlowable<T, A, B, C, D, E, F>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>): FlowableLike<F>;
declare function createLiftedFlowable<T, A, B, C, D, E, F, G>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>): FlowableLike<G>;
declare function createLiftedFlowable<T, A, B, C, D, E, F, G, H>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>): FlowableLike<H>;
declare function createLiftedFlowable<T, A, B, C, D, E, F, G, H, I>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>): FlowableLike<I>;
declare function createLiftedFlowable<T, A, B, C, D, E, F, G, H, I, J>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>): FlowableLike<J>;
declare function createLiftedFlowable<T, A, B, C, D, E, F, G, H, I, J, K>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>, op11: ObservableOperator<J, K>): FlowableLike<K>;
declare function createLiftedFlowable<T, A, B, C, D, E, F, G, H, I, J, K, L>(op1: ObservableOperator<T, A>, op2: ObservableOperator<A, B>, op3: ObservableOperator<B, C>, op4: ObservableOperator<C, D>, op5: ObservableOperator<D, E>, op6: ObservableOperator<E, F>, op7: ObservableOperator<F, G>, op8: ObservableOperator<G, H>, op9: ObservableOperator<H, I>, op10: ObservableOperator<I, J>, op11: ObservableOperator<J, K>, op12: ObservableOperator<K, L>): FlowableLike<L>;
declare const flow: <T>() => Function1<ObservableLike<T>, FlowableLike<T, FlowableStreamLike<T>>>;
declare const toObservable: <T>() => Function1<FlowableLike<T, FlowableStreamLike<T>>, ObservableLike<T>>;
declare const toObservableT: ToObservable<FlowableLike<unknown>>;
export { FlowMode, FlowableLike, FlowableOperator, FlowableSinkLike, FlowableSinkStreamLike, FlowableStreamLike, createLiftedFlowable, flow, toObservable, toObservableT };
