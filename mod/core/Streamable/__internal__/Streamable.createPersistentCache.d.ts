import { ObservableLike, SchedulerLike } from "../../../core.js";
import { Optional } from "../../../functions.js";
import Streamable_createCache from "./Streamable.createCache.js";
declare const Streamable_createPersistentCache: <T>(persistentStore: {
    load(keys: ReadonlySet<string>): ObservableLike<Readonly<Record<string, Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): ObservableLike<void>;
}, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => import("../../../core.js").StreamableLike<import("../../../core.js").ReadonlyObjectMapLike<string, import("../../../functions.js").Function1<Optional<T>, Optional<T>>>, never, import("../../../core.js").StreamLike<import("../../../core.js").ReadonlyObjectMapLike<string, import("../../../functions.js").Function1<Optional<T>, Optional<T>>>, never> & import("../../../core.js").AssociativeCollectionLike<string, ObservableLike<T>>>;
export default Streamable_createPersistentCache;
