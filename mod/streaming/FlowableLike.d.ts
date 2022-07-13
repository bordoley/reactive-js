import { ContainerLike } from '../containers/ContainerLike.js';
import { StreamLike } from "./StreamLike.mjs";
import { StreamableLike } from "./StreamableLike.mjs";
declare type FlowMode = "resume" | "pause";
interface FlowableLike<T, TStream extends FlowableStreamLike<T> = FlowableStreamLike<T>> extends StreamableLike<FlowMode, T, TStream>, ContainerLike<T> {
    readonly TContainerOf?: FlowableStreamLike<this["T"]>;
}
interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {
}
export { FlowMode, FlowableLike, FlowableStreamLike };
