import { SchedulerLike } from "../../../concurrent.js";
import Streamable_createCache from "./Streamable.createCache.js";
declare const Streamable_createInMemoryCache: <T>(options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => import("../../../concurrent.js").StreamableLike<import("../../../collections.js").ReadonlyObjectMapLike<string, import("../../../functions.js").Function1<import("../../../functions.js").Optional<T>, import("../../../functions.js").Optional<T>>>, never, import("../../../concurrent.js").StreamLike<import("../../../collections.js").ReadonlyObjectMapLike<string, import("../../../functions.js").Function1<import("../../../functions.js").Optional<T>, import("../../../functions.js").Optional<T>>>, never> & import("../../../collections.js").AssociativeLike<string, import("../../../concurrent.js").ObservableLike<T>>>;
export default Streamable_createInMemoryCache;
