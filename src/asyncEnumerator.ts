import { DisposableLike } from "./disposable";
import { InteractiveSourceLike } from "./interactiveSource";
import { Observer } from "./observer";
import { StreamLike } from "./stream";

export interface AsyncEnumeratorLike<T>
  extends DisposableLike,
    InteractiveSourceLike,
    StreamLike<void, T> {
  readonly T: T;
  readonly TContainerOf: AsyncEnumeratorLike<T>;
  readonly TLiftableContainerState: Observer<T>;
}
