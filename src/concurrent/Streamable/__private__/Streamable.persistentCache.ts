import { DeferredObservableLike, SchedulerLike } from "../../../concurrent.js";
import { Optional } from "../../../functions.js";
import Streamable_cache from "./Streamable.cache.js";

const Streamable_persistentCache = <T>(
  persistentStore: {
    load(
      keys: ReadonlySet<string>,
    ): DeferredObservableLike<Readonly<Record<string, Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): DeferredObservableLike<void>;
  },
  options: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
  } = {},
): ReturnType<typeof Streamable_cache<T>> =>
  Streamable_cache<T>(persistentStore, options);

export default Streamable_persistentCache;
