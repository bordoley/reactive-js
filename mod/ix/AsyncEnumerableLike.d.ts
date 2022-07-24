import { SchedulerLike } from "../scheduling/SchedulerLike.mjs";
import { StreamableLike } from "../streaming/StreamableLike.mjs";
import { AsyncEnumeratorLike } from "./AsyncEnumeratorLike.mjs";
import { InteractiveContainerLike } from "./InteractiveContainerLike.mjs";
interface AsyncEnumerableLike<T = unknown> extends StreamableLike<void, T, AsyncEnumeratorLike<T>>, InteractiveContainerLike {
    readonly TStatefulContainerState?: AsyncEnumeratorLike<T>;
    readonly TCtx?: SchedulerLike;
}
export { AsyncEnumerableLike };
