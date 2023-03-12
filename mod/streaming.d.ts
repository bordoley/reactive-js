import { Container, ContainerLike, ContainerLike_T, ContainerLike_type, ContainerOf } from "./containers.js";
import { Function1 } from "./functions.js";
import { DispatcherLike, MulticastObservableLike } from "./rx.js";
import { SchedulerLike } from "./scheduling.js";
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
}
/** @ignore */
export declare const StreamableLike_stream: unique symbol;
/** @ignore */
export declare const StreamableLike_isEnumerable: unique symbol;
/** @ignore */
export declare const StreamableLike_isInteractive: unique symbol;
/** @ignore */
export declare const StreamableLike_isRunnable: unique symbol;
/**
 * @noInheritDoc
 * @category Container
 */
export interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>> {
    readonly [StreamableLike_isEnumerable]: boolean;
    readonly [StreamableLike_isInteractive]: boolean;
    readonly [StreamableLike_isRunnable]: boolean;
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): TStream;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface AsyncEnumerableLike<T = unknown> extends StreamableLike<void, T>, ContainerLike {
    readonly [ContainerLike_type]?: AsyncEnumerableLike<this[typeof ContainerLike_T]>;
    readonly [StreamableLike_isInteractive]: true;
}
/** @ignore */
export declare const FlowableState_running: unique symbol;
/** @ignore */
export declare const FlowableState_paused: unique symbol;
export type FlowableState = typeof FlowableState_running | typeof FlowableState_paused;
/**
 * @noInheritDoc
 */
export interface FlowableStreamLike<T = unknown> extends StreamLike<FlowableState, T> {
    readonly [StreamableLike_isEnumerable]: false;
    readonly [StreamableLike_isInteractive]: false;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface FlowableLike<T = unknown> extends StreamableLike<FlowableState, T, FlowableStreamLike<T>>, ContainerLike {
    readonly [ContainerLike_type]?: FlowableLike<this[typeof ContainerLike_T]>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromAsyncEnumerable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromAsyncEnumerable<T>(options?: O): Function1<AsyncEnumerableLike<T>, ContainerOf<C, T>>;
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
export interface ToAsyncEnumerable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Transform
     */
    toAsyncEnumerable<T>(options?: O): Function1<ContainerOf<C, T>, AsyncEnumerableLike<T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToFlowable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Transform
     */
    toFlowable<T>(options?: O): Function1<ContainerOf<C, T>, FlowableLike<T>>;
}
