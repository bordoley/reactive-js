import { ContainerLike } from "./containers";
import { MulticastObservableLike } from "./rx";
import { DispatcherLike, ObserverLike, SchedulerLike } from "./scheduling";
import { PauseableLike, SourceLike } from "./util";

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    MulticastObservableLike<T> {}

/** @ignore */
export const StreamableLike_stream = Symbol("StreamableLike_stream");

export interface StreamableLike<
  TReq,
  T,
  TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>,
> {
  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): TStream;
}

export type FlowMode = "resume" | "pause";

export interface FlowableLike<
  T,
  TStream extends FlowableStreamLike<T> = FlowableStreamLike<T>,
> extends StreamableLike<FlowMode, T, TStream>,
    ContainerLike {
  readonly TContainerOf?: this;
}
export interface FlowableStreamLike<T>
  extends StreamLike<FlowMode, T>,
    PauseableLike {}

export interface AsyncEnumeratorLike<T = unknown>
  extends SourceLike,
    StreamLike<void, T> {
  readonly TStatefulContainerState?: ObserverLike<T>;
}
