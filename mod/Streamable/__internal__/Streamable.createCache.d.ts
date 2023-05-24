import { Function1, Optional } from "../../functions.js";
import { AssociativeCollectionLike, DeferredObservableBaseLike, ObservableLike, ReadonlyObjectMapLike, SchedulerLike, StreamLike, StreamableLike } from "../../types.js";
type CacheLike<T> = StreamableLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never, StreamLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never> & AssociativeCollectionLike<string, ObservableLike<T>>>;
declare const Streamable_createCache: <T>(persistentStore: Optional<{
    load(keys: ReadonlySet<string>): DeferredObservableBaseLike<ReadonlyObjectMapLike<string, Optional<T>>>;
    store(updates: ReadonlyObjectMapLike<string, T>): DeferredObservableBaseLike<void>;
}>, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => CacheLike<T>;
export default Streamable_createCache;
