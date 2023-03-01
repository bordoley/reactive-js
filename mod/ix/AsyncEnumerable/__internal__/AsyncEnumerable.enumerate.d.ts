import { AsyncEnumerableLike } from "../../../ix.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
declare const AsyncEnumerable_enumerate: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => (enumerable: AsyncEnumerableLike<ObservableLike<unknown>, T>) => StreamLike<void, T>;
export default AsyncEnumerable_enumerate;
