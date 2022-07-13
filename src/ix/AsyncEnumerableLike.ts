import { SchedulerLike } from "../scheduling/SchedulerLike";
import { StreamableLike } from "../streaming/StreamableLike";
import { AsyncEnumeratorLike } from "./AsyncEnumeratorLike";
import { InteractiveContainerLike } from "./InteractiveContainerLike";

export interface AsyncEnumerableLike<T = unknown>
  extends StreamableLike<void, T, AsyncEnumeratorLike<T>>,
    InteractiveContainerLike<T> {
  readonly TStatefulContainerState?: AsyncEnumeratorLike<T>;
  readonly TCtx?: SchedulerLike;
}
