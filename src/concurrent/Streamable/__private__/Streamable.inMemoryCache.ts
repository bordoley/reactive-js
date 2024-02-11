import { SchedulerLike } from "../../../concurrent.js";
import { none } from "../../../functions.js";
import Streamable_cache from "./Streamable.cache.js";

const Streamable_inMemoryCache = <T>(
  options: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
  } = {},
): ReturnType<typeof Streamable_cache<T>> => Streamable_cache<T>(none, options);

export default Streamable_inMemoryCache;
