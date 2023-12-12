import { AssociativeLike, ReadonlyObjectMapLike } from "../../../collections.js";
import { DeferredObservableLike, ObservableLike, SchedulerLike, StreamLike, StreamableLike } from "../../../concurrent.js";
import { Function1, Optional } from "../../../functions.js";
type CacheLike<T> = StreamableLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never, StreamLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never> & AssociativeLike<string, ObservableLike<T>>>;
declare const Streamable_createCache: <T>(persistentStore: Optional<{
    load(keys: ReadonlySet<string>): DeferredObservableLike<ReadonlyObjectMapLike<string, Optional<T>>>;
    store(updates: ReadonlyObjectMapLike<string, T>): DeferredObservableLike<void>;
}>, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => CacheLike<T>;
export default Streamable_createCache;
