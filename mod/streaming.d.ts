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
declare const FlowMode_resume: unique symbol;
declare const FlowMode_pause: unique symbol;
type FlowMode = typeof FlowMode_resume | typeof FlowMode_pause;
interface FlowableStreamLike<T = unknown> extends StreamLike<FlowMode, T>, PauseableLike {
}
interface FlowableLike<T = unknown> extends StreamableLike<FlowMode, T, FlowableStreamLike<T>>, ContainerLike {
    readonly [ContainerLike_type]?: FlowableLike<this[typeof ContainerLike_T]>;
}
type FromFlowable<C extends ContainerLike, O = never> = Container<C> & {
    fromFlowable<T>(options?: O): Function1<FlowableLike<T>, ContainerOf<C, T>>;
};
type ToFlowable<C extends ContainerLike, O = never> = Container<C> & {
    toFlowable<T>(options?: O): Function1<ContainerOf<C, T>, FlowableLike<T>>;
};
export { FlowMode, FlowMode_pause, FlowMode_resume, FlowableLike, FlowableStreamLike, FromFlowable, StreamLike, StreamableLike, StreamableLike_stream, ToFlowable };
