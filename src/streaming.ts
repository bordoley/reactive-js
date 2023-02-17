import {
  Container,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  ContainerOf,
} from "./containers";
import { Function1 } from "./functions";
import { MulticastObservableLike } from "./rx";
import { DispatcherLike, PauseableLike, SchedulerLike } from "./scheduling";

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

export const FlowMode_resume = Symbol("FlowMode_resume");
export const FlowMode_pause = Symbol("FlowMode_pause");

export type FlowMode = typeof FlowMode_resume | typeof FlowMode_pause;

export interface FlowableStreamLike<T = unknown>
  extends StreamLike<FlowMode, T>,
    PauseableLike {}

export interface FlowableLike<T = unknown>
  extends StreamableLike<FlowMode, T, FlowableStreamLike<T>>,
    ContainerLike {
  readonly [ContainerLike_type]?: FlowableLike<this[typeof ContainerLike_T]>;
}

export type FromFlowable<C extends ContainerLike, O = never> = Container<C> & {
  fromFlowable<T>(options?: O): Function1<FlowableLike<T>, ContainerOf<C, T>>;
};

export type ToFlowable<C extends ContainerLike, O = never> = Container<C> & {
  toFlowable<T>(options?: O): Function1<ContainerOf<C, T>, FlowableLike<T>>;
};
