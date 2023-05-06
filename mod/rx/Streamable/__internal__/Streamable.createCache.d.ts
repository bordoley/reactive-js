import { AssociativeCollectionLike, ReadonlyObjectMapLike } from "../../../containers.js";
import { Function1, Optional } from "../../../functions.js";
import { ObservableLike, StreamLike, StreamableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../util.js";
type CacheLike<T> = StreamableLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never, StreamLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never> & AssociativeCollectionLike<string, ObservableLike<T>>>;
declare const Streamable_createCache: <T>(persistentStore: Optional<{
    load(keys: ReadonlySet<string>): ObservableLike<ReadonlyObjectMapLike<string, Optional<T>>>;
    store(updates: ReadonlyObjectMapLike<string, T>): ObservableLike<void>;
}>, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => CacheLike<T>;
export default Streamable_createCache;
