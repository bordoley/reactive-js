import { SchedulerLike } from "../../../scheduling.js";
import { CacheLike } from "../../../streaming.js";
declare const Streamable_createInMemoryCache: <T>(options?: {
    capacity?: number;
    cleanupScheduler?: SchedulerLike;
}) => CacheLike<T>;
export default Streamable_createInMemoryCache;
