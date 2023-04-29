import { Optional } from "../../../functions.js";
import { ReadonlyObjectMapLike } from "../../../keyed-containers.js";
import { ObservableLike } from "../../../rx.js";
import { CacheLike } from "../../../streaming.js";
import { SchedulerLike } from "../../../util.js";
declare const Streamable_createCache: <T>(persistentStore: Optional<{
    load(keys: ReadonlySet<string>): ObservableLike<ReadonlyObjectMapLike<Optional<T>, string>>;
    store(updates: ReadonlyObjectMapLike<T, string>): ObservableLike<void>;
}>, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => CacheLike<T>;
export default Streamable_createCache;
