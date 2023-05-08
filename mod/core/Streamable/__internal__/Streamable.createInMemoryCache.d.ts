import { SchedulerLike } from "../../../core.js";
import Streamable_createCache from "./Streamable.createCache.js";
declare const Streamable_createInMemoryCache: <T>(options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => import("../../../core.js").StreamableLike<import("../../../core.js").ReadonlyObjectMapLike<string, import("../../../functions.js").Function1<import("../../../functions.js").Optional<T>, import("../../../functions.js").Optional<T>>>, never, import("../../../core.js").StreamLike<import("../../../core.js").ReadonlyObjectMapLike<string, import("../../../functions.js").Function1<import("../../../functions.js").Optional<T>, import("../../../functions.js").Optional<T>>>, never> & import("../../../core.js").AssociativeCollectionLike<string, import("../../../core.js").ObservableLike<T>>>;
export default Streamable_createInMemoryCache;
