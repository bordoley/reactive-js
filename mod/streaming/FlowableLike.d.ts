import { ContainerLike } from "../containers/ContainerLike.mjs";
import { PauseableLike } from "../util/PauseableLike.mjs";
import { StreamLike } from "./StreamLike.mjs";
import { StreamableLike } from "./StreamableLike.mjs";
declare type FlowMode = "resume" | "pause";
interface FlowableLike<T, TStream extends FlowableStreamLike<T> = FlowableStreamLike<T>> extends StreamableLike<FlowMode, T, TStream>, ContainerLike {
    readonly TContainerOf?: this;
}
interface FlowableStreamLike<T> extends StreamLike<FlowMode, T>, PauseableLike {
}
export { FlowMode, FlowableLike, FlowableStreamLike };
