import { DeferredObservableLike, SchedulerLike } from "../../../concurrent.js";
import { Optional } from "../../../functions.js";
import Streamable_cache from "./Streamable.cache.js";
declare const Streamable_persistentCache: <T>(persistentStore: {
    load(keys: ReadonlySet<string>): DeferredObservableLike<Readonly<Record<string, Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): DeferredObservableLike<void>;
}, options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => import("../../../concurrent.js").StreamableLike<import("../../../collections.js").ReadonlyObjectMapLike<string, import("../../../functions.js").Function1<Optional<T>, Optional<T>>>, never, import("../../../concurrent.js").CacheLike<T>>;
export default Streamable_persistentCache;
