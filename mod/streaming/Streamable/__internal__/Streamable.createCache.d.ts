import { Optional } from "../../../functions.js";
import { ReadonlyRecordLike } from "../../../keyedcontainers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { CacheLike } from "../../../streaming.js";
declare const Streamable_createCache: <T>(persistentStore: Optional<{
    load(keys: ReadonlySet<string>): ObservableLike<ReadonlyRecordLike<string, Optional<T>>>;
    store(updates: ReadonlyRecordLike<string, T>): ObservableLike<void>;
}>, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => CacheLike<T>;
export default Streamable_createCache;
