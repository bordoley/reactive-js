import { ObserverLike } from '../rx/ObserverLike.js';
import { StreamLike } from '../streaming/StreamLike.js';
import { DisposableLike } from '../util/DisposableLike.js';
import { InteractiveSourceLike } from "./InteractiveSourceLike.mjs";
interface AsyncEnumeratorLike<T = unknown> extends DisposableLike, InteractiveSourceLike, StreamLike<void, T> {
    readonly TStatefulContainerState?: ObserverLike<T>;
}
export { AsyncEnumeratorLike };
