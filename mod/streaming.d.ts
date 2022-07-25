import { ContainerLike } from "./containers.mjs";
import { MulticastObservableLike } from "./rx.mjs";
import { DispatcherLike, SchedulerLike, ObserverLike } from "./scheduling.mjs";
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
declare type FlowMode = "resume" | "pause";
interface FlowableLike<T, TStream extends FlowableStreamLike<T> = FlowableStreamLike<T>> extends StreamableLike<FlowMode, T, TStream>, ContainerLike {
    readonly TContainerOf?: this;
}
interface FlowableStreamLike<T> extends StreamLike<FlowMode, T>, PauseableLike {
}
interface AsyncEnumeratorLike<T = unknown> extends SourceLike, StreamLike<void, T> {
    readonly TStatefulContainerState?: ObserverLike<T>;
}
export { AsyncEnumeratorLike, FlowMode, FlowableLike, FlowableStreamLike, StreamLike, StreamableLike, StreamableLike_stream };
