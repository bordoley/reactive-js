import { SchedulerLike } from "../../types.js";
import Streamable_createCache from "./Streamable.createCache.js";
declare const Streamable_createInMemoryCache: <T>(options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => import("../../types.js").StreamableLike<import("../../types.js").ReadonlyObjectMapLike<string, import("../../functions.js").Function1<import("../../functions.js").Optional<T>, import("../../functions.js").Optional<T>>>, never, import("../../types.js").StreamLike<import("../../types.js").ReadonlyObjectMapLike<string, import("../../functions.js").Function1<import("../../functions.js").Optional<T>, import("../../functions.js").Optional<T>>>, never> & import("../../types.js").AssociativeCollectionLike<string, import("../../types.js").ObservableLike<T>>>;
export default Streamable_createInMemoryCache;
