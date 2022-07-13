import { ContainerLike } from "../containers/ContainerLike";
import { StreamLike } from "./StreamLike";
import { StreamableLike } from "./StreamableLike";

export type FlowMode = "resume" | "pause";

export interface FlowableLike<
  T,
  TStream extends FlowableStreamLike<T> = FlowableStreamLike<T>,
> extends StreamableLike<FlowMode, T, TStream>,
    ContainerLike<T> {
  readonly TContainerOf?: FlowableStreamLike<this["T"]>;
}
export interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {}
