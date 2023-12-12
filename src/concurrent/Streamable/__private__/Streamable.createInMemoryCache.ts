import { SchedulerLike } from "../../../concurrent.js";
import { none } from "../../../functions.js";
import Streamable_createCache from "./Streamable.createCache.js";

const Streamable_createInMemoryCache = <T>(
  options: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
  } = {},
): ReturnType<typeof Streamable_createCache<T>> =>
  Streamable_createCache<T>(none, options);

export default Streamable_createInMemoryCache;
