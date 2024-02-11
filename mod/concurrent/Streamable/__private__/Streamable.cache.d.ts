import { ReadonlyObjectMapLike } from "../../../collections.js";
import { CacheLike, DeferredObservableLike, SchedulerLike, StreamableLike } from "../../../concurrent.js";
import { Function1, Optional } from "../../../functions.js";
declare const Streamable_cache: <T>(persistentStore: Optional<{
    load(keys: ReadonlySet<string>): DeferredObservableLike<ReadonlyObjectMapLike<string, Optional<T>>>;
    store(updates: ReadonlyObjectMapLike<string, T>): DeferredObservableLike<void>;
}>, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => StreamableLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never, CacheLike<T>>;
export default Streamable_cache;
