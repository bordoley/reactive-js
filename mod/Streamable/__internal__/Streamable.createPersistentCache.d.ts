import { Optional } from "../../functions.js";
import { DeferredObservableLike, SchedulerLike } from "../../types.js";
import Streamable_createCache from "./Streamable.createCache.js";
declare const Streamable_createPersistentCache: <T>(persistentStore: {
    load(keys: ReadonlySet<string>): DeferredObservableLike<Readonly<Record<string, Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): DeferredObservableLike<void>;
}, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => import("../../types.js").StreamableLike<import("../../types.js").ReadonlyObjectMapLike<string, import("../../functions.js").Function1<Optional<T>, Optional<T>>>, never, import("../../types.js").StreamLike<import("../../types.js").ReadonlyObjectMapLike<string, import("../../functions.js").Function1<Optional<T>, Optional<T>>>, never> & import("../../types.js").AssociativeCollectionLike<string, import("../../types.js").ObservableLike<T>>>;
export default Streamable_createPersistentCache;
