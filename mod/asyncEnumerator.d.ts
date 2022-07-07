import { DisposableLike } from "./disposable.mjs";
import { InteractiveSourceLike } from "./interactiveSource.mjs";
import { ObserverLike } from "./observer.mjs";
import { StreamLike } from "./stream.mjs";
interface AsyncEnumeratorLike<T> extends DisposableLike, InteractiveSourceLike, StreamLike<void, T> {
    readonly T: T;
    readonly TContainerOf: AsyncEnumeratorLike<T>;
    readonly TLiftableContainerState: ObserverLike<T>;
}
export { AsyncEnumeratorLike };
