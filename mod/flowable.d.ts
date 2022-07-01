import { Function1 } from "./functions.mjs";
import { ObservableLike } from "./observable.mjs";
import { StreamLike } from "./stream.mjs";
import { StreamableLike } from "./streamable.mjs";
declare type FlowMode = "resume" | "pause";
interface FlowableLike<T, TStream extends FlowableStreamLike<T> = FlowableStreamLike<T>> extends StreamableLike<FlowMode, T, TStream> {
}
interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {
}
interface FlowableSinkLike<T, TStream extends FlowableSinkStreamLike<T> = FlowableSinkStreamLike<T>> extends StreamableLike<T, FlowMode, TStream> {
}
interface FlowableSinkStreamLike<T> extends StreamLike<T, FlowMode> {
}
declare const flow: <T>() => Function1<ObservableLike<T>, FlowableLike<T, FlowableStreamLike<T>>>;
declare const toObservable: <T>() => Function1<FlowableLike<T, FlowableStreamLike<T>>, ObservableLike<T>>;
export { FlowMode, FlowableLike, FlowableSinkLike, FlowableSinkStreamLike, FlowableStreamLike, flow, toObservable };
