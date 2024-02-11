import { SchedulerLike } from "../../../concurrent.js";
import Streamable_cache from "./Streamable.cache.js";
declare const Streamable_inMemoryCache: <T>(options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => import("../../../concurrent.js").StreamableLike<import("../../../collections.js").ReadonlyObjectMapLike<string, import("../../../functions.js").Function1<import("../../../functions.js").Optional<T>, import("../../../functions.js").Optional<T>>>, never, import("../../../concurrent.js").CacheLike<T>>;
export default Streamable_inMemoryCache;
