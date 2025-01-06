import { SchedulerLike } from "../../../concurrent.js";
import Streamable_cache from "./Streamable.cache.js";
declare const Streamable_inMemoryCache: <T>(options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
}) => ReturnType<typeof Streamable_cache<T>>;
export default Streamable_inMemoryCache;
