import { Container, ContainerLike, ContainerLike_T, ContainerLike_type, ContainerOf } from "./containers.js";
import { Function1, Updater } from "./functions.js";
import { MulticastObservableLike } from "./rx.js";
import { DispatcherLike, PauseableLike, PauseableState, SchedulerLike } from "./scheduling.js";
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
}
/** @ignore */
export declare const StreamableLike_stream: unique symbol;
/**
 * @noInheritDoc
 * @category Container
 */
export interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>> {
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): TStream;
}
/**
 * @noInheritDoc
 */
export interface FlowableStreamLike<T = unknown> extends StreamLike<Updater<PauseableState>, T>, PauseableLike {
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface FlowableLike<T = unknown> extends StreamableLike<Updater<PauseableState>, T, FlowableStreamLike<T>>, ContainerLike {
    readonly [ContainerLike_type]?: FlowableLike<this[typeof ContainerLike_T]>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromFlowable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromFlowable<T>(options?: O): Function1<FlowableLike<T>, ContainerOf<C, T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToFlowable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toFlowable<T>(options?: O): Function1<ContainerOf<C, T>, FlowableLike<T>>;
}
