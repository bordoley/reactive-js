import { SchedulerLike } from "../../../util.js";
import Streamable_createCache from "./Streamable.createCache.js";
declare const Streamable_createInMemoryCache: <T>(options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => import("../../../rx.js").StreamableLike<import("../../../containers.js").ReadonlyObjectMapLike<string, import("../../../functions.js").Function1<import("../../../functions.js").Optional<T>, import("../../../functions.js").Optional<T>>>, never, import("../../../rx.js").StreamLike<import("../../../containers.js").ReadonlyObjectMapLike<string, import("../../../functions.js").Function1<import("../../../functions.js").Optional<T>, import("../../../functions.js").Optional<T>>>, never> & import("../../../containers.js").AssociativeCollectionLike<string, import("../../../rx.js").ObservableLike<T>>>;
export default Streamable_createInMemoryCache;
