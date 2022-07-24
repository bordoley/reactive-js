import { ObserverLike } from "../rx/ObserverLike.mjs";
import { StreamLike } from "../streaming/StreamLike.mjs";
import { DisposableLike } from "../util/DisposableLike.mjs";
import { InteractiveSourceLike } from "./InteractiveSourceLike.mjs";
interface AsyncEnumeratorLike<T = unknown> extends DisposableLike, InteractiveSourceLike, StreamLike<void, T> {
    readonly TStatefulContainerState?: ObserverLike<T>;
}
export { AsyncEnumeratorLike };
