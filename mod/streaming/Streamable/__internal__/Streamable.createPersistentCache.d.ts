import { Optional } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { CacheLike } from "../../../streaming.js";
import { SchedulerLike } from "../../../util.js";
declare const Streamable_createPersistentCache: <T>(persistentStore: {
    load(keys: ReadonlySet<string>): ObservableLike<Readonly<Record<string, Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): ObservableLike<void>;
}, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => CacheLike<T>;
export default Streamable_createPersistentCache;
