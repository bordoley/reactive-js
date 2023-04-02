import { SchedulerLike } from "../../../scheduling.js";
import { CacheLike } from "../../../streaming.js";
declare const Streamable_createInMemoryCache: <T>(options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => CacheLike<T>;
export default Streamable_createInMemoryCache;
