import { DeferredObservableLike, SchedulerLike } from "../../../concurrent.js";
import { Optional } from "../../../functions.js";
import Streamable_createCache from "./Streamable.createCache.js";
declare const Streamable_createPersistentCache: <T>(persistentStore: {
    load(keys: ReadonlySet<string>): DeferredObservableLike<Readonly<Record<string, Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): DeferredObservableLike<void>;
}, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => import("../../../concurrent.js").StreamableLike<import("../../../collections.js").ReadonlyObjectMapLike<string, import("../../../functions.js").Function1<Optional<T>, Optional<T>>>, never, import("../../../concurrent.js").CacheLike<T>>;
export default Streamable_createPersistentCache;
