import { CacheLike } from "../../../rx.js";
import { SchedulerLike } from "../../../util.js";
declare const Streamable_createInMemoryCache: <T>(options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => CacheLike<T>;
export default Streamable_createInMemoryCache;
