import { none } from "../../../functions.js";
import { CacheLike } from "../../../streaming.js";
import { SchedulerLike } from "../../../util.js";
import Streamable_createCache from "./Streamable.createCache.js";

const Streamable_createInMemoryCache = <T>(
  options: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
  } = {},
): CacheLike<T> => Streamable_createCache<T>(none, options);

export default Streamable_createInMemoryCache;
