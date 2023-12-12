import { DeferredObservableLike, SchedulerLike } from "../../../concurrent.js";
import { Optional } from "../../../functions.js";
import Streamable_createCache from "./Streamable.createCache.js";

const Streamable_createPersistentCache = <T>(
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
): ReturnType<typeof Streamable_createCache<T>> =>
  Streamable_createCache<T>(persistentStore, options);

export default Streamable_createPersistentCache;
