import { ContainerLike, ContainerLike_type, ContainerLike_T, Container, ContainerOf } from "./containers.js";
import { Updater, Function1 } from "./functions.js";
import { MulticastObservableLike } from "./rx.js";
import { DispatcherLike, SchedulerLike, PauseableState, PauseableLike } from "./scheduling.js";
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
}
/** @ignore */
declare const StreamableLike_stream: unique symbol;
/**
 * @category Container
 */
interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>> {
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): TStream;
}
interface FlowableStreamLike<T = unknown> extends StreamLike<Updater<PauseableState>, T>, PauseableLike {
}
/**
 * @category Container
 */
interface FlowableLike<T = unknown> extends StreamableLike<Updater<PauseableState>, T, FlowableStreamLike<T>>, ContainerLike {
    readonly [ContainerLike_type]?: FlowableLike<this[typeof ContainerLike_T]>;
}
/**
 * @category TypeClass
 */
interface FromFlowable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromFlowable<T>(options?: O): Function1<FlowableLike<T>, ContainerOf<C, T>>;
}
/**
 * @category TypeClass
 */
interface ToFlowable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toFlowable<T>(options?: O): Function1<ContainerOf<C, T>, FlowableLike<T>>;
}
export { FlowableLike, FlowableStreamLike, FromFlowable, StreamLike, StreamableLike, StreamableLike_stream, ToFlowable };
