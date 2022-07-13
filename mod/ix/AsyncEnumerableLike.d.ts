import { SchedulerLike } from '../scheduling/SchedulerLike.js';
import { StreamableLike } from '../streaming/StreamableLike.js';
import { AsyncEnumeratorLike } from "./AsyncEnumeratorLike.mjs";
import { InteractiveContainerLike } from "./InteractiveContainerLike.mjs";
interface AsyncEnumerableLike<T = unknown> extends StreamableLike<void, T, AsyncEnumeratorLike<T>>, InteractiveContainerLike<T> {
    readonly TStatefulContainerState?: AsyncEnumeratorLike<T>;
    readonly TCtx?: SchedulerLike;
}
export { AsyncEnumerableLike };
