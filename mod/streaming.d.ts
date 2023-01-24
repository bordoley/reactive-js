import { ContainerLike, ContainerLike_type, ContainerLike_T, Container, ContainerOf } from "./containers.js";
import { Function1 } from "./functions.js";
import { MulticastObservableLike } from "./rx.js";
import { DispatcherLike, SchedulerLike } from "./scheduling.js";
import { PauseableLike } from "./util.js";
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
type FlowMode = "resume" | "pause";
interface FlowableStreamLike<T = unknown> extends StreamLike<FlowMode, T>, PauseableLike {
}
interface FlowableLike<T = unknown> extends StreamableLike<FlowMode, T, FlowableStreamLike<T>>, ContainerLike {
    readonly [ContainerLike_type]?: FlowableLike<this[typeof ContainerLike_T]>;
}
type FromFlowable<C extends ContainerLike, TOptions = never> = Container<C> & {
    fromFlowable<T>(options?: TOptions): Function1<FlowableLike<T>, ContainerOf<C, T>>;
};
type ToFlowable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toFlowable<T>(options?: TOptions): Function1<ContainerOf<C, T>, FlowableLike<T>>;
};
export { FlowMode, FlowableLike, FlowableStreamLike, FromFlowable, StreamLike, StreamableLike, StreamableLike_stream, ToFlowable };
