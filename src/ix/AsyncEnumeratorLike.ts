import { ObserverLike } from "../rx/ObserverLike";
import { StreamLike } from "../streaming/StreamLike";
import { DisposableLike } from "../util/DisposableLike";
import { InteractiveSourceLike } from "./InteractiveSourceLike";

export interface AsyncEnumeratorLike<T = unknown>
  extends DisposableLike,
    InteractiveSourceLike,
    StreamLike<void, T> {
  readonly TStatefulContainerState?: ObserverLike<T>;
}
