import { Optional } from "../../../functions.js";
import { ReadonlyRecordLike } from "../../../keyed-containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { CacheLike } from "../../../streaming.js";
declare const Streamable_createCache: <T>(persistentStore: Optional<{
    load(keys: ReadonlySet<string>): ObservableLike<ReadonlyRecordLike<Optional<T>, string>>;
    store(updates: ReadonlyRecordLike<T, string>): ObservableLike<void>;
}>, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => CacheLike<T>;
export default Streamable_createCache;
